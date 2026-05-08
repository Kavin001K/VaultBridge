import { ByteProgressTracker } from "../client/src/lib/uploadProgress";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    console.error(`FAILED: ${message}`);
    process.exit(1);
  }
}

async function testByteWeightedProgress() {
  const tracker = new ByteProgressTracker(1000);

  tracker.addEncrypted(500);
  let snapshot = tracker.snapshot();
  assert(snapshot.progress === 10, `expected 10% after half encrypted, got ${snapshot.progress}`);

  tracker.addUploaded(250);
  snapshot = tracker.snapshot();
  assert(snapshot.progress === 25, `expected 25% after upload weighting, got ${snapshot.progress}`);

  tracker.addConfirmed(250);
  snapshot = tracker.snapshot();
  assert(snapshot.progress === 30, `expected 30% after confirm weighting, got ${snapshot.progress}`);

  tracker.addEncrypted(500);
  tracker.addUploaded(750);
  tracker.addConfirmed(750);
  snapshot = tracker.snapshot();
  assert(snapshot.progress === 100, `expected 100%, got ${snapshot.progress}`);
}

async function testUnevenChunkClamping() {
  const tracker = new ByteProgressTracker(100);
  tracker.addEncrypted(10);
  tracker.addUploaded(1000);
  tracker.addConfirmed(1000);
  const snapshot = tracker.snapshot();

  assert(snapshot.uploadedBytes === 100, "uploaded bytes should clamp to total");
  assert(snapshot.confirmedBytes === 100, "confirmed bytes should clamp to total");
  assert(snapshot.progress <= 100, "progress should never exceed 100");
}

async function run() {
  console.log("\nVaultBridge upload progress tests\n");
  await testByteWeightedProgress();
  await testUnevenChunkClamping();
  console.log("Upload progress tests passed");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
