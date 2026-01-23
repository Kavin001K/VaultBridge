/**
 * Zero-Knowledge Cryptography Library for VaultBridge
 * Implements AES-GCM encryption in the browser using Web Crypto API.
 */

// Generate a random AES-GCM key
export async function generateKey(): Promise<CryptoKey> {
  return window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );
}

// Export key to base64 string for URL fragment
export async function exportKey(key: CryptoKey): Promise<string> {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  return arrayBufferToBase64(exported);
}

// Import key from base64 string
export async function importKey(base64Key: string): Promise<CryptoKey> {
  const keyBuffer = base64ToArrayBuffer(base64Key);
  return window.crypto.subtle.importKey(
    "raw",
    keyBuffer,
    "AES-GCM",
    true,
    ["encrypt", "decrypt"]
  );
}

// Encrypt data (metadata JSON or file chunk)
// Returns { iv, data } as base64 strings or raw buffers depending on usage
export async function encryptData(data: BufferSource, key: CryptoKey) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV
  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    data
  );

  return {
    iv,
    encryptedData: encrypted,
  };
}

// Decrypt data
export async function decryptData(encryptedData: BufferSource, iv: Uint8Array, key: CryptoKey) {
  return window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encryptedData
  );
}

// Helper: Encrypt metadata object to Base64 JSON string
// Format: JSON.stringify({ iv: "base64", data: "base64" })
export async function encryptMetadata(metadata: any, key: CryptoKey): Promise<string> {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(JSON.stringify(metadata));
  const { iv, encryptedData } = await encryptData(encoded, key);

  return JSON.stringify({
    iv: arrayBufferToBase64(iv.buffer as ArrayBuffer),
    data: arrayBufferToBase64(encryptedData),
  });
}

// Helper: Decrypt metadata string to object
export async function decryptMetadata(encryptedMetadataStr: string, key: CryptoKey): Promise<any> {
  try {
    const { iv, data } = JSON.parse(encryptedMetadataStr);
    const ivBuffer = base64ToArrayBuffer(iv);
    const dataBuffer = base64ToArrayBuffer(data);

    const decryptedBuffer = await decryptData(dataBuffer, new Uint8Array(ivBuffer), key);
    const decoder = new TextDecoder();
    return JSON.parse(decoder.decode(decryptedBuffer));
  } catch (e) {
    console.error("Decryption failed", e);
    throw new Error("Failed to decrypt metadata. Invalid key or corrupted data.");
  }
}

// Utility: ArrayBuffer to Base64
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

// Utility: Base64 to ArrayBuffer
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

// Helper: Generate a random UUID for client-side IDs
export function generateUUID() {
  return crypto.randomUUID();
}

// ============================================================================
// SPLIT-CODE ZERO-KNOWLEDGE KEY WRAPPING
// ============================================================================

// Constants for PBKDF2 key derivation
const PBKDF2_ITERATIONS = 100000;
const SALT_PREFIX = "VaultBridge-PIN-v1"; // Fixed salt prefix for reproducibility

/**
 * Generate a 6-digit numeric code split into:
 * - lookupId (first 3 digits): Used to find the vault on the server
 * - pin (last 3 digits): Used to unwrap the file key locally
 */
export function generateSplitCode(): { fullCode: string; lookupId: string; pin: string } {
  const fullCode = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 10).toString()
  ).join('');

  return {
    fullCode,
    lookupId: fullCode.slice(0, 3),
    pin: fullCode.slice(3, 6),
  };
}

/**
 * Derive a wrapper key from a 3-digit PIN using PBKDF2.
 * This turns the PIN into a robust AES-KW key for wrapping/unwrapping.
 */
export async function deriveWrapperKey(pin: string): Promise<CryptoKey> {
  // Encode the PIN as UTF-8 bytes for the key material
  const encoder = new TextEncoder();
  const pinBytes = encoder.encode(pin);

  // Import PIN as a CryptoKey for PBKDF2
  const pinKey = await window.crypto.subtle.importKey(
    "raw",
    pinBytes,
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  // Use a fixed salt derived from lookup ID prefix for reproducibility
  // The receiver will use the same PIN to derive the same key
  const salt = encoder.encode(`${SALT_PREFIX}-${pin}`);

  // Derive an AES-KW key using PBKDF2
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    pinKey,
    { name: "AES-KW", length: 256 },
    false, // Not extractable
    ["wrapKey", "unwrapKey"]
  );
}

/**
 * Wrap (encrypt) the file key using the PIN-derived wrapper key.
 * Returns the wrapped key as a Base64 string for storage.
 */
export async function wrapFileKey(fileKey: CryptoKey, pin: string): Promise<string> {
  const wrapperKey = await deriveWrapperKey(pin);

  const wrappedKeyBuffer = await window.crypto.subtle.wrapKey(
    "raw",
    fileKey,
    wrapperKey,
    "AES-KW"
  );

  return arrayBufferToBase64(wrappedKeyBuffer);
}

/**
 * Unwrap (decrypt) the file key using the PIN-derived wrapper key.
 * Returns the original CryptoKey that can be used for file decryption.
 */
export async function unwrapFileKey(wrappedKeyBase64: string, pin: string): Promise<CryptoKey> {
  const wrapperKey = await deriveWrapperKey(pin);
  const wrappedKeyBuffer = base64ToArrayBuffer(wrappedKeyBase64);

  return window.crypto.subtle.unwrapKey(
    "raw",
    wrappedKeyBuffer,
    wrapperKey,
    "AES-KW",
    { name: "AES-GCM", length: 256 },
    true, // Extractable for potential re-export
    ["encrypt", "decrypt"]
  );
}
