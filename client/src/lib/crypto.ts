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
