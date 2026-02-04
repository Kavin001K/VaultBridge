import { r as a, j as e, e as o, g as l, B as d, m as i, L as u, ab as p } from "./index-Bq8HZXb3.js";
import { A as m } from "./arrow-left-55-mmipE.js";
import { C as y } from "./chevron-up-DcVObDdN.js";
function w() {
  const [n, s] = a.useState(false);
  a.useEffect(() => {
    const t = () => {
      s(window.scrollY > 500);
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []);
  const c = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, r = [{ id: "introduction", title: "1. Introduction and Scope", content: `
### About This Policy

This Privacy Policy describes how VaultBridge ("Company," "we," "us," or "our") collects, uses, discloses, and protects information in connection with the VaultBridge platform, website, applications, and services (collectively, the "Service").

This Policy applies to:
- The VaultBridge website (vaultbridge.app and related domains)
- The VaultBridge web application
- Any mobile or desktop applications we may offer
- APIs and developer tools
- Customer support communications
- Marketing communications (if you opt in)

### Who We Are

VaultBridge is a privacy-focused technology company dedicated to providing secure, encrypted file transfer services. Our mission is to give individuals and organizations the tools they need to share sensitive information without sacrificing privacy or security.

We are data controllers for information processed through the Service, meaning we determine the purposes and means of processing personal data collected through VaultBridge.

### Agreement to This Policy

By accessing or using the Service, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with our practices, you should not use the Service.
            ` }, { id: "philosophy", title: "2. Our Privacy Philosophy", content: `
### Privacy by Design

VaultBridge embodies the principle of "privacy by design," meaning that privacy considerations are integrated into every aspect of our system architecture, not added as an afterthought. Key elements of our privacy-first approach include:

**Zero-Knowledge Encryption**: All file encryption and decryption occurs in your browser. We never receive, process, or store encryption keys. We literally cannot access your file contents.

**Minimal Data Collection**: We collect only the information strictly necessary to provide the Service. We do not collect data for advertising, profiling, or purposes unrelated to core functionality.

**Data Minimization**: We retain data only for the minimum time necessary. Vaults are automatically deleted upon expiration or download limit fulfillment.

**No Tracking**: We do not use advertising trackers, social media pixels, or other surveillance technologies designed to profile users across the web.

**Transparency**: We are committed to being completely transparent about our data practices.

### What Makes Us Different

Unlike many cloud storage and file sharing services, VaultBridge:

- **Does Not Scan Your Files**: Many services scan uploaded files for "content moderation," advertising, or other purposes. We cannot scan your files because we cannot decrypt them.
- **Does Not Build Profiles**: We do not create user profiles based on uploaded content, file types, or sharing patterns.
- **Does Not Sell Data**: We do not sell, rent, or trade your personal information or any data derived from your use of the Service.
- **Does Not Require Accounts**: You can use VaultBridge without creating an account, eliminating the need for email verification, password storage, and account-related data collection.
- **Does Not Retain After Deletion**: When your Vault expires or reaches its download limit, all associated data is permanently deleted with no backups.
            ` }, { id: "collect", title: "3. Information We Collect", content: `
### Categories of Information

We collect information in three ways:
1. Information you provide directly
2. Information collected automatically
3. Information from third parties

### Information You Provide

**Encrypted File Data**
When you upload files to VaultBridge, your browser:
- Generates a random encryption key
- Encrypts your files using AES-256-GCM
- Encrypts file metadata (names, types, sizes)
- Transmits only encrypted data to our servers

We receive and store:
- Encrypted file chunks (which we cannot decrypt)
- Encrypted metadata (which we cannot decrypt)

We do NOT receive or store:
- Unencrypted file contents
- Unencrypted file names, types, or other metadata
- Encryption keys

**Vault Configuration**
When creating a Vault, you select configuration options:
- Expiration time (1 hour to 7 days)
- Download limit (1 to 100 downloads)
- Access mode (Split Code or Direct Link)

We store these configuration settings to enforce your preferences.

**Access Code Lookup IDs**
When using Split-Code access:
- The full 6-digit code is split into Lookup ID (first 3 digits) and PIN (last 3 digits)
- Only the Lookup ID is transmitted to our servers
- The PIN never leaves your browser

**Email Addresses (Optional Feature)**
If you choose to use our "Email Link" feature:
- We collect the recipient's email address
- We use it only to send the access information
- We delete the email address after sending

### Information Collected Automatically

**Server Logs**
When you access the Service, our servers may log:
- IP address
- Request URL
- HTTP method
- Response status code
- User agent string
- Timestamp

We use server logs for:
- Security and abuse prevention
- Rate limiting
- Debugging and troubleshooting
- Aggregate analytics

Server logs are retained for a limited period (typically 7-30 days) and then deleted.

**Performance and Error Data**
We may collect anonymous performance and error data:
- Page load times
- API response times
- Error messages and stack traces
- Resource utilization metrics

**Device and Browser Information**
We may collect:
- Browser type and version
- Operating system
- Device type (desktop, mobile, tablet)
- Screen resolution
- Language preferences
            ` }, { id: "not-collect", title: "4. Information We Do NOT Collect", content: `
### What We Cannot Access

Due to our zero-knowledge architecture, VaultBridge cannot access, collect, store, or process:

**File Contents**
- We cannot see what files you upload
- We cannot read documents, view images, or play media
- We cannot scan files for any purpose
- All file data we store is encrypted with keys we don't have

**File Names and Metadata**
- Original file names are encrypted before upload
- File types (MIME types) are encrypted
- File creation dates and other metadata are encrypted
- We cannot identify files by name, type, or content

**Complete Access Codes**
- We only receive the Lookup ID (first 3 digits)
- The PIN (last 3 digits) never reaches our servers
- We cannot derive the encryption key without the PIN

**Encryption Keys**
- Keys are generated in your browser
- Keys are never transmitted to our servers
- We cannot decrypt your files under any circumstances

**Passwords**
- Optional vault passwords are used locally
- Password-derived keys never leave your browser
- We cannot recover or reset passwords

### What We Choose Not To Collect

In addition to what we cannot technically access, we also choose not to collect:

- **Advertising Data**: We do not use advertising networks or display ads
- **Social Media Integration**: We do not integrate social media tracking pixels
- **Extensive Usage Tracking**: We do not track detailed user journeys or click behavior
- **Location Data**: We do not request device location or use GPS
- **Contact Lists**: We do not request access to contacts or import address books
            ` }, { id: "use", title: "5. How We Use Information", content: `
### Primary Purposes

We use collected information for the following primary purposes:

**Providing the Service**
- Storing and delivering encrypted files
- Processing Vault configurations (expiration, download limits)
- Enabling access through codes and links
- Deleting Vaults upon expiration or limit fulfillment

**Security and Abuse Prevention**
- Preventing and detecting fraud and abuse
- Protecting against security threats
- Rate limiting to prevent brute-force attacks
- Identifying and blocking malicious actors

**Service Improvement**
- Analyzing aggregate usage patterns
- Identifying and fixing bugs
- Optimizing performance
- Developing new features

**Communication**
- Responding to support inquiries
- Sending security notifications
- Providing service announcements
- Delivering transactional emails (access links)

### Legal Bases (GDPR)

For users in the European Economic Area (EEA), we rely on:

- **Contractual Necessity**: Processing necessary to provide the Service
- **Legitimate Interests**: Processing for security, fraud prevention, and service improvement
- **Legal Obligations**: Processing required to comply with applicable laws
- **Consent**: Where we rely on consent, you may withdraw it at any time

### What We Do NOT Use Information For

We do not use collected information for:
- Advertising or marketing to third parties
- Selling or renting to data brokers
- Building user profiles for commercial purposes
- Political targeting or manipulation
- Discriminatory pricing or treatment
- Any purpose inconsistent with this Privacy Policy
            ` }, { id: "share", title: "6. How We Share Information", content: `
### General Principle: Minimal Sharing

We do not sell, rent, trade, or otherwise share your personal information with third parties for their commercial purposes. We share information only in the limited circumstances described below.

### Service Providers

We may share information with third-party service providers who assist us in operating the Service:

**Cloud Infrastructure**
- Encrypted file storage
- Content delivery
- Database hosting

Our infrastructure providers store only encrypted data and cannot decrypt your files.

**Email Delivery**
If you use the email feature, we share recipient email addresses with:
- Email delivery services
- Used only to deliver your message
- Deleted after delivery

**Security Services**
We may share IP addresses and usage patterns with:
- DDoS protection services
- Security monitoring tools
- Used only for security purposes

### Legal Requirements

We may disclose information if required by law, regulation, legal process, or governmental request:

**Scope of Potential Disclosure**
Due to our zero-knowledge architecture, we can only provide:
- Server logs (IP addresses, timestamps)
- Encrypted data (which is useless without keys we don't have)
- Vault metadata (encrypted, non-content information)

**What We Cannot Disclose**
We cannot provide:
- Decrypted file contents
- Encryption keys
- Complete access codes
- File names or types

**Notification**
Where legally permitted, we will attempt to notify affected users of legal demands for their information.

### Business Transfers

In the event of a merger, acquisition, or sale of assets:
- User information may be transferred as part of the transaction
- The acquiring entity would be bound by this Privacy Policy
- We would notify users before information is transferred or becomes subject to a different privacy policy

### Aggregated and De-Identified Data

We may share aggregated, anonymized data that cannot identify individuals:
- Service usage statistics
- Security trends
- Performance benchmarks

This data contains no personal information or file-related details.
            ` }, { id: "zero-knowledge", title: "7. Zero-Knowledge Architecture Explained", content: `
### What Zero-Knowledge Means

"Zero-knowledge" in the context of VaultBridge means that we have zero knowledge of\u2014and therefore cannot access\u2014your encrypted file contents. This is not a policy choice but a technical reality built into our architecture.

### How Zero-Knowledge Works

**Client-Side Key Generation**
When you create a Vault:
1. Your browser generates a random 256-bit AES key
2. This key exists only in your browser's memory
3. The key is never transmitted to our servers
4. Without this key, your files cannot be decrypted

**Client-Side Encryption**
Before any data leaves your browser:
1. Files are encrypted using AES-256-GCM
2. File names and metadata are encrypted
3. Unique random IVs are generated for each chunk
4. Only encrypted data is transmitted to our servers

**Key Distribution**
The encryption key is distributed only through:
- **Direct Link Mode**: Key is embedded in the URL fragment (after #), which browsers never send to servers
- **Split-Code Mode**: Key is derived from the PIN (last 3 digits), which never leaves your browser

**Client-Side Decryption**
When a recipient accesses a Vault:
1. Their browser receives encrypted data
2. The key is obtained from the URL fragment or derived from the PIN
3. Decryption occurs entirely in their browser
4. Decrypted files never exist on our servers

### Mathematical Guarantee

The zero-knowledge property is mathematically guaranteed:
- AES-256 encryption is considered computationally unbreakable with current technology
- Without the key, the encrypted data is indistinguishable from random noise
- No amount of computing power can decrypt the data without the key
- We do not possess the keys, so we cannot perform decryption

### Practical Implications

**What This Means for You:**
- Your files are protected from VaultBridge, hackers, and anyone who might access our servers
- Even if our servers were completely compromised, your files would remain encrypted
- Law enforcement requests cannot compel us to decrypt files we cannot decrypt

**What This Means for VaultBridge:**
- We cannot help if you lose your access code or encryption key
- We cannot scan files for prohibited content
- We cannot perform data recovery for lost vaults
- We rely on users to report abuse rather than proactive scanning
            ` }, { id: "security", title: "8. Encryption and Security Measures", content: `
### Encryption Standards

VaultBridge employs industry-leading encryption standards:

**File Encryption: AES-256-GCM**
- Algorithm: Advanced Encryption Standard (AES)
- Key Size: 256 bits
- Mode: Galois/Counter Mode (GCM)
- Properties: Provides both confidentiality and integrity

AES-256-GCM is approved by NIST and used by governments, financial institutions, and security-conscious organizations worldwide.

**Key Derivation: PBKDF2**
For deriving keys from PINs and passwords:
- Algorithm: Password-Based Key Derivation Function 2 (PBKDF2)
- Hash: HMAC-SHA256
- Iterations: 100,000 (for PINs), 600,000 (for passwords)
- Salt: Random, unique per vault

**Random Number Generation**
- Source: Web Crypto API (crypto.getRandomValues())
- Quality: Cryptographically secure pseudorandom number generator (CSPRNG)

### Infrastructure Security

**Transport Security**
- TLS 1.3 (or TLS 1.2 with strong cipher suites)
- Certificate pinning where applicable
- HSTS (HTTP Strict Transport Security)
- Perfect forward secrecy

**Application Security**
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: no-referrer
- Regular security updates and patches

**Infrastructure Protection**
- DDoS mitigation
- Web application firewall (WAF)
- Intrusion detection systems
- Regular vulnerability scanning

### Security Practices

**Secure Development**
- Security-focused code review
- Automated security testing
- Dependency vulnerability scanning
- Security training for team members

**Access Control**
- Principle of least privilege
- Multi-factor authentication for administrative access
- Regular access reviews
- Separation of duties

### Limitations

While we implement robust security measures:
- No system is perfectly secure
- Security depends partly on your practices (protecting access codes, using secure devices)
- New vulnerabilities may be discovered
- We commit to promptly addressing any security issues
            ` }, { id: "retention", title: "9. Data Retention and Deletion", content: `
### Automatic Vault Deletion

VaultBridge automatically and permanently deletes Vault data:

**Expiration-Based Deletion:**
- Vaults are deleted when the user-defined expiration time is reached
- Expiration options range from 1 hour to 7 days
- A background cleanup process runs regularly to process expirations

**Download-Limit Deletion (Burn-on-Read):**
- Vaults are deleted immediately when the download limit is reached
- If set to 1 download, the vault is deleted after a single successful download
- This deletion is synchronous and occurs before the download completes

### What Gets Deleted

Upon Vault deletion:

**Permanently Deleted:**
- All encrypted file chunks
- Encrypted metadata
- Vault configuration records
- Chunk records and storage references

**Not Retained:**
- We do not maintain backups of deleted Vaults
- We do not keep copies "just in case"
- Deletion is immediate and irreversible

### Server Log Retention

**Access Logs:**
- Retained for 7-30 days
- Used for security and abuse prevention
- Automatically purged after retention period

**Error Logs:**
- Retained for 30-90 days
- Used for debugging and improvement
- Automatically purged after retention period

### Email Address Retention

**Transactional Emails (Link Delivery):**
- Recipient email addresses deleted immediately after sending
- Sender email addresses retained only for delivery confirmation

**Support Inquiries:**
- Retained for the duration of the support relationship
- Deleted upon request or after reasonable inactivity period

### Your Deletion Rights

You may request deletion of personal information we hold:
- Email: privacy@vaultbridge.app
- We will process requests within 30 days

Note: We cannot delete what we don't have\u2014encrypted file contents are deleted automatically, and we don't retain encryption keys.
            ` }, { id: "rights", title: "10. Your Rights and Choices", content: `
### General Rights

Depending on your jurisdiction, you may have the following rights:

**Right to Access:**
Request a copy of personal information we hold about you.

**Right to Rectification:**
Request correction of inaccurate personal information.

**Right to Erasure:**
Request deletion of personal information.

**Right to Restriction:**
Request limitation of processing of personal information.

**Right to Portability:**
Request a machine-readable copy of personal information.

**Right to Object:**
Object to certain processing of personal information.

**Right to Withdraw Consent:**
Withdraw consent where processing is based on consent.

### Exercising Your Rights

To exercise your rights:

**Email:** privacy@vaultbridge.app
**Subject Line:** Privacy Rights Request

Please include:
- Clear description of your request
- Information to help us identify any data we hold
- Proof of identity (to prevent unauthorized access)

We will respond within 30 days (or sooner if required by applicable law).

### Choices You Can Make

**Vault Configuration**
You control:
- Expiration time
- Download limit
- Access mode (Split Code vs. Direct Link)
- Optional password protection

**Information Sharing**
You control:
- Whether to use the Email Link feature
- Whether to contact support
- Whether to provide feedback

**Browser Settings**
You control:
- Cookie settings
- JavaScript settings
- Service Worker settings

### Limitations

Some rights may be limited:
- We cannot delete encrypted files before expiration (we cannot identify your files)
- We cannot provide file contents (we cannot decrypt them)
- We cannot correct file metadata (we cannot read it)
            ` }, { id: "international", title: "11. International Data Transfers", content: `
### Global Operations

VaultBridge operates globally and may process information in multiple jurisdictions. By using the Service, you consent to the transfer of information to jurisdictions that may have different data protection laws than your own.

### Transfer Mechanisms

For transfers from the EEA, UK, or other regions requiring appropriate safeguards, we rely on:

**Standard Contractual Clauses (SCCs):**
We use EU-approved standard contractual clauses where required.

**Adequacy Decisions:**
We may transfer to countries deemed adequate by relevant authorities.

**Other Mechanisms:**
We comply with other legally recognized transfer mechanisms as applicable.

### Protections

Regardless of where information is processed:
- We apply consistent security standards
- We maintain the protections described in this Policy
- Encryption protects your files regardless of geographic location

### Important Note

Even if data is transferred internationally:
- Encrypted file data remains protected by encryption
- We cannot decrypt files regardless of jurisdiction
- Legal requests cannot compel decryption we cannot perform
            ` }, { id: "children", title: "12. Children's Privacy", content: `
### Age Restriction

VaultBridge is not intended for use by children under the age of 18 (or the age of legal majority in their jurisdiction).

### No Knowing Collection

We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child, we will delete it promptly.

### Parental Notification

If you believe your child has provided personal information to VaultBridge, please contact us at privacy@vaultbridge.app, and we will take steps to delete such information.

### COPPA Compliance

VaultBridge complies with the Children's Online Privacy Protection Act (COPPA) and does not knowingly collect personal information from children under 13.
            ` }, { id: "cookies", title: "13. Cookies and Tracking Technologies", content: `
### Our Minimal Approach

VaultBridge minimizes the use of cookies and tracking technologies.

### What We Do NOT Use

We do NOT use:
- Third-party advertising cookies
- Social media tracking pixels
- Cross-site tracking cookies
- Fingerprinting technologies
- Persistent identifiers for tracking

### What We May Use

**Essential Cookies:**
We may use strictly necessary cookies for:
- Security (CSRF protection)
- Session management (if account features are introduced)
- Preference storage

**Local Storage (Limited):**
We may use browser local storage for:
- User preferences
- Temporary state management

These are not used for tracking and do not contain personal information.

### IndexedDB for Resumable Uploads

We use IndexedDB to store:
- Encrypted upload progress data
- Enabling resume of interrupted uploads
- Automatically cleared after upload completion

This data remains on your device and is not transmitted to our servers.

### Service Workers

We use Service Workers for:
- Streaming large file downloads
- Improving performance
- No tracking functionality

### Your Controls

You can control cookies and storage through:
- Browser settings
- Private/incognito browsing
- Clearing site data

Note: Blocking essential cookies may impair functionality.
            ` }, { id: "gdpr", title: "14. Legal Basis for Processing (GDPR)", content: `
### Applicability

This section applies to users in the European Economic Area (EEA), United Kingdom, and other jurisdictions that require a legal basis for processing personal data.

### Legal Bases We Rely On

**Contractual Necessity (Article 6(1)(b))**
Processing necessary to provide the Service:
- Storing encrypted files
- Processing vault configurations
- Enabling access through codes and links
- Deleting vaults as configured

**Legitimate Interests (Article 6(1)(f))**
Processing for our legitimate interests where not overridden by your rights:
- Security and fraud prevention
- Rate limiting and abuse prevention
- Service maintenance and improvement
- Investigating and responding to violations

**Legal Obligation (Article 6(1)(c))**
Processing required by law:
- Responding to valid legal process
- Compliance with regulatory requirements
- Taxation and accounting obligations

**Consent (Article 6(1)(a))**
Processing based on your consent:
- Marketing communications (if applicable)
- Optional features requiring additional data
- Research participation

You may withdraw consent at any time by contacting privacy@vaultbridge.app.

### Your GDPR Rights

As an EEA resident, you have:
- Right of Access (Article 15)
- Right to Rectification (Article 16)
- Right to Erasure (Article 17)
- Right to Restriction (Article 18)
- Right to Data Portability (Article 20)
- Right to Object (Article 21)
- Rights Related to Automated Decision-Making (Article 22)

### Making a Complaint

If you believe we have violated your rights, you may lodge a complaint with your local Data Protection Authority (DPA).
            ` }, { id: "ccpa", title: "15. California Privacy Rights (CCPA)", content: `
### Applicability

This section applies to California residents and supplements the information in this Privacy Policy.

### Categories of Personal Information Collected

In the preceding 12 months, we may have collected:
- **Identifiers**: IP addresses, email addresses (limited)
- **Personal Information**: Contact information (if provided)
- **Internet Activity**: Browsing history on our site (server logs)
- **Geolocation**: Approximate location from IP (limited)

We do NOT collect:
- Sensory Data (audio, video)
- Professional Information
- Protected Classifications
- Commercial Information
- Biometric Data
- Inferences

### Information Sharing

In the preceding 12 months, we have:
- **NOT sold** personal information
- **NOT shared** personal information for cross-context behavioral advertising
- Disclosed information to service providers as described in this Policy

### Your CCPA Rights

As a California resident, you have:

**Right to Know:**
Request disclosure of categories and specific pieces of personal information collected.

**Right to Delete:**
Request deletion of personal information.

**Right to Correct:**
Request correction of inaccurate personal information.

**Right to Opt-Out:**
Opt out of the sale or sharing of personal information. (We do not sell or share personal information.)

**Right to Non-Discrimination:**
You will not be discriminated against for exercising your rights.

### Exercising Your Rights

Submit requests to: privacy@vaultbridge.app

We will verify your identity before processing requests.
            ` }, { id: "breach", title: "16. Data Breach Response", content: `
### Our Commitment

Despite our security measures, no system is immune to breaches. If a data breach occurs:

### Our Response Process

**Detection and Containment:**
- Immediately identify and contain the breach
- Preserve evidence for investigation
- Assess scope and impact

**Investigation:**
- Determine what data was affected
- Identify how the breach occurred
- Assess risk to affected individuals

**Notification:**
- Notify affected individuals promptly
- Notify regulatory authorities as required by law
- Provide clear information about the breach and recommended actions

**Remediation:**
- Fix the vulnerability that caused the breach
- Implement additional safeguards
- Update policies and procedures as needed

### Limitations on Impact

Due to our zero-knowledge architecture:
- Encrypted file contents cannot be compromised without encryption keys
- A breach of our servers would not expose decrypted files
- The impact of a breach is limited to non-encrypted data

### Your Role

To minimize breach impact:
- Use strong, unique passwords (for optional password protection)
- Do not share access codes unnecessarily
- Monitor for suspicious activity
- Report any security concerns promptly
            ` }, { id: "changes", title: "17. Changes to This Policy", content: `
### Updates

We may update this Privacy Policy from time to time. When we make changes:

**Material Changes:**
- Post prominent notice on the Service
- Update the "Last Updated" date
- Send email notification where possible and appropriate

**Non-Material Changes:**
- Update the "Last Updated" date
- Post updated Policy on the Service

### Review

We encourage you to review this Privacy Policy periodically.

### Continued Use

Your continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.
            ` }, { id: "contact", title: "18. Contact Information", content: `
### Privacy-Related Inquiries

For privacy-related questions, concerns, or requests:

**Email:** privacy@vaultbridge.app
**Subject Line:** Privacy Inquiry

Please include:
- Clear description of your inquiry
- Contact information for our response
- Any relevant details

### Other Contacts

**General Inquiries:** hello@vaultbridge.app
**Security Issues:** security@vaultbridge.app
**Abuse Reports:** abuse@vaultbridge.app
**Legal:** legal@vaultbridge.app

### Response Time

We aim to respond to all inquiries within:
- Privacy requests: 30 days (or sooner if required by law)
- General inquiries: 5 business days
- Security issues: 24-48 hours

---

## Summary of Key Points

1. **Zero-Knowledge**: We cannot access your encrypted files\u2014ever.
2. **Minimal Collection**: We collect only what's necessary to provide the Service.
3. **No Selling**: We never sell your personal information.
4. **No Advertising**: We don't use your data for advertising.
5. **Automatic Deletion**: Vaults are permanently deleted upon expiration or download limit.
6. **Strong Encryption**: AES-256-GCM encryption protects your files.
7. **Your Control**: You control vault settings, access, and who receives access codes.
8. **Your Rights**: You have rights to access, correct, delete, and port your data.
9. **Transparency**: We're committed to clear, honest communication about our practices.
10. **Security First**: We implement robust security measures to protect the Service.
            ` }];
  return e.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col bg-background", children: [e.jsx("div", { className: "fixed inset-0 grid-bg opacity-30" }), e.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/5", children: e.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-4 flex items-center justify-between", children: [e.jsx(o, { href: "/", children: e.jsxs("div", { className: "flex items-center gap-3 cursor-pointer", children: [e.jsx("div", { className: "w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30", children: e.jsx(l, { className: "w-5 h-5 text-primary" }) }), e.jsxs("h1", { className: "text-xl font-bold font-mono tracking-tight", children: ["VAULT", e.jsx("span", { className: "text-primary", children: "BRIDGE" })] })] }) }), e.jsx(o, { href: "/", children: e.jsxs(d, { variant: "ghost", className: "gap-2", children: [e.jsx(m, { className: "w-4 h-4" }), "Back Home"] }) })] }) }), e.jsxs("main", { className: "relative z-10 flex-1 max-w-4xl mx-auto px-6 py-12", children: [e.jsxs(i.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "mb-12 text-center", children: [e.jsx("div", { className: "inline-flex items-center gap-2 mb-6", children: e.jsx(u, { className: "w-8 h-8 text-primary" }) }), e.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Privacy Policy" }), e.jsx("p", { className: "text-muted-foreground", children: "Last Updated: January 28, 2026" }), e.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Version 2.0.0" })] }), e.jsx("div", { className: "glass-card p-6 mb-12 border border-emerald-500/30 bg-emerald-500/5", children: e.jsxs("div", { className: "flex items-start gap-4", children: [e.jsx(p, { className: "w-8 h-8 text-emerald-400 flex-shrink-0" }), e.jsxs("div", { children: [e.jsx("h2", { className: "text-lg font-bold text-emerald-400 mb-3", children: "Our Commitment to Privacy" }), e.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "VaultBridge is built on a fundamental respect for your privacy. Unlike many online services, we have designed VaultBridge from the ground up with privacy as the primary consideration, not an afterthought. Our zero-knowledge architecture means that we literally cannot access or view your files\u2014not just that we choose not to, but that we are technically incapable of doing so." })] })] }) }), e.jsxs("div", { className: "glass-card p-6 mb-12", children: [e.jsx("h2", { className: "text-lg font-bold mb-4", children: "Table of Contents" }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: r.map((t) => e.jsx("a", { href: `#${t.id}`, className: "text-sm text-muted-foreground hover:text-primary transition-colors py-1", children: t.title }, t.id)) })] }), e.jsx("div", { className: "space-y-12", children: r.map((t, h) => e.jsxs(i.section, { id: t.id, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, viewport: { once: true }, className: "scroll-mt-24", children: [e.jsx("h2", { className: "text-2xl font-bold mb-6 text-primary", children: t.title }), e.jsx("div", { className: "prose prose-invert max-w-none", children: e.jsx("div", { className: "text-muted-foreground leading-relaxed space-y-4", dangerouslySetInnerHTML: { __html: t.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/### (.*?)$/gm, '<h3 class="text-lg font-semibold text-foreground mt-6 mb-3">$1</h3>').replace(/- (.*?)$/gm, '<li class="ml-4">$1</li>').split(`

`).join('</p><p class="mt-4">') } }) })] }, t.id)) })] }), n && e.jsx(i.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, onClick: c, className: "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", children: e.jsx(y, { className: "w-5 h-5" }) }), e.jsx("footer", { className: "relative z-10 py-8 border-t border-white/5", children: e.jsxs("div", { className: "max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [e.jsxs("div", { className: "flex items-center gap-6 text-sm text-muted-foreground", children: [e.jsx(o, { href: "/terms", className: "hover:text-foreground transition-colors", children: "Terms of Service" }), e.jsx(o, { href: "/privacy", className: "text-primary", children: "Privacy Policy" }), e.jsx(o, { href: "/how-it-works", className: "hover:text-foreground transition-colors", children: "How It Works" })] }), e.jsx("p", { className: "text-xs text-muted-foreground/60", children: "\xA9 2026 VaultBridge. All rights reserved." })] }) })] });
}
export {
  w as default
};
