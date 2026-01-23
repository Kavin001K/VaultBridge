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
    download: {
      method: 'POST' as const, // POST because we might increment download count
      path: '/api/vaults/:id/download',
      responses: {
        200: z.object({ success: true }),
        403: z.object({ message: z.string() }) // Limit exceeded
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
          expiresAt: z.string(),
          maxDownloads: z.number(),
          downloadCount: z.number(),
          files: z.array(z.object({
            fileId: z.string(),
            chunkCount: z.number(),
            totalSize: z.number(),
          })),
        }),
        404: errorSchemas.notFound,
        410: z.object({ message: z.string() }), // Gone (expired/deleted)
      }
    }
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
