import { pgTable, text, serial, integer, boolean, timestamp, jsonb, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const vaults = pgTable("vaults", {
  id: uuid("id").primaryKey().defaultRandom(),
  shortCode: text("short_code").unique(), // 6-char alphanumeric (legacy)
  lookupId: text("lookup_id").unique(), // 3-digit numeric ID for split-code lookup
  wrappedKey: text("wrapped_key"), // File key encrypted by PIN (for split-code vaults)
  encryptedMetadata: text("encrypted_metadata").notNull(), // Encrypted JSON blob containing filenames, types, sizes
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  maxDownloads: integer("max_downloads").default(1).notNull(),
  downloadCount: integer("download_count").default(0).notNull(),
  isDeleted: boolean("is_deleted").default(false).notNull(),
  encryptedClipboardText: text("encrypted_clipboard_text"), // Optional encrypted clipboard text
});

export const files = pgTable("files", {
  id: uuid("id").primaryKey().defaultRandom(),
  vaultId: uuid("vault_id").references(() => vaults.id, { onDelete: "cascade" }).notNull(),
  fileId: text("file_id").notNull(), // Client-generated UUID for the file
  chunkCount: integer("chunk_count").notNull(),
  totalSize: integer("total_size").notNull(), // Bytes
  isCompressed: boolean("is_compressed").default(false).notNull(),
  originalSize: integer("original_size"), // Original size before compression/encryption
});

export const chunks = pgTable("chunks", {
  id: serial("id").primaryKey(),
  fileId: uuid("file_id").references(() => files.id, { onDelete: "cascade" }).notNull(),
  chunkIndex: integer("chunk_index").notNull(),
  storagePath: text("storage_path"), // Path in Object Storage
  size: integer("size").notNull(),
  isUploaded: boolean("is_uploaded").default(false).notNull(),
});

export const emailUsage = pgTable("email_usage", {
  date: text("date").primaryKey(), // YYYY-MM-DD
  resendCount: integer("resend_count").default(0).notNull(),
  brevoCount: integer("brevo_count").default(0).notNull(),
  msg91Count: integer("msg91_count").default(0).notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// === SCHEMAS ===

export const insertVaultSchema = createInsertSchema(vaults).omit({
  id: true,
  shortCode: true,
  createdAt: true,
  downloadCount: true,
  isDeleted: true,
});

export const insertFileSchema = createInsertSchema(files).omit({
  id: true,
  vaultId: true,
});

// === TYPES ===

export type Vault = typeof vaults.$inferSelect;
export type FileRecord = typeof files.$inferSelect;
export type ChunkRecord = typeof chunks.$inferSelect;

// Client-facing types for creation
export const createVaultRequestSchema = z.object({
  expiresIn: z.number().min(1).max(168), // Hours, max 1 week
  maxDownloads: z.number().min(1).max(100),
  encryptedMetadata: z.string(), // Encrypted JSON of filenames, etc.
  lookupId: z.string().length(3).optional(), // 3-digit numeric ID for split-code lookup
  wrappedKey: z.string().optional(), // File key encrypted by PIN (for split-code vaults)
  files: z.array(z.object({
    fileId: z.string(),
    chunks: z.number(),
    size: z.number(),
    isCompressed: z.boolean().default(false),
    originalSize: z.number().optional(),
  })),
  encryptedClipboardText: z.string().optional(), // Encrypted clipboard text
});

export type CreateVaultRequest = z.infer<typeof createVaultRequestSchema>;

export type VaultResponse = Vault & {
  files: {
    fileId: string;
    chunkCount: number;
    totalSize: number;
    isCompressed: boolean;
    originalSize: number | null;
  }[];
  encryptedClipboardText?: string; // Optional encrypted clipboard text
};
