import { getOptimalChunkConfig, MAX_CHUNK_SIZE, MIN_CHUNK_SIZE } from "../client/src/lib/adaptiveChunk";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    console.error(`FAILED: ${message}`);
    process.exit(1);
  }
}

async function run() {
  console.log("\nVaultBridge adaptive chunk tests\n");

  const small = await getOptimalChunkConfig(2 * 1024 * 1024);
  assert(!small.shouldChunk, "small files should upload as one encrypted blob");
  assert(small.estimatedChunks === 1, "small files should have one chunk");

  const forcedTooSmall = await getOptimalChunkConfig(100 * 1024 * 1024, { forceChunkSize: 64 });
  assert(forcedTooSmall.chunkSize === MIN_CHUNK_SIZE, "forced chunk size should clamp to minimum");

  const forcedTooLarge = await getOptimalChunkConfig(500 * 1024 * 1024, { forceChunkSize: 100 * 1024 * 1024 });
  assert(forcedTooLarge.chunkSize === MAX_CHUNK_SIZE, "forced chunk size should clamp to maximum");

  console.log("Adaptive chunk tests passed");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
