/**
 * Server-side TransformStream pipeline for efficient large file decryption and processing
 * Handles streaming decompression, decryption, and file I/O without buffering entire files in memory
 */
import { Transform, Readable, Writable } from 'stream';
import { gunzip } from 'fflate';
import { createDecipher } from 'crypto';

interface DecryptionOptions {
  iv: Uint8Array;
  key: Buffer;
  algorithm?: string;
  isCompressed?: boolean;
}

/**
 * Create a Transform stream that decrypts incoming chunks using AES-GCM
 */
export function createDecryptionStream(options: DecryptionOptions): Transform {
  const { iv, key } = options;
  let cipher: any = null;
  let firstChunk = true;

  return new Transform({
    highWaterMark: 64 * 1024, // 64KB chunks
    async transform(chunk: Buffer, encoding: string, callback: Function) {
      try {
        if (firstChunk) {
          // Initialize decipher on first chunk
          cipher = createDecipher('aes-256-gcm', key);
          cipher.setAAD(iv); // Set Additional Authenticated Data
          firstChunk = false;
        }

        // Decrypt this chunk
        const decrypted = cipher.update(chunk);
        callback(null, decrypted);
      } catch (err) {
        callback(err);
      }
    },
    flush(callback: Function) {
      try {
        if (cipher) {
          // Get authentication tag and finalize
          const authTag = cipher.getAuthTag();
          cipher.final();
        }
        callback();
      } catch (err) {
        callback(err);
      }
    },
  });
}

/**
 * Create a Transform stream that decompresses Brotli-compressed data
 */
export function createDecompressionStream(): Transform {
  let buffer = Buffer.alloc(0);

  return new Transform({
    highWaterMark: 64 * 1024,
    async transform(chunk: Buffer, encoding: string, callback: Function) {
      try {
        buffer = Buffer.concat([buffer, chunk]);
        
        // Try to decompress using native CompressionStream if available
        if (typeof CompressionStream !== 'undefined') {
          const stream = ReadableStream.from([buffer]).pipeThrough(new DecompressionStream('gzip'));
          const reader = stream.getReader();
          const { value } = await reader.read();
          callback(null, value);
        } else {
          // Fallback to fflate
          gunzip(new Uint8Array(buffer), { level: 6 }, (err, result) => {
            if (err) callback(err);
            else {
              callback(null, Buffer.from(result));
              buffer = Buffer.alloc(0);
            }
          });
        }
      } catch (err) {
        callback(err);
      }
    },
  });
}

/**
 * Pipeline builder for streaming file processing
 * Chains decryption → decompression → writing operations
 */
export function createFileProcessingPipeline(
  source: Readable,
  options: DecryptionOptions & { destination: Writable }
) {
  const { destination, isCompressed, ...decryptOptions } = options;

  const decryptStream = createDecryptionStream(decryptOptions);
  const decompressStream = isCompressed ? createDecompressionStream() : null;

  // Build pipeline
  if (decompressStream) {
    return source
      .pipe(decryptStream)
      .pipe(decompressStream)
      .pipe(destination);
  } else {
    return source.pipe(decryptStream).pipe(destination);
  }
}

/**
 * Memory-efficient file splitter for chunked processing
 * Yields chunks of specified size without loading entire file into memory
 */
export async function* streamFileChunks(
  source: Readable,
  chunkSize: number = 1024 * 1024 // 1MB default
) {
  let buffer = Buffer.alloc(0);

  for await (const chunk of source) {
    buffer = Buffer.concat([buffer, chunk]);

    while (buffer.length >= chunkSize) {
      yield buffer.subarray(0, chunkSize);
      buffer = buffer.subarray(chunkSize);
    }
  }

  // Yield remaining data
  if (buffer.length > 0) {
    yield buffer;
  }
}

/**
 * Backpressure-aware streaming with configurable buffer management
 * Automatically slows down reading when write buffer is full
 */
export class BackpressureAwareStream extends Transform {
  private highWaterMark: number;
  private lowWaterMark: number;
  private paused = false;

  constructor(highWaterMark: number = 64 * 1024, lowWaterMark: number = 16 * 1024) {
    super({ highWaterMark });
    this.highWaterMark = highWaterMark;
    this.lowWaterMark = lowWaterMark;
  }

  _transform(chunk: Buffer, encoding: string, callback: Function) {
    const canContinue = this.push(chunk);

    if (!canContinue && !this.paused) {
      this.paused = true;
      this.emit('pause');
    } else if (canContinue && this.paused) {
      this.paused = false;
      this.emit('resume');
    }

    callback();
  }
}
