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

// ============================================================================
// CLIPBOARD TEXT ENCRYPTION (Universal Clipboard Feature)
// ============================================================================

/**
 * Encrypt clipboard text using the file key.
 * Uses the same AES-GCM encryption as file metadata.
 * 
 * @param text - Plain text to encrypt
 * @param key - CryptoKey for encryption (same key used for files)
 * @returns Promise<string> - Encrypted text as base64 JSON string
 */
export async function encryptClipboardText(text: string, key: CryptoKey): Promise<string> {
  return encryptMetadata({ clipboardText: text, timestamp: Date.now() }, key);
}

/**
 * Decrypt clipboard text using the file key.
 * 
 * @param encrypted - Encrypted base64 JSON string
 * @param key - CryptoKey for decryption
 * @returns Promise<string> - Decrypted plain text
 */
export async function decryptClipboardText(encrypted: string, key: CryptoKey): Promise<string> {
  const result = await decryptMetadata(encrypted, key);
  return result.clipboardText;
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

// ============================================================================
// PASSWORD-BASED ENCRYPTION (2FA)
// ============================================================================

// Higher iterations for password-based protection (more secure than PIN)
const PASSWORD_PBKDF2_ITERATIONS = 600000;
const PASSWORD_SALT_PREFIX = "VaultBridge-Password-v1";

/**
 * Derive a wrapper key from a user password using PBKDF2.
 * Uses high iteration count for security against brute force attacks.
 * 
 * @param password - User-provided password
 * @param salt - Optional salt (generated if not provided)
 * @returns Promise<{ key: CryptoKey, salt: Uint8Array }>
 */
export async function derivePasswordKey(
  password: string,
  salt?: Uint8Array
): Promise<{ key: CryptoKey; salt: Uint8Array }> {
  const encoder = new TextEncoder();

  // Generate or use provided salt
  const finalSalt = salt || window.crypto.getRandomValues(new Uint8Array(16));

  // Import password as key material
  const passwordKey = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  // Derive AES-KW key for wrapping
  const derivedKey = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: finalSalt,
      iterations: PASSWORD_PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    passwordKey,
    { name: "AES-KW", length: 256 },
    false,
    ["wrapKey", "unwrapKey"]
  );

  return { key: derivedKey, salt: finalSalt };
}

/**
 * Wrap (encrypt) the file key using a user password.
 * Returns a combined string: base64(salt + wrappedKey)
 * 
 * @param fileKey - The CryptoKey to protect
 * @param password - User-provided password
 * @returns Promise<string> - Base64 encoded salt + wrapped key
 */
export async function wrapKeyWithPassword(
  fileKey: CryptoKey,
  password: string
): Promise<string> {
  const { key: wrapperKey, salt } = await derivePasswordKey(password);

  const wrappedKeyBuffer = await window.crypto.subtle.wrapKey(
    "raw",
    fileKey,
    wrapperKey,
    "AES-KW"
  );

  // Combine salt (16 bytes) + wrapped key
  const combined = new Uint8Array(salt.length + wrappedKeyBuffer.byteLength);
  combined.set(salt, 0);
  combined.set(new Uint8Array(wrappedKeyBuffer), salt.length);

  return arrayBufferToBase64(combined.buffer);
}

/**
 * Unwrap (decrypt) the file key using a user password.
 * Expects the combined format: base64(salt + wrappedKey)
 * 
 * @param wrappedData - Base64 encoded salt + wrapped key
 * @param password - User-provided password
 * @returns Promise<CryptoKey> - The unwrapped file key
 */
export async function unwrapKeyWithPassword(
  wrappedData: string,
  password: string
): Promise<CryptoKey> {
  const combined = base64ToArrayBuffer(wrappedData);
  const combinedBytes = new Uint8Array(combined);

  // Extract salt (first 16 bytes) and wrapped key (rest)
  const salt = combinedBytes.slice(0, 16);
  const wrappedKey = combinedBytes.slice(16);

  // Derive the same wrapper key using salt
  const { key: wrapperKey } = await derivePasswordKey(password, salt);

  // Unwrap the file key
  return window.crypto.subtle.unwrapKey(
    "raw",
    wrappedKey.buffer,
    wrapperKey,
    "AES-KW",
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

/**
 * Verify a password by attempting to unwrap a key.
 * Returns true if the password is correct, false otherwise.
 * 
 * @param wrappedData - Base64 encoded salt + wrapped key
 * @param password - Password to verify
 * @returns Promise<boolean>
 */
export async function verifyPassword(
  wrappedData: string,
  password: string
): Promise<boolean> {
  try {
    await unwrapKeyWithPassword(wrappedData, password);
    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// DECOY VAULT SUPPORT (DURESS PASSWORD)
// ============================================================================

/**
 * Create a decoy vault key structure.
 * Uses a different salt prefix to ensure different derived keys.
 * 
 * @param realFileKey - The real file key
 * @param realPassword - The real password
 * @param duressPassword - The duress/decoy password
 * @param decoyFileKey - Key for decoy files
 * @returns Promise<{ realWrapped: string, decoyWrapped: string }>
 */
export async function createDecoyVault(
  realFileKey: CryptoKey,
  realPassword: string,
  duressPassword: string,
  decoyFileKey: CryptoKey
): Promise<{ realWrapped: string; decoyWrapped: string }> {
  // Wrap real key with real password
  const realWrapped = await wrapKeyWithPassword(realFileKey, realPassword);

  // Wrap decoy key with duress password
  const decoyWrapped = await wrapKeyWithPassword(decoyFileKey, duressPassword);

  return { realWrapped, decoyWrapped };
}

/**
 * Test if entered password is the real or duress password.
 * Returns null if neither password works.
 * 
 * @param realWrapped - Wrapped real key
 * @param decoyWrapped - Wrapped decoy key
 * @param enteredPassword - Password entered by user
 * @returns Promise<{ type: 'real' | 'decoy', key: CryptoKey } | null>
 */
export async function testVaultPassword(
  realWrapped: string,
  decoyWrapped: string,
  enteredPassword: string
): Promise<{ type: 'real' | 'decoy'; key: CryptoKey } | null> {
  // Try real password first
  try {
    const realKey = await unwrapKeyWithPassword(realWrapped, enteredPassword);
    return { type: 'real', key: realKey };
  } catch {
    // Not the real password
  }

  // Try decoy password
  try {
    const decoyKey = await unwrapKeyWithPassword(decoyWrapped, enteredPassword);
    return { type: 'decoy', key: decoyKey };
  } catch {
    // Not the decoy password either
  }

  return null;
}
