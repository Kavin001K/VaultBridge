import { isValidChunkIndex, isValidChunkSize, validateChunkStoragePath } from "../server/services/chunk_validation";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    console.error(`FAILED: ${message}`);
    process.exit(1);
  }
}

function testChunkSizeValidation() {
  assert(isValidChunkSize(1), "1 byte should be valid");
  assert(isValidChunkSize(60 * 1024 * 1024), "60 MB encrypted chunk should be valid");
  assert(!isValidChunkSize(0), "0 bytes should be invalid");
  assert(!isValidChunkSize(Number.POSITIVE_INFINITY), "infinite size should be invalid");
  assert(!isValidChunkSize(61 * 1024 * 1024), "oversized encrypted chunk should be invalid");
}

function testChunkIndexValidation() {
  assert(isValidChunkIndex(0, 1), "first chunk should be valid");
  assert(isValidChunkIndex(3, 4), "last chunk should be valid");
  assert(!isValidChunkIndex(4, 4), "index equal to count should be invalid");
  assert(!isValidChunkIndex(-1, 4), "negative index should be invalid");
}

function testStoragePathValidation() {
  const valid = validateChunkStoragePath({
    storagePath: "r2:vault-1/file-1/3.enc",
    vaultId: "vault-1",
    fileId: "file-1",
    chunkIndex: 3,
  });
  assert(valid.valid && valid.provider === "r2", "valid R2 path should pass");

  const invalid = validateChunkStoragePath({
    storagePath: "sb:vault-1/file-1/4.enc",
    vaultId: "vault-1",
    fileId: "file-1",
    chunkIndex: 3,
  });
  assert(!invalid.valid, "mismatched chunk path should fail");
}

function run() {
  console.log("\nVaultBridge backend upload validation tests\n");
  testChunkSizeValidation();
  testChunkIndexValidation();
  testStoragePathValidation();
  console.log("Backend upload validation tests passed");
}

run();
