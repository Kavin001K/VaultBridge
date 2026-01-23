
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(process.cwd(), '.env');
const envConfig = dotenv.parse(fs.readFileSync(envPath));
const SUPABASE_URL = envConfig.SUPABASE_URL;
const SUPABASE_KEY = envConfig.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fixBucket() {
    console.log("--- BUCKET DIAGNOSTICS ---");

    // 1. List Buckets
    const { data: buckets, error } = await supabase.storage.listBuckets();
    if (error) {
        console.error("❌ Failed to list buckets:", error.message);
        return;
    }

    console.log("Existing Buckets:", buckets.map(b => b.name));
    const exists = buckets.find(b => b.name === 'vaults');

    if (exists) {
        console.log("✅ Bucket 'vaults' exists.");
    } else {
        console.log("⚠️ Bucket 'vaults' MISSING. Attempting to create...");

        // 2. Create Bucket if missing (Minimal Config)
        const { data, error: createError } = await supabase.storage.createBucket('vaults', {
            public: false
        });

        if (createError) {
            console.error("❌ Failed to create bucket:", createError.message);
        } else {
            console.log("✅ Bucket 'vaults' CREATED successfully!");
        }
    }

    // 3. Verify Access again
    const { error: testError } = await supabase
        .storage
        .from('vaults')
        .createSignedUploadUrl('verify-test');

    if (testError) {
        console.error("❌ Still failing:", testError.message);
    } else {
        console.log("✅ Final Verification: Upload URL generation working!");
    }
}

fixBucket();
