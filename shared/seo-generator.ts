import type { SEOConfig } from "./seo";

export interface SEOLandingContent {
    title: string;
    intro: string;
    explanation: string;
    useCases: string[];
    seoFooter: string;
    slug: string;
}

// =============================================
// PRIMARY SEO KEYWORD ENGINE
// =============================================
// Generates programmatic landing pages from keyword combinations

const modifiers = [
    "secure",
    "encrypted",
    "private",
    "anonymous",
    "free",
];

const baseTerms = [
    "file sharing",
    "file transfer",
    "file upload",
];

// High-intent, feature-based, competitor-targeting, and long-tail keywords
const manualKeywords = [
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
    "private file sharing global",
];

export function generateKeywords(): string[] {
    const keywords: string[] = [];

    // Generate modifiers x baseTerms combinations
    modifiers.forEach((modifier) => {
        baseTerms.forEach((term) => {
            keywords.push(`${modifier} ${term}`);
        });
    });

    // Append all manually curated high-value keywords
    manualKeywords.forEach((manualTerm) => {
        if (!keywords.includes(manualTerm)) {
            keywords.push(manualTerm);
        }
    });

    return keywords;
}

function capitalizeFirstLetters(str: string) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateSEOPages(): Record<string, Partial<SEOConfig>> {
    const keywords = generateKeywords();
    const pages: Record<string, Partial<SEOConfig>> = {};

    keywords.forEach((keyword) => {
        const slug = `/${keyword.replace(/\s+/g, "-")}`;
        const capitalizedKeyword = capitalizeFirstLetters(keyword);

        pages[slug] = {
            title: `${capitalizedKeyword} | VaultBridge – Free & Encrypted`,
            description: `${capitalizedKeyword} with VaultBridge. End-to-end AES-256 encrypted, no login required, auto-destruct links, temporary vaults, zero-knowledge privacy. The safest way to share files online. Free & open source.`,
            keywords: `${keyword}, VaultBridge, secure file sharing, encrypted file transfer, free encrypted upload, no login file sharing, anonymous file upload, temporary file links, self-destructing vault, privacy focused file sharing, zero knowledge, AES-256, share files securely online`,
        };
    });

    return pages;
}

export function generateSEOLandingContent(): Record<string, SEOLandingContent> {
    const keywords = generateKeywords();
    const contentMap: Record<string, SEOLandingContent> = {};

    keywords.forEach((keyword) => {
        const slug = `/${keyword.replace(/\s+/g, "-")}`;
        const capitalizedKeyword = capitalizeFirstLetters(keyword);

        contentMap[slug] = {
            slug,
            title: capitalizedKeyword,
            intro: `VaultBridge provides ${keyword} with privacy-first, zero-knowledge architecture. No login. No tracking. Just end-to-end encrypted security.`,
            explanation: `${capitalizedKeyword} securely with VaultBridge using end-to-end AES-256-GCM encryption. Files are encrypted entirely in your browser before upload, and decryption keys never leave your device. All vaults automatically expire, support burn-after-read, and require no account. Built as a secure alternative to Google Drive, WeTransfer, and Dropbox for users who prioritize privacy and anonymity.`,
            useCases: [
                "Confidential team collaboration and document exchange",
                "Secure sharing of API keys, passwords, and config files for developers",
                "Anonymous file upload and sharing without login or registration",
                "Temporary encrypted delivery with auto-destruct links",
                "Private file transfer for businesses and students",
                "Share sensitive files securely online free",
            ],
            seoFooter: `Start ${keyword} today with VaultBridge. Free, encrypted, anonymous. No login required. AES-256 encryption, temporary vaults, auto-destruct links, and zero-knowledge privacy. The safest way to share files online.`,
        };
    });

    return contentMap;
}
