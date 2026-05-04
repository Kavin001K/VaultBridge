// script/build.ts
import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { mkdir, rm, readFile, writeFile } from "fs/promises";
import path from "path";
import { createRequire } from "module";

// shared/seo-generator.ts
var modifiers = [
  "secure",
  "encrypted",
  "private",
  "anonymous",
  "free"
];
var baseTerms = [
  "file sharing",
  "file transfer",
  "file upload"
];
var manualKeywords = [
  // HIGH-INTENT KEYWORDS
  "secure file sharing free",
  "encrypted file upload",
  "private file sharing free",
  "anonymous file upload free",
  "secure file transfer free",
  "share files securely online free",
  "upload files without login",
  "encrypted file sharing free",
  "secure file transfer without account",
  "anonymous file upload and share",
  "send files securely online",
  "temporary file sharing link",
  "secure file sharing with auto delete",
  "send confidential files online",
  "secure document sharing without login",
  // ENCRYPTION-BASED KEYWORDS
  "AES-256 encrypted file sharing",
  "end-to-end encrypted file upload",
  "browser encrypted file sharing",
  "client-side encryption file sharing",
  "zero-knowledge file sharing",
  // PRIVACY KEYWORDS
  "private file sharing service",
  "anonymous secure file sharing",
  "no tracking file sharing",
  "secure file sharing without registration",
  "privacy focused file sharing",
  // TEMPORARY VAULT KEYWORDS
  "temporary vault file sharing",
  "auto destruct file sharing",
  "one time download file sharing",
  "self destruct file link",
  "expiring file share link",
  // COMPETITOR-TARGETING KEYWORDS
  "WeTransfer alternative secure",
  "SendAnywhere alternative private",
  "Google Drive alternative secure",
  "Dropbox alternative secure",
  "Firefox Send alternative",
  "secure alternative to Google Drive",
  "anonymous alternative to Dropbox",
  // LONG-TAIL SEO KEYWORDS
  "free encrypted file sharing without login",
  "anonymous file sharing with auto delete",
  "secure file sharing with temporary links",
  "upload and share encrypted files instantly",
  "secure file transfer for developers",
  "secure file sharing for businesses",
  "encrypted file sharing for students",
  "share sensitive files securely online free",
  "upload confidential files securely",
  // NATURAL HUMAN SEARCH QUERIES
  "how to share files securely online",
  "how to send confidential files safely",
  "how to upload files anonymously",
  "how to send files without login",
  "safest way to share files online",
  "how to share files without being tracked",
  "anonymous file sharing websites",
  "how to share files privately",
  "secure file sharing without account",
  "encrypted file sharing tools",
  "how to share large files securely with friends",
  "how to share project files privately",
  "free secure file sharing for students",
  "how to share API keys securely",
  "secure way to share config files",
  "encrypted file sharing for developers",
  "how to send confidential documents securely",
  "secure document sharing for business",
  "private file transfer for company",
  // HIGH-TRAFFIC ACTION KEYWORDS
  "upload secure files",
  "encrypt and share files",
  "share encrypted files",
  "send secure files",
  "private upload and share",
  // INTENT KEYWORDS
  "fast secure file transfer",
  "instant encrypted file sharing",
  // BRAND POSITIONING KEYWORDS
  "secure file sharing without login",
  "encrypted vault file sharing",
  "temporary encrypted vault",
  "private vault file sharing",
  "secure vault upload",
  // GEO-TARGETED KEYWORDS
  "secure file sharing India",
  "encrypted file sharing India",
  "anonymous file sharing India",
  "private file sharing global"
];
function generateKeywords() {
  const keywords = [];
  modifiers.forEach((modifier) => {
    baseTerms.forEach((term) => {
      keywords.push(`${modifier} ${term}`);
    });
  });
  manualKeywords.forEach((manualTerm) => {
    if (!keywords.includes(manualTerm)) {
      keywords.push(manualTerm);
    }
  });
  return keywords;
}
function capitalizeFirstLetters(str) {
  return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function generateSEOPages() {
  const keywords = generateKeywords();
  const pages = {};
  keywords.forEach((keyword) => {
    const slug = `/${keyword.replace(/\s+/g, "-")}`;
    const capitalizedKeyword = capitalizeFirstLetters(keyword);
    pages[slug] = {
      title: `${capitalizedKeyword} | VaultBridge \u2013 Free & Encrypted`,
      description: `${capitalizedKeyword} with VaultBridge. End-to-end AES-256 encrypted, no login required, auto-destruct links, temporary vaults, zero-knowledge privacy. The safest way to share files online. Free & open source.`,
      keywords: `${keyword}, VaultBridge, secure file sharing, encrypted file transfer, free encrypted upload, no login file sharing, anonymous file upload, temporary file links, self-destructing vault, privacy focused file sharing, zero knowledge, AES-256, share files securely online`
    };
  });
  return pages;
}

// shared/blog.ts
var blogPosts = [
  {
    slug: "secure-file-sharing-best-practices",
    title: "Secure File Sharing Best Practices for Teams",
    description: "Practical guidance for secure file sharing: encryption, access controls, retention policies, and temporary links.",
    excerpt: "A practical checklist for teams that need secure, temporary, and privacy-first file transfer workflows.",
    keywords: [
      "secure file sharing best practices",
      "encrypted file transfer checklist",
      "temporary secure links",
      "confidential file sharing"
    ],
    readTime: "6 min read",
    lastUpdated: "2026-02-20",
    sections: [
      {
        heading: "Start with a threat model, not a feature list",
        paragraphs: [
          "List what you are protecting, who can access it, and what happens if a link leaks. This prevents weak defaults.",
          "For most teams, the baseline controls are encrypted transfer, short retention, and strict download limits."
        ]
      },
      {
        heading: "Use temporary links and lifecycle controls",
        paragraphs: [
          "Files should not stay online forever. Expiration windows and burn-after-read limits reduce long-term risk.",
          "Treat file links like temporary credentials: rotate and revoke quickly when exposure is possible."
        ]
      },
      {
        heading: "Operationalize audits and incident response",
        paragraphs: [
          "Document who can create links, when data expires, and what triggers manual destruction. Keep this process lightweight.",
          "A strong process with simple controls beats a complex toolchain no one consistently follows."
        ]
      }
    ]
  },
  {
    slug: "encrypted-file-transfer-vs-cloud-storage",
    title: "Encrypted File Transfer vs Cloud Storage: When to Use Which",
    description: "A technical comparison between encrypted transfer workflows and permanent cloud storage platforms.",
    excerpt: "Understand the tradeoffs between temporary encrypted delivery and long-lived collaboration storage.",
    keywords: [
      "encrypted file transfer vs cloud storage",
      "secure file delivery",
      "temporary file sharing",
      "privacy-first storage alternatives"
    ],
    readTime: "7 min read",
    lastUpdated: "2026-02-20",
    sections: [
      {
        heading: "Different tools for different jobs",
        paragraphs: [
          "Encrypted transfer is optimized for delivery: send, receive, expire. Cloud storage is optimized for persistence and collaboration.",
          "Using permanent platforms for short-lived sensitive handoffs often creates unnecessary retention risk."
        ]
      },
      {
        heading: "Retention and privacy tradeoffs",
        paragraphs: [
          "Cloud platforms tend to preserve history and metadata. That helps collaboration but increases residual data.",
          "Transfer tools with short lifecycles keep less data around, which is usually better for confidentiality-sensitive payloads."
        ]
      },
      {
        heading: "Choose by lifecycle and exposure",
        paragraphs: [
          "If the file is one-time delivery, temporary encrypted transfer is usually the right default.",
          "If the file requires co-editing and long-term reference, cloud storage can be appropriate with strong controls."
        ]
      }
    ]
  },
  {
    slug: "anonymous-file-sharing-without-login",
    title: "Anonymous File Sharing Without Login: A Practical Guide",
    description: "How anonymous file sharing works, what security controls still matter, and where teams go wrong.",
    excerpt: "Anonymous sharing can be secure when encryption, expiry, and access controls are configured correctly.",
    keywords: [
      "anonymous file sharing",
      "no login file transfer",
      "private file upload",
      "secure anonymous sharing"
    ],
    readTime: "5 min read",
    lastUpdated: "2026-02-20",
    sections: [
      {
        heading: "No login does not mean no security",
        paragraphs: [
          "Accountless sharing removes friction, but security still depends on encryption and strict link controls.",
          "Use one-time codes or short retrieval windows to reduce unauthorized access opportunities."
        ]
      },
      {
        heading: "Minimize metadata and persistence",
        paragraphs: [
          "Anonymous workflows are strongest when platform-side data collection is minimal and retention is short.",
          "Avoid exposing identity markers in filenames, comments, or link-sharing channels."
        ]
      },
      {
        heading: "Set clear operational boundaries",
        paragraphs: [
          "Define which data classes can be sent via anonymous links and which require additional controls.",
          "Simple rules and short expiration defaults keep teams aligned without adding onboarding friction."
        ]
      }
    ]
  },
  {
    slug: "temporary-file-links-and-auto-destruct",
    title: "Temporary File Links and Auto-Destruct Policies Explained",
    description: "Why temporary links and auto-destruct policies are core controls for modern secure file transfer.",
    excerpt: "A breakdown of TTL windows, burn-after-read, and manual revoke patterns for safer file delivery.",
    keywords: [
      "temporary file links",
      "auto destruct file sharing",
      "time limited secure links",
      "burn after read file transfer"
    ],
    readTime: "6 min read",
    lastUpdated: "2026-02-20",
    sections: [
      {
        heading: "Why temporary links matter",
        paragraphs: [
          "Every additional hour a link is valid increases exposure. Time-bound links reduce the attack window.",
          "Expiration should be based on business need, not convenience defaults."
        ]
      },
      {
        heading: "Combine time and usage limits",
        paragraphs: [
          "TTL alone is good; TTL plus download-count limits is better. This limits replay and unintended redistribution.",
          "Burn-after-read can be effective for high-sensitivity handoffs where one retrieval is expected."
        ]
      },
      {
        heading: "Keep manual revoke available",
        paragraphs: [
          "Incidents happen. Manual destruction gives teams immediate control when a link is shared incorrectly.",
          "Pair this with auditable lifecycle logs so operational teams can verify the state quickly."
        ]
      }
    ]
  },
  {
    slug: "secure-alternative-to-google-drive-wetransfer",
    title: "Secure Alternative to Google Drive & WeTransfer for Private File Sharing",
    description: "Why VaultBridge is the best secure alternative to Google Drive, WeTransfer, Dropbox, and Firefox Send for privacy-focused encrypted file sharing without login.",
    excerpt: "Compare VaultBridge vs Google Drive, WeTransfer, and Dropbox. See why zero-knowledge encrypted file sharing with auto-destruct beats traditional cloud storage for sensitive files.",
    keywords: [
      "secure alternative to Google Drive",
      "WeTransfer alternative secure",
      "Dropbox alternative secure",
      "Firefox Send alternative",
      "anonymous alternative to Dropbox",
      "SendAnywhere alternative private",
      "private file sharing service",
      "encrypted file sharing free"
    ],
    readTime: "8 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "Why traditional cloud storage fails at privacy",
        paragraphs: [
          "Google Drive, Dropbox, and WeTransfer store your files permanently on their servers and retain metadata about who uploaded, downloaded, and shared content. This creates long-term privacy exposure that most users never consider.",
          "Cloud storage platforms are optimized for collaboration and persistence, not confidentiality. If your goal is to send files securely online without leaving a permanent trail, you need a fundamentally different architecture."
        ]
      },
      {
        heading: "VaultBridge vs Google Drive: Zero-knowledge vs full-knowledge",
        paragraphs: [
          "Google Drive encrypts files at rest, but Google holds the keys and can access your content. VaultBridge uses browser-side AES-256-GCM encryption where decryption keys never leave your device. Even we cannot read your files.",
          "With VaultBridge, there is no login, no account, no tracking cookies, and no analytics. Every file is encrypted before upload, stored as temporary encrypted blobs, and auto-destructed after expiration or first download."
        ]
      },
      {
        heading: "VaultBridge vs WeTransfer: Auto-destruct vs permanent links",
        paragraphs: [
          "WeTransfer keeps files available for 7 days on the free plan with no end-to-end encryption. VaultBridge gives you configurable expiry timers, download count limits, and burn-after-read \u2014 all with AES-256 client-side encryption.",
          "For sending confidential files online \u2014 contracts, medical records, API keys, or business documents \u2014 VaultBridge provides the security controls that WeTransfer and Dropbox simply do not offer."
        ]
      },
      {
        heading: "When to use encrypted file transfer vs cloud storage",
        paragraphs: [
          "Use VaultBridge for one-time delivery of sensitive files: secure document sharing for business, sharing API keys securely, private file transfer for companies, or anonymous file sharing without login.",
          "Use traditional cloud storage for long-term collaboration where persistence and co-editing are more important than confidentiality. For everything else, encrypted temporary vaults are the safest way to share files online."
        ]
      }
    ]
  },
  {
    slug: "encrypted-file-sharing-for-developers",
    title: "Encrypted File Sharing for Developers: Share API Keys, Config Files & Secrets Securely",
    description: "How developers can share API keys securely, transfer config files privately, and send secrets with end-to-end encrypted file sharing. No login required.",
    excerpt: "A developer's guide to sharing API keys, environment variables, SSH keys, and config files securely with end-to-end encryption and auto-destruct links.",
    keywords: [
      "encrypted file sharing for developers",
      "how to share API keys securely",
      "secure way to share config files",
      "secure file transfer for developers",
      "share secrets securely",
      "send files without login",
      "developer file sharing tool",
      "encrypted vault file sharing"
    ],
    readTime: "6 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "The developer secret-sharing problem",
        paragraphs: [
          "Every developer has faced the problem: how to share an API key, database credential, .env file, or SSH key with a teammate without exposing it in Slack, email, or a GitHub commit. Traditional methods like copy-pasting into chat channels create permanent, searchable exposure.",
          "VaultBridge solves this with encrypted file sharing that requires no login, no account, and automatically destroys the shared content after download. Your secrets stay secret."
        ]
      },
      {
        heading: "How to share API keys and config files securely",
        paragraphs: [
          "Upload your .env file, API key document, or config to VaultBridge. It is encrypted with AES-256-GCM in your browser before upload. You receive a 6-digit access code that you share with your teammate via a separate channel.",
          "Your teammate enters the code, the file is decrypted in their browser, and the vault auto-destructs. The server never sees the plaintext content, and no record of the transfer persists. This is zero-knowledge file sharing optimized for developer workflows."
        ]
      },
      {
        heading: "Clipboard sync for quick secret sharing",
        paragraphs: [
          "For small secrets like individual API keys or short config snippets, use VaultBridge's Universal Encrypted Clipboard. Paste your secret, and it's immediately encrypted and available on any device with the access code. The data lives only in RAM \u2014 never on disk.",
          "This is faster and more secure than any file sharing tool for quick developer secret exchange. It supports real-time sync via encrypted WebSockets with zero persistence."
        ]
      }
    ]
  },
  {
    slug: "secure-file-sharing-for-businesses",
    title: "Secure File Sharing for Businesses: Send Confidential Documents Without Risk",
    description: "How businesses can send confidential documents securely with encrypted file sharing and auto-destruct links. GDPR-friendly, no account required.",
    excerpt: "Enterprise-grade file security without the enterprise price tag. Send contracts, financial data, and HR documents with zero-knowledge encryption.",
    keywords: [
      "secure file sharing for businesses",
      "how to send confidential documents securely",
      "secure document sharing for business",
      "private file transfer for company",
      "send confidential files online",
      "encrypted document sharing",
      "business file sharing tool",
      "GDPR file sharing"
    ],
    readTime: "7 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "Why businesses need encrypted file transfer",
        paragraphs: [
          "Every business handles sensitive files: contracts, financial reports, employee records, client data, and legal documents. Sending these through email attachments or general cloud storage leaves permanent exposure trails that create compliance and liability risks.",
          "VaultBridge provides secure document sharing for businesses with end-to-end AES-256 encryption, configurable auto-destruct, and zero metadata retention. No accounts, no tracking, and no permanent storage."
        ]
      },
      {
        heading: "Compliance-friendly: GDPR, HIPAA and minimal data processing",
        paragraphs: [
          "Because VaultBridge operates on zero-knowledge architecture, we mathematically cannot access your files. This dramatically simplifies compliance requirements for GDPR, HIPAA, and other data protection regulations.",
          "We process the absolute minimum: encrypted blobs with routing IDs. No names, no email addresses, no IP logging beyond 24-hour DDoS protection. Your confidential business documents are truly confidential."
        ]
      },
      {
        heading: "Use cases: Legal, HR, Finance, and Client delivery",
        paragraphs: [
          "Legal departments can share contracts with auto-destruct after client review. HR can distribute compensation letters with burn-after-read. Finance can transfer spreadsheets with strict download limits.",
          "Client-facing teams can deliver sensitive deliverables via secure temporary links that expire automatically. No risk of stale links circulating months later. This is the safest way to share business files online."
        ]
      }
    ]
  },
  {
    slug: "free-secure-file-sharing-for-students",
    title: "Free Secure File Sharing for Students: Share Project Files Privately",
    description: "How students can share project files, assignments, and research securely with free encrypted file sharing. No login, no tracking, instant sharing.",
    excerpt: "A student's guide to sharing project files, research papers, and assignments securely and privately with free encrypted temporary links.",
    keywords: [
      "free secure file sharing for students",
      "encrypted file sharing for students",
      "how to share large files securely with friends",
      "how to share project files privately",
      "share files securely online free",
      "upload files without login",
      "anonymous file sharing",
      "student file sharing tool"
    ],
    readTime: "5 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "Why students need private file sharing",
        paragraphs: [
          "Students regularly share project files, research documents, lab reports, and presentations with classmates. Using public cloud links or social media file sharing exposes content to unintended audiences and creates permanent copies.",
          "VaultBridge lets you share files securely online for free with no login required. Upload your project, get a 6-digit code, share it with your group. Files auto-delete after expiration. Simple, private, and secure."
        ]
      },
      {
        heading: "How to share large files securely with friends",
        paragraphs: [
          "VaultBridge supports large file uploads with Brotli compression and chunked encrypted transfer. Even large datasets, video presentations, and research archives can be shared securely with a temporary link.",
          "Unlike Google Drive or Dropbox which require accounts and store files permanently, VaultBridge gives you temporary encrypted vaults that disappear after use. Perfect for sharing project files privately during a collaboration window."
        ]
      },
      {
        heading: "Secure collaboration without compromising privacy",
        paragraphs: [
          "No tracking cookies, no analytics, no registration. VaultBridge is free and open source \u2014 built for privacy-focused users who want anonymous file sharing without creating yet another account.",
          "Use VaultBridge whenever you need to share sensitive academic content: draft thesis chapters, personal statements, financial aid documents, or recommendation letters. Encrypt everything. Trust nothing."
        ]
      }
    ]
  },
  {
    slug: "zero-knowledge-file-sharing-explained",
    title: "Zero-Knowledge File Sharing Explained: How VaultBridge Keeps Files Private",
    description: "A complete guide to zero-knowledge architecture in file sharing. How VaultBridge uses client-side AES-256 encryption, split-key access, and ephemeral storage to make data breaches irrelevant.",
    excerpt: "Understand zero-knowledge encryption: why even a complete server breach cannot expose your files when they are encrypted before upload.",
    keywords: [
      "zero-knowledge file sharing",
      "client-side encryption file sharing",
      "AES-256 encrypted file sharing",
      "browser encrypted file sharing",
      "end-to-end encrypted file upload",
      "how VaultBridge encryption works",
      "privacy focused file sharing",
      "no tracking file sharing"
    ],
    readTime: "9 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "What zero-knowledge actually means in file sharing",
        paragraphs: [
          "Zero-knowledge means the server has zero ability to read, access, or decrypt your files. Unlike traditional encryption where the server holds keys, zero-knowledge systems ensure that keys exist only on the client device \u2014 in your browser's volatile memory.",
          "In VaultBridge, files are encrypted with AES-256-GCM using keys derived from a PIN that never touches the server. Even if our entire infrastructure is compromised, attackers get only random mathematical noise. Your data remains unreadable without the 6-digit PIN held exclusively by you."
        ]
      },
      {
        heading: "The Split-Key Protocol: Partial Key Routing",
        paragraphs: [
          "VaultBridge uses a split-key architecture. The 6-digit access code is divided: the first 3 digits serve as a routing ID (the server uses this to locate the encrypted blob), and the last 3 digits form the decryption PIN (which the server never sees).",
          "When you share a vault link with the code embedded as a URL hash fragment (#code), the hash is processed entirely by the browser and never transmitted to the server. This is privacy by architecture, not privacy by policy."
        ]
      },
      {
        heading: "Why ephemeral storage makes data breaches irrelevant",
        paragraphs: [
          "All VaultBridge vaults have strict lifecycle controls: time-based expiration, download count limits, and burn-after-read auto-destruct. Even if encrypted blobs are intercepted, they decay automatically.",
          "Combined with zero-knowledge encryption, this creates a mathematically unbreakable system: expired encrypted data without keys is useless noise. No identity, no metadata, no recovery. Your privacy is not a policy \u2014 it is physics."
        ]
      }
    ]
  },
  {
    slug: "auto-destruct-file-sharing-burn-after-read",
    title: "Auto-Destruct File Sharing & Burn-After-Read: Complete Guide",
    description: "How auto-destruct and burn-after-read file sharing works. Learn about self-destructing file links, temporary vaults, and expiring file share links for maximum security.",
    excerpt: "A complete guide to auto-destruct file sharing: self-destructing links, burn-after-read, and temporary encrypted vaults for one-time secure delivery.",
    keywords: [
      "auto destruct file sharing",
      "burn after read file sharing",
      "self destruct file link",
      "temporary file sharing link",
      "expiring file share link",
      "one time download file sharing",
      "temporary vault file sharing",
      "secure file sharing with auto delete"
    ],
    readTime: "6 min read",
    lastUpdated: "2026-02-21",
    sections: [
      {
        heading: "What is auto-destruct file sharing?",
        paragraphs: [
          "Auto-destruct file sharing means your files are automatically deleted after a predefined trigger: a time window expires, a download limit is reached, or the recipient reads the content once (burn-after-read). This is the opposite of permanent cloud storage.",
          "VaultBridge offers all three auto-destruct mechanisms. You control the expiration timer (1 hour to 7 days), the maximum number of downloads per file, and whether the vault should self-destruct immediately after the first successful download."
        ]
      },
      {
        heading: "Burn-after-read: One-time secure delivery",
        paragraphs: [
          "Burn-after-read is the most secure sharing mode. The encrypted vault is destroyed the moment the recipient successfully downloads and decrypts the file. No copies remain on the server, no link can be reused.",
          "This is ideal for sending confidential files online: passwords, legal documents, medical records, financial statements, and API keys. One read, then gone forever. The safest way to share files online."
        ]
      },
      {
        heading: "Self-destructing links vs permanent cloud links",
        paragraphs: [
          "A permanent Google Drive or Dropbox link can be forwarded, bookmarked, and accessed indefinitely unless manually revoked. Self-destructing links from VaultBridge have a mathematical expiration built into their lifecycle.",
          "Even if someone intercepts an expired link, the encrypted data has already been purged from the server. Combined with AES-256 encryption and zero-knowledge architecture, self-destructing file links provide defense-in-depth that permanent storage cannot match."
        ]
      }
    ]
  }
];
var blogPostBySlug = blogPosts.reduce((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {});

// shared/seo.ts
var defaultSEO = {
  siteName: "VaultBridge",
  title: "VaultBridge \u2013 Secure Encrypted File Sharing Without Login",
  description: "Share files securely with VaultBridge. End-to-end encrypted file sharing, anonymous uploads, auto-destruct links, and private vault transfer. No login required. Free & open source. The safest way to share files online.",
  keywords: "VaultBridge, VaultBridge secure file sharing, secure file sharing, encrypted file sharing, anonymous file sharing, secure file transfer, private file sharing, temporary file sharing, encrypted file upload, share files securely online, upload files without login, secure file sharing free, encrypted file transfer online, auto destruct file sharing, temporary file share link, secure document sharing, send confidential files online, share files anonymously, encrypted vault file sharing, end to end encrypted file sharing, secure alternative to Google Drive, AES-256 encrypted file sharing, zero-knowledge file sharing, browser encrypted file sharing, self destruct file link, burn after read file sharing, no login file sharing, privacy focused file sharing",
  image: "/og-image.png",
  url: "https://vaultbridge.org",
  type: "website"
};
var staticPageSEO = {
  "/": {
    title: "VaultBridge \u2013 Secure Encrypted File Sharing Without Login | Free & Private",
    description: "Share files securely with VaultBridge. End-to-end AES-256 encrypted file sharing, anonymous uploads, auto-destruct links, private vault transfer, encrypted clipboard sync. No login required. Free & open source. The safest way to share files online.",
    keywords: "VaultBridge, secure file sharing, encrypted file sharing, anonymous file sharing, secure file transfer, private file sharing, temporary file sharing, encrypted file upload, share files securely online free, upload files without login, secure file sharing free, auto destruct file sharing, send confidential files online, encrypted vault file sharing, end to end encrypted file sharing, secure alternative to Google Drive, WeTransfer alternative secure, AES-256 encrypted file sharing, zero-knowledge file sharing, browser encrypted file sharing, no login file sharing, privacy focused file sharing, self destruct file link, temporary vault file sharing, secure document sharing without login, private file transfer online"
  },
  "/upload": {
    title: "Upload & Encrypt Files Securely | Free Encrypted Upload | VaultBridge",
    description: "Upload and encrypt your files with military-grade AES-256-GCM encryption. Set custom expiration times, download limits, and burn-on-read. Create self-destructing secure vaults instantly. No login required. Free encrypted file upload.",
    keywords: "secure file upload, encrypt files online, AES-256 encryption, self-destructing vault, secure file storage, burn after read, encrypted upload, file expiry, download limit, upload files without login, free encrypted upload, encrypted file upload, upload secure files, encrypt and share files, upload confidential files securely, client-side encryption file sharing"
  },
  "/access": {
    title: "Access Secure Vault | Decrypt & Download Files | VaultBridge",
    description: "Enter your 6-digit access code to unlock and download encrypted files. Zero-knowledge decryption happens entirely in your browser. No data is ever exposed to the server.",
    keywords: "access encrypted vault, download encrypted files, secure access code, vault unlock, zero knowledge download, decrypt files, secure file retrieval"
  },
  "/download": {
    title: "Secure File Download | Decrypt & Access Vault | VaultBridge",
    description: "Securely download encrypted files from VaultBridge. End-to-end AES-256 decryption in your browser. Files self-destruct after access limits are reached.",
    keywords: "secure download, encrypted file download, burn on read, self-destructing file, AES-256 decryption, secure vault access"
  },
  "/get-it-mailed": {
    title: "Get it Mailed | Send Files Securely via Email | VaultBridge",
    description: "Send files securely to anyone via email. Files are encrypted with AES-256 and relayed as ephemeral attachments. Zero-knowledge relay \u2014 no files are stored on our servers. No account needed.",
    keywords: "send encrypted files, secure email attachments, email file transfer, encrypted email relay, send files via email, secure file delivery, zero knowledge email, ephemeral file transfer"
  },
  "/clipboard": {
    title: "Secure Clipboard | Encrypted Text Sharing Across Devices | VaultBridge",
    description: "Share passwords, API keys, code snippets, and sensitive text across devices with end-to-end AES-256 encryption. Real-time sync with auto-destruct. No account required.",
    keywords: "encrypted clipboard, secure text sharing, share passwords securely, encrypted notes, cross-device clipboard, secure clipboard sync, AES-256 text encryption, share secrets, share API keys"
  },
  "/live": {
    title: "Live P2P File Transfer | WebRTC Encrypted | VaultBridge",
    description: "Transfer files directly between devices with WebRTC. Real-time P2P connection with end-to-end encryption. No server storage, no upload wait.",
    keywords: "P2P transfer, WebRTC file sharing, direct file transfer, peer-to-peer, real-time transfer, encrypted P2P, no server storage"
  },
  "/success": {
    title: "Vault Created Successfully | VaultBridge",
    description: "Your secure vault has been created. Share the access code or direct link to allow others to download your encrypted files securely."
  },
  "/terms": {
    title: "Terms of Service | VaultBridge",
    description: "Read the terms of service for using VaultBridge secure file sharing platform. Understand your rights and responsibilities.",
    keywords: "terms of service, VaultBridge terms, usage policy, file sharing terms"
  },
  "/privacy": {
    title: "Privacy Policy | VaultBridge",
    description: "Learn how VaultBridge protects your privacy with zero-knowledge architecture, end-to-end encryption, and a strict no-logs policy. Your data stays yours.",
    keywords: "privacy policy, VaultBridge privacy, zero knowledge privacy, no logs policy, data protection, encrypted file sharing privacy"
  },
  "/how-it-works": {
    title: "How VaultBridge Works | End-to-End Encrypted File Sharing Explained",
    description: "Understand the security architecture behind VaultBridge. Learn how AES-256 encryption, split-key access codes, and self-destructing vaults keep your files safe.",
    keywords: "how encryption works, AES-256 explained, zero knowledge architecture, secure file sharing explained, self-destructing vaults, split-key encryption"
  },
  "/security": {
    title: "Security Architecture | VaultBridge",
    description: "Technical security architecture for VaultBridge: encryption model, key flow, file lifecycle, and auto-destruct logic.",
    keywords: "vaultbridge security architecture, client-side encryption, zero-knowledge file sharing, file lifecycle security, auto-destruct logic"
  },
  "/privacy-manifesto": {
    title: "Privacy Manifesto | VaultBridge",
    description: "Why VaultBridge exists: privacy-first architecture, minimal data collection, and user-controlled secure transfer.",
    keywords: "privacy manifesto, privacy-first file sharing, zero tracking philosophy, user controlled security"
  },
  "/roadmap": {
    title: "Public Roadmap | VaultBridge",
    description: "Transparent roadmap for VaultBridge: upcoming security, privacy, and product milestones.",
    keywords: "vaultbridge roadmap, secure file sharing roadmap, privacy product roadmap"
  },
  "/blog": {
    title: "VaultBridge Blog | Privacy and Security Guides",
    description: "Technical articles on secure file transfer, encrypted delivery, anonymous sharing, and lifecycle security controls.",
    keywords: "vaultbridge blog, secure file sharing guides, encrypted transfer best practices, privacy-first file delivery"
  },
  "/secure-file-sharing-free": {
    title: "Secure File Sharing Free | VaultBridge",
    description: "Secure file sharing without login, tracking, or permanent storage. Encrypted transfers with temporary lifecycle controls.",
    keywords: "secure file sharing free, private file sharing, no login file sharing, encrypted secure link sharing"
  },
  "/encrypted-file-transfer": {
    title: "Encrypted File Transfer | VaultBridge",
    description: "Encrypted file transfer with temporary storage and secure access. Built for privacy-conscious sharing.",
    keywords: "encrypted file transfer, secure transfer links, privacy file transfer, zero tracking file sharing"
  },
  "/private-file-sharing": {
    title: "Private File Sharing | VaultBridge",
    description: "Private file sharing for teams and individuals who need secure, temporary, encrypted delivery.",
    keywords: "private file sharing, confidential file transfer, encrypted private upload, secure temporary file storage"
  },
  "/anonymous-file-sharing": {
    title: "Anonymous File Sharing | VaultBridge",
    description: "Share files anonymously with encrypted transfer and temporary retention controls.",
    keywords: "anonymous file sharing, no account file sharing, anonymous encrypted sharing, privacy sharing tool"
  },
  "/free-encrypted-upload": {
    title: "Free Encrypted Upload | VaultBridge",
    description: "Free encrypted upload flow for secure sharing without account friction.",
    keywords: "free encrypted upload, secure encrypted upload, no login encrypted transfer, privacy-first upload"
  },
  "/send-files-securely": {
    title: "Send Files Securely | VaultBridge",
    description: "Send files securely with encrypted transfer, temporary vault lifecycle, and zero tracking defaults.",
    keywords: "send files securely, secure file transfer, encrypted link sharing, temporary secure vault"
  }
};
var blogPostSEO = Object.fromEntries(
  blogPosts.map((post) => [
    `/blog/${post.slug}`,
    {
      title: `${post.title} | VaultBridge Blog`,
      description: post.description,
      keywords: post.keywords.join(", ")
    }
  ])
);
var generatedSEOPages = generateSEOPages();
var pageSEO = {
  ...generatedSEOPages,
  ...staticPageSEO,
  ...blogPostSEO
};
var blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
var publicRoutesForPreRender = [
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
  "/blog",
  ...Object.keys(generatedSEOPages),
  ...blogRoutes
];
function resolveSEO(pathname, overrides = {}) {
  const sanitizedPath = (pathname || "/").split("?")[0].split("#")[0] || "/";
  const basePath = `/${sanitizedPath.split("/")[1] || ""}`;
  const pageConfig = pageSEO[sanitizedPath] || pageSEO[basePath] || {};
  return {
    ...defaultSEO,
    ...pageConfig,
    ...overrides
  };
}

// script/build.ts
var require2 = createRequire(import.meta.url);
var Prerenderer = require2("@prerenderer/prerenderer");
var PuppeteerRenderer = require2("@prerenderer/renderer-puppeteer");
var escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
var replaceTag = (html, pattern, replacement) => {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `${replacement}
</head>`);
};
var applySEOToHtml = (html, seo, canonicalUrl, imageUrl) => {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const keywords = escapeHtml(seo.keywords || "");
  const siteName = escapeHtml(seo.siteName || "VaultBridge");
  let output = html;
  output = replaceTag(output, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  output = replaceTag(
    output,
    /<meta[^>]+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" />`
  );
  if (keywords) {
    output = replaceTag(
      output,
      /<meta[^>]+name=["']keywords["'][^>]*>/i,
      `<meta name="keywords" content="${keywords}" />`
    );
  }
  output = replaceTag(
    output,
    /<link[^>]+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${title}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${imageUrl}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${seo.type || "website"}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:site_name["'][^>]*>/i,
    `<meta property="og:site_name" content="${siteName}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${imageUrl}" />`
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:url["'][^>]*>/i,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  return output;
};
var allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error"
];
async function buildAll() {
  await rm("dist", { recursive: true, force: true });
  console.log("building client...");
  await viteBuild();
  console.log("prerendering static marketing routes for SEO...");
  try {
    await prerenderStatic();
  } catch (err) {
    console.warn("[prerender] \u26A0\uFE0F Skipping prerendering (Chrome/Puppeteer not available in this environment).");
    console.warn("[prerender] SEO will be handled at runtime by server/static.ts fallback.");
  }
  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {})
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));
  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"'
    },
    minify: true,
    external: externals,
    logLevel: "info"
  });
}
async function prerenderStatic() {
  const staticDir = path.resolve("dist/public");
  const routes = publicRoutesForPreRender;
  const origin = process.env.SITE_ORIGIN || "https://vaultbridge.org";
  const prerenderer = new Prerenderer({
    staticDir,
    routes,
    renderer: new PuppeteerRenderer({
      headless: true,
      renderAfterTime: 500
      // wait a moment for app hydration/SEO hook to run
    })
  });
  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);
    await Promise.all(
      renderedRoutes.map(async (rendered) => {
        const normalizedRoute = rendered.route || "/";
        const routePath = normalizedRoute === "/" ? "" : normalizedRoute.startsWith("/") ? normalizedRoute.slice(1) : normalizedRoute;
        const outputPath = rendered.outputPath || path.join(staticDir, routePath, "index.html");
        const routePathWithSlash = routePath ? `/${routePath}` : "/";
        const seo = resolveSEO(routePathWithSlash);
        const canonicalUrl = new URL(routePathWithSlash || "/", origin).toString();
        const imageUrl = seo.image?.startsWith("http") ? seo.image : `${origin}${seo.image || "/og-image.png"}`;
        const htmlWithSeo = applySEOToHtml(rendered.html, seo, canonicalUrl, imageUrl);
        await mkdir(path.dirname(outputPath), { recursive: true });
        await writeFile(outputPath, htmlWithSeo.trim(), "utf-8");
      })
    );
    console.log(`[prerender] wrote ${renderedRoutes.length} routes to ${staticDir}`);
  } catch (err) {
    console.error("[prerender] failed to prerender routes", err);
    throw err;
  } finally {
    try {
      await prerenderer.destroy();
    } catch {
    }
  }
}
buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
