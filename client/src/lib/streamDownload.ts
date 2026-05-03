/**
 * Efficient streaming file download with client-side decryption
 * Uses TransformStream for zero-copy operations and minimal memory overhead
 */

export interface StreamDownloadOptions {
  onProgress?: (received: number, total?: number) => void;
  signal?: AbortSignal;
  chunkSize?: number;
}

/**
 * Create a TransformStream that decrypts binary data using WebCrypto AES-GCM
 */
export function createDecryptionTransform(
  iv: Uint8Array,
  key: CryptoKey,
  algorithm = "AES-GCM"
): TransformStream<Uint8Array, Uint8Array> {
  let cipher: SubtleCrypto | null = null;

  return new TransformStream({
    async transform(chunk: Uint8Array, controller: TransformStreamDefaultController<Uint8Array>) {
      try {
        if (!cipher) {
          cipher = crypto.subtle;
        }

        const decrypted = await crypto.subtle.decrypt(
          { name: algorithm, iv },
          key,
          chunk
        );

        controller.enqueue(new Uint8Array(decrypted));
      } catch (error) {
        controller.error(error);
      }
    },
  });
}

/**
 * Create a TransformStream that decompresses Brotli/gzip data
 */
export function createDecompressionTransform(
  format: "gzip" | "deflate" | "br" = "gzip"
): TransformStream<Uint8Array, Uint8Array> {
  return new TransformStream({
    async transform(chunk: Uint8Array, controller: TransformStreamDefaultController<Uint8Array>) {
      try {
        // Use native DecompressionStream if available
        if (typeof DecompressionStream !== "undefined") {
          const stream = ReadableStream.from([chunk]).pipeThrough(
            new DecompressionStream(format)
          );
          const reader = stream.getReader();
          
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              controller.enqueue(new Uint8Array(value));
            }
          } finally {
            reader.releaseLock();
          }
        } else {
          // Fallback: just pass through (client must handle decompression)
          controller.enqueue(chunk);
        }
      } catch (error) {
        controller.error(error);
      }
    },
  });
}

/**
 * Progressive file download with streaming decryption
 * Writes to Blob/File as data arrives, minimizing memory usage
 */
export async function downloadAndDecryptFile(
  url: string,
  decryptionKey: CryptoKey,
  iv: Uint8Array,
  options: StreamDownloadOptions = {}
): Promise<Blob> {
  const { onProgress, signal, chunkSize = 256 * 1024 } = options;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Download failed: ${response.status}`);
  }

  const contentLength = response.headers.get("content-length");
  const total = contentLength ? parseInt(contentLength, 10) : undefined;
  let received = 0;

  // Create readable stream from response
  const reader = response.body!.getReader();
  const decryptStream = createDecryptionTransform(iv, decryptionKey);
  const chunks: Uint8Array[] = [];

  // Process stream with decryption
  const writer = decryptStream.writable.getWriter();
  let decryptDone = false;

  (async () => {
    try {
      while (!decryptDone) {
        const { done, value } = await reader.read();
        if (done) {
          await writer.close();
          decryptDone = true;
          break;
        }

        received += value.byteLength;
        onProgress?.(received, total);

        await writer.write(value);
      }
    } catch (error) {
      await writer.abort(error);
    }
  })();

  // Collect decrypted chunks
  const decryptReader = decryptStream.readable.getReader();

  try {
    while (true) {
      const { done, value } = await decryptReader.read();
      if (done) break;
      chunks.push(value);
    }
  } finally {
    decryptReader.releaseLock();
  }

  return new Blob(chunks, { type: "application/octet-stream" });
}

/**
 * Stream-based file save with progress tracking
 */
export async function saveStreamedFile(
  filename: string,
  stream: ReadableStream<Uint8Array>,
  onProgress?: (loaded: number, total: number) => void
): Promise<void> {
  const reader = stream.getReader();
  let totalSize = 0;
  const chunks: Uint8Array[] = [];

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      chunks.push(value);
      totalSize += value.byteLength;
      onProgress?.(totalSize, totalSize);
    }

    // Trigger download
    const blob = new Blob(chunks);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } finally {
    reader.releaseLock();
  }
}
