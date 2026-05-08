export const MAX_ENCRYPTED_CHUNK_BYTES = 60 * 1024 * 1024;
type Provider = "r2" | "supabase" | "local";

export function isValidChunkSize(size: unknown): size is number {
  return typeof size === "number" && Number.isFinite(size) && size > 0 && size <= MAX_ENCRYPTED_CHUNK_BYTES;
}

export function isValidChunkIndex(chunkIndex: number, chunkCount: number): boolean {
  return Number.isInteger(chunkIndex) && chunkIndex >= 0 && chunkIndex < chunkCount;
}

function parseProviderPath(storagePath: string): { provider: Provider; rawPath: string } | null {
  if (storagePath.startsWith("r2:")) return { provider: "r2", rawPath: storagePath.slice(3) };
  if (storagePath.startsWith("sb:")) return { provider: "supabase", rawPath: storagePath.slice(3) };
  if (storagePath.startsWith("local:")) return { provider: "local", rawPath: storagePath.slice(6) };
  return null;
}

export function validateChunkStoragePath(params: {
  storagePath: string;
  vaultId: string;
  fileId: string;
  chunkIndex: number;
}): { valid: true; provider: Provider; rawPath: string } | { valid: false; reason: string } {
  if (!params.storagePath || typeof params.storagePath !== "string") {
    return { valid: false, reason: "Invalid storage path" };
  }

  const parsed = parseProviderPath(params.storagePath);
  if (!parsed) {
    return { valid: false, reason: "Storage path is missing a provider prefix" };
  }
  const expectedRawPath = `${params.vaultId}/${params.fileId}/${params.chunkIndex}.enc`;

  if (parsed.rawPath !== expectedRawPath) {
    return { valid: false, reason: "Storage path does not match chunk plan" };
  }

  return { valid: true, provider: parsed.provider, rawPath: parsed.rawPath };
}
