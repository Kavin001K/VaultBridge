# Task: Live Universal Clipboard

## Current Phase: Implementation

## Requirements

### Core Features
1. **Live Editable Clipboard** - Users can edit clipboard content directly in the access page
2. **Real-time Sync** - Changes instantly sync to the vault (encrypted locally, stored server-side)
3. **Universal Access** - Access from anywhere with the 6-digit PIN
4. **Display as Text** - Content appears as readable text, not file format
5. **Export Options** - Download clipboard content as TXT, PDF, or DOC

### Technical Implementation

#### Phase 1: Server Updates
- [ ] Add PUT endpoint for clipboard updates: `PUT /api/vaults/:id/clipboard`
- [ ] Update schema to support clipboard-only vaults

#### Phase 2: Access Page Enhancements
- [ ] Make clipboard content editable with a text area
- [ ] Add save/sync button with loading state
- [ ] Add export dropdown with format options (TXT, PDF, DOC)
- [ ] Add real-time typing indicator

#### Phase 3: Export Functionality
- [ ] Implement TXT export (native blob download)
- [ ] Implement PDF export (using jsPDF or browser print)
- [ ] Implement DOC export (using docx or HTML blob)

#### Phase 4: Polish
- [ ] Auto-save with debounce
- [ ] Visual feedback for sync status
- [ ] Keyboard shortcuts (Ctrl+S to save)
- [ ] Mobile optimization

## Architecture

```
┌─────────────────┐         ┌──────────────────┐
│  Device A       │         │  Device B        │
│  (Create/Edit)  │         │  (Access/Edit)   │
└────────┬────────┘         └────────┬─────────┘
         │                           │
         ▼                           ▼
    ┌─────────────────────────────────────┐
    │        Client-Side Encryption       │
    │   (AES-GCM with PIN-derived key)    │
    └─────────────────────────────────────┘
                      │
                      ▼
    ┌─────────────────────────────────────┐
    │           VaultBridge API           │
    │   (Stores only encrypted blobs)     │
    └─────────────────────────────────────┘
```

## Status: In Progress
