# Privacy Protocol

**Effective Date:** Active Immediately  
**Security Level:** Zero-Knowledge

---

## The Core Axiom
We cannot disclose what we do not know. 

VaultBridge is architected to be "blind." We strictly limit our technical capability to collect data. If a government agency, hacker, or alien civilization demanded your data, we could only offer them encrypted static—mathematical noise that is useless without the keys held exclusively in your volatile memory.

---

## Live Clipboard Specifics
When utilizing the Universal Live Clipboard feature:

1.  **Transient State**: Data in the Live Clipboard is treated as a "stream." It is stored in volatile memory (RAM) on our servers for milliseconds to seconds to facilitate sync between devices.
2.  **Encryption Layer**: Before a single byte leaves your device, it is wrapped in AES-256-GCM. 
3.  **Persistence**: Unlike Vault files, Clipboard data is NOT written to long-term disk storage. It exists only as long as the session is active.
4.  **Termination**: Clicking "Terminate" or "Burn" sends a kill signal. The server immediately drops the WebSocket connection and purges the memory buffer.

---

## Data Collection Manifesto

### What We Collect (The Minimum Viable)
* **Encrypted Blobs**: The gibberish result of your client-side encryption.
* **Ephemeral Metadata**: File size and expiry time (necessary for auto-deletion protocols).
* **Access Logs**: IP addresses are logged for 24 hours strictly for DDoS mitigation and abuse prevention, then sanitized.

### What We DO NOT Collect
* **Your Keys**: We never see your PIN, password, or hash fragment.
* **Your Content**: We literally cannot read it.
* **Your Identity**: No accounts. No emails (unless you use the email notification feature, which deletes the address post-send).
* **Analytics**: No Google Analytics. No Facebook Pixels. No tracking cookies.

---

## Infrastructure
Our servers act as a blind courier. They take a locked briefcase (your encrypted data) from Point A and hand it to Point B. They do not have the key to the briefcase, nor do they care what is inside.

---

## Legal Compliance & Disclosure
Because we possess zero knowledge of content:
1.  We cannot comply with DMCA takedowns regarding specific content (we can't see it).
2.  We cannot provide decrypted data to law enforcement.

*Your privacy is not a policy. It is physics.*
