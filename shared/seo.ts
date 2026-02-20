export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

import { generateSEOPages } from "./seo-generator";

export const defaultSEO: SEOConfig = {
  siteName: "VaultBridge",
  title: "VaultBridge | Secure Encrypted File Sharing & Transfer",
  description:
    "Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, direct email relay, encrypted clipboard, zero-knowledge privacy. No account required. Free & open source.",
  keywords:
    "secure file transfer, encrypted file sharing, end-to-end encryption, privacy, self-destructing links, zero knowledge, AES-256, anonymous file sharing, encrypted email, secure clipboard",
  image: "/og-image.png",
  url: "https://vaultbridge.org",
  type: "website",
};

const staticPageSEO: Record<string, Partial<SEOConfig>> = {
  "/": {
    title: "VaultBridge | Secure Encrypted File Sharing & Transfer",
    description:
      "Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, encrypted email relay, secure clipboard sync, and zero-knowledge privacy. No account required.",
    keywords:
      "secure file transfer, encrypted file sharing, end-to-end encryption, privacy, self-destructing links, zero knowledge, AES-256, anonymous file sharing, send files securely, encrypted storage",
  },
  "/upload": {
    title: "Upload & Encrypt Files Securely | VaultBridge Secure Vault",
    description:
      "Upload and encrypt your files with military-grade AES-256-GCM encryption. Set custom expiration times, download limits, and burn-on-read. Create self-destructing secure vaults instantly.",
    keywords:
      "secure file upload, encrypt files online, AES-256 encryption, self-destructing vault, secure file storage, burn after read, encrypted upload, file expiry, download limit",
  },
  "/access": {
    title: "Access Secure Vault | Decrypt & Download Files | VaultBridge",
    description:
      "Enter your 6-digit access code to unlock and download encrypted files. Zero-knowledge decryption happens entirely in your browser. No data is ever exposed to the server.",
    keywords:
      "access encrypted vault, download encrypted files, secure access code, vault unlock, zero knowledge download, decrypt files, secure file retrieval",
  },
  "/download": {
    title: "Secure File Download | Decrypt & Access Vault | VaultBridge",
    description:
      "Securely download encrypted files from VaultBridge. End-to-end AES-256 decryption in your browser. Files self-destruct after access limits are reached.",
    keywords:
      "secure download, encrypted file download, burn on read, self-destructing file, AES-256 decryption, secure vault access",
  },
  "/get-it-mailed": {
    title: "Get it Mailed | Send Files Securely via Email | VaultBridge",
    description:
      "Send files securely to anyone via email. Files are encrypted with AES-256 and relayed as ephemeral attachments. Zero-knowledge relay — no files are stored on our servers. No account needed.",
    keywords:
      "send encrypted files, secure email attachments, email file transfer, encrypted email relay, send files via email, secure file delivery, zero knowledge email, ephemeral file transfer",
  },
  "/clipboard": {
    title: "Secure Clipboard | Encrypted Text Sharing Across Devices | VaultBridge",
    description:
      "Share passwords, API keys, code snippets, and sensitive text across devices with end-to-end AES-256 encryption. Real-time sync with auto-destruct. No account required.",
    keywords:
      "encrypted clipboard, secure text sharing, share passwords securely, encrypted notes, cross-device clipboard, secure clipboard sync, AES-256 text encryption, share secrets, share API keys",
  },
  "/live": {
    title: "Live P2P File Transfer | WebRTC Encrypted | VaultBridge",
    description:
      "Transfer files directly between devices with WebRTC. Real-time P2P connection with end-to-end encryption. No server storage, no upload wait.",
    keywords:
      "P2P transfer, WebRTC file sharing, direct file transfer, peer-to-peer, real-time transfer, encrypted P2P, no server storage",
  },
  "/success": {
    title: "Vault Created Successfully | VaultBridge",
    description:
      "Your secure vault has been created. Share the access code or direct link to allow others to download your encrypted files securely.",
  },
  "/terms": {
    title: "Terms of Service | VaultBridge",
    description:
      "Read the terms of service for using VaultBridge secure file sharing platform. Understand your rights and responsibilities.",
    keywords: "terms of service, VaultBridge terms, usage policy, file sharing terms",
  },
  "/privacy": {
    title: "Privacy Policy | VaultBridge",
    description:
      "Learn how VaultBridge protects your privacy with zero-knowledge architecture, end-to-end encryption, and a strict no-logs policy. Your data stays yours.",
    keywords:
      "privacy policy, VaultBridge privacy, zero knowledge privacy, no logs policy, data protection, encrypted file sharing privacy",
  },
  "/how-it-works": {
    title: "How VaultBridge Works | End-to-End Encrypted File Sharing Explained",
    description:
      "Understand the security architecture behind VaultBridge. Learn how AES-256 encryption, split-key access codes, and self-destructing vaults keep your files safe.",
    keywords:
      "how encryption works, AES-256 explained, zero knowledge architecture, secure file sharing explained, self-destructing vaults, split-key encryption",
  },
  "/security": {
    title: "Security Architecture | VaultBridge",
    description:
      "Technical security architecture for VaultBridge: encryption model, key flow, file lifecycle, and auto-destruct logic.",
    keywords:
      "vaultbridge security architecture, client-side encryption, zero-knowledge file sharing, file lifecycle security, auto-destruct logic",
  },
  "/privacy-manifesto": {
    title: "Privacy Manifesto | VaultBridge",
    description:
      "Why VaultBridge exists: privacy-first architecture, minimal data collection, and user-controlled secure transfer.",
    keywords:
      "privacy manifesto, privacy-first file sharing, zero tracking philosophy, user controlled security",
  },
  "/roadmap": {
    title: "Public Roadmap | VaultBridge",
    description:
      "Transparent roadmap for VaultBridge: upcoming security, privacy, and product milestones.",
    keywords:
      "vaultbridge roadmap, secure file sharing roadmap, privacy product roadmap",
  },
  "/secure-file-sharing-free": {
    title: "Secure File Sharing Free | VaultBridge",
    description:
      "Secure file sharing without login, tracking, or permanent storage. Encrypted transfers with temporary lifecycle controls.",
    keywords:
      "secure file sharing free, private file sharing, no login file sharing, encrypted secure link sharing",
  },
  "/encrypted-file-transfer": {
    title: "Encrypted File Transfer | VaultBridge",
    description:
      "Encrypted file transfer with temporary storage and secure access. Built for privacy-conscious sharing.",
    keywords:
      "encrypted file transfer, secure transfer links, privacy file transfer, zero tracking file sharing",
  },
  "/private-file-sharing": {
    title: "Private File Sharing | VaultBridge",
    description:
      "Private file sharing for teams and individuals who need secure, temporary, encrypted delivery.",
    keywords:
      "private file sharing, confidential file transfer, encrypted private upload, secure temporary file storage",
  },
  "/anonymous-file-sharing": {
    title: "Anonymous File Sharing | VaultBridge",
    description:
      "Share files anonymously with encrypted transfer and temporary retention controls.",
    keywords:
      "anonymous file sharing, no account file sharing, anonymous encrypted sharing, privacy sharing tool",
  },
  "/free-encrypted-upload": {
    title: "Free Encrypted Upload | VaultBridge",
    description:
      "Free encrypted upload flow for secure sharing without account friction.",
    keywords:
      "free encrypted upload, secure encrypted upload, no login encrypted transfer, privacy-first upload",
  },
  "/send-files-securely": {
    title: "Send Files Securely | VaultBridge",
    description:
      "Send files securely with encrypted transfer, temporary vault lifecycle, and zero tracking defaults.",
    keywords:
      "send files securely, secure file transfer, encrypted link sharing, temporary secure vault",
  },
};

// Merge static SEO configurations with the dynamically generated programmatic SEO configs
export const pageSEO: Record<string, Partial<SEOConfig>> = {
  ...staticPageSEO,
  ...generateSEOPages(),
};

// Public routes safe to pre-render and expose to crawlers
export const publicRoutesForPreRender = [
  "/",
  "/upload",
  "/access",
  "/get-it-mailed",
  "/clipboard",
  "/how-it-works",
  "/terms",
  "/privacy",
  "/security",
  "/privacy-manifesto",
  "/roadmap",
  ...Object.keys(generateSEOPages()),
];

export function resolveSEO(
  pathname: string,
  overrides: Partial<SEOConfig> = {},
): SEOConfig {
  const sanitizedPath = (pathname || "/").split("?")[0].split("#")[0] || "/";
  const basePath = `/${sanitizedPath.split("/")[1] || ""}`;
  const pageConfig = pageSEO[sanitizedPath] || pageSEO[basePath] || {};

  return {
    ...defaultSEO,
    ...pageConfig,
    ...overrides,
  } as SEOConfig;
}
