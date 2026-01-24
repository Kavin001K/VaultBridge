/**
 * Email Service for VaultBridge
 * 
 * Sends vault links via email. NEVER sends file attachments.
 * In production, configure with a real SMTP server or Resend/SendGrid.
 */

import { Resend } from "resend";
import nodemailer from "nodemailer";
import { log } from "../index";

// Resend Configuration (using provided key)
const resend = new Resend("re_Cmka1787_2LURzpiKv1pMVXU3GwziPHny");

// Rate limit tracking per vault
const emailsSentPerVault: Map<string, number> = new Map();
const MAX_EMAILS_PER_VAULT = 3;

// Create transporter (using Ethereal for development)
let transporter: nodemailer.Transporter | null = null;

async function getTransporter(): Promise<nodemailer.Transporter> {
  if (transporter) return transporter;

  // Check for production SMTP config
  if (process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    return transporter;
  }

  // Development: Use Ethereal (fake SMTP)
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  log(`Email dev mode: View sent emails at https://ethereal.email`, "email");
  return transporter;
}

export interface SendVaultEmailInput {
  to: string;
  vaultId: string;
  shortCode: string;
  fullCode?: string; // Client provided full 6-digit code
  expiresAt: Date;
  senderName?: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string;
  error?: string;
}

/**
 * Send vault link via email
 * IMPORTANT: Never sends file attachments - only the link!
 */
export async function sendVaultEmail(input: SendVaultEmailInput): Promise<SendEmailResult> {
  try {
    // Rate limit check
    const sentCount = emailsSentPerVault.get(input.vaultId) || 0;
    if (sentCount >= MAX_EMAILS_PER_VAULT) {
      return {
        success: false,
        error: `Maximum ${MAX_EMAILS_PER_VAULT} emails per vault reached.`,
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.to)) {
      return { success: false, error: "Invalid email address." };
    }

    const transport = await getTransporter();
    const baseUrl = process.env.APP_URL || "http://localhost:5001";
    const accessLink = `${baseUrl}/access`;

    // Use full code if available (client provided), otherwise partial (server knowledge)
    const displayCode = input.fullCode || input.shortCode;

    const expiryFormatted = input.expiresAt.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #09090b;
      color: #fafafa;
      padding: 40px 20px;
      margin: 0;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 16px;
      padding: 32px;
    }
    .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .logo span { color: #22c55e; }
    .code-box {
      background: #09090b;
      border: 2px solid #22c55e;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin: 24px 0;
    }
    .code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 32px;
      font-weight: bold;
      color: #22c55e;
      letter-spacing: 4px;
    }
    .btn {
      display: inline-block;
      background: #22c55e;
      color: #052e16;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 8px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 14px;
    }
    .warning {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 8px;
      padding: 16px;
      margin-top: 24px;
      font-size: 13px;
      color: #fca5a5;
    }
    .footer {
      margin-top: 32px;
      font-size: 12px;
      color: #71717a;
      text-align: center;
    }
    .help-note {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #27272a;
      font-weight: bold;
      color: #22c55e;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">VAULT<span>BRIDGE</span></div>
    
    ${input.senderName ? `<p>${input.senderName} shared encrypted files with you.</p>` : `<p>Someone shared encrypted files with you.</p>`}
    
    <div class="code-box">
      <p style="margin: 0 0 8px 0; font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 2px;">Access Code</p>
      <div class="code">${displayCode}</div>
    </div>
    
    <p style="text-align: center;">
      <a href="${accessLink}" class="btn">🔓 Access Files</a>
    </p>
    
    <div class="warning">
      <strong>⚠️ This link expires ${expiryFormatted}</strong><br>
      Files are end-to-end encrypted and will be permanently deleted after expiration.
    </div>
    
    <div class="footer">
      VaultBridge — Zero-Knowledge Encrypted File Transfer<br>
      This email contains NO attachments for your security.
      <div class="help-note">
        Need help? Just reply to this email to contact support.
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Send via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.SMTP_FROM || 'VaultBridge <delivery@acedigital.space>',
      to: [input.to],
      replyTo: process.env.CONTACT_EMAIL || 'kavinbalaji365@icloud.com',
      subject: `${input.senderName || "Someone"} shared encrypted files with you`,
      text: `
VaultBridge - Encrypted File Transfer

${input.senderName || "Someone"} shared encrypted files with you.

Access Code: ${displayCode}
Direct Link: ${accessLink}

This link expires: ${expiryFormatted}

Files are end-to-end encrypted. This email contains NO attachments for your security.

Need help? Just reply to this email to contact support.
      `,
      html,
    });

    if (error) {
      log(`Resend Error (Vault Email): ${error.message}`, "email");
      return { success: false, error: error.message };
    }

    // Track email sent
    emailsSentPerVault.set(input.vaultId, sentCount + 1);

    log(`Email sent to ${input.to} for vault ${input.shortCode}`, "email");

    return {
      success: true,
      messageId: data?.id,
    };
  } catch (error) {
    log(`Failed to send email: ${error}`, "email");
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}


export interface SendDirectEmailInput {
  to: string;
  subject: string;
  text: string;
  files: {
    filename: string;
    content: Buffer;
  }[];
}

/**
 * Send files directly via email attachment (Transient Mode)
 * The files exist only in memory and are relayed to Resend.
 */
export async function sendDirectAttachment(input: SendDirectEmailInput): Promise<boolean> {
  try {
    const { to, subject, text, files } = input;

    const data = await resend.emails.send({
      from: process.env.SMTP_FROM || 'VaultBridge <delivery@acedigital.space>',
      to: [to],
      replyTo: process.env.CONTACT_EMAIL || 'kavinbalaji365@icloud.com',
      subject: subject,
      html: `
            <div style="font-family: sans-serif; color: #333;">
                <h2>File Received via VaultBridge</h2>
                <p>${text}</p>
                <hr />
                <p style="font-size: 12px; color: #666;">
                    <strong>Security Notice:</strong> The files were sent directly from the sender's browser. 
                    VaultBridge did not store these files. They were relayed through secure memory.
                </p>
                <p style="font-size: 13px; margin-top: 20px; font-weight: bold; color: #22c55e;">
                    Need help? Just reply to this email to contact support.
                </p>
            </div>
            `,
      attachments: files,
    });

    if (data.error) {
      log(`Resend Error: ${data.error.message}`, "email");
      return false;
    }

    log(`Direct email sent to ${to} with ${files.length} attachment(s)`, "email");
    return true;
  } catch (error) {
    log(`Failed to send direct email: ${error}`, "email");
    return false;
  }
}

/**
 * Get remaining email quota for a vault
 */
export function getRemainingEmailQuota(vaultId: string): number {
  const sent = emailsSentPerVault.get(vaultId) || 0;
  return Math.max(0, MAX_EMAILS_PER_VAULT - sent);
}
