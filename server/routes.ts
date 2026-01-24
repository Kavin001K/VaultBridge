import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage"; // Switched to Database Storage
import { sendVaultEmail, getRemainingEmailQuota, sendDirectAttachment } from "./services/email";
import { codeLimiter, uploadLimiter } from "./index";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { supabaseStorage } from "./services/supabase_storage";
import multer from "multer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Configure Multer for transient "hot potato" memory storage
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  });

  // =============================================================================
  // VAULT OPERATIONS
  // =============================================================================

  // Create a new vault
  app.post(api.vaults.create.path, async (req, res) => {
    try {
      const input = api.vaults.create.input.parse(req.body);
      const vault = await storage.createVault(input);

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

    const vault = await storage.getVault(req.params.id as string);

    if (!vault) {
      return res.status(404).json({ message: "Vault not found or expired" });
    }

    // Check if expired or depleted
    // Note: Database cleanup runs separately, but we double check here
    if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
      return res.status(410).json({ message: "Vault expired or download limit reached" });
    }

    const files = await storage.getFiles(vault.id);

    res.json({
      id: vault.id,
      shortCode: vault.shortCode,
      encryptedMetadata: vault.encryptedMetadata,
      expiresAt: vault.expiresAt.toISOString(),
      maxDownloads: vault.maxDownloads,
      downloadCount: vault.downloadCount,
      files: files.map((f) => ({
        fileId: f.fileId,
        chunkCount: f.chunkCount,
        totalSize: f.totalSize,
      })),
    });
  });

  // Resolve short code to vault ID (with strict rate limiting)
  app.get(api.vaults.resolveCode.path, codeLimiter, async (req, res) => {
    const vault = await storage.getVaultByShortCode((req.params.code as string).toUpperCase());

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
    const vault = await storage.getVault(req.params.id as string);

    if (!vault) {
      return res.status(404).json({ message: "Vault not found" });
    }

    if (vault.downloadCount >= vault.maxDownloads) {
      return res.status(403).json({ message: "Download limit exceeded" });
    }

    const newCount = await storage.incrementDownloadCount(vault.id);

    // BURNING LOGIC: If limit reached, delete immediately
    if (newCount >= vault.maxDownloads) {
      console.log(`[Vault ${vault.id}] Burn-on-read triggered. Deleting...`);
      await storage.deleteVault(vault.id);
      // We still return success but with 0 remaining
      res.json({ success: true, remainingDownloads: 0 });
    } else {
      res.json({ success: true, remainingDownloads: vault.maxDownloads - newCount });
    }
  });

  // =============================================================================
  // SPLIT-CODE ZERO-KNOWLEDGE LOOKUP (Air-Gapped Transfer)
  // =============================================================================

  // Lookup vault by 3-digit lookupId - returns vault data without requiring PIN
  // The server NEVER sees the PIN and NEVER sees the raw file key
  app.get(api.vaults.codeLookup.path, codeLimiter, async (req, res) => {
    const vault = await storage.getVaultByLookupId(req.params.lookupId as string);

    if (!vault) {
      return res.status(404).json({ message: "Invalid code or vault expired" });
    }

    // Check if expired or depleted
    if (new Date() > vault.expiresAt || vault.downloadCount >= vault.maxDownloads) {
      return res.status(410).json({ message: "Vault expired or download limit reached" });
    }

    // Crucial: We return the wrappedKey, but NOT the PIN
    // The client will use the PIN (entered locally) to unwrap the key
    if (!vault.wrappedKey) {
      return res.status(400).json({ message: "This vault does not support split-code access" });
    }

    const files = await storage.getFiles(vault.id);

    res.json({
      id: vault.id,
      wrappedKey: vault.wrappedKey,
      encryptedMetadata: vault.encryptedMetadata,
      expiresAt: vault.expiresAt.toISOString(),
      maxDownloads: vault.maxDownloads,
      downloadCount: vault.downloadCount,
      files: files.map((f) => ({
        fileId: f.fileId,
        chunkCount: f.chunkCount,
        totalSize: f.totalSize,
      })),
    });
  });

  // =============================================================================
  // DIRECT EMAIL OPERATIONS (Transient Mode)
  // =============================================================================

  // MULTI-FILE Email Endpoint
  app.post("/api/email/direct-multi", (req, res, next) => {
    upload.array("files", 10)(req, res, (err) => { // Allow up to 10 files
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(413).json({ message: "File too large. Max limit is 10MB." });
        }
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: "File upload failed." });
      }
      next();
    });
  }, async (req, res) => {
    try {
      if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
        return res.status(400).json({ message: "No files uploaded." });
      }

      const files = req.files as Express.Multer.File[];
      const { to, subject, body } = req.body;

      if (!to || !subject || !body) {
        return res.status(400).json({ message: "Missing required fields: to, subject, body." });
      }

      // Calculate total size check (Multer checks individual file size defined in limits, but we want cumulative)
      const totalSize = files.reduce((acc, f) => acc + f.size, 0);
      if (totalSize > 25 * 1024 * 1024) { // 25MB Hard Limit
        return res.status(413).json({ message: "Total attachment size exceeds 25MB limit." });
      }

      // Reuse existing service but modified to support array?? 
      // Or just loop through them? No, standard email supports multiple attachments.
      // We need to update sendDirectAttachment to accept array of attachments.
      // For now, let's update that service signature or create a new one.

      const success = await sendDirectAttachment({
        to,
        subject,
        text: body,
        files: files.map(f => ({
          filename: f.originalname,
          content: f.buffer
        }))
      });

      if (!success) {
        return res.status(500).json({ message: "Failed to send email via provider." });
      }

      res.json({ success: true });
    } catch (err) {
      console.error("Direct email error:", err);
      res.status(500).json({ message: "Internal server error." });
    }
  });

  // =============================================================================
  // EMAIL OPERATIONS (Phase 2.3)
  // =============================================================================

  app.post(api.vaults.email.path, async (req, res) => {
    try {
      const id = req.params.id as string;
      const { to, senderName } = req.body;

      if (!to || typeof to !== "string") {
        return res.status(400).json({ message: "Email address required" });
      }

      const vault = await storage.getVault(id);
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
        shortCode: vault.shortCode || "UNKNOWN",
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
    const id = req.params.id as string;
    const fileId = req.params.fileId as string;
    const chunkIndex = req.params.chunkIndex as string;
    const { size } = req.body;

    const vault = await storage.getVault(id);
    if (!vault) {
      return res.status(404).json({ message: "Vault not found" });
    }

    // Ensure the chunk record exists (idempotent)
    await storage.createChunk(fileId, parseInt(chunkIndex), size);

    // Generate Supabase Signed URL
    // Path: vaultId/fileId/chunkIndex.enc
    const storagePath = supabaseStorage.getStoragePath(id, fileId, parseInt(chunkIndex));

    try {
      const uploadUrl = await supabaseStorage.getUploadUrl(storagePath);
      res.json({
        uploadUrl,
        storagePath,
      });
    } catch (err) {
      console.error("Upload URL Gen Failed:", err);
      res.status(500).json({ message: "Failed to generate upload URL" });
    }
  });

  app.put(api.chunks.markUploaded.path, async (req, res) => {
    const id = req.params.id as string;
    const fileId = req.params.fileId as string;
    const chunkIndex = req.params.chunkIndex as string;
    const { storagePath } = req.body;

    await storage.updateChunkStatus(fileId, parseInt(chunkIndex), storagePath);
    res.json({ success: true });
  });

  app.get(api.chunks.getDownloadUrl.path, async (req, res) => {
    // Security headers
    res.set({
      "Cache-Control": "no-store",
      "Clear-Site-Data": '"cache", "storage"',
    });

    const id = req.params.id as string;
    const fileId = req.params.fileId as string;
    const chunkIndex = req.params.chunkIndex as string;

    const chunk = await storage.getChunk(fileId, parseInt(chunkIndex));
    if (!chunk || !chunk.storagePath) {
      return res.status(404).json({ message: "Chunk not found" });
    }

    try {
      // Get signed download URL from Supabase
      const downloadUrl = await supabaseStorage.getDownloadUrl(chunk.storagePath);
      res.json({ downloadUrl });
    } catch (err) {
      console.error("Download URL Gen Failed:", err);
      res.status(404).json({ message: "File not found in storage" });
    }
  });

  // =============================================================================
  // HEALTH CHECK
  // =============================================================================

  app.get("/api/health", (_req, res) => {
    // Basic health check - we can't easily get stats from DB in generic way without count(*) queries
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      mode: "database"
    });
  });

  return httpServer;
}
