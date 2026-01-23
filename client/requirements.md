## Packages
framer-motion | smooth animations for UI transitions and progress bars
qrcode.react | generating QR codes for sharing vault links
clsx | utility for constructing className strings conditionally
tailwind-merge | utility for merging tailwind classes without conflicts

## Notes
- Zero-Knowledge Architecture: Encryption happens entirely in the browser using Web Crypto API (AES-GCM).
- The encryption key is stored in the URL fragment (#key=...) and never sent to the server.
- File uploads are chunked (5MB), encrypted individually, and uploaded via signed URLs.
- Metadata is encrypted as a JSON blob before sending to the vault creation endpoint.
