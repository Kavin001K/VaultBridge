import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from "../shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set.");
}

// Smart Detection: Are we running locally?
// If the DB host is 'db' (Docker service name) or 'localhost', disable SSL.
const dbUrl = new URL(process.env.DATABASE_URL);
const isLocalDb = ['db', 'localhost', '127.0.0.1'].includes(dbUrl.hostname);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // Strict SSL in production. Ensure your DATABASE_URL includes sslmode=require
  ssl: isLocalDb ? false : true
});

export const db = drizzle(pool, { schema });
