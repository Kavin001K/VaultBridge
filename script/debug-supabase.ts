
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from "@supabase/supabase-js";

// 1. Manually parse .env to bypass any caching or system env issues
const envPath = path.resolve(process.cwd(), '.env');
const envConfig = dotenv.parse(fs.readFileSync(envPath));

console.log("--- DEBUG ENV LOADING ---");
console.log("Path:", envPath);
console.log("Raw File Content (Service Role Key):", envConfig.SUPABASE_SERVICE_ROLE_KEY ? "FOUND" : "MISSING");
if (envConfig.SUPABASE_SERVICE_ROLE_KEY) {
    console.log("Service Key Start:", envConfig.SUPABASE_SERVICE_ROLE_KEY.substring(0, 10));
    console.log("Service Key Length:", envConfig.SUPABASE_SERVICE_ROLE_KEY.length);
}

// 2. Use the manually loaded key
const SUPABASE_URL = envConfig.SUPABASE_URL;
const SUPABASE_KEY = envConfig.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("❌ CRITICAL: Credentials missing from .env file parse.");
    process.exit(1);
}

// 3. Decode the JWT to verify its role claims (without a library, just base64 decode)
try {
    const payload = SUPABASE_KEY.split('.')[1];
    const decoded = Buffer.from(payload, 'base64').toString();
    console.log("Token Payload:", decoded);

    if (decoded.includes('"role":"service_role"')) {
        console.log("✅ Verified: Token has 'service_role' claim.");
    } else {
        console.error("❌ CRTICAL: Token DOES NOT have 'service_role' claim. It is likely an anon key.");
    }
} catch (e) {
    console.error("Error decoding token:", e);
}

// 4. Attempt Operation
async function testSupabase() {
    console.log("\n--- TESTING SUPABASE STORAGE ---");
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const BUCKET_NAME = "vaults";
    const TEST_PATH = "debug-check-" + Date.now();

    const { data, error } = await supabase
        .storage
        .from(BUCKET_NAME)
        .createSignedUploadUrl(TEST_PATH);

    if (error) {
        console.error("❌ API Error:", error.message);
    } else {
        console.log("✅ Success! Signed URL generated.");
    }
}

testSupabase();
