
import "dotenv/config";
import { db } from "../server/db";
import { sql } from "drizzle-orm";

async function checkSchema() {
    console.log("Checking Database Schema...");
    try {
        // 1. Check if table exists
        const tableCheck = await db.execute(sql`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'vaults'
            );
        `);

        console.log("Vaults table exists:", tableCheck.rows[0].exists);

        if (!tableCheck.rows[0].exists) {
            console.log("❌ Table 'vaults' is missing.");
            return;
        }

        // 2. Check columns
        const columns = await db.execute(sql`
           SELECT column_name, data_type 
           FROM information_schema.columns 
           WHERE table_name = 'vaults';
        `);

        console.log("\nFound Columns:");
        const colNames = columns.rows.map((row: any) => row.column_name);
        console.log(colNames.join(", "));

        const missing = ["lookup_id", "wrapped_key", "is_deleted"].filter(c => !colNames.includes(c));

        if (missing.length > 0) {
            console.error("\n❌ Missing Columns:", missing);
            console.log("Running migration to add them...");

            // Auto-fix attempt
            if (missing.includes("lookup_id")) {
                await db.execute(sql`ALTER TABLE vaults ADD COLUMN IF NOT EXISTS lookup_id text unique;`);
            }
            if (missing.includes("wrapped_key")) {
                await db.execute(sql`ALTER TABLE vaults ADD COLUMN IF NOT EXISTS wrapped_key text;`);
            }
            if (missing.includes("is_deleted")) {
                await db.execute(sql`ALTER TABLE vaults ADD COLUMN IF NOT EXISTS is_deleted boolean default false not null;`);
            }
            console.log("✅ Columns added successfully.");
        } else {
            console.log("\n✅ Schema looks correct.");
        }

    } catch (err) {
        console.error("Connection failed:", err);
    }
    process.exit(0);
}

checkSchema();
