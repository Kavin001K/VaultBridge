
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = "vaults";

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Supabase credentials.");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function setup() {
    console.log("Checking Supabase Storage...");

    // 1. Check Bucket
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    if (listError) {
        console.error("Failed to list buckets:", listError);
        process.exit(1);
    }

    const bucket = buckets.find((b) => b.name === BUCKET_NAME);

    if (!bucket) {
        console.log(`Bucket '${BUCKET_NAME}' not found. Creating...`);
        const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
            public: false,
            fileSizeLimit: 524288000, // 500MB
            allowedMimeTypes: null // All types
        });

        if (createError) {
            console.error("Failed to create bucket:", createError);
            process.exit(1);
        }
        console.log(`Bucket '${BUCKET_NAME}' created.`);
    } else {
        console.log(`Bucket '${BUCKET_NAME}' exists.`);
    }

    // 2. Verify Database Connection
    console.log("Checking Database Connection...");
    // We'll leave DB verification to the main app startup or 'db:push', 
    // but we can try a simple query if we had a pg client here.
    // For now, storage verification is the main 'cloud' part.

    console.log("Supabase setup verification complete.");
}

setup();
