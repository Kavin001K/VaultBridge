import { db } from "../db";
import { emailUsage } from "../../shared/schema";
import { eq, sql } from "drizzle-orm";
import { log } from "../index";
import fs from "fs";
import path from "path";

// Quota Limits
const RESEND_DAILY_LIMIT = 100;
const BREVO_DAILY_LIMIT = 300;
const MSG91_DAILY_LIMIT = 500;

const FALLBACK_FILE_PATH = path.join(process.cwd(), "storage_data", "email_usage.json");

interface DailyUsage {
    date: string;
    resend: number;
    brevo: number;
    msg91: number;
}

export type EmailProvider = "RESEND" | "BREVO" | "MSG91" | null;

/**
 * Get current usage and determine which provider to use.
 * Priority: BREVO (300/day) -> RESEND (100/day) -> MSG91 (500/day)
 */
export async function getEmailProvider(): Promise<EmailProvider> {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const usage = await getUsage(today);

    // 1. Primary: Bravo (Brevo) - 300 emails/day
    if (usage.brevo < BREVO_DAILY_LIMIT) {
        return "BREVO";
    }
    // 2. Secondary: Resend - 100 emails/day
    else if (usage.resend < RESEND_DAILY_LIMIT) {
        return "RESEND";
    }
    // 3. Tertiary: MSG91 - 500 emails/day (as requested, use last)
    else if (usage.msg91 < MSG91_DAILY_LIMIT) {
        return "MSG91";
    }
    else {
        log(`[EmailQuota] ALL email quotas exceeded for today (Brevo: ${usage.brevo}, Resend: ${usage.resend}, MSG91: ${usage.msg91}).`, "email");
        return null;
    }
}

/**
 * Increment usage for the specific provider
 */
export async function incrementEmailUsage(provider: "RESEND" | "BREVO" | "MSG91") {
    const today = new Date().toISOString().split("T")[0];

    try {
        // Try DB first (Optimistic)
        await db.insert(emailUsage)
            .values({
                date: today,
                resendCount: provider === "RESEND" ? 1 : 0,
                brevoCount: provider === "BREVO" ? 1 : 0,
                msg91Count: provider === "MSG91" ? 1 : 0
            })
            .onConflictDoUpdate({
                target: emailUsage.date,
                set: {
                    resendCount: provider === "RESEND" ? sql`${emailUsage.resendCount} + 1` : emailUsage.resendCount,
                    brevoCount: provider === "BREVO" ? sql`${emailUsage.brevoCount} + 1` : emailUsage.brevoCount,
                    msg91Count: provider === "MSG91" ? sql`${emailUsage.msg91Count} + 1` : emailUsage.msg91Count,
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
                brevo: result[0].brevoCount,
                msg91: result[0].msg91Count
            };
        }
        // If DB works but no row, return 0 (or check file sync?)
        // Logic: If DB is connected, trust DB.
        return { date, resend: 0, brevo: 0, msg91: 0 };

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
            return { date, resend: 0, brevo: 0, msg91: 0 };
        }
        const content = fs.readFileSync(FALLBACK_FILE_PATH, 'utf-8');
        const data = JSON.parse(content);
        if (data.date === date) {
            // Ensure schema compat for old files
            return {
                date,
                resend: data.resend || 0,
                brevo: data.brevo || 0,
                msg91: data.msg91 || 0
            };
        }
        return { date, resend: 0, brevo: 0, msg91: 0 };
    } catch (e) {
        return { date, resend: 0, brevo: 0, msg91: 0 };
    }
}

async function incrementFileUsage(today: string, provider: "RESEND" | "BREVO" | "MSG91") {
    try {
        const current = getFileUsage(today);
        // Reset if day changed (logic handled in getFileUsage return but needs write)
        if (current.date !== today) {
            current.date = today;
            current.resend = 0;
            current.brevo = 0;
            current.msg91 = 0;
        }

        if (provider === "RESEND") current.resend++;
        else if (provider === "BREVO") current.brevo++;
        else if (provider === "MSG91") current.msg91++;

        // Ensure dir exists
        const dir = path.dirname(FALLBACK_FILE_PATH);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(FALLBACK_FILE_PATH, JSON.stringify(current, null, 2));
    } catch (e) {
        console.error("[EmailQuota] Fallback file write error:", e);
    }
}
