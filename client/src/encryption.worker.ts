// Web Worker for handling expensive encryption/decryption tasks off the main thread
import { gzip, gunzip } from 'fflate';

type WorkerMessage =
    | { type: 'encrypt'; data: ArrayBuffer; key: CryptoKey; id: number }
    | { type: 'compress_and_encrypt'; data: ArrayBuffer; key: CryptoKey; id: number }
    | { type: 'decrypt'; data: ArrayBuffer; iv: Uint8Array; key: CryptoKey; id: number; isCompressed?: boolean };

type WorkerResponse =
    | { type: 'encrypt_success'; id: number; iv: Uint8Array; encryptedData: ArrayBuffer; compressedSize?: number; originalSize?: number }
    | { type: 'decrypt_success'; id: number; decryptedData: ArrayBuffer }
    | { type: 'error'; id: number; error: string };

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
    const { type, id } = e.data;

    try {
        if (type === 'encrypt' || type === 'compress_and_encrypt') {
            const { data, key } = e.data;
            const originalSize = data.byteLength;

            // Cast to ArrayBuffer to satisfy TS strictness
            let dataToEncrypt = new Uint8Array(data as ArrayBuffer);
            let compressedSize = undefined;

            if (type === 'compress_and_encrypt') {
                dataToEncrypt = await new Promise<Uint8Array>((resolve, reject) => {
                    gzip(new Uint8Array(data as ArrayBuffer), { level: 6 }, (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    });
                });
                compressedSize = dataToEncrypt.byteLength;
            }

            const iv = crypto.getRandomValues(new Uint8Array(12));

            const encrypted = await crypto.subtle.encrypt(
                { name: "AES-GCM", iv },
                key,
                dataToEncrypt
            );

            // Transfer buffers to avoid cloning overhead
            const response: WorkerResponse = {
                type: 'encrypt_success',
                id,
                iv,
                encryptedData: encrypted,
                compressedSize,
                originalSize
            };

            (self as any).postMessage(response, [encrypted, iv.buffer]);

        } else if (type === 'decrypt') {
            const { data, iv, key } = e.data;
            const isCompressed = (e.data as any).isCompressed;

            let decrypted = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv },
                key,
                data as ArrayBuffer
            );

            if (isCompressed) {
                decrypted = await new Promise<ArrayBuffer>((resolve, reject) => {
                    gunzip(new Uint8Array(decrypted), (err, result) => {
                        if (err) reject(err);
                        else resolve(result.buffer); // Convert back to ArrayBuffer
                    });
                });
            }

            const response: WorkerResponse = {
                type: 'decrypt_success',
                id,
                decryptedData: decrypted
            };

            // Transferrable if ArrayBuffer
            if (decrypted instanceof ArrayBuffer) {
                (self as any).postMessage(response, [decrypted]);
            } else {
                // Should be ArrayBuffer from gunzip result.buffer
                (self as any).postMessage(response, [decrypted]);
            }
        }
    } catch (err: any) {
        console.error(err);
        (self as any).postMessage({
            type: 'error',
            id,
            error: err.message || 'Unknown crypto error'
        });
    }
};
