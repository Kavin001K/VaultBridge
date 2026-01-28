import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const defaultSEO = {
    siteName: 'VaultBridge',
    title: 'VaultBridge | Secure Encrypted File Sharing & Transfer',
    description: 'Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, P2P transfer, zero-knowledge privacy. No account required.',
    keywords: 'secure file transfer, encrypted file sharing, end-to-end encryption, privacy, self-destructing links',
    image: '/og-image.png',
    url: 'https://vaultbridge.io',
    type: 'website',
};

// Page-specific SEO configurations
const pageSEO: Record<string, SEOProps> = {
    '/': {
        title: 'VaultBridge | Secure Encrypted File Sharing & Transfer',
        description: 'Share sensitive files securely with end-to-end AES-256 encryption. Self-destructing vaults, P2P transfer, zero-knowledge privacy. No account required.',
    },
    '/upload': {
        title: 'Upload Files Securely | VaultBridge',
        description: 'Upload and encrypt your files with AES-256 encryption. Set expiration times and download limits. Create self-destructing secure vaults.',
        keywords: 'secure upload, encrypt files, AES-256, self-destructing vault, secure file storage',
    },
    '/access': {
        title: 'Access Secure Vault | VaultBridge',
        description: 'Enter your 6-digit code to access encrypted files. Download securely with end-to-end encryption. Zero-knowledge vault access.',
        keywords: 'access vault, download encrypted files, secure access, vault code',
    },
    '/live': {
        title: 'Live P2P File Transfer | VaultBridge',
        description: 'Transfer files directly between devices with WebRTC. Real-time P2P connection with end-to-end encryption. No server storage.',
        keywords: 'P2P transfer, WebRTC file sharing, direct file transfer, peer-to-peer, real-time transfer',
    },
    '/success': {
        title: 'Vault Created Successfully | VaultBridge',
        description: 'Your secure vault has been created. Share the access code or link to allow others to download your encrypted files.',
    },
    '/terms': {
        title: 'Terms of Service | VaultBridge',
        description: 'Read the terms of service for using VaultBridge secure file sharing platform.',
    },
    '/privacy': {
        title: 'Privacy Policy | VaultBridge',
        description: 'Learn how VaultBridge protects your privacy with zero-knowledge architecture and end-to-end encryption.',
    },
    '/how-it-works': {
        title: 'How It Works | VaultBridge',
        description: 'Learn how VaultBridge provides secure, encrypted file sharing with self-destructing vaults and P2P transfers.',
    },
};

export function useSEO(customSEO?: SEOProps) {
    const [location] = useLocation();

    useEffect(() => {
        // Get page-specific SEO or use defaults
        const basePath = '/' + location.split('/')[1];
        const pageConfig = pageSEO[basePath] || pageSEO[location] || {};

        const seo = {
            ...defaultSEO,
            ...pageConfig,
            ...customSEO,
        };

        // Update document title
        document.title = seo.title || defaultSEO.title;

        // Helper to update or create meta tag
        const updateMeta = (selector: string, attribute: string, content: string) => {
            let element = document.querySelector(selector) as HTMLMetaElement;
            if (!element) {
                element = document.createElement('meta');
                const [attr, value] = selector.replace('meta[', '').replace(']', '').split('=');
                element.setAttribute(attr, value?.replace(/"/g, '') || '');
                document.head.appendChild(element);
            }
            element.setAttribute(attribute, content);
        };

        // Update meta tags
        updateMeta('meta[name="description"]', 'content', seo.description || defaultSEO.description);
        updateMeta('meta[name="keywords"]', 'content', seo.keywords || defaultSEO.keywords);

        // Open Graph
        updateMeta('meta[property="og:title"]', 'content', seo.title || defaultSEO.title);
        updateMeta('meta[property="og:description"]', 'content', seo.description || defaultSEO.description);
        updateMeta('meta[property="og:url"]', 'content', `${defaultSEO.url}${location}`);
        updateMeta('meta[property="og:image"]', 'content', seo.image || defaultSEO.image);
        updateMeta('meta[property="og:type"]', 'content', seo.type || defaultSEO.type);

        // Twitter
        updateMeta('meta[name="twitter:title"]', 'content', seo.title || defaultSEO.title);
        updateMeta('meta[name="twitter:description"]', 'content', seo.description || defaultSEO.description);
        updateMeta('meta[name="twitter:image"]', 'content', seo.image || defaultSEO.image);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = `${defaultSEO.url}${location}`;

    }, [location, customSEO]);
}

// SEO component for declarative usage
export function SEO({ title, description, keywords, image, url, type }: SEOProps) {
    useSEO({ title, description, keywords, image, url, type });
    return null;
}

export default SEO;
