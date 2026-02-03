/**
 * Email Service for VaultBridge
 * 
 * Premium branded email templates with dark theme aesthetic.
 * Sends vault links or direct attachments via Resend.
 */

import { Resend } from "resend";
import nodemailer from "nodemailer";
import { log } from "../index";

// Resend Configuration
const resend = new Resend(process.env.RESEND_API_KEY || "re_Cmka1787_2LURzpiKv1pMVXU3GwziPHny");

// Rate limit tracking per vault
const emailsSentPerVault: Map<string, number> = new Map();
const MAX_EMAILS_PER_VAULT = 3;

// Create transporter (using Ethereal for development)
let transporter: nodemailer.Transporter | null = null;

async function getTransporter(): Promise<nodemailer.Transporter> {
  if (transporter) return transporter;

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

  log(`Email dev mode: View at https://ethereal.email`, "email");
  return transporter;
}

// ============================================
// EMAIL TEMPLATE HELPERS
// ============================================

const getEmailStyles = () => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body { 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(180deg, #0a0a0f 0%, #0f0f15 100%);
    color: #e4e4e7;
    padding: 40px 20px;
    margin: 0;
    min-height: 100vh;
  }
  
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .container {
    background: linear-gradient(145deg, #18181b 0%, #1f1f23 100%);
    border: 1px solid #27272a;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }
  
  .header {
    text-align: center;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  
  .logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  
  .logo-vault { color: #fafafa; }
  .logo-bridge { color: #10b981; }
  
  .logo-icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-radius: 14px;
    margin-bottom: 16px;
    line-height: 48px;
    font-size: 24px;
    text-align: center;
  }
  
  .tagline {
    font-size: 13px;
    color: #71717a;
    margin-top: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .title {
    font-size: 24px;
    font-weight: 700;
    color: #fafafa;
    margin-bottom: 12px;
    text-align: center;
  }
  
  .subtitle {
    color: #a1a1aa;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 32px;
  }
  
  .code-container {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    border: 2px solid rgba(16, 185, 129, 0.3);
    border-radius: 16px;
    padding: 28px;
    text-align: center;
    margin: 24px 0;
  }
  
  .code-label {
    font-size: 11px;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 12px;
    font-weight: 600;
  }
  
  .code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 42px;
    font-weight: 700;
    color: #10b981;
    letter-spacing: 8px;
    text-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
  }
  
  .btn-container {
    text-align: center;
    margin: 32px 0;
  }
  
  .btn {
    display: inline-block;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #052e16 !important;
    text-decoration: none;
    padding: 16px 40px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.4);
    transition: transform 0.2s;
  }
  
  .btn:hover {
    transform: translateY(-2px);
  }
  
  .info-grid {
    display: flex;
    gap: 16px;
    margin: 24px 0;
  }
  
  .info-card {
    flex: 1;
    background: rgba(0,0,0,0.3);
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
  }
  
  .info-icon {
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .info-label {
    font-size: 11px;
    color: #71717a;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  
  .info-value {
    font-size: 14px;
    font-weight: 600;
    color: #fafafa;
  }
  
  .warning-box {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 12px;
    padding: 20px;
    margin-top: 24px;
  }
  
  .warning-title {
    color: #fbbf24;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .warning-text {
    color: #a1a1aa;
    font-size: 13px;
    line-height: 1.5;
  }
  
  .security-badge {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 12px;
    padding: 20px;
    margin-top: 24px;
    text-align: center;
  }
  
  .security-title {
    color: #10b981;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .security-text {
    color: #71717a;
    font-size: 12px;
    line-height: 1.5;
  }
  
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #27272a 50%, transparent 100%);
    margin: 32px 0;
  }
  
  .footer {
    text-align: center;
    padding-top: 24px;
  }
  
  .footer-logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 600;
    color: #52525b;
    margin-bottom: 12px;
  }
  
  .footer-text {
    font-size: 12px;
    color: #52525b;
    line-height: 1.6;
  }
  
  .footer-link {
    color: #10b981;
    text-decoration: none;
    font-weight: 500;
  }
  
  .feature-list {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 24px 0;
    flex-wrap: wrap;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #a1a1aa;
  }
  
  .feature-icon {
    color: #10b981;
  }
  
  .attachment-list {
    background: rgba(0,0,0,0.2);
    border: 1px solid #27272a;
    border-radius: 12px;
    padding: 20px;
    margin: 24px 0;
  }
  
  .attachment-header {
    font-size: 12px;
    color: #71717a;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
    font-weight: 600;
  }
  
  .attachment-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: rgba(255,255,255,0.02);
    border-radius: 8px;
    margin-bottom: 8px;
  }
  
  .attachment-item:last-child {
    margin-bottom: 0;
  }
  
  .attachment-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  
  .attachment-name {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: #fafafa;
  }
  
  .attachment-size {
    font-size: 12px;
    color: #71717a;
  }
`;

const getEmailHeader = () => `
  <div class="header">
    <div class="logo-icon">🔐</div>
    <div class="logo">
      <span class="logo-vault">VAULT</span><span class="logo-bridge">BRIDGE</span>
    </div>
    <div class="tagline">Zero-Knowledge File Transfer</div>
  </div>
`;

const getEmailFooter = () => `
  <div class="divider"></div>
  <div class="footer">
    <div class="footer-logo">VAULTBRIDGE</div>
    <div class="footer-text">
      End-to-end encrypted file transfer<br>
      <a href="https://vaultbridge.io" class="footer-link">vaultbridge.io</a>
    </div>
  </div>
`;

// ============================================
// INTERFACES
// ============================================

export interface SendVaultEmailInput {
  to: string;
  vaultId: string;
  shortCode: string;
  fullCode?: string;
  expiresAt: Date;
  senderName?: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string;
  error?: string;
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

// ============================================
// VAULT ACCESS EMAIL
// ============================================

// ... imports
import { getEmailProvider, incrementEmailUsage } from "./emailQuota";

// ... existing code ...

// ============================================
// BREVO (BRAVO) API CLIENT
// ============================================

interface BrevoEmailInput {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  senderName?: string;
  replyTo?: string;
  attachments?: { name: string; content: string }[]; // Base64 content
}

async function sendViaBrevo(input: BrevoEmailInput): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const apiKey = process.env.BRAVO_API_KEY;
  if (!apiKey) return { success: false, error: "Brevo API Key missing" };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: {
          name: input.senderName || "VaultBridge",
          email: process.env.SMTP_FROM_EMAIL || "delivery@acedigital.space" // Extract email from "Name <email>" if needed, but Brevo prefers strict struct. 
          // Note: SMTP_FROM usually is "Name <email>". Let's handle clean extraction or fallback.
        },
        to: [{ email: input.to }],
        replyTo: input.replyTo ? { email: input.replyTo } : undefined,
        subject: input.subject,
        htmlContent: input.htmlContent,
        textContent: input.textContent,
        attachment: input.attachments // Brevo expects {name, content(base64)}
      })
    });

    if (!response.ok) {
      const err = await response.json();
      return { success: false, error: JSON.stringify(err) };
    }

    const data = await response.json();
    return { success: true, messageId: data.messageId };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Unknown Brevo error" };
  }
}

// ============================================
// VAULT ACCESS EMAIL
// ============================================

export async function sendVaultEmail(input: SendVaultEmailInput): Promise<SendEmailResult> {
  try {
    const sentCount = emailsSentPerVault.get(input.vaultId) || 0;
    if (sentCount >= MAX_EMAILS_PER_VAULT) {
      return { success: false, error: `Maximum ${MAX_EMAILS_PER_VAULT} emails per vault reached.` };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.to)) {
      return { success: false, error: "Invalid email address." };
    }

    // Determine Provider
    const provider = await getEmailProvider();
    if (!provider) {
      return { success: false, error: "Daily email limit reached. Please try again tomorrow." };
    }

    const baseUrl = process.env.APP_URL || "https://vaultbridge.io";
    const accessLink = `${baseUrl}/access`;
    const displayCode = input.fullCode || input.shortCode;

    const expiryFormatted = input.expiresAt.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <style>${getEmailStyles()}</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      ${getEmailHeader()}
      
      <h1 class="title">Secure Files Shared With You</h1>
      <p class="subtitle">
        ${input.senderName ? `<strong>${input.senderName}</strong> has sent you encrypted files via VaultBridge.` : `Someone has sent you encrypted files via VaultBridge.`}
        Use the access code below to decrypt and download.
      </p>
      
      <div class="code-container">
        <div class="code-label">🔑 Your Access Code</div>
        <div class="code">${displayCode}</div>
      </div>
      
      <div class="btn-container">
        <a href="${accessLink}" class="btn">🔓 Access Your Files</a>
      </div>
      
      <div class="warning-box">
        <div class="warning-title">⏱️ Time Sensitive</div>
        <div class="warning-text">Expires on <strong>${expiryFormatted}</strong>.</div>
      </div>
      
      ${getEmailFooter()}
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
VAULTBRIDGE - Secure File Transfer
ACCESS CODE: ${displayCode}
ACCESS LINK: ${accessLink}
Expires: ${expiryFormatted}
    `;

    // SEND LOGIC
    let result: SendEmailResult;

    if (provider === "RESEND") {
      const { data, error } = await resend.emails.send({
        from: process.env.SMTP_FROM || 'VaultBridge <delivery@acedigital.space>',
        to: [input.to],
        replyTo: process.env.CONTACT_EMAIL || 'kavinbalaji365@icloud.com',
        subject: `🔐 ${input.senderName || "Someone"} shared encrypted files with you`,
        text: textContent,
        html,
      });

      if (error) {
        log(`Resend Error: ${error.message}`, "email");
        // Failover to Brevo immediately if Resend fails? 
        // The prompt says switch on LIMIT. But error handling is good.
        // Let's strictly follow quota logic first to avoid double counting if error is not quota related.
        return { success: false, error: error.message };
      }
      result = { success: true, messageId: data?.id };
    } else {
      // BREVO
      const res = await sendViaBrevo({
        to: input.to,
        subject: `🔐 ${input.senderName || "Someone"} shared encrypted files with you`,
        htmlContent: html,
        textContent: textContent,
        senderName: "VaultBridge",
        replyTo: process.env.CONTACT_EMAIL || 'kavinbalaji365@icloud.com'
      });

      if (!res.success) {
        return { success: false, error: res.error };
      }
      result = { success: true, messageId: res.messageId };
    }

    // Update Quota and Limit
    await incrementEmailUsage(provider);
    emailsSentPerVault.set(input.vaultId, sentCount + 1);
    log(`Vault email sent to ${input.to} via ${provider}`, "email");

    return result;

  } catch (error) {
    log(`Failed to send vault email: ${error}`, "email");
    return { success: false, error: error instanceof Error ? error.message : "Failed to send email" };
  }
}

// ============================================
// DIRECT ATTACHMENT EMAIL (Zero-Knowledge Relay)
// ============================================

export async function sendDirectAttachment(input: SendDirectEmailInput): Promise<boolean> {
  try {
    const { to, subject, text, files } = input;

    // Determine Provider
    const provider = await getEmailProvider();
    if (!provider) {
      log(`Direct email blocked: Quota exceeded`, "email");
      return false;
    }

    const totalSize = files.reduce((acc, f) => acc + f.content.length, 0);
    const formatSize = (bytes: number) => {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const attachmentListHtml = files.map(f => `
      <div class="attachment-item">
        <div class="attachment-icon">📄</div>
        <div class="attachment-name">${f.filename}</div>
        <div class="attachment-size">${formatSize(f.content.length)}</div>
      </div>
    `).join('');

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <style>${getEmailStyles()}</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      ${getEmailHeader()}
      
      <h1 class="title">📬 Files Delivered to You</h1>
      <p class="subtitle">Zero-Knowledge Relay Transfer</p>
      
      ${text ? `<div style="background:rgba(255,255,255,0.05);padding:15px;border-radius:8px;margin:20px 0;">${text}</div>` : ''}
      
      <div class="attachment-list">
        <div class="attachment-header">📎 ${files.length} Attachments</div>
        ${attachmentListHtml}
      </div>
      
      ${getEmailFooter()}
    </div>
  </div>
</body>
</html>
    `;

    const textPayload = `
VAULTBRIDGE - Direct Relay
You received ${files.length} file(s).
${text ? `\nMESSAGE: ${text}\n` : ''}
ATTACHMENTS:
${files.map(f => `• ${f.filename}`).join('\n')}
    `;

    if (provider === "RESEND") {
      const data = await resend.emails.send({
        from: process.env.SMTP_FROM || 'VaultBridge <delivery@acedigital.space>',
        to: [to],
        replyTo: process.env.CONTACT_EMAIL || 'kavinbalaji365@icloud.com',
        subject: `📬 ${subject}`,
        text: textPayload,
        html,
        attachments: files,
      });

      if (data.error) {
        log(`Resend Error (Direct): ${data.error.message}`, "email");
        return false;
      }
    } else {
      // BREVO
      // Prepare attachments for Brevo (Base64)
      const brevoAttachments = files.map(f => ({
        name: f.filename,
        content: f.content.toString('base64')
      }));

      const res = await sendViaBrevo({
        to,
        subject: `📬 ${subject}`,
        htmlContent: html,
        textContent: textPayload,
        senderName: "VaultBridge",
        attachments: brevoAttachments
      });

      if (!res.success) {
        log(`Brevo Error (Direct): ${res.error}`, "email");
        return false;
      }
    }

    await incrementEmailUsage(provider);
    log(`Direct email sent to ${to} via ${provider}`, "email");
    return true;
  } catch (error) {
    log(`Failed to send direct email: ${error}`, "email");
    return false;
  }
}

// ============================================
// UTILITIES
// ============================================

export function getRemainingEmailQuota(vaultId: string): number {
  const sent = emailsSentPerVault.get(vaultId) || 0;
  return Math.max(0, MAX_EMAILS_PER_VAULT - sent);
}
