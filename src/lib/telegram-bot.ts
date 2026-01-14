/**
 * Telegram bot integration.
 *
 * For production hosting (Railway/containers), webhooks are cleaner than polling.
 * Use `processTelegramUpdate()` from a Next.js route handler to process incoming updates.
 */

import TelegramBot from 'node-telegram-bot-api';

let bot: TelegramBot | null = null;
let isInitialized = false;

export function initializeTelegramBot() {
  if (isInitialized && bot) {
    return bot;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const configuredChatId = process.env.TELEGRAM_CHAT_ID;

  if (!token) {
    console.error('TELEGRAM_BOT_TOKEN is not configured');
    return null;
  }

  if (!configuredChatId) {
    console.error('TELEGRAM_CHAT_ID is not configured');
    return null;
  }

  try {
    bot = new TelegramBot(token);
    setupBotHandlers(configuredChatId);
    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize Telegram bot:', error);
    bot = null;
    isInitialized = false;
  }

  return bot;
}

function setupBotHandlers(configuredChatId: string) {
  if (!bot) {
    return;
  }

  bot.onText(/\/start/, (msg) => {
    const chatIdFromMsg = msg.chat.id;

    bot?.sendMessage(
      chatIdFromMsg,
      "Hello! I'm the In-Home TV Repair & Installation bot.\n\n" +
        'Commands:\n' +
        '/help - Show help\n' +
        '/status - Check bot status\n' +
        '/test - Send test notification'
    );
  });

  bot.onText(/\/help/, (msg) => {
    const chatIdFromMsg = msg.chat.id;

    bot?.sendMessage(
      chatIdFromMsg,
      '*In-Home TV Repair & Installation Bot Help*\n\n' +
        '*Commands:*\n' +
        '/start - Start the bot\n' +
        '/help - Show this help\n' +
        '/status - Check status\n' +
        '/test - Send a test notification\n\n' +
        '_Please call customers back within 30 minutes!_',
      { parse_mode: 'Markdown' }
    );
  });

  bot.onText(/\/status/, (msg) => {
    const chatIdFromMsg = msg.chat.id;
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    bot?.sendMessage(
      chatIdFromMsg,
      '*Bot Status*\n\n' +
        'Status: Running\n' +
        `Uptime: ${hours}h ${minutes}m ${seconds}s\n` +
        `Configured Chat: ${configuredChatId}\n` +
        'Mode: Webhook\n\n' +
        '_All systems operational!_',
      { parse_mode: 'Markdown' }
    );
  });

  bot.onText(/\/test/, (msg) => {
    const chatIdFromMsg = msg.chat.id;

    const testMessage = `
<b>New Service Request (TEST)</b>

<b>Name:</b> Test Customer
<b>Phone:</b> (980) 555-1234
<b>Service:</b> TV Repair & Installation Services (Visit)
<b>Time:</b> ${new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'medium',
      timeStyle: 'short',
    })}

Please call back within 30 minutes

<i>This is a test notification</i>
    `.trim();

    bot
      ?.sendMessage(configuredChatId, testMessage, { parse_mode: 'HTML' })
      .then(() => {
        bot?.sendMessage(chatIdFromMsg, 'Test notification sent.', {
          parse_mode: 'Markdown',
        });
      })
      .catch((err) => {
        console.error('Error sending test notification:', err);
        bot?.sendMessage(chatIdFromMsg, 'Failed to send test notification.', {
          parse_mode: 'Markdown',
        });
      });
  });

  bot.on('message', (msg) => {
    if (msg.text && msg.text.startsWith('/')) {
      return;
    }
    console.log(`Message from ${msg.from?.first_name}: ${msg.text}`);
  });
}

export function processTelegramUpdate(update: unknown) {
  const botInstance = initializeTelegramBot();
  if (!botInstance) {
    return false;
  }

  try {
    botInstance.processUpdate(update as never);
    return true;
  } catch (error) {
    console.error('Failed to process Telegram update:', error);
    return false;
  }
}

export function getTelegramBot() {
  return bot;
}

export function isBotInitialized() {
  return isInitialized;
}
