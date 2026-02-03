import { db } from "../db";
import { emailUsage } from "../../shared/schema";
import { eq, sql } from "drizzle-orm";
import { log } from "../index";
import fs from "fs";
import path from "path";

// Quota Limits
const RESEND_DAILY_LIMIT = 100;
const BREVO_DAILY_LIMIT = 300;

const FALLBACK_FILE_PATH = path.join(process.cwd(), "storage_data", "email_usage.json");

interface DailyUsage {
    date: string;
    resend: number;
    brevo: number;
}

export type EmailProvider = "RESEND" | "BREVO" | null;

/**
 * Get current usage and determine which provider to use.
 * Priority: BREVO (300/day) -> RESEND (100/day)
 */
export async function getEmailProvider(): Promise<EmailProvider> {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const usage = await getUsage(today);

    // Primary: Bravo (Brevo) - 300 emails/day
    if (usage.brevo < BREVO_DAILY_LIMIT) {
        return "BREVO";
    }
    // Backup: Resend - 100 emails/day
    else if (usage.resend < RESEND_DAILY_LIMIT) {
        return "RESEND";
    }
    else {
        log(`[EmailQuota] ALL email quotas exceeded for today (Brevo: ${usage.brevo}, Resend: ${usage.resend}).`, "email");
        return null;
    }
}

/**
 * Increment usage for the specific provider
 */
export async function incrementEmailUsage(provider: "RESEND" | "BREVO") {
    const today = new Date().toISOString().split("T")[0];

    try {
        // Try DB first (Optimistic)
        await db.insert(emailUsage)
            .values({
                date: today,
                resendCount: provider === "RESEND" ? 1 : 0,
                brevoCount: provider === "BREVO" ? 1 : 0
            })
            .onConflictDoUpdate({
                target: emailUsage.date,
                set: {
                    resendCount: provider === "RESEND" ? sql`${emailUsage.resendCount} + 1` : emailUsage.resendCount,
                    brevoCount: provider === "BREVO" ? sql`${emailUsage.brevoCount} + 1` : emailUsage.brevoCount,
                    lastUpdated: new Date()
                }
            });
    } catch (error) {
        // DB failed (likely table missing), use fallback
        await incrementFileUsage(today, provider);
    }
}

async function getUsage(date: string): Promise<DailyUsage> {
    try {
        // Try DB
        const result = await db.select().from(emailUsage).where(eq(emailUsage.date, date)).limit(1);
        if (result.length > 0) {
            return {
                date,
                resend: result[0].resendCount,
                brevo: result[0].brevoCount
            };
        }
        // If DB works but no row, return 0 (or check file sync?)
        // Logic: If DB is connected, trust DB.
        return { date, resend: 0, brevo: 0 };

    } catch (err) {
        // DB Failure -> File Fallback
        return getFileUsage(date);
    }
}

// ==========================================
// FALLBACK FILE STORAGE
// ==========================================

function getFileUsage(date: string): DailyUsage {
    try {
        if (!fs.existsSync(FALLBACK_FILE_PATH)) {
            return { date, resend: 0, brevo: 0 };
        }
        const content = fs.readFileSync(FALLBACK_FILE_PATH, 'utf-8');
        const data = JSON.parse(content);
        if (data.date === date) {
            return data;
        }
        return { date, resend: 0, brevo: 0 };
    } catch (e) {
        return { date, resend: 0, brevo: 0 };
    }
}

async function incrementFileUsage(today: string, provider: "RESEND" | "BREVO") {
    try {
        const current = getFileUsage(today);
        // Reset if day changed (logic handled in getFileUsage return but needs write)
        if (current.date !== today) {
            current.date = today;
            current.resend = 0;
            current.brevo = 0;
        }

        if (provider === "RESEND") current.resend++;
        else current.brevo++;

        // Ensure dir exists
        const dir = path.dirname(FALLBACK_FILE_PATH);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(FALLBACK_FILE_PATH, JSON.stringify(current, null, 2));
    } catch (e) {
        console.error("[EmailQuota] Fallback file write error:", e);
    }
}
