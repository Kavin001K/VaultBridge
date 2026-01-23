
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

async function testSupabase() {
    console.log("Testing Supabase Connection...");

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
        console.error("❌ Missing Credentials in .env");
        console.log("URL:", SUPABASE_URL);
        console.log("KEY Length:", SUPABASE_KEY ? SUPABASE_KEY.length : 0);
        return;
    }

    // Check if it's likely a service role key
    const isServiceRole = SUPABASE_KEY.includes("service_role");
    console.log("Key Type:", isServiceRole ? "✅ Service Role (Correct)" : "❌ Anon/Public (Incorrect for Uploads)");

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const BUCKET_NAME = "vaults";
    const TEST_PATH = "test-check-" + Date.now();

    try {
        console.log(`Attempting to generate Signed Upload URL for bucket: '${BUCKET_NAME}'...`);

        const { data, error } = await supabase
            .storage
            .from(BUCKET_NAME)
            .createSignedUploadUrl(TEST_PATH);

        if (error) {
            console.error("❌ Failed:", error.message);
            console.error("Full Error:", error);
        } else {
            console.log("✅ Success! Generated Signed URL:");
            console.log(data?.signedUrl.substring(0, 50) + "...");
        }
    } catch (err) {
        console.error("❌ Unexpected Error:", err);
    }
}

testSupabase();
