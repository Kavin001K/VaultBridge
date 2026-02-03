import 'dotenv/config';

async function testBrevo() {
    const apiKey = process.env.BRAVO_API_KEY;
    if (!apiKey) {
        console.error("❌ BRAVO_API_KEY is missing in .env");
        process.exit(1);
    }

    console.log("----------------------------------------");
    console.log("🧪 Testing Bravo (Brevo) API Integration");
    console.log("----------------------------------------");
    console.log(`Target: kavinbalaji365@gmail.com`);
    console.log(`API Key: ${apiKey.substring(0, 10)}...`);

    const payload = {
        sender: {
            name: "VaultBridge Test",
            email: "delivery@acedigital.space"
        },
        to: [{ email: "kavinbalaji365@gmail.com" }],
        subject: "VaultBridge x Bravo API Test",
        htmlContent: `
      <html>
        <body style="font-family: sans-serif; padding: 20px;">
          <h1 style="color: #10b981;">It Works! 🚀</h1>
          <p>This email was sent directly via the <strong>Bravo (Brevo) API</strong>.</p>
          <hr>
          <p style="font-size: 12px; color: #666;">Sent from VaultBridge Test Script</p>
        </body>
      </html>
    `,
        textContent: "This is a test email from VaultBridge using Bravo API."
    };

    try {
        console.log("Sending request...");
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": apiKey,
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("❌ Failed to send:");
            console.error(JSON.stringify(data, null, 2));
        } else {
            console.log("✅ Email Sent Successfully!");
            console.log(`Message ID: ${data.messageId}`);
        }

    } catch (error) {
        console.error("❌ Network or Script Error:", error);
    }
}

testBrevo();
