import type { Express } from "express";
import { createServer, type Server } from "http";
import { ephemeralStore } from "./services/store";
import { sendVaultEmail, getRemainingEmailQuota } from "./services/email";
import { codeLimiter, uploadLimiter } from "./index";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { ObjectStorageService, ObjectNotFoundError } from "./replit_integrations/object_storage";
import { registerObjectStorageRoutes } from "./replit_integrations/object_storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const objectStorage = new ObjectStorageService();

  // Register base object storage routes
  registerObjectStorageRoutes(app);

  // =============================================================================
  // VAULT OPERATIONS
  // =============================================================================

  // Create a new vault
  app.post(api.vaults.create.path, async (req, res) => {
    try {
      const input = api.vaults.create.input.parse(req.body);
      const vault = await ephemeralStore.createVault(input);

      const response = {
        id: vault.id,
        shortCode: vault.shortCode,
        expiresAt: vault.expiresAt.toISOString(),
        directLink: `/v/${vault.id}`,
      };

      res.status(201).json(response);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  // Get vault info
  app.get(api.vaults.get.path, async (req, res) => {
    // Security headers for download routes
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Clear-Site-Data": '"cache"',
    });

    const vault = await ephemeralStore.getVault(req.params.id);

    if (!vault) {
      return res.status(404).json({ message: "Vault not found or expired" });
    }

    // Check if expired or depleted
    if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
      await ephemeralStore.deleteVault(vault.id);
      return res.status(410).json({ message: "Vault expired or download limit reached" });
    }

    res.json({
      id: vault.id,
      shortCode: vault.shortCode,
      encryptedMetadata: vault.encryptedMetadata,
      expiresAt: vault.expiresAt.toISOString(),
      maxDownloads: vault.maxDownloads,
      downloadCount: vault.downloadCount,
      files: vault.files.map((f) => ({
        fileId: f.fileId,
        chunkCount: f.chunkCount,
        totalSize: f.totalSize,
      })),
    });
  });

  // Resolve short code to vault ID (with strict rate limiting)
  app.get(api.vaults.resolveCode.path, codeLimiter, async (req, res) => {
    const vault = await ephemeralStore.getVaultByShortCode(req.params.code.toUpperCase());

    if (!vault) {
      return res.status(404).json({ message: "Invalid code or vault expired" });
    }

    if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
      return res.status(410).json({ message: "Vault expired" });
    }

    res.json({ id: vault.id });
  });

  // Mark download (increment counter)
  app.post(api.vaults.download.path, async (req, res) => {
    const vault = await ephemeralStore.getVault(req.params.id);

    if (!vault) {
      return res.status(404).json({ message: "Vault not found" });
    }

    if (vault.downloadCount >= vault.maxDownloads) {
      return res.status(403).json({ message: "Download limit exceeded" });
    }

    await ephemeralStore.incrementDownloadCount(vault.id);
    res.json({ success: true, remainingDownloads: vault.maxDownloads - vault.downloadCount - 1 });
  });

  // =============================================================================
  // EMAIL OPERATIONS (Phase 2.3)
  // =============================================================================

  app.post("/api/v1/vault/:id/email", async (req, res) => {
    try {
      const { id } = req.params;
      const { to, senderName } = req.body;

      if (!to || typeof to !== "string") {
        return res.status(400).json({ message: "Email address required" });
      }

      const vault = await ephemeralStore.getVault(id);
      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }

      // Check quota
      const remaining = getRemainingEmailQuota(id);
      if (remaining <= 0) {
        return res.status(429).json({ message: "Email limit reached for this vault" });
      }

      const result = await sendVaultEmail({
        to,
        vaultId: vault.id,
        shortCode: vault.shortCode,
        expiresAt: vault.expiresAt,
        senderName,
      });

      if (!result.success) {
        return res.status(400).json({ message: result.error });
      }

      res.json({
        success: true,
        remainingEmails: remaining - 1,
        previewUrl: result.previewUrl, // Only in dev mode
      });
    } catch (err) {
      res.status(500).json({ message: "Failed to send email" });
    }
  });

  // =============================================================================
  // CHUNK OPERATIONS
  // =============================================================================

  // Get presigned upload URL for a chunk
  app.post(api.chunks.getUploadUrl.path, uploadLimiter, async (req, res) => {
    const { id, fileId, chunkIndex } = req.params;
    const { size } = req.body;

    const vault = await ephemeralStore.getVault(id);
    if (!vault) {
      return res.status(404).json({ message: "Vault not found" });
    }

    // Generate presigned URL
    const uploadUrl = await objectStorage.getObjectEntityUploadURL();
    const storagePath = objectStorage.normalizeObjectEntityPath(uploadUrl);

    res.json({
      uploadUrl,
      storagePath,
    });
  });

  // Mark chunk as uploaded
  app.put(api.chunks.markUploaded.path, async (req, res) => {
    const { id, fileId, chunkIndex } = req.params;
    const { storagePath } = req.body;

    await ephemeralStore.updateChunkPath(id, fileId, parseInt(chunkIndex), storagePath);
    res.json({ success: true });
  });

  // Get download URL for a chunk
  app.get(api.chunks.getDownloadUrl.path, async (req, res) => {
    // Security headers
    res.set({
      "Cache-Control": "no-store",
      "Clear-Site-Data": '"cache", "storage"',
    });

    const { id, fileId, chunkIndex } = req.params;

    const storagePath = await ephemeralStore.getChunkPath(id, fileId, parseInt(chunkIndex));
    if (!storagePath) {
      return res.status(404).json({ message: "Chunk not found" });
    }

    // Return the proxy path
    res.json({ downloadUrl: storagePath });
  });

  // =============================================================================
  // HEALTH CHECK
  // =============================================================================

  app.get("/api/health", (_req, res) => {
    const stats = ephemeralStore.getStats();
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      vaults: stats.vaultCount,
      chunks: stats.totalChunks,
    });
  });

  return httpServer;
}
