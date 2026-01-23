/**
 * Encryption/Decryption Test Suite for VaultBridge
 * 
 * Verifies that encrypt -> decrypt returns the exact same data.
 * Uses Node.js crypto module to simulate Web Crypto API behavior.
 */

import { webcrypto } from "crypto";

// Polyfill for Node.js environment
const crypto = webcrypto as unknown as Crypto;

// === CRYPTO FUNCTIONS (mirror of client/src/lib/crypto.ts) ===

async function generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    );
}

async function exportKey(key: CryptoKey): Promise<string> {
    const exported = await crypto.subtle.exportKey("raw", key);
    return Buffer.from(exported).toString("base64");
}

async function importKey(base64Key: string): Promise<CryptoKey> {
    const keyBuffer = Buffer.from(base64Key, "base64");
    return crypto.subtle.importKey(
        "raw",
        keyBuffer,
        "AES-GCM",
        true,
        ["encrypt", "decrypt"]
    );
}

async function encryptData(data: BufferSource, key: CryptoKey) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        data
    );

    return { iv, encryptedData: encrypted };
}

async function decryptData(encryptedData: BufferSource, iv: Uint8Array, key: CryptoKey) {
    return crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        encryptedData
    );
}

// === TEST SUITE ===

async function testEncryptDecryptString() {
    console.log("Test 1: Encrypt and decrypt a string...");

    const originalText = "Hello, VaultBridge! 🔐 This is a secret message.";
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const originalData = encoder.encode(originalText);

    // Generate key
    const key = await generateKey();

    // Encrypt
    const { iv, encryptedData } = await encryptData(originalData, key);

    // Decrypt
    const decryptedBuffer = await decryptData(encryptedData, iv, key);
    const decryptedText = decoder.decode(decryptedBuffer);

    // Verify
    if (originalText === decryptedText) {
        console.log("  ✅ PASSED: Decrypted text matches original");
    } else {
        console.error("  ❌ FAILED: Decrypted text does not match");
        console.error(`    Expected: ${originalText}`);
        console.error(`    Got: ${decryptedText}`);
        process.exit(1);
    }
}

async function testKeyExportImport() {
    console.log("Test 2: Export and import key...");

    const originalText = "Testing key export/import";
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const data = encoder.encode(originalText);

    // Generate and export key
    const key1 = await generateKey();
    const exportedKey = await exportKey(key1);

    // Encrypt with original key
    const { iv, encryptedData } = await encryptData(data, key1);

    // Import key from export
    const key2 = await importKey(exportedKey);

    // Decrypt with imported key
    const decryptedBuffer = await decryptData(encryptedData, iv, key2);
    const decryptedText = decoder.decode(decryptedBuffer);

    if (originalText === decryptedText) {
        console.log("  ✅ PASSED: Key export/import works correctly");
    } else {
        console.error("  ❌ FAILED: Key export/import failed");
        process.exit(1);
    }
}

async function testLargeData() {
    console.log("Test 3: Encrypt and decrypt large data (1MB)...");

    // Generate 1MB of random data in chunks (Node.js limits getRandomValues to 64KB)
    const size = 1024 * 1024;
    const originalData = new Uint8Array(size);
    const chunkSize = 65536;
    for (let i = 0; i < size; i += chunkSize) {
        const len = Math.min(chunkSize, size - i);
        const chunk = crypto.getRandomValues(new Uint8Array(len));
        originalData.set(chunk, i);
    }

    const key = await generateKey();

    // Encrypt
    const { iv, encryptedData } = await encryptData(originalData, key);

    // Decrypt
    const decryptedBuffer = await decryptData(encryptedData, iv, key);
    const decryptedData = new Uint8Array(decryptedBuffer);

    // Verify byte-by-byte
    let match = true;
    for (let i = 0; i < size; i++) {
        if (originalData[i] !== decryptedData[i]) {
            match = false;
            break;
        }
    }

    if (match) {
        console.log("  ✅ PASSED: Large data encryption/decryption works");
    } else {
        console.error("  ❌ FAILED: Large data mismatch");
        process.exit(1);
    }
}

async function testWrongKey() {
    console.log("Test 4: Decryption with wrong key should fail...");

    const data = new TextEncoder().encode("Secret data");

    const key1 = await generateKey();
    const key2 = await generateKey(); // Different key

    const { iv, encryptedData } = await encryptData(data, key1);

    try {
        await decryptData(encryptedData, iv, key2);
        console.error("  ❌ FAILED: Should have thrown an error");
        process.exit(1);
    } catch (error) {
        console.log("  ✅ PASSED: Correctly rejected wrong key");
    }
}

async function testMetadataEncryption() {
    console.log("Test 5: JSON metadata encryption...");

    const metadata = {
        files: [
            { name: "secret.pdf", size: 1024000, type: "application/pdf" },
            { name: "photo.jpg", size: 2048000, type: "image/jpeg" },
        ],
        timestamp: Date.now(),
        unicode: "こんにちは世界 🌍",
    };

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const jsonString = JSON.stringify(metadata);
    const data = encoder.encode(jsonString);

    const key = await generateKey();
    const { iv, encryptedData } = await encryptData(data, key);

    const decryptedBuffer = await decryptData(encryptedData, iv, key);
    const decryptedJson = decoder.decode(decryptedBuffer);
    const decryptedMetadata = JSON.parse(decryptedJson);

    if (JSON.stringify(metadata) === JSON.stringify(decryptedMetadata)) {
        console.log("  ✅ PASSED: JSON metadata preserved correctly");
    } else {
        console.error("  ❌ FAILED: Metadata mismatch");
        process.exit(1);
    }
}

// === RUN TESTS ===

async function runAllTests() {
    console.log("\n🔐 VaultBridge Encryption Test Suite\n");
    console.log("=".repeat(50));

    await testEncryptDecryptString();
    await testKeyExportImport();
    await testLargeData();
    await testWrongKey();
    await testMetadataEncryption();

    console.log("=".repeat(50));
    console.log("\n✅ All tests passed!\n");
}

runAllTests().catch((error) => {
    console.error("Test suite failed:", error);
    process.exit(1);
});
