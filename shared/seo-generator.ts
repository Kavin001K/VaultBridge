import type { SEOConfig } from "./seo";

export interface SEOLandingContent {
    title: string;
    intro: string;
    explanation: string;
    useCases: string[];
    seoFooter: string;
    slug: string;
}

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

export function generateKeywords(): string[] {
    const keywords: string[] = [];

    // Generate modifiers x baseTerms combinations
    modifiers.forEach((modifier) => {
        baseTerms.forEach((term) => {
            keywords.push(`${modifier} ${term}`);
        });
    });

    // Add the explicit highly-ranked long-tail manual requests from the user
    const manualExpansions = [
        "secure file sharing free",
        "encrypted file upload",
        "private file sharing free",
        "anonymous file upload free",
        "secure file transfer free",
    ];

    manualExpansions.forEach((manualTerm) => {
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
            title: `${capitalizedKeyword} | VaultBridge`,
            description: `${capitalizedKeyword} with VaultBridge. No login required. Secure encrypted transfer with zero tracking. Built for privacy-focused users.`,
            keywords: `${keyword}, secure file transfer, encrypted file sharing, free encrypted upload, no login file sharing`,
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
            intro: `VaultBridge provides ${keyword} with privacy-first architecture.`,
            explanation: `${capitalizedKeyword} securely with VaultBridge using end-to-end encryption. Files remain private, automatically expire, and require no account. Built for users who need temporary, zero-tracking storage.`,
            useCases: [
                "Confidential team collaboration",
                "Secure document exchange",
                "Privacy-first file transfers",
            ],
            seoFooter: `Start ${keyword} today. VaultBridge offers no-login encryption, temporary file storage, and minimal data collection.`,
        };
    });

    return contentMap;
}
