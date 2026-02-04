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
    background: #0a0a0f;
    color: #ffffff;
    padding: 40px 20px;
    margin: 0;
    min-height: 100vh;
  }
  
  .wrapper {
    max-width: 580px;
    margin: 0 auto;
  }
  
  .container {
    background: linear-gradient(165deg, #1a1a1f 0%, #141417 100%);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  
  .logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
  }
  
  .logo-vault { color: #ffffff; }
  .logo-bridge { color: #10b981; }
  
  .tagline {
    font-size: 12px;
    color: #6b7280;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-weight: 500;
  }
  
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: -0.3px;
  }
  
  .subtitle {
    color: #9ca3af;
    font-size: 15px;
    line-height: 1.7;
    text-align: center;
    margin-bottom: 32px;
  }
  
  .message-box {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 14px;
    padding: 20px 24px;
    margin: 24px 0 28px 0;
  }
  
  .message-label {
    font-size: 11px;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .message-text {
    color: #e5e7eb;
    font-size: 14px;
    line-height: 1.65;
    font-weight: 400;
  }
  
  .code-container {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.04) 100%);
    border: 2px solid rgba(16, 185, 129, 0.25);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    margin: 28px 0;
  }
  
  .code-label {
    font-size: 11px;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 14px;
    font-weight: 600;
  }
  
  .code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 38px;
    font-weight: 700;
    color: #10b981;
    letter-spacing: 6px;
    text-shadow: 0 0 40px rgba(16, 185, 129, 0.35);
  }
  
  .btn-container {
    text-align: center;
    margin: 32px 0;
  }
  
  .btn {
    display: inline-block;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #022c1e !important;
    text-decoration: none;
    padding: 16px 44px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.3px;
    box-shadow: 0 12px 35px -8px rgba(16, 185, 129, 0.5);
  }
  
  .warning-box {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.04) 100%);
    border: 1px solid rgba(245, 158, 11, 0.2);
    border-radius: 12px;
    padding: 18px 22px;
    margin-top: 28px;
  }
  
  .warning-title {
    color: #fbbf24;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .warning-text {
    color: #d1d5db;
    font-size: 13px;
    line-height: 1.5;
  }
  
  .attachment-list {
    background: linear-gradient(145deg, rgba(16, 185, 129, 0.06) 0%, rgba(0, 0, 0, 0.35) 100%);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 18px;
    padding: 28px;
    margin: 32px 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  .attachment-header {
    font-size: 11px;
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(16, 185, 129, 0.12);
  }
  
  .attachment-count {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #022c1e;
    font-size: 10px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
  }
  
  .attachment-item {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    margin-bottom: 12px;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  
  .attachment-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #10b981 0%, #059669 100%);
    border-radius: 3px 0 0 3px;
  }
  
  .attachment-item:last-child {
    margin-bottom: 0;
  }
  
  .attachment-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .attachment-icon.pdf {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  }
  
  .attachment-icon.doc {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  }
  
  .attachment-icon.image {
    background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
  }
  
  .attachment-icon.video {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  }
  
  .attachment-icon.audio {
    background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  }
  
  .attachment-icon.archive {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  }
  
  .attachment-icon.code {
    background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  }
  
  .attachment-icon.spreadsheet {
    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  }
  
  .attachment-icon.default {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  }
  
  .file-icon-svg {
    width: 26px;
    height: 26px;
    fill: white;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  }
  
  .attachment-info {
    flex: 1;
    min-width: 0;
    padding-right: 10px;
  }
  
  .attachment-name {
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 6px;
    word-break: break-word;
    line-height: 1.3;
    letter-spacing: -0.2px;
  }
  
  .attachment-meta {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .attachment-size {
    font-size: 12px;
    color: #9ca3af;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .attachment-type {
    font-size: 10px;
    color: #6b7280;
    background: rgba(255, 255, 255, 0.06);
    padding: 3px 8px;
    border-radius: 6px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .attachment-download {
    width: 36px;
    height: 36px;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .download-icon-svg {
    width: 18px;
    height: 18px;
    fill: #10b981;
  }
  
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
    margin: 36px 0;
  }
  
  .footer {
    text-align: center;
    padding-top: 8px;
  }
  
  .footer-logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  
  .footer-text {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.7;
  }
  
  .footer-link {
    color: #10b981;
    text-decoration: none;
    font-weight: 600;
  }
`;

const getEmailHeader = () => `
  <div class="header">
    <img src="https://vault.kavin.cyou/vault-logo.jpg" alt="VaultBridge" style="width: 64px; height: 64px; border-radius: 16px; margin-bottom: 16px; display: block; margin-left: auto; margin-right: auto;">
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
      <a href="https://vault.kavin.cyou" class="footer-link">vault.kavin.cyou</a>
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
// MSG91 API CLIENT
// ============================================

interface Msg91EmailInput {
  to: string;
  subject: string;
  htmlContent: string;
  senderName?: string;
  attachments?: { name: string; content: string }[]; // Base64 content
}

async function sendViaMsg91(input: Msg91EmailInput): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const authKey = process.env.MSG91_AUTH_KEY || "480091AbJuma92Ie692de24aP1";

  try {
    // Construct payload for MSG91
    const body: any = {
      recipients: [
        {
          to: [{ email: input.to, name: input.senderName || "User" }]
        }
      ],
      from: {
        email: "no-reply@acedigital.space",
        name: input.senderName || "VaultBridge"
      },
      domain: "acedigital.space",
      subject: input.subject,
      html: input.htmlContent
      // Note: If MSG91 strictly requires 'template_id', dynamic HTML might fail. 
      // Assuming 'html' field is supported for custom content.
    };

    if (input.attachments && input.attachments.length > 0) {
      body.attachments = input.attachments.map(a => ({
        name: a.name,
        file: a.content // Base64 string
      }));
    }

    const response = await fetch("https://control.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authkey": authKey
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok || data.status === "error") {
      return { success: false, error: data.message || JSON.stringify(data) };
    }

    return { success: true, messageId: data.data };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Unknown MSG91 error" };
  }
}

// ============================================
// VAULT ACCESS EMAIL
// ============================================

export async function sendVaultEmail(input: SendVaultEmailInput): Promise<SendEmailResult> {
  try {
    // Normalize email to lowercase for case-insensitive handling (handles ALL CAPS, Mixed Case, etc.)
    const normalizedTo = input.to.trim().toLowerCase();

    const sentCount = emailsSentPerVault.get(input.vaultId) || 0;
    if (sentCount >= MAX_EMAILS_PER_VAULT) {
      return { success: false, error: `Maximum ${MAX_EMAILS_PER_VAULT} emails per vault reached.` };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedTo)) {
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${getEmailStyles()}</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      ${getEmailHeader()}
      
      <h1 class="title">🔐 Secure Files Shared With You</h1>
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
        to: [normalizedTo], // Use normalized lowercase email
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
    } else if (provider === "BREVO") {
      // BREVO
      const res = await sendViaBrevo({
        to: normalizedTo, // Use normalized lowercase email
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
    } else {
      // MSG91
      const res = await sendViaMsg91({
        to: normalizedTo,
        subject: `🔐 ${input.senderName || "Someone"} shared encrypted files with you`,
        htmlContent: html, // Sending full HTML
        senderName: "VaultBridge"
      });

      if (!res.success) {
        return { success: false, error: res.error };
      }
      result = { success: true, messageId: res.messageId };
    }

    // Update Quota and Limit
    await incrementEmailUsage(provider);
    emailsSentPerVault.set(input.vaultId, sentCount + 1);
    log(`Vault email sent to ${normalizedTo} via ${provider}`, "email");

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
    // Normalize email to lowercase for case-insensitive handling
    const normalizedTo = input.to.trim().toLowerCase();
    const { subject, text, files } = input;

    // File extensions that Brevo doesn't support - force fallback to Resend
    const brevoUnsupportedExtensions = [
      'json', 'yml', 'yaml', 'xml', 'toml', 'ini', 'cfg', 'conf',
      'js', 'ts', 'jsx', 'tsx', 'py', 'rb', 'go', 'rs', 'java', 'c', 'cpp', 'h', 'hpp',
      'sh', 'bash', 'zsh', 'ps1', 'bat', 'cmd',
      'sql', 'graphql', 'prisma',
      'env', 'lock', 'log', 'md', 'mdx', 'rst', 'tex',
      'wasm', 'map', 'min'
    ];

    // Check if any files have unsupported extensions for Brevo
    const hasUnsupportedForBrevo = files.some(f => {
      const ext = f.filename.split('.').pop()?.toLowerCase() || '';
      return brevoUnsupportedExtensions.includes(ext);
    });

    // Determine Provider - force Resend if files contain Brevo-unsupported types
    let provider = await getEmailProvider();
    if (!provider) {
      log(`Direct email blocked: Quota exceeded`, "email");
      return false;
    }

    // Override to Resend if Brevo can't handle these file types
    if (provider === "BREVO" && hasUnsupportedForBrevo) {
      log(`Brevo doesn't support some file types, trying Resend instead`, "email");
      provider = "RESEND"; // Force Resend for unsupported file types
    }

    const totalSize = files.reduce((acc, f) => acc + f.content.length, 0);
    const formatSize = (bytes: number) => {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    // Helper to determine file type and get inline styles for icon background
    const getFileTypeInfo = (filename: string) => {
      const ext = filename.split('.').pop()?.toLowerCase() || '';

      // Icon backgrounds by file type (inline styles for email compatibility)
      const iconStyles = {
        pdf: 'background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);',
        doc: 'background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);',
        image: 'background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);',
        video: 'background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);',
        audio: 'background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);',
        archive: 'background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);',
        code: 'background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);',
        spreadsheet: 'background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);',
        default: 'background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);'
      };

      // PDF files
      if (ext === 'pdf') {
        return { bgStyle: iconStyles.pdf, type: 'PDF', emoji: '📕' };
      }
      // Documents  
      if (['doc', 'docx', 'rtf', 'odt', 'txt'].includes(ext)) {
        return { bgStyle: iconStyles.doc, type: ext.toUpperCase(), emoji: '📘' };
      }
      // Images
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico', 'heic'].includes(ext)) {
        return { bgStyle: iconStyles.image, type: ext.toUpperCase(), emoji: '🖼️' };
      }
      // Videos
      if (['mp4', 'mov', 'avi', 'mkv', 'webm', 'wmv', 'flv'].includes(ext)) {
        return { bgStyle: iconStyles.video, type: ext.toUpperCase(), emoji: '🎬' };
      }
      // Audio
      if (['mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a', 'wma'].includes(ext)) {
        return { bgStyle: iconStyles.audio, type: ext.toUpperCase(), emoji: '🎵' };
      }
      // Archives
      if (['zip', 'rar', '7z', 'tar', 'gz', 'bz2'].includes(ext)) {
        return { bgStyle: iconStyles.archive, type: ext.toUpperCase(), emoji: '📦' };
      }
      // Code files
      if (['js', 'ts', 'jsx', 'tsx', 'py', 'java', 'cpp', 'c', 'html', 'css', 'json', 'xml', 'sql', 'php', 'rb', 'go', 'rs', 'swift'].includes(ext)) {
        return { bgStyle: iconStyles.code, type: ext.toUpperCase(), emoji: '💻' };
      }
      // Spreadsheets
      if (['xls', 'xlsx', 'csv', 'ods'].includes(ext)) {
        return { bgStyle: iconStyles.spreadsheet, type: ext.toUpperCase(), emoji: '📊' };
      }
      // Default
      return { bgStyle: iconStyles.default, type: ext ? ext.toUpperCase() : 'FILE', emoji: '📄' };
    };

    const attachmentListHtml = files.map(f => {
      const typeInfo = getFileTypeInfo(f.filename);
      return `
      <!--[if mso]>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
        <tr>
          <td style="padding: 16px; background: #1f1f23; border-radius: 12px; border-left: 4px solid #10b981;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="width: 48px; height: 48px; ${typeInfo.bgStyle} border-radius: 12px; text-align: center; vertical-align: middle; font-size: 24px;">
                  ${typeInfo.emoji}
                </td>
                <td style="padding-left: 16px;">
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 600; color: #ffffff; margin-bottom: 4px;">${f.filename}</div>
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #9ca3af;">
                    ${formatSize(f.content.length)} • <span style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;">${typeInfo.type}</span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <![endif]-->
      <!--[if !mso]><!-->
      <div style="display: flex; align-items: center; gap: 16px; padding: 18px 20px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #10b981; border-radius: 14px; margin-bottom: 12px;">
        <div style="width: 52px; height: 52px; ${typeInfo.bgStyle} border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 26px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
          ${typeInfo.emoji}
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 600; color: #ffffff; margin-bottom: 6px; word-break: break-word; line-height: 1.3;">${f.filename}</div>
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #9ca3af; font-weight: 500;">
              📁 ${formatSize(f.content.length)}
            </span>
            <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 10px; color: #6b7280; background: rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 6px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
              ${typeInfo.type}
            </span>
          </div>
        </div>
        <div style="width: 40px; height: 40px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <span style="font-size: 18px;">⬇️</span>
        </div>
      </div>
      <!--<![endif]-->`
    }).join('');

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${getEmailStyles()}</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      ${getEmailHeader()}
      
      <h1 class="title">📬 Files Delivered to You</h1>
      <p class="subtitle">Zero-Knowledge Relay • End-to-End Encrypted</p>
      
      ${text ? `
      <div class="message-box">
        <div class="message-label">💬 Personal Message</div>
        <div class="message-text">${text}</div>
      </div>
      ` : ''}
      
      <div style="background: linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 18px; padding: 28px; margin: 32px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #10b981; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; font-weight: 700; display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid rgba(16, 185, 129, 0.15);">
          📎 Secure Attachments
          <span style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #022c1e; font-size: 10px; font-weight: 800; padding: 5px 12px; border-radius: 20px; letter-spacing: 0.5px;">${files.length} ${files.length === 1 ? 'FILE' : 'FILES'}</span>
        </div>
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
        to: [normalizedTo], // Use normalized lowercase email
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
    } else if (provider === "BREVO") {
      // PREVO
      // Prepare attachments for Brevo (Base64)
      const brevoAttachments = files.map(f => ({
        name: f.filename,
        content: f.content.toString('base64')
      }));

      const res = await sendViaBrevo({
        to: normalizedTo, // Use normalized lowercase email
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
    } else {
      // MSG91
      const msg91Attachments = files.map(f => ({
        name: f.filename,
        content: f.content.toString('base64')
      }));

      const res = await sendViaMsg91({
        to: normalizedTo,
        subject: `📬 ${subject}`,
        htmlContent: html,
        senderName: "VaultBridge",
        attachments: msg91Attachments
      });

      if (!res.success) {
        log(`MSG91 Error (Direct): ${res.error}`, "email");
        return false;
      }
    }

    await incrementEmailUsage(provider);
    log(`Direct email sent to ${normalizedTo} via ${provider}`, "email");
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
