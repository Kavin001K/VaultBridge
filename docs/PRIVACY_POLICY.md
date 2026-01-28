# VaultBridge Privacy Policy

**Last Updated:** January 28, 2026  
**Effective Date:** January 28, 2026  
**Version:** 2.0.0

---

## COMMITMENT TO PRIVACY

VaultBridge is built on a fundamental respect for your privacy. Unlike many online services, we have designed VaultBridge from the ground up with privacy as the primary consideration, not an afterthought. Our zero-knowledge architecture means that we literally cannot access or view your files—not just that we choose not to, but that we are technically incapable of doing so.

This Privacy Policy explains our data practices in complete transparency. We believe you deserve to understand exactly what information is collected, how it is used, and what protections are in place to safeguard your privacy.

---

## TABLE OF CONTENTS

1. [Introduction and Scope](#1-introduction-and-scope)
2. [Our Privacy Philosophy](#2-our-privacy-philosophy)
3. [Information We Collect](#3-information-we-collect)
4. [Information We Do Not Collect](#4-information-we-do-not-collect)
5. [How We Use Information](#5-how-we-use-information)
6. [How We Share Information](#6-how-we-share-information)
7. [Zero-Knowledge Architecture Explained](#7-zero-knowledge-architecture-explained)
8. [Encryption and Security Measures](#8-encryption-and-security-measures)
9. [Data Retention and Deletion](#9-data-retention-and-deletion)
10. [Your Rights and Choices](#10-your-rights-and-choices)
11. [International Data Transfers](#11-international-data-transfers)
12. [Children's Privacy](#12-childrens-privacy)
13. [Third-Party Services](#13-third-party-services)
14. [Cookies and Tracking Technologies](#14-cookies-and-tracking-technologies)
15. [Legal Basis for Processing (GDPR)](#15-legal-basis-for-processing-gdpr)
16. [California Privacy Rights (CCPA)](#16-california-privacy-rights-ccpa)
17. [Other Regional Privacy Rights](#17-other-regional-privacy-rights)
18. [Data Breach Response](#18-data-breach-response)
19. [Changes to This Policy](#19-changes-to-this-policy)
20. [Contact Information](#20-contact-information)

---

## 1. INTRODUCTION AND SCOPE

### 1.1 About This Policy

This Privacy Policy describes how VaultBridge ("Company," "we," "us," or "our") collects, uses, discloses, and protects information in connection with the VaultBridge platform, website, applications, and services (collectively, the "Service").

This Policy applies to:

- The VaultBridge website (vaultbridge.app and related domains)
- The VaultBridge web application
- Any mobile or desktop applications we may offer
- APIs and developer tools
- Customer support communications
- Marketing communications (if you opt in)

### 1.2 Who We Are

VaultBridge is a privacy-focused technology company dedicated to providing secure, encrypted file transfer services. Our mission is to give individuals and organizations the tools they need to share sensitive information without sacrificing privacy or security.

We are data controllers for information processed through the Service, meaning we determine the purposes and means of processing personal data collected through VaultBridge.

### 1.3 Agreement to This Policy

By accessing or using the Service, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with our practices, you should not use the Service.

This Privacy Policy is incorporated into and subject to our Terms of Service. Capitalized terms not defined in this Privacy Policy have the meanings given in the Terms of Service.

### 1.4 Updates to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:

- Update the "Last Updated" date at the top of this Policy
- Post a notice on the Service
- Send notification via email where applicable and appropriate

Your continued use of the Service after any changes indicates your acceptance of the updated Policy.

---

## 2. OUR PRIVACY PHILOSOPHY

### 2.1 Privacy by Design

VaultBridge embodies the principle of "privacy by design," meaning that privacy considerations are integrated into every aspect of our system architecture, not added as an afterthought. Key elements of our privacy-first approach include:

**Zero-Knowledge Encryption**: All file encryption and decryption occurs in your browser. We never receive, process, or store encryption keys. We literally cannot access your file contents.

**Minimal Data Collection**: We collect only the information strictly necessary to provide the Service. We do not collect data for advertising, profiling, or purposes unrelated to core functionality.

**Data Minimization**: We retain data only for the minimum time necessary. Vaults are automatically deleted upon expiration or download limit fulfillment.

**No Tracking**: We do not use advertising trackers, social media pixels, or other surveillance technologies designed to profile users across the web.

**Transparency**: We are committed to being completely transparent about our data practices. If we collected additional data in the future (which would require updating this Policy), you would be clearly informed.

### 2.2 What Makes Us Different

Unlike many cloud storage and file sharing services, VaultBridge:

**Does Not Scan Your Files**: Many services scan uploaded files for "content moderation," advertising, or other purposes. We cannot scan your files because we cannot decrypt them.

**Does Not Build Profiles**: We do not create user profiles based on uploaded content, file types, or sharing patterns.

**Does Not Sell Data**: We do not sell, rent, or trade your personal information or any data derived from your use of the Service.

**Does Not Require Accounts**: You can use VaultBridge without creating an account, eliminating the need for email verification, password storage, and account-related data collection.

**Does Not Retain After Deletion**: When your Vault expires or reaches its download limit, all associated data is permanently deleted with no backups.

### 2.3 Trust and Verification

We encourage you to verify our privacy claims through:

**Open Source Code**: Our client-side encryption code is open source, allowing security researchers to verify our zero-knowledge claims.

**Security Audits**: We undergo periodic security audits by independent third parties.

**Transparency Reports**: We may publish transparency reports detailing any legal requests we receive.

---

## 3. INFORMATION WE COLLECT

### 3.1 Categories of Information

We collect information in three ways:

1. **Information you provide directly**
2. **Information collected automatically**
3. **Information from third parties**

Below, we detail each category:

### 3.2 Information You Provide

**3.2.1 Encrypted File Data**

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

**3.2.2 Vault Configuration**

When creating a Vault, you select configuration options:

- Expiration time (1 hour to 7 days)
- Download limit (1 to 100 downloads)
- Access mode (Split Code or Direct Link)

We store these configuration settings to enforce your preferences.

**3.2.3 Access Code Lookup IDs**

When using Split-Code access:

- The full 6-digit code is split into Lookup ID (first 3 digits) and PIN (last 3 digits)
- Only the Lookup ID is transmitted to our servers
- The PIN never leaves your browser

We store the Lookup ID to enable vault lookup. We never receive or store the PIN.

**3.2.4 Email Addresses (Optional Feature)**

If you choose to use our "Email Link" feature to send Vault access to a recipient:

- We collect the recipient's email address
- We use it only to send the access information
- We delete the email address after sending

If you provide your own email address for:
- Contact requests or support inquiries
- Newsletter subscription (if offered)
- Security notifications

We collect and retain such email addresses as described in Section 9.

**3.2.5 Support Communications**

If you contact us for support:

- Your email address
- The content of your communications
- Any information you choose to provide

**3.2.6 Feedback and Surveys**

If you participate in surveys or provide feedback:

- Your responses
- Associated contact information (if provided)
- Time and date of submission

### 3.3 Information Collected Automatically

**3.3.1 Server Logs**

When you access the Service, our servers may log:

- IP address
- Request URL
- HTTP method
- Response status code
- User agent string (browser type and version)
- Referrer URL (where you came from)
- Timestamp

We use server logs for:
- Security and abuse prevention
- Rate limiting
- Debugging and troubleshooting
- Aggregate analytics

Server logs are retained for a limited period (typically 7-30 days) and then deleted.

**Important Note**: We do not correlate IP addresses with specific Vault contents or access patterns in any way that would identify what files a particular user uploaded or downloaded.

**3.3.2 Performance and Error Data**

We may collect anonymous performance and error data:

- Page load times
- API response times
- Error messages and stack traces
- Resource utilization metrics

This data is used solely for improving Service reliability and performance.

**3.3.3 Device and Browser Information**

We may collect:

- Browser type and version
- Operating system
- Device type (desktop, mobile, tablet)
- Screen resolution
- Language preferences

This information helps us ensure compatibility and optimize the user experience.

### 3.4 Information from Third Parties

**3.4.1 Infrastructure Providers**

Our infrastructure providers may provide us with:

- Aggregate usage statistics
- Security alerts
- Performance metrics

We do not receive personal information from infrastructure providers.

**3.4.2 Security Services**

Security services we use may provide:

- Threat intelligence
- Abuse reports
- Fraud signals

This information is used solely for security purposes.

---

## 4. INFORMATION WE DO NOT COLLECT

### 4.1 What We Cannot Access

Due to our zero-knowledge architecture, VaultBridge cannot access, collect, store, or process:

**4.1.1 File Contents**
- We cannot see what files you upload
- We cannot read documents, view images, or play media
- We cannot scan files for any purpose
- All file data we store is encrypted with keys we don't have

**4.1.2 File Names and Metadata**
- Original file names are encrypted before upload
- File types (MIME types) are encrypted
- File creation dates and other metadata are encrypted
- We cannot identify files by name, type, or content

**4.1.3 Complete Access Codes**
- We only receive the Lookup ID (first 3 digits)
- The PIN (last 3 digits) never reaches our servers
- We cannot derive the encryption key without the PIN

**4.1.4 Encryption Keys**
- Keys are generated in your browser
- Keys are never transmitted to our servers
- We cannot decrypt your files under any circumstances

**4.1.5 Passwords**
- Optional vault passwords are used locally
- Password-derived keys never leave your browser
- We cannot recover or reset passwords

### 4.2 What We Choose Not To Collect

In addition to what we cannot technically access, we also choose not to collect:

**4.2.1 Advertising Data**
- We do not use advertising networks
- We do not display ads
- We do not collect data for ad targeting
- We do not share data with advertisers

**4.2.2 Social Media Integration**
- We do not integrate social media tracking pixels
- We do not collect social media profiles
- We do not enable social login (which would share data)

**4.2.3 Extensive Usage Tracking**
- We do not track detailed user journeys
- We do not monitor click behavior
- We do not record session videos
- We do not use heatmaps that could expose sensitive patterns

**4.2.4 Location Data**
- We do not request device location
- We do not use GPS or location services
- IP-based approximate location (for abuse prevention) is not stored long-term

**4.2.5 Contact Lists**
- We do not request access to contacts
- We do not import address books
- We do not store recipient lists beyond immediate email delivery

---

## 5. HOW WE USE INFORMATION

### 5.1 Primary Purposes

We use collected information for the following primary purposes:

**5.1.1 Providing the Service**
- Storing and delivering encrypted files
- Processing Vault configurations (expiration, download limits)
- Enabling access through codes and links
- Deleting Vaults upon expiration or limit fulfillment

**5.1.2 Security and Abuse Prevention**
- Preventing and detecting fraud and abuse
- Protecting against security threats
- Rate limiting to prevent brute-force attacks
- Identifying and blocking malicious actors

**5.1.3 Service Improvement**
- Analyzing aggregate usage patterns
- Identifying and fixing bugs
- Optimizing performance
- Developing new features

**5.1.4 Communication**
- Responding to support inquiries
- Sending security notifications
- Providing service announcements
- Delivering transactional emails (access links)

### 5.2 Legal Bases (GDPR)

For users in the European Economic Area (EEA) and other jurisdictions requiring legal bases for processing, we rely on:

**Contractual Necessity**: Processing necessary to provide the Service you requested.

**Legitimate Interests**: Processing for security, fraud prevention, and service improvement, where such interests are not overridden by your rights.

**Legal Obligations**: Processing required to comply with applicable laws.

**Consent**: Where we rely on consent, you may withdraw it at any time.

See Section 15 for more details on GDPR compliance.

### 5.3 What We Do NOT Use Information For

We do not use collected information for:

- Advertising or marketing to third parties
- Selling or renting to data brokers
- Building user profiles for commercial purposes
- Political targeting or manipulation
- Discriminatory pricing or treatment
- Any purpose inconsistent with this Privacy Policy

---

## 6. HOW WE SHARE INFORMATION

### 6.1 General Principle: Minimal Sharing

We do not sell, rent, trade, or otherwise share your personal information with third parties for their commercial purposes. We share information only in the limited circumstances described below.

### 6.2 Service Providers

We may share information with third-party service providers who assist us in operating the Service:

**6.2.1 Cloud Infrastructure**
- Encrypted file storage
- Content delivery
- Database hosting

Our infrastructure providers store only encrypted data and cannot decrypt your files.

**6.2.2 Email Delivery**
If you use the email feature, we share recipient email addresses with:
- Email delivery services
- Used only to deliver your message
- Deleted after delivery

**6.2.3 Security Services**
We may share IP addresses and usage patterns with:
- DDoS protection services
- Security monitoring tools
- Used only for security purposes

**6.2.4 Analytics (Limited)**
We may use analytics services that receive:
- Aggregate, anonymized usage data
- No personal identifiers
- No file-related data

### 6.3 Legal Requirements

We may disclose information if required by law, regulation, legal process, or governmental request:

**6.3.1 Scope of Potential Disclosure**
Due to our zero-knowledge architecture, we can only provide:
- Server logs (IP addresses, timestamps)
- Encrypted data (which is useless without keys we don't have)
- Vault metadata (encrypted, non-content information)

**6.3.2 What We Cannot Disclose**
We cannot provide:
- Decrypted file contents
- Encryption keys
- Complete access codes
- File names or types

**6.3.3 Notification**
Where legally permitted, we will attempt to notify affected users of legal demands for their information.

**6.3.4 Challenging Requests**
We may challenge legal requests we believe are:
- Overly broad
- Legally deficient
- Unconstitutional
- Otherwise inappropriate

### 6.4 Business Transfers

In the event of a merger, acquisition, bankruptcy, or sale of assets:

- User information may be transferred as part of the transaction
- The acquiring entity would be bound by this Privacy Policy
- We would notify users before information is transferred or becomes subject to a different privacy policy

### 6.5 With Your Consent

We may share information with third parties when you give us permission, such as:
- Integrations you explicitly authorize
- Features requiring third-party access
- Research participation (with informed consent)

### 6.6 Aggregated and De-Identified Data

We may share aggregated, anonymized data that cannot identify individuals:

- Service usage statistics
- Security trends
- Performance benchmarks

This data contains no personal information or file-related details.

---

## 7. ZERO-KNOWLEDGE ARCHITECTURE EXPLAINED

### 7.1 What Zero-Knowledge Means

"Zero-knowledge" in the context of VaultBridge means that we have zero knowledge of—and therefore cannot access—your encrypted file contents. This is not a policy choice but a technical reality built into our architecture.

### 7.2 How Zero-Knowledge Works

**7.2.1 Client-Side Key Generation**
When you create a Vault:

1. Your browser generates a random 256-bit AES key
2. This key exists only in your browser's memory
3. The key is never transmitted to our servers
4. Without this key, your files cannot be decrypted

**7.2.2 Client-Side Encryption**
Before any data leaves your browser:

1. Files are encrypted using AES-256-GCM
2. File names and metadata are encrypted
3. Unique random IVs are generated for each chunk
4. Only encrypted data is transmitted to our servers

**7.2.3 Key Distribution**
The encryption key is distributed only through:

**Direct Link Mode**: Key is embedded in the URL fragment (after #), which browsers never send to servers.

**Split-Code Mode**: Key is derived from the PIN (last 3 digits), which never leaves your browser. The wrapped (encrypted) key is stored on our servers but is useless without the PIN.

**7.2.4 Client-Side Decryption**
When a recipient accesses a Vault:

1. Their browser receives encrypted data
2. The key is obtained from the URL fragment or derived from the PIN
3. Decryption occurs entirely in their browser
4. Decrypted files never exist on our servers

### 7.3 Mathematical Guarantee

The zero-knowledge property is mathematically guaranteed:

- AES-256 encryption is considered computationally unbreakable with current technology
- Without the key, the encrypted data is indistinguishable from random noise
- No amount of computing power can decrypt the data without the key
- We do not possess the keys, so we cannot perform decryption

### 7.4 Practical Implications

**What This Means for You:**
- Your files are protected from VaultBridge, hackers, and anyone who might access our servers
- Even if our servers were completely compromised, your files would remain encrypted
- Law enforcement requests cannot compel us to decrypt files we cannot decrypt

**What This Means for VaultBridge:**
- We cannot help if you lose your access code or encryption key
- We cannot scan files for prohibited content
- We cannot perform data recovery for lost vaults
- We rely on users to report abuse rather than proactive scanning

### 7.5 Verification

You can verify our zero-knowledge claims by:

1. **Reviewing our open-source client code**, which shows that encryption keys are generated locally and never transmitted
2. **Inspecting network traffic**, which shows only encrypted data is sent to servers
3. **Reading independent security audits** of our platform

---

## 8. ENCRYPTION AND SECURITY MEASURES

### 8.1 Encryption Standards

VaultBridge employs industry-leading encryption standards:

**8.1.1 File Encryption: AES-256-GCM**
- Algorithm: Advanced Encryption Standard (AES)
- Key Size: 256 bits
- Mode: Galois/Counter Mode (GCM)
- Properties: Provides both confidentiality and integrity

AES-256-GCM is approved by NIST and used by governments, financial institutions, and security-conscious organizations worldwide.

**8.1.2 Key Derivation: PBKDF2**
For deriving keys from PINs and passwords:
- Algorithm: Password-Based Key Derivation Function 2 (PBKDF2)
- Hash: HMAC-SHA256
- Iterations: 100,000 (for PINs), 600,000 (for passwords)
- Salt: Random, unique per vault

High iteration counts make brute-force attacks computationally expensive.

**8.1.3 Random Number Generation**
- Source: Web Crypto API (crypto.getRandomValues())
- Quality: Cryptographically secure pseudorandom number generator (CSPRNG)
- Usage: Keys, IVs, access codes

**8.1.4 Key Wrapping: AES-KW**
For securely storing wrapped keys:
- Algorithm: AES Key Wrap (RFC 3394)
- Key Size: 256 bits
- Purpose: Protecting encryption keys with PIN-derived keys

### 8.2 Infrastructure Security

**8.2.1 Transport Security**
- TLS 1.3 (or TLS 1.2 with strong cipher suites)
- Certificate pinning where applicable
- HSTS (HTTP Strict Transport Security)
- Perfect forward secrecy

**8.2.2 Application Security**
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: no-referrer
- Regular security updates and patches

**8.2.3 Infrastructure Protection**
- DDoS mitigation
- Web application firewall (WAF)
- Intrusion detection systems
- Regular vulnerability scanning

**8.2.4 Data Storage Security**
- Encrypted storage at rest (server-side)
- Geographic redundancy
- Access controls and audit logging
- Regular security assessments

### 8.3 Security Practices

**8.3.1 Secure Development**
- Security-focused code review
- Automated security testing
- Dependency vulnerability scanning
- Security training for team members

**8.3.2 Access Control**
- Principle of least privilege
- Multi-factor authentication for administrative access
- Regular access reviews
- Separation of duties

**8.3.3 Incident Response**
- Documented incident response procedures
- 24/7 security monitoring
- Regular incident response testing
- Post-incident analysis and improvement

### 8.4 Limitations

While we implement robust security measures:

- No system is perfectly secure
- Security depends partly on your practices (protecting access codes, using secure devices)
- New vulnerabilities may be discovered
- We commit to promptly addressing any security issues

---

## 9. DATA RETENTION AND DELETION

### 9.1 Automatic Vault Deletion

VaultBridge automatically and permanently deletes Vault data:

**Expiration-Based Deletion:**
- Vaults are deleted when the user-defined expiration time is reached
- Expiration options range from 1 hour to 7 days
- A background cleanup process runs regularly to process expirations

**Download-Limit Deletion (Burn-on-Read):**
- Vaults are deleted immediately when the download limit is reached
- If set to 1 download, the vault is deleted after a single successful download
- This deletion is synchronous and occurs before the download completes

### 9.2 What Gets Deleted

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

### 9.3 Server Log Retention

**Access Logs:**
- Retained for 7-30 days
- Used for security and abuse prevention
- Automatically purged after retention period

**Error Logs:**
- Retained for 30-90 days
- Used for debugging and improvement
- Automatically purged after retention period

### 9.4 Email Address Retention

**Transactional Emails (Link Delivery):**
- Recipient email addresses deleted immediately after sending
- Sender email addresses (if provided) retained only for delivery confirmation

**Support Inquiries:**
- Retained for the duration of the support relationship
- Deleted upon request or after reasonable inactivity period

**Marketing Communications (if applicable):**
- Retained until you unsubscribe
- Deleted promptly upon unsubscribe request

### 9.5 Aggregate Data

Anonymized, aggregate data may be retained indefinitely for:
- Statistics and analytics
- Service improvement
- Research purposes

This data cannot identify individuals or be associated with specific files.

### 9.6 Your Deletion Rights

You may request deletion of personal information we hold:
- Email: privacy@vaultbridge.app
- We will process requests within 30 days

Note: We cannot delete what we don't have—encrypted file contents are deleted automatically, and we don't retain encryption keys.

---

## 10. YOUR RIGHTS AND CHOICES

### 10.1 General Rights

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

### 10.2 Exercising Your Rights

To exercise your rights:

**Email:** privacy@vaultbridge.app
**Subject Line:** Privacy Rights Request

Please include:
- Clear description of your request
- Information to help us identify any data we hold
- Proof of identity (to prevent unauthorized access)

We will respond within 30 days (or sooner if required by applicable law).

### 10.3 Choices You Can Make

**10.3.1 Vault Configuration**
You control:
- Expiration time
- Download limit
- Access mode (Split Code vs. Direct Link)
- Optional password protection

**10.3.2 Information Sharing**
You control:
- Whether to use the Email Link feature
- Whether to contact support
- Whether to provide feedback

**10.3.3 Browser Settings**
You control:
- Cookie settings
- JavaScript settings
- Service Worker settings

### 10.4 Limitations

Some rights may be limited:
- We cannot delete encrypted files before expiration (we cannot identify your files)
- We cannot provide file contents (we cannot decrypt them)
- We cannot correct file metadata (we cannot read it)

---

## 11. INTERNATIONAL DATA TRANSFERS

### 11.1 Global Operations

VaultBridge operates globally and may process information in multiple jurisdictions. By using the Service, you consent to the transfer of information to jurisdictions that may have different data protection laws than your own.

### 11.2 Transfer Mechanisms

For transfers from the EEA, UK, or other regions requiring appropriate safeguards, we rely on:

**Standard Contractual Clauses (SCCs):**
We use EU-approved standard contractual clauses where required.

**Adequacy Decisions:**
We may transfer to countries deemed adequate by relevant authorities.

**Other Mechanisms:**
We comply with other legally recognized transfer mechanisms as applicable.

### 11.3 Protections

Regardless of where information is processed:
- We apply consistent security standards
- We maintain the protections described in this Policy
- Encryption protects your files regardless of geographic location

### 11.4 Important Note

Even if data is transferred internationally:
- Encrypted file data remains protected by encryption
- We cannot decrypt files regardless of jurisdiction
- Legal requests cannot compel decryption we cannot perform

---

## 12. CHILDREN'S PRIVACY

### 12.1 Age Restriction

VaultBridge is not intended for use by children under the age of 18 (or the age of legal majority in their jurisdiction).

### 12.2 No Knowing Collection

We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child, we will delete it promptly.

### 12.3 Parental Notification

If you believe your child has provided personal information to VaultBridge, please contact us at privacy@vaultbridge.app, and we will take steps to delete such information.

### 12.4 COPPA Compliance

VaultBridge complies with the Children's Online Privacy Protection Act (COPPA) and does not knowingly collect personal information from children under 13.

---

## 13. THIRD-PARTY SERVICES

### 13.1 Infrastructure Providers

We use third-party services for:

**Cloud Storage:**
- Provides encrypted data storage
- Receives only encrypted data
- Subject to their privacy policies and our contractual requirements

**Content Delivery:**
- Distributes encrypted data efficiently
- May process IP addresses for delivery
- Subject to their privacy policies

**Database Hosting:**
- Stores vault metadata
- All sensitive metadata is encrypted
- Subject to their privacy policies

### 13.2 Email Services

If you use the Email Link feature:

**Email Delivery Provider:**
- Receives recipient email address
- Sends access link on our behalf
- Subject to their privacy policies

### 13.3 Analytics

We may use limited analytics to understand aggregate usage:

**Analytics Provider:**
- Receives anonymized usage data
- No file contents or personal identifiers
- Subject to their privacy policies

We do NOT use:
- Google Analytics
- Facebook Pixel
- Other invasive tracking services

### 13.4 Security Services

**DDoS Protection:**
- May process IP addresses
- Used only for security
- Subject to their privacy policies

### 13.5 Your Responsibility

When you share a Direct Link or Access Code:
- Recipients may use their own devices and networks
- Their access is subject to their own privacy practices
- We cannot control how recipients handle decrypted files

---

## 14. COOKIES AND TRACKING TECHNOLOGIES

### 14.1 Our Minimal Approach

VaultBridge minimizes the use of cookies and tracking technologies.

### 14.2 What We Do NOT Use

We do NOT use:
- Third-party advertising cookies
- Social media tracking pixels
- Cross-site tracking cookies
- Fingerprinting technologies
- Persistent identifiers for tracking

### 14.3 What We May Use

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

### 14.4 IndexedDB for Resumable Uploads

We use IndexedDB to store:
- Encrypted upload progress data
- Enabling resume of interrupted uploads
- Automatically cleared after upload completion

This data remains on your device and is not transmitted to our servers.

### 14.5 Service Workers

We use Service Workers for:
- Streaming large file downloads
- Improving performance
- No tracking functionality

### 14.6 Your Controls

You can control cookies and storage through:
- Browser settings
- Private/incognito browsing
- Clearing site data

Note: Blocking essential cookies may impair functionality.

---

## 15. LEGAL BASIS FOR PROCESSING (GDPR)

### 15.1 Applicability

This section applies to users in the European Economic Area (EEA), United Kingdom, and other jurisdictions that require a legal basis for processing personal data.

### 15.2 Legal Bases We Rely On

**15.2.1 Contractual Necessity (Article 6(1)(b))**
Processing necessary to provide the Service:
- Storing encrypted files
- Processing vault configurations
- Enabling access through codes and links
- Deleting vaults as configured

**15.2.2 Legitimate Interests (Article 6(1)(f))**
Processing for our legitimate interests where not overridden by your rights:
- Security and fraud prevention
- Rate limiting and abuse prevention
- Service maintenance and improvement
- Investigating and responding to violations

**15.2.3 Legal Obligation (Article 6(1)(c))**
Processing required by law:
- Responding to valid legal process
- Compliance with regulatory requirements
- Taxation and accounting obligations

**15.2.4 Consent (Article 6(1)(a))**
Processing based on your consent:
- Marketing communications (if applicable)
- Optional features requiring additional data
- Research participation

You may withdraw consent at any time by contacting privacy@vaultbridge.app.

### 15.3 Your GDPR Rights

As an EEA resident, you have:

- **Right of Access** (Article 15)
- **Right to Rectification** (Article 16)
- **Right to Erasure** (Article 17)
- **Right to Restriction** (Article 18)
- **Right to Data Portability** (Article 20)
- **Right to Object** (Article 21)
- **Rights Related to Automated Decision-Making** (Article 22)

### 15.4 Making a Complaint

If you believe we have violated your rights, you may lodge a complaint with your local Data Protection Authority (DPA).

### 15.5 Data Protection Officer

For GDPR-related inquiries, contact our designated privacy representative at:

Email: privacy@vaultbridge.app

---

## 16. CALIFORNIA PRIVACY RIGHTS (CCPA)

### 16.1 Applicability

This section applies to California residents and supplements the information in this Privacy Policy.

### 16.2 Categories of Personal Information Collected

In the preceding 12 months, we may have collected:

| Category | Examples | Collected? |
|----------|----------|------------|
| Identifiers | IP addresses, email addresses | Yes (limited) |
| Personal Information | Contact information | Yes (if provided) |
| Internet Activity | Browsing history on our site | Yes (server logs) |
| Geolocation | Approximate location from IP | Yes (limited) |
| Sensory Data | Audio, video | No |
| Professional Information | Employer, job title | No |
| Protected Classifications | Race, religion, etc. | No |
| Commercial Information | Purchase history | No |
| Biometric Data | Fingerprints, etc. | No |
| Inferences | Preferences, characteristics | No |

### 16.3 Sources of Personal Information

- **Directly from You**: Information you provide
- **Automatically**: Server logs, usage data
- **Third Parties**: Service providers (limited)

### 16.4 Purposes for Collection

See Section 5 (How We Use Information) for detailed purposes.

### 16.5 Information Sharing

In the preceding 12 months, we have:

- **NOT sold** personal information
- **NOT shared** personal information for cross-context behavioral advertising
- Disclosed information to service providers as described in Section 6

### 16.6 Your CCPA Rights

As a California resident, you have:

**Right to Know:**
Request disclosure of:
- Categories of personal information collected
- Sources of personal information
- Business purposes for collection
- Categories of third parties with whom we share
- Specific pieces of personal information collected

**Right to Delete:**
Request deletion of personal information.

**Right to Correct:**
Request correction of inaccurate personal information.

**Right to Opt-Out:**
Opt out of the sale or sharing of personal information. (We do not sell or share personal information, so this right does not apply.)

**Right to Non-Discrimination:**
You will not be discriminated against for exercising your rights.

### 16.7 Exercising Your Rights

Submit requests to: privacy@vaultbridge.app

We will verify your identity before processing requests.

### 16.8 Authorized Agents

You may designate an authorized agent to make requests on your behalf with proper documentation.

---

## 17. OTHER REGIONAL PRIVACY RIGHTS

### 17.1 Brazil (LGPD)

Brazilian residents have rights under the Lei Geral de Proteção de Dados (LGPD), including:
- Confirmation of data processing
- Access to personal data
- Correction of incomplete or inaccurate data
- Anonymization, blocking, or deletion of unnecessary data
- Portability
- Deletion
- Information about sharing with third parties
- Revocation of consent

### 17.2 Canada (PIPEDA)

Canadian residents have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA), including:
- Access to personal information
- Challenge accuracy and request corrections
- Know how information is used and disclosed
- Withdraw consent (subject to legal or contractual restrictions)

### 17.3 Australia (Privacy Act)

Australian residents have rights under the Privacy Act 1988, including:
- Access to personal information
- Correction of inaccurate information
- Complaints to the Office of the Australian Information Commissioner

### 17.4 Other Jurisdictions

We comply with applicable privacy laws worldwide. Contact privacy@vaultbridge.app for jurisdiction-specific information.

---

## 18. DATA BREACH RESPONSE

### 18.1 Our Commitment

Despite our security measures, no system is immune to breaches. If a data breach occurs:

### 18.2 Our Response Process

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

### 18.3 Limitations on Impact

Due to our zero-knowledge architecture:
- Encrypted file contents cannot be compromised without encryption keys
- A breach of our servers would not expose decrypted files
- The impact of a breach is limited to non-encrypted data

### 18.4 Your Role

To minimize breach impact:
- Use strong, unique passwords (for optional password protection)
- Do not share access codes unnecessarily
- Monitor for suspicious activity
- Report any security concerns promptly

---

## 19. CHANGES TO THIS POLICY

### 19.1 Updates

We may update this Privacy Policy from time to time. When we make changes:

**Material Changes:**
- Post prominent notice on the Service
- Update the "Last Updated" date
- Send email notification where possible and appropriate

**Non-Material Changes:**
- Update the "Last Updated" date
- Post updated Policy on the Service

### 19.2 Review

We encourage you to review this Privacy Policy periodically.

### 19.3 Continued Use

Your continued use of the Service after changes constitutes acceptance of the updated Privacy Policy.

---

## 20. CONTACT INFORMATION

### 20.1 Privacy-Related Inquiries

For privacy-related questions, concerns, or requests:

**Email:** privacy@vaultbridge.app

**Subject Line:** Privacy Inquiry

Please include:
- Clear description of your inquiry
- Contact information for our response
- Any relevant details

### 20.2 General Inquiries

For general questions about VaultBridge:

**Email:** hello@vaultbridge.app

### 20.3 Security Issues

For security-related reports:

**Email:** security@vaultbridge.app

### 20.4 Abuse Reports

For reports of abuse or violations:

**Email:** abuse@vaultbridge.app

### 20.5 Legal

For legal inquiries:

**Email:** legal@vaultbridge.app

### 20.6 Response Time

We aim to respond to all inquiries within:
- Privacy requests: 30 days (or sooner if required by law)
- General inquiries: 5 business days
- Security issues: 24-48 hours

---

## SUMMARY OF KEY POINTS

1. **Zero-Knowledge**: We cannot access your encrypted files—ever.

2. **Minimal Collection**: We collect only what's necessary to provide the Service.

3. **No Selling**: We never sell your personal information.

4. **No Advertising**: We don't use your data for advertising.

5. **Automatic Deletion**: Vaults are permanently deleted upon expiration or download limit.

6. **Strong Encryption**: AES-256-GCM encryption protects your files.

7. **Your Control**: You control vault settings, access, and who receives access codes.

8. **Your Rights**: You have rights to access, correct, delete, and port your data.

9. **Transparency**: We're committed to clear, honest communication about our practices.

10. **Security First**: We implement robust security measures to protect the Service.

---

*This Privacy Policy explains how VaultBridge handles your information. By using VaultBridge, you agree to these practices.*

*Last Updated: January 28, 2026*

*© 2026 VaultBridge. All Rights Reserved.*
