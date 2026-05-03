/**
 * Fallback storage error handling
 * This file contains the FallbackStorage error handler to avoid whitespace issues
 */

import { IStorage } from "./storage_interface";
import { DatabaseStorage } from "./storage"; // Assuming DatabaseStorage is exported
import { MemoryStorage } from "./memory_storage";
import { logger } from "./logger";

export function createFallbackStorage(primary: DatabaseStorage, memory: MemoryStorage) {
    let usingMemory = false;

    async function execute<T>(operation: (s: IStorage) => Promise<T>): Promise<T> {
        if (usingMemory) {
            return operation(memory);
        }

        try {
            return await operation(primary);
        } catch (err: any) {
            // Detect fatal DB errors and switch to memory
            const isFatalDb = err.code === 'ECONNREFUSED'
                || err.code === '57P03'
                || err.code === 'ENOTFOUND'
                || err.message?.includes('connect')
                || err.message?.includes('getaddrinfo');

            if (isFatalDb) {
                const hasIpv6Issue = err.message?.includes('ENETUNREACH') || err.message?.includes('ENOTFOUND') || err.message?.includes('supabase');
                logger.error(
                    { reason: err.message, hasIpv6Issue },
                    "DATABASE UNAVAILABLE — SWITCHING TO MEMORY STORAGE. Data will be lost on restart."
                );
                usingMemory = true;
                return operation(memory);
            }
            throw err;
        }
    }

    return execute;
}
