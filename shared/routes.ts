import { z } from 'zod';
import { createVaultRequestSchema, vaults } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  vaults: {
    create: {
      method: 'POST' as const,
      path: '/api/vaults',
      input: createVaultRequestSchema,
      responses: {
        201: z.object({
          id: z.string(),
          shortCode: z.string().optional(),
          expiresAt: z.string(),
          directLink: z.string(),
        }),
        400: errorSchemas.validation,
        409: z.object({
          message: z.string(),
          code: z.string().optional(),
        }),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/vaults/:id',
      responses: {
        200: z.custom<any>(), // Returns VaultResponse with files
        404: errorSchemas.notFound,
        410: z.object({ message: z.string() }), // Gone (expired/deleted)
      },
    },
    resolveCode: {
      method: 'GET' as const,
      path: '/api/code/:code',
      responses: {
        200: z.object({ id: z.string() }),
        404: errorSchemas.notFound,
      },
    },
    // Vault-level download (legacy - increments vault counter)
    download: {
      method: 'POST' as const,
      path: '/api/vaults/:id/download',
      responses: {
        200: z.object({
          success: z.boolean(),
          remainingDownloads: z.number(), // Vault-level remaining (for compatibility)
        }),
        403: z.object({ message: z.string() }) // Limit exceeded
      }
    },
    // Per-file download tracking
    downloadFile: {
      method: 'POST' as const,
      path: '/api/vaults/:id/files/:fileId/download',
      input: z.object({
        fileIds: z.array(z.string()).optional(), // Optional: download multiple files at once
      }),
      responses: {
        200: z.object({
          success: z.boolean(),
          files: z.array(z.object({
            fileId: z.string(),
            downloadCount: z.number(),
            maxDownloads: z.number(),
            remainingDownloads: z.number(),
            isExhausted: z.boolean(), // True if file has reached download limit
          })),
          vaultExhausted: z.boolean(), // True if ALL files are exhausted
        }),
        403: z.object({ message: z.string() }), // File download limit exceeded
        404: errorSchemas.notFound,
      }
    },
    // Split-code lookup: Find vault by 3-digit lookupId
    codeLookup: {
      method: 'GET' as const,
      path: '/api/vault/code/:lookupId',
      responses: {
        200: z.object({
          id: z.string(),
          wrappedKey: z.string(),
          encryptedMetadata: z.string(),
          encryptedClipboardText: z.string().nullish(), // Encrypted clipboard text (null from DB, undefined from client)
          expiresAt: z.string(),
          maxDownloads: z.number(), // Vault-level default
          downloadCount: z.number(), // Vault-level total (legacy, sum of file downloads)
          files: z.array(z.object({
            fileId: z.string(),
            chunkCount: z.number(),
            totalSize: z.number(),
            maxDownloads: z.number(), // Per-file download limit
            downloadCount: z.number(), // Per-file current downloads
            remainingDownloads: z.number(), // Per-file remaining downloads
          })),
        }),
        404: errorSchemas.notFound,
        410: z.object({ message: z.string() }), // Gone (expired/deleted)
      }
    },
    email: {
      method: 'POST' as const,
      path: '/api/vaults/:id/email',
      input: z.object({
        to: z.string().email(),
        senderName: z.string().optional(),
      }),
      responses: {
        200: z.object({
          success: z.boolean(),
          remainingEmails: z.number(),
          previewUrl: z.string().optional(),
        }),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
        429: z.object({ message: z.string() }),
      },
    },
    // Live clipboard update (encrypted content sync)
    updateClipboard: {
      method: 'PUT' as const,
      path: '/api/vault/code/:lookupId/clipboard',
      input: z.object({
        encryptedClipboardText: z.string(),
        wrappedKey: z.string(), // For verification
      }),
      responses: {
        200: z.object({
          success: z.boolean(),
          updatedAt: z.string(),
        }),
        400: errorSchemas.validation,
        404: errorSchemas.notFound,
        410: z.object({ message: z.string() }),
      },
    },
    // Live clipboard poll
    getClipboard: {
      method: 'GET' as const,
      path: '/api/vault/code/:lookupId/clipboard',
      responses: {
        200: z.object({
          encryptedClipboardText: z.string().nullish(),
          updatedAt: z.string().optional(),
        }),
        404: errorSchemas.notFound,
        410: z.object({ message: z.string() }),
      },
    },
  },
  chunks: {
    getUploadUrl: {
      method: 'POST' as const,
      path: '/api/vaults/:id/files/:fileId/chunks/:chunkIndex/upload-url',
      input: z.object({
        size: z.number(),
      }),
      responses: {
        200: z.object({
          uploadUrl: z.string(),
          storagePath: z.string(),
        }),
        404: errorSchemas.notFound,
      },
    },
    markUploaded: {
      method: 'PUT' as const,
      path: '/api/vaults/:id/files/:fileId/chunks/:chunkIndex/status',
      input: z.object({
        storagePath: z.string(),
      }),
      responses: {
        200: z.object({ success: z.boolean() }),
      },
    },
    getDownloadUrl: {
      method: 'GET' as const,
      path: '/api/vaults/:id/files/:fileId/chunks/:chunkIndex/download-url',
      responses: {
        200: z.object({
          downloadUrl: z.string(),
        }),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
