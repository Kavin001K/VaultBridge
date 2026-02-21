import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type VaultRecordType = "vault" | "clipboard";
export type VaultRecordAction = "sent" | "received";
export type VaultRecordStatus = "active" | "expired" | "exhausted" | "burned";

export interface VaultHistoryRecord {
    id: string;
    type: VaultRecordType;
    action: VaultRecordAction;
    accessCode: string;
    vaultId?: string;

    // File info
    fileNames: string[];
    fileCount: number;
    totalSize: number;

    // Clipboard info
    hasClipboard: boolean;
    clipboardPreview?: string;

    // Limits & lifecycle
    createdAt: number;       // ms since epoch
    expiresAt: number;       // ms since epoch
    maxDownloads: number;
    downloadCount: number;

    // Email
    lastEmailedTo?: string;
    lastEmailedAt?: number;

    // Status
    status: VaultRecordStatus;

    // Device metadata
    device: DeviceMeta;
}

export interface DeviceMeta {
    browser: string;
    os: string;
    isMobile: boolean;
    language: string;
    screenWidth: number;
    timestamp: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STORAGE_KEY = "vaultbridge_history";
const MAX_RECORDS = 25; // keep last 25

// ─── Helpers ──────────────────────────────────────────────────────────────────
function detectDevice(): DeviceMeta {
    const ua = navigator.userAgent;
    let browser = "Unknown";
    let os = "Unknown";

    // Browser detection
    if (ua.includes("Firefox/")) browser = "Firefox";
    else if (ua.includes("Edg/")) browser = "Edge";
    else if (ua.includes("OPR/") || ua.includes("Opera")) browser = "Opera";
    else if (ua.includes("Chrome/") && !ua.includes("Edg/")) browser = "Chrome";
    else if (ua.includes("Safari/") && !ua.includes("Chrome/")) browser = "Safari";

    // OS detection
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);

    return {
        browser,
        os,
        isMobile,
        language: navigator.language || "en",
        screenWidth: window.innerWidth,
        timestamp: Date.now(),
    };
}

function loadRecords(): VaultHistoryRecord[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as VaultHistoryRecord[];
    } catch {
        return [];
    }
}

function saveRecords(records: VaultHistoryRecord[]) {
    try {
        // Cap + sort by newest first
        const sorted = [...records].sort((a, b) => b.createdAt - a.createdAt).slice(0, MAX_RECORDS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
    } catch (e) {
        console.error("[VaultHistory] Failed to save:", e);
    }
}

function computeStatus(record: VaultHistoryRecord): VaultRecordStatus {
    if (record.status === "burned") return "burned";
    if (Date.now() >= record.expiresAt) return "expired";
    if (record.maxDownloads > 0 && record.downloadCount >= record.maxDownloads) return "exhausted";
    return "active";
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useVaultHistory() {
    const [records, setRecords] = useState<VaultHistoryRecord[]>([]);

    // Load on mount
    useEffect(() => {
        const loaded = loadRecords().map(r => ({ ...r, status: computeStatus(r) }));
        setRecords(loaded);
    }, []);

    // Refresh statuses every 30s for live countdown accuracy
    useEffect(() => {
        const interval = setInterval(() => {
            setRecords(prev => prev.map(r => ({ ...r, status: computeStatus(r) })));
        }, 30_000);
        return () => clearInterval(interval);
    }, []);

    const addRecord = useCallback((
        partial: Omit<VaultHistoryRecord, "id" | "device" | "status">
    ) => {
        const newRecord: VaultHistoryRecord = {
            ...partial,
            id: `vh_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            device: detectDevice(),
            status: "active",
        };

        setRecords(prev => {
            // De-duplicate by accessCode + action (replace old record for same vault)
            const filtered = prev.filter(
                r => !(r.accessCode === newRecord.accessCode && r.action === newRecord.action)
            );
            const updated = [newRecord, ...filtered];
            saveRecords(updated);
            return updated;
        });

        return newRecord.id;
    }, []);

    const updateRecord = useCallback((
        accessCode: string,
        action: VaultRecordAction,
        updates: Partial<Pick<VaultHistoryRecord, "downloadCount" | "lastEmailedTo" | "lastEmailedAt" | "status" | "clipboardPreview" | "hasClipboard">>
    ) => {
        setRecords(prev => {
            const updated = prev.map(r => {
                if (r.accessCode === accessCode && r.action === action) {
                    const merged = { ...r, ...updates };
                    return { ...merged, status: computeStatus(merged) };
                }
                return r;
            });
            saveRecords(updated);
            return updated;
        });
    }, []);

    const removeRecord = useCallback((id: string) => {
        setRecords(prev => {
            const updated = prev.filter(r => r.id !== id);
            saveRecords(updated);
            return updated;
        });
    }, []);

    const clearAll = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setRecords([]);
    }, []);

    // Derived views
    const activeRecords = records.filter(r => r.status === "active");
    const sentRecords = records.filter(r => r.action === "sent");
    const receivedRecords = records.filter(r => r.action === "received");
    const clipboardRecords = records.filter(r => r.type === "clipboard");

    return {
        records,
        activeRecords,
        sentRecords,
        receivedRecords,
        clipboardRecords,
        addRecord,
        updateRecord,
        removeRecord,
        clearAll,
    };
}
