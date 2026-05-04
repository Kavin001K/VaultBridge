-- migrations/add_pin_salt.sql
ALTER TABLE vaults ADD COLUMN IF NOT EXISTS pin_salt TEXT;
-- Stores base64(16 random bytes) — used for per-vault PBKDF2 salt (fixes B5)
