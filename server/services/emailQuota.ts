import { storage } from "../storage";
import { log } from "../index";

// Quota Limits (Daily)
const RESEND_DAILY_LIMIT = 100;
const BREVO_DAILY_LIMIT = 300;
const MSG91_DAILY_LIMIT = 500;
const ENABLE_MSG91 = process.env.ENABLE_MSG91 === "true";

interface DailyUsage {
    date: string;
    resend: number;
    brevo: number;
    msg91: number;
}

export type EmailProvider = "RESEND" | "BREVO" | "MSG91" | null;

/**
 * Get current usage and determine which provider to use.
 * Priority: BREVO (300/day) -> RESEND (100/day) -> MSG91 (500/day, optional)
 */
export async function getEmailProvider(): Promise<EmailProvider> {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const usageData = await storage.getEmailUsage(today);
    
    const usage: DailyUsage = {
        date: today,
        resend: usageData.resendCount || 0,
        brevo: usageData.brevoCount || 0,
        msg91: usageData.msg91Count || 0
    };

    const hasBrevo = Boolean(process.env.BRAVO_API_KEY);
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    const hasMsg91 = ENABLE_MSG91 && Boolean(process.env.MSG91_AUTH_KEY);

    // 1. Primary: Brevo - 300 emails/day
    if (hasBrevo && usage.brevo < BREVO_DAILY_LIMIT) {
        return "BREVO";
    }
    // 2. Secondary: Resend - 100 emails/day
    else if (hasResend && usage.resend < RESEND_DAILY_LIMIT) {
        return "RESEND";
    }
    // 3. Optional fallback: MSG91
    else if (hasMsg91 && usage.msg91 < MSG91_DAILY_LIMIT) {
        return "MSG91";
    }
    else {
        log(
          `[EmailQuota] No available email provider. Quota usage (Brevo: ${usage.brevo}/${BREVO_DAILY_LIMIT}, Resend: ${usage.resend}/${RESEND_DAILY_LIMIT}, MSG91: ${usage.msg91}/${MSG91_DAILY_LIMIT}).`,
          "email"
        );
        return null;
    }
}

/**
 * Increment usage for the specific provider
 */
export async function incrementEmailUsage(provider: "RESEND" | "BREVO" | "MSG91") {
    const today = new Date().toISOString().split("T")[0];
    const providerLower = provider.toLowerCase() as "resend" | "brevo" | "msg91";
    await storage.incrementEmailUsage(today, providerLower);
}
