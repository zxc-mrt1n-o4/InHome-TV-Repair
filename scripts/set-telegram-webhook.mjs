const token = process.env.TELEGRAM_BOT_TOKEN;
const baseUrl = process.env.PUBLIC_BASE_URL;
const secretToken = process.env.TELEGRAM_WEBHOOK_SECRET;

if (!token) {
  console.error('Missing TELEGRAM_BOT_TOKEN');
  process.exit(1);
}

if (!baseUrl) {
  console.error('Missing PUBLIC_BASE_URL (e.g. https://your-app.up.railway.app)');
  process.exit(1);
}

if (!secretToken) {
  console.error('Missing TELEGRAM_WEBHOOK_SECRET');
  process.exit(1);
}

const webhookUrl = new URL('/api/telegram-webhook', baseUrl).toString();

const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: webhookUrl,
    secret_token: secretToken,
    drop_pending_updates: true,
  }),
});

const data = await response.json();
console.log(JSON.stringify({ webhookUrl, ...data }, null, 2));

