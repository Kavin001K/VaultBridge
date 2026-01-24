import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from "../shared/schema";
import dns from 'node:dns';

// Force IPv4 to avoid EHOSTUNREACH on some networks
if (dns && dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set.");
}

// Smart Detection: Are we running locally?
// If the DB host is 'db' (Docker service name) or 'localhost', disable SSL.
const dbUrl = new URL(process.env.DATABASE_URL);
const isLocalDb = ['db', 'localhost', '127.0.0.1'].includes(dbUrl.hostname);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // Only force SSL if we are NOT local
  ssl: isLocalDb ? false : { rejectUnauthorized: false }
});

export const db = drizzle(pool, { schema });
