import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { ObjectStorageService, ObjectNotFoundError } from "./replit_integrations/object_storage";
import { registerObjectStorageRoutes } from "./replit_integrations/object_storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const objectStorage = new ObjectStorageService();

  // Register base object storage routes (for generic uploads if needed, but we use custom flow)
  registerObjectStorageRoutes(app);

  // --- Vault Operations ---

  app.post(api.vaults.create.path, async (req, res) => {
    try {
      const input = api.vaults.create.input.parse(req.body);
      const vault = await storage.createVault(input);
      
      const response = {
        id: vault.id,
        shortCode: vault.shortCode!,
        expiresAt: vault.expiresAt.toISOString(),
        directLink: `/v/${vault.id}`, // Frontend route
      };
      
      res.status(201).json(response);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.vaults.get.path, async (req, res) => {
    const vault = await storage.getVault(req.params.id);
    
    if (!vault || vault.isDeleted) {
        return res.status(404).json({ message: "Vault not found" });
    }

    // Check expiry
    if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
        // Lazy cleanup
        // await storage.cleanupExpiredVaults(); // Could be async background
        return res.status(410).json({ message: "Vault expired" });
    }

    const files = await storage.getFiles(vault.id);
    
    // Return encrypted metadata + file structure
    res.json({
        ...vault,
        files: files.map(f => ({
            fileId: f.fileId,
            chunkCount: f.chunkCount,
            totalSize: f.totalSize
        }))
    });
  });

  app.get(api.vaults.resolveCode.path, async (req, res) => {
      const vault = await storage.getVaultByShortCode(req.params.code.toUpperCase());
      if (!vault || vault.isDeleted) {
          return res.status(404).json({ message: "Vault not found" });
      }
       if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
        return res.status(404).json({ message: "Vault expired" });
    }
      res.json({ id: vault.id });
  });

  app.post(api.vaults.download.path, async (req, res) => {
      const vault = await storage.getVault(req.params.id);
      if (!vault || vault.isDeleted) return res.status(404).json({ message: "Vault not found" });

      if (vault.downloadCount >= vault.maxDownloads) {
          return res.status(403).json({ message: "Download limit exceeded" });
      }

      await storage.incrementDownloadCount(vault.id);
      res.json({ success: true });
  });

  // --- Chunk Operations ---

  app.post(api.chunks.getUploadUrl.path, async (req, res) => {
      const { id, fileId, chunkIndex } = req.params;
      const { size } = req.body;

      // Verify vault exists and is valid
      const vault = await storage.getVault(id);
      if (!vault) return res.status(404).json({ message: "Vault not found" });

      // Create chunk record
      await storage.createChunk(fileId, parseInt(chunkIndex), size);

      // Generate Presigned URL
      // Path: /private/vaults/{vaultId}/{fileId}/{chunkIndex}
      const uploadUrl = await objectStorage.getObjectEntityUploadURL();
      // The integration generates a random UUID path. We accept that.
      // We need to return the mapping so the client knows where it went?
      // Actually, the integration `getObjectEntityUploadURL` returns a URL. 
      // AND `normalizeObjectEntityPath` can extract the path.
      
      const storagePath = objectStorage.normalizeObjectEntityPath(uploadUrl);
      
      res.json({
          uploadUrl,
          storagePath
      });
  });

  app.put(api.chunks.markUploaded.path, async (req, res) => {
      const { id, fileId, chunkIndex } = req.params;
      const { storagePath } = req.body;

      await storage.updateChunkStatus(fileId, parseInt(chunkIndex), storagePath);
      res.json({ success: true });
  });

  app.get(api.chunks.getDownloadUrl.path, async (req, res) => {
      const { id, fileId, chunkIndex } = req.params;
      
      const chunk = await storage.getChunk(fileId, parseInt(chunkIndex));
      if (!chunk || !chunk.isUploaded || !chunk.storagePath) {
          return res.status(404).json({ message: "Chunk not found or not ready" });
      }

      // Generate Signed GET URL
      // The integration `downloadObject` streams the file. 
      // But we want a presigned URL for the client to fetch directly if possible?
      // The integration helper `objectStorageClient` is exported.
      // But `objectAcl.ts` / `objectStorage.ts` helpers don't expose "getSignedUrl" for GET easily.
      // `signObjectURL` is internal to `objectStorage.ts`.
      
      // Alternative: Serve via proxy endpoint `GET /objects/:path`.
      // We already have `GET /objects/*` registered in `registerObjectStorageRoutes`.
      // The path is `chunk.storagePath`.
      // So we construct the URL to *our* proxy.
      
      // NOTE: `chunk.storagePath` looks like `/objects/{uuid}`.
      // Our proxy is `app.get("/objects/:objectPath(*)")`.
      
      const downloadUrl = chunk.storagePath; // e.g. /objects/uuid
      
      res.json({ downloadUrl });
  });

  return httpServer;
}
