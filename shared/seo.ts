export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

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

export const pageSEO: Record<string, Partial<SEOConfig>> = {
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
