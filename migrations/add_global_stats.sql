-- migrations/add_global_stats.sql
-- Date: 2026-05-04
-- Description: Adds global_stats table for platform-wide metrics tracking

CREATE TABLE IF NOT EXISTS global_stats (
    id SERIAL PRIMARY KEY,
    total_vaults_created INTEGER DEFAULT 0 NOT NULL,
    total_bytes_uploaded TEXT DEFAULT '0' NOT NULL, -- Stored as text to prevent overflow
    total_downloads INTEGER DEFAULT 0 NOT NULL,
    active_vaults_count INTEGER DEFAULT 0 NOT NULL,
    last_burned_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Initialize the single stats row
INSERT INTO global_stats (id, total_vaults_created, total_bytes_uploaded, total_downloads, active_vaults_count)
VALUES (1, 0, '0', 0, 0)
ON CONFLICT (id) DO NOTHING;
