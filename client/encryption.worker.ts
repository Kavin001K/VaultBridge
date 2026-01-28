
import init, { compress } from "brotli-wasm";

// Initialize the wasm module
let isInitialized = false;

// Handle messages
self.onmessage = async (e: MessageEvent) => {
    const { type, data, key, id } = e.data;

    try {
        if (!isInitialized) {
            await init; // init is a promise in some bundler setups, or we just import validation
            // actually brotli-wasm default export is the init function usually.
            // If the lint says "Promise has no call signatures", then `init` is a Promise.
            // So we await it.
            isInitialized = true;
        }

        if (type === 'encrypt') {
            const { iv, encryptedData } = await encryptData(data, key);
            (self as any).postMessage({ type: 'success', iv, encryptedData, id }, [iv.buffer, encryptedData]);
        }
        else if (type === 'compress_and_encrypt') {
            // 1. Compress
            const compressedData = compress(new Uint8Array(data as unknown as ArrayBuffer));

            // 2. Encrypt
            const { iv, encryptedData } = await encryptData(compressedData as any, key);

            (self as any).postMessage({
                type: 'success',
                iv,
                encryptedData,
                originalSize: data.byteLength,
                compressedSize: compressedData.byteLength,
                id
            }, [iv.buffer, encryptedData]);
        }
    } catch (error) {
        (self as any).postMessage({ type: 'error', error: String(error), id });
    }
};

async function encryptData(data: BufferSource, key: CryptoKey) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        data
    );
    return { iv, encryptedData };
}
