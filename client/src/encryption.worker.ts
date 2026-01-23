/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

// Web Worker for handling expensive encryption/decryption tasks off the main thread

type WorkerMessage =
    | { type: 'encrypt'; data: ArrayBuffer; key: CryptoKey; id: number }
    | { type: 'decrypt'; data: ArrayBuffer; iv: Uint8Array; key: CryptoKey; id: number };

type WorkerResponse =
    | { type: 'encrypt_success'; id: number; iv: Uint8Array; encryptedData: ArrayBuffer }
    | { type: 'decrypt_success'; id: number; decryptedData: ArrayBuffer }
    | { type: 'error'; id: number; error: string };

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
    const { type, id } = e.data;

    try {
        if (type === 'encrypt') {
            const { data, key } = e.data;
            const iv = crypto.getRandomValues(new Uint8Array(12));

            const encrypted = await crypto.subtle.encrypt(
                { name: "AES-GCM", iv },
                key,
                data
            );

            // Transfer buffers to avoid cloning overhead
            const response: WorkerResponse = {
                type: 'encrypt_success',
                id,
                iv,
                encryptedData: encrypted
            };

            self.postMessage(response, [encrypted, iv.buffer]);

        } else if (type === 'decrypt') {
            const { data, iv, key } = e.data;

            const decrypted = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv },
                key,
                data
            );

            const response: WorkerResponse = {
                type: 'decrypt_success',
                id,
                decryptedData: decrypted
            };

            self.postMessage(response, [decrypted]);
        }
    } catch (err: any) {
        self.postMessage({
            type: 'error',
            id,
            error: err.message || 'Unknown crypto error'
        });
    }
};
