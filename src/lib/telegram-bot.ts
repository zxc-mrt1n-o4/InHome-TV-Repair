/**
 * Telegram Bot Integration
 * Runs alongside Next.js server
 */

import TelegramBot from 'node-telegram-bot-api';

let bot: TelegramBot | null = null;
let isInitialized = false;

export function initializeTelegramBot() {
  // Prevent multiple initializations
  if (isInitialized) {
    console.log('🤖 Bot already initialized');
    return bot;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token) {
    console.error('❌ TELEGRAM_BOT_TOKEN not found');
    return null;
  }

  if (!chatId) {
    console.error('❌ TELEGRAM_CHAT_ID not found');
    return null;
  }

  try {
    // Create bot instance with polling
    bot = new TelegramBot(token, { polling: true });
    isInitialized = true;

    console.log('🤖 Telegram bot started successfully!');
    console.log(`📱 Connected to chat: ${chatId}`);
    console.log('✅ Bot is now listening for commands...\n');

    // Handle /start command
    bot.onText(/\/start/, (msg) => {
      const chatIdFromMsg = msg.chat.id;
      bot?.sendMessage(
        chatIdFromMsg,
        '👋 Hello! I\'m the In-Home TV Repair & Installation bot.\n\n' +
        'I help the team receive instant notifications when customers request in-home TV repair and installation services.\n\n' +
        'Commands:\n' +
        '/help - Show help\n' +
        '/status - Check bot status\n' +
        '/test - Send test notification'
      );
    });

    // Handle /help command
    bot.onText(/\/help/, (msg) => {
      const chatIdFromMsg = msg.chat.id;
      bot?.sendMessage(
        chatIdFromMsg,
        '📖 *In-Home TV Repair & Installation Bot Help*\n\n' +
        '🔔 This bot sends notifications when customers request in-home service via the website.\n\n' +
        '*Available Commands:*\n' +
        '/start - Start the bot\n' +
        '/help - Show this help message\n' +
        '/status - Check bot status\n' +
        '/test - Send test notification\n\n' +
        '💡 When a customer submits the form, you\'ll receive:\n' +
        '• Customer name\n' +
        '• Phone number\n' +
        '• Service type (In-Home Visit)\n' +
        '• Timestamp\n\n' +
        '_Please call customers back within 30 minutes!_',
        { parse_mode: 'Markdown' }
      );
    });

    // Handle /status command
    bot.onText(/\/status/, (msg) => {
      const chatIdFromMsg = msg.chat.id;
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      bot?.sendMessage(
        chatIdFromMsg,
        '✅ *Bot Status*\n\n' +
        '🟢 Status: Running\n' +
        `⏱ Uptime: ${hours}h ${minutes}m ${seconds}s\n` +
        `📱 Configured Chat: ${chatId}\n` +
        '🌐 Integrated with Next.js server\n\n' +
        '_All systems operational!_',
        { parse_mode: 'Markdown' }
      );
    });

    // Handle /test command
    bot.onText(/\/test/, (msg) => {
      const chatIdFromMsg = msg.chat.id;
      
      const testMessage = `
🔔 <b>New Service Request (TEST)</b>

👤 <b>Name:</b> Test Customer
📞 <b>Phone:</b> (980) 555-1234
🛠 <b>Service:</b> TV Repair & Installation Services (Visit)
🕐 <b>Time:</b> ${new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'medium',
        timeStyle: 'short',
      })}

━━━━━━━━━━━━━━━━
📍 Please call back within 30 minutes

<i>This is a test notification</i>
      `.trim();
      
      bot?.sendMessage(chatId, testMessage, { parse_mode: 'HTML' })
        .then(() => {
          bot?.sendMessage(
            chatIdFromMsg,
            '✅ Test notification sent to the configured group!',
            { parse_mode: 'Markdown' }
          );
        })
        .catch((err) => {
          console.error('Error sending test notification:', err);
          bot?.sendMessage(
            chatIdFromMsg,
            '❌ Failed to send test notification. Check bot permissions.',
            { parse_mode: 'Markdown' }
          );
        });
    });

    // Handle any other message (optional logging)
    bot.on('message', (msg) => {
      if (msg.text && msg.text.startsWith('/')) {
        return; // Skip commands
      }
      console.log(`📩 Message from ${msg.from?.first_name}: ${msg.text}`);
    });

    // Handle polling errors
    bot.on('polling_error', (error) => {
      console.error('❌ Polling error:', error.message);
    });

    console.log('💬 Bot is ready! Try sending /help in Telegram!\n');

  } catch (error) {
    console.error('❌ Failed to initialize bot:', error);
    isInitialized = false;
    return null;
  }

  return bot;
}

export function getTelegramBot() {
  return bot;
}

export function isBotInitialized() {
  return isInitialized;
}

