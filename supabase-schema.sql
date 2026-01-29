-- =============================================================================
-- VaultBridge Complete Database Schema for Supabase
-- Run this SQL in the Supabase SQL Editor to set up/reset the database
-- =============================================================================

-- Drop existing tables if they exist (in correct order due to foreign keys)
DROP TABLE IF EXISTS chunks CASCADE;
DROP TABLE IF EXISTS files CASCADE;
DROP TABLE IF EXISTS vaults CASCADE;

-- =============================================================================
-- VAULTS TABLE
-- Stores encrypted vault metadata, access codes, and expiration settings
-- =============================================================================
CREATE TABLE vaults (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    short_code TEXT UNIQUE,                     -- 6-char alphanumeric code (e.g., "ABC123")
    lookup_id TEXT UNIQUE,                      -- 3-digit numeric ID for split-code lookup
    wrapped_key TEXT,                           -- File key encrypted by PIN (for split-code vaults)
    encrypted_metadata TEXT NOT NULL,           -- Encrypted JSON (filenames, types, sizes)
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    max_downloads INTEGER DEFAULT 1 NOT NULL,
    download_count INTEGER DEFAULT 0 NOT NULL,
    is_deleted BOOLEAN DEFAULT FALSE NOT NULL
);

-- Indexes for fast lookups
CREATE INDEX idx_vaults_short_code ON vaults(short_code);
CREATE INDEX idx_vaults_lookup_id ON vaults(lookup_id);
CREATE INDEX idx_vaults_expires_at ON vaults(expires_at);
CREATE INDEX idx_vaults_is_deleted ON vaults(is_deleted);

-- =============================================================================
-- FILES TABLE
-- Stores file records linked to vaults
-- =============================================================================
CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vault_id UUID REFERENCES vaults(id) ON DELETE CASCADE NOT NULL,
    file_id TEXT NOT NULL,                      -- Client-generated UUID for the file
    chunk_count INTEGER NOT NULL,
    total_size INTEGER NOT NULL,                -- Bytes
    is_compressed BOOLEAN DEFAULT FALSE NOT NULL,
    original_size INTEGER                       -- Original size before compression
);

-- Indexes
CREATE INDEX idx_files_vault_id ON files(vault_id);
CREATE INDEX idx_files_file_id ON files(file_id);

-- =============================================================================
-- CHUNKS TABLE
-- Stores chunk metadata for multi-part uploads (currently using single chunk)
-- =============================================================================
CREATE TABLE chunks (
    id SERIAL PRIMARY KEY,
    file_id UUID REFERENCES files(id) ON DELETE CASCADE NOT NULL,
    chunk_index INTEGER NOT NULL,
    storage_path TEXT,                          -- Path in Supabase Storage
    size INTEGER NOT NULL,
    is_uploaded BOOLEAN DEFAULT FALSE NOT NULL
);

-- Indexes
CREATE INDEX idx_chunks_file_id ON chunks(file_id);
CREATE INDEX idx_chunks_chunk_index ON chunks(chunk_index);

-- =============================================================================
-- STORAGE BUCKET
-- Create the 'vaults' bucket for file storage if it doesn't exist
-- =============================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'vaults',
    'vaults',
    false,
    524288000,  -- 500MB limit per file
    NULL        -- Allow all MIME types
)
ON CONFLICT (id) DO UPDATE SET
    file_size_limit = 524288000;

-- =============================================================================
-- STORAGE POLICIES
-- Allow service role (backend) to perform all operations on the vaults bucket
-- =============================================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can do everything" ON storage.objects;
DROP POLICY IF EXISTS "Allow service uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow service downloads" ON storage.objects;
DROP POLICY IF EXISTS "Allow service deletes" ON storage.objects;

-- Create permissive policies for the service role
CREATE POLICY "Allow service uploads" ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'vaults');

CREATE POLICY "Allow service downloads" ON storage.objects FOR SELECT
    USING (bucket_id = 'vaults');

CREATE POLICY "Allow service deletes" ON storage.objects FOR DELETE
    USING (bucket_id = 'vaults');

CREATE POLICY "Allow service updates" ON storage.objects FOR UPDATE
    USING (bucket_id = 'vaults');

-- =============================================================================
-- VERIFICATION QUERIES (Optional - run to verify setup)
-- =============================================================================

-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name IN ('vaults', 'files', 'chunks');

-- Check storage bucket exists
SELECT * FROM storage.buckets WHERE id = 'vaults';

-- =============================================================================
-- SUCCESS MESSAGE
-- =============================================================================
SELECT 'VaultBridge database schema created successfully!' AS status;
