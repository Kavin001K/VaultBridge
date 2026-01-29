// Database migration script to add missing columns
import pg from 'pg';

const { Pool } = pg;

// Use explicit host configuration to avoid IPv6 issues
const pool = new Pool({
    host: 'aws-0-ap-south-1.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
    user: 'postgres.kigljmhbgzbbhrtgtxmk',
    password: 'goznod-mirjum-3nAvfi',
    ssl: { rejectUnauthorized: false }
});

async function migrate() {
    console.log('Connecting to database via pooler...');
    const client = await pool.connect();

    try {
        console.log('Connected! Running migrations...');

        // Add is_compressed column if it doesn't exist
        await client.query(`
      ALTER TABLE files 
      ADD COLUMN IF NOT EXISTS is_compressed BOOLEAN DEFAULT false NOT NULL
    `);
        console.log('✅ Added is_compressed column');

        // Add original_size column if it doesn't exist
        await client.query(`
      ALTER TABLE files 
      ADD COLUMN IF NOT EXISTS original_size INTEGER
    `);
        console.log('✅ Added original_size column');

        console.log('\n🎉 Migration complete!');
    } catch (error) {
        console.error('Migration error:', error);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
