import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage"; // Switched to Database Storage
import { sendVaultEmail, getRemainingEmailQuota, sendDirectAttachment } from "./services/email";
import { codeLimiter, uploadLimiter } from "./index";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { supabaseStorage } from "./services/supabase_storage";
import { localStorage } from "./services/local_storage"; // <--- Add this import!
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
  // LOCAL STORAGE ROUTES (Only active if STORAGE_PROVIDER=local)
  // =============================================================================
  if (process.env.STORAGE_PROVIDER === 'local') {

    // Handle Local Upload Stream (Support both POST and PUT)
    const uploadHandler = async (req: any, res: any) => {
      const storagePath = req.query.path as string;
      if (!storagePath) return res.status(400).send("Missing path");

      try {
        await localStorage.uploadFile(storagePath, req);
        res.json({ success: true });
      } catch (e) {
        console.error("Local upload failed", e);
        res.status(500).send("Upload failed");
      }
    };

    app.post('/api/local/upload', uploadHandler);
    app.put('/api/local/upload', uploadHandler);

    // Handle Local Download Stream
    app.get('/api/local/download', async (req, res) => {
      const storagePath = req.query.path as string;
      if (!storagePath) return res.status(400).send("Missing path");

      try {
        const stream = await localStorage.downloadFile(storagePath);
        stream.pipe(res);
      } catch (e) {
        res.status(404).send("File not found");
      }
    });
  }

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
      // Log the actual error for debugging
      console.error("[Vault Create Error]", err);
      return res.status(500).json({
        message: "Failed to create vault",
        error: err instanceof Error ? err.message : "Unknown error"
      });
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

  // Mark download (vault-level increment - legacy, kept for backwards compatibility)
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
      res.json({ success: true, remainingDownloads: 0 });
    } else {
      res.json({ success: true, remainingDownloads: vault.maxDownloads - newCount });
    }
  });

  // Per-file download tracking
  app.post(api.vaults.downloadFile.path, async (req, res) => {
    try {
      const vaultId = req.params.id as string;
      const singleFileId = req.params.fileId as string;

      // Support both single file (from URL) and multiple files (from body)
      const body = req.body || {};
      const fileIds: string[] = body.fileIds?.length ? body.fileIds : [singleFileId];

      const vault = await storage.getVault(vaultId);
      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }

      // Check if vault has expired
      if (new Date() > vault.expiresAt) {
        await storage.deleteVault(vault.id);
        return res.status(410).json({ message: "Vault has expired" });
      }

      // Get current file states to check limits before incrementing
      const vaultFiles = await storage.getFiles(vault.id);
      const requestedFiles = vaultFiles.filter(f => fileIds.includes(f.fileId));

      if (requestedFiles.length === 0) {
        return res.status(404).json({ message: "No matching files found" });
      }

      // Check if any requested file has already reached its limit
      const exhaustedFiles = requestedFiles.filter(f => f.downloadCount >= f.maxDownloads);
      if (exhaustedFiles.length > 0) {
        return res.status(403).json({
          message: `Download limit exceeded for ${exhaustedFiles.length} file(s)`,
          exhaustedFiles: exhaustedFiles.map(f => f.fileId)
        });
      }

      // Increment download counts for all requested files
      const results = await storage.incrementFileDownloadCount(fileIds);

      // Check if ALL files in the vault are now exhausted
      const allVaultFilesExhausted = await storage.areAllFilesExhausted(vault.id);

      // BURNING LOGIC: If all files exhausted, delete the vault
      if (allVaultFilesExhausted) {
        console.log(`[Vault ${vault.id}] All files exhausted. Initiating burn...`);
        await storage.deleteVault(vault.id);
      }

      res.json({
        success: true,
        files: results,
        vaultExhausted: allVaultFilesExhausted
      });

    } catch (err) {
      console.error("[File Download Track Error]", err);
      return res.status(500).json({
        message: "Failed to track download",
        error: err instanceof Error ? err.message : "Unknown error"
      });
    }
  });


  // Burn/Delete Vault
  app.delete('/api/vaults/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const vault = await storage.getVault(id);

      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }

      await storage.deleteVault(id);
      res.json({ success: true, message: "Vault burned successfully" });
    } catch (err) {
      console.error("Delete failed:", err);
      res.status(500).json({ message: "Failed to delete vault" });
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

    // Check if expired
    if (new Date() > vault.expiresAt) {
      return res.status(410).json({ message: "Vault expired" });
    }

    // Crucial: We return the wrappedKey, but NOT the PIN
    // The client will use the PIN (entered locally) to unwrap the key
    if (!vault.wrappedKey) {
      return res.status(400).json({ message: "This vault does not support split-code access" });
    }

    const files = await storage.getFiles(vault.id);

    // Calculate vault-level download stats (sum of all file download counts)
    const totalFileDownloads = files.reduce((sum, f) => sum + (f.downloadCount || 0), 0);
    const totalFileMaxDownloads = files.reduce((sum, f) => sum + (f.maxDownloads || 0), 0);

    res.json({
      id: vault.id,
      wrappedKey: vault.wrappedKey,
      encryptedMetadata: vault.encryptedMetadata,
      encryptedClipboardText: vault.encryptedClipboardText, // Include clipboard text if present
      expiresAt: vault.expiresAt.toISOString(),
      maxDownloads: vault.maxDownloads, // Vault-level default
      downloadCount: vault.downloadCount, // Vault-level (legacy)
      files: files.map((f) => ({
        fileId: f.fileId,
        chunkCount: f.chunkCount,
        totalSize: f.totalSize,
        maxDownloads: f.maxDownloads || vault.maxDownloads, // Per-file, fallback to vault default
        downloadCount: f.downloadCount || 0, // Per-file
        remainingDownloads: Math.max(0, (f.maxDownloads || vault.maxDownloads) - (f.downloadCount || 0)),
      })),
    });
  });

  // Update clipboard content (Live Sync)
  app.put(api.vaults.updateClipboard.path, async (req, res) => {
    try {
      const lookupId = req.params.lookupId as string;
      const { encryptedClipboardText, wrappedKey } = api.vaults.updateClipboard.input.parse(req.body);

      const vault = await storage.getVaultByLookupId(lookupId);

      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }

      // Check if expired
      if (new Date() > vault.expiresAt) {
        return res.status(410).json({ message: "Vault expired" });
      }

      // Security check: Ensure the client providing the update actually has the correct wrappedKey
      // This prevents someone who just guessed the 3-digit lookupId from overwriting the clipboard
      // (The wrappedKey acts as a "session token" here since it requires the PIN to be useful, 
      // but simplistic verification is just matching what's in DB)
      if (vault.wrappedKey !== wrappedKey) {
        return res.status(403).json({ message: "Invalid access verification" });
      }

      const updatedAt = await storage.updateClipboard(lookupId, encryptedClipboardText);

      res.json({
        success: true,
        updatedAt: updatedAt.toISOString()
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input" });
      }
      console.error("Clipboard update failed:", err);
      res.status(500).json({ message: "Failed to update clipboard" });
    }
  });

  // Get clipboard content (Live Poll)
  app.get(api.vaults.getClipboard.path, async (req, res) => {
    try {
      const lookupId = req.params.lookupId as string;
      const vault = await storage.getVaultByLookupId(lookupId);

      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }
      if (new Date() > vault.expiresAt) {
        return res.status(410).json({ message: "Vault expired" });
      }

      res.json({
        encryptedClipboardText: vault.encryptedClipboardText || undefined,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error("Clipboard poll failed:", err);
      res.status(500).json({ message: "Failed to get clipboard" });
    }
  });

  // =============================================================================
  // DIRECT EMAIL OPERATIONS (Transient Mode)
  // =============================================================================

  // MULTI-FILE & MULTI-RECIPIENT Email Endpoint
  app.post("/api/email/direct-multi", (req, res, next) => {
    upload.array("files", 10)(req, res, (err) => { // Allow up to 10 files
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(413).json({ message: "File too large. Max limit is 10MB per file." });
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
      const { to } = req.body;
      let { subject, body } = req.body;

      // Require at least the recipient email
      if (!to) {
        return res.status(400).json({ message: "Missing required field: to (recipient email)." });
      }

      // Auto-generate default subject if not provided
      const fileNames = files.map(f => f.originalname).join(', ');
      if (!subject || (typeof subject === 'string' && subject.trim() === '')) {
        subject = `Files shared via VaultBridge: ${fileNames.substring(0, 50)}${fileNames.length > 50 ? '...' : ''}`;
      }

      // Auto-generate default body/message if not provided
      if (!body || (typeof body === 'string' && body.trim() === '')) {
        const totalSize = files.reduce((acc, f) => acc + f.size, 0);
        const formatSize = (bytes: number) => {
          if (bytes < 1024) return `${bytes} B`;
          if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
          return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
        };
        body = `You have received ${files.length} file(s) (${formatSize(totalSize)}) via VaultBridge secure transfer.\n\nFiles: ${fileNames}`;
      }

      // Parse multiple recipients (comma-separated) and NORMALIZE TO LOWERCASE
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const recipients = (to as string)
        .split(',')
        .map(email => email.trim().toLowerCase()) // Normalize to lowercase for case-insensitive handling
        .filter(email => emailRegex.test(email));

      if (recipients.length === 0) {
        return res.status(400).json({ message: "No valid email addresses provided." });
      }

      if (recipients.length > 5) {
        return res.status(400).json({ message: "Maximum 5 recipients allowed per request." });
      }

      // Calculate total size check
      const totalSize = files.reduce((acc, f) => acc + f.size, 0);
      if (totalSize > 25 * 1024 * 1024) { // 25MB Hard Limit
        return res.status(413).json({ message: "Total attachment size exceeds 25MB limit." });
      }

      // Prepare file attachments once
      const attachments = files.map(f => ({
        filename: f.originalname,
        content: f.buffer
      }));

      // Send to all recipients in parallel
      const results = await Promise.allSettled(
        recipients.map(async (recipientEmail) => {
          return sendDirectAttachment({
            to: recipientEmail,
            subject,
            text: body,
            files: attachments
          });
        })
      );

      // Count successes and failures
      const successCount = results.filter(r => r.status === 'fulfilled' && r.value === true).length;
      const failCount = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && r.value === false)).length;

      if (successCount === 0) {
        return res.status(500).json({ message: "Failed to send emails to all recipients." });
      }

      if (failCount > 0) {
        return res.json({
          success: true,
          message: `Sent to ${successCount}/${recipients.length} recipients. ${failCount} failed.`,
          delivered: successCount,
          failed: failCount
        });
      }

      res.json({
        success: true,
        message: `Successfully sent to ${successCount} recipient(s).`,
        delivered: successCount
      });
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
      const { senderName, fullCode } = req.body;
      let { to } = req.body;

      if (!to || typeof to !== "string") {
        return res.status(400).json({ message: "Email address required" });
      }

      // Normalize email to lowercase for case-insensitive handling (handles ALL CAPS, MixedCase, etc.)
      to = to.trim().toLowerCase();

      const vault = await storage.getVault(id);
      if (!vault) {
        return res.status(404).json({ message: "Vault not found" });
      }

      // Check quota
      const remaining = getRemainingEmailQuota(id);
      if (remaining <= 0) {
        return res.status(429).json({ message: "Email limit reached for this vault" });
      }

      // VERIFICATION LAYER:
      // Ensure the client-provided code matches the vault's stored lookup ID.
      // This prevents sending a random/incorrect code that won't unlock the files.
      if (fullCode && vault.lookupId && !fullCode.startsWith(vault.lookupId)) {
        console.error(`[Email Verification Failed] Vault ${id}: fullCode '${fullCode}' does not match lookupId '${vault.lookupId}'`);
        return res.status(400).json({ message: "Invalid access code provided. Verification failed." });
      }

      const result = await sendVaultEmail({
        to,
        vaultId: vault.id,
        shortCode: vault.shortCode || "UNKNOWN",
        fullCode, // Pass the full code if provided by client
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
      const uploadUrl = await storage.getUploadUrl(storagePath);
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

    console.log(`[Download Debug] Requesting chunk: Vault=${id}, File=${fileId}, Index=${chunkIndex}`);

    try {
      const chunk = await storage.getChunk(fileId, parseInt(chunkIndex));

      if (!chunk) {
        console.error(`[Download Debug] Chunk not found in DB: File=${fileId}, Index=${chunkIndex}`);
        return res.status(404).json({ message: "Chunk not found" });
      }

      if (!chunk.storagePath) {
        console.error(`[Download Debug] Chunk has no storagePath: File=${fileId}, Index=${chunkIndex}`);
        return res.status(404).json({ message: "Chunk not found (no path)" });
      }

      console.log(`[Download Debug] Chunk found. Path=${chunk.storagePath}. Getting signed URL...`);

      // Get signed download URL from Supabase
      const downloadUrl = await storage.getDownloadUrl(chunk.storagePath);
      console.log(`[Download Debug] Signed URL generated successfully.`);

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
