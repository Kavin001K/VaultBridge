-- Migration: Add per-file download tracking columns
-- Date: 2026-02-05
-- Description: Adds max_downloads and download_count columns to files table
--              for per-file download limit tracking

-- Add max_downloads column (per-file download limit)
ALTER TABLE files ADD COLUMN IF NOT EXISTS max_downloads INTEGER DEFAULT 1 NOT NULL;

-- Add download_count column (per-file download counter)
ALTER TABLE files ADD COLUMN IF NOT EXISTS download_count INTEGER DEFAULT 0 NOT NULL;

-- Verify the columns were added
-- SELECT column_name, data_type, is_nullable, column_default 
-- FROM information_schema.columns 
-- WHERE table_name = 'files' AND column_name IN ('max_downloads', 'download_count');
