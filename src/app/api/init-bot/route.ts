import { NextResponse } from 'next/server';
import { initializeTelegramBot, isBotInitialized } from '@/lib/telegram-bot';

/**
 * Initialize Telegram Bot
 * This endpoint is called automatically when Next.js starts
 */

// Initialize bot when this module loads (server startup)
if (typeof window === 'undefined') {
  // Only run on server side
  initializeTelegramBot();
}

export async function GET() {
  const initialized = isBotInitialized();
  
  return NextResponse.json({
    status: initialized ? 'running' : 'not initialized',
    message: initialized 
      ? 'Telegram bot is running' 
      : 'Bot not initialized - check environment variables',
    timestamp: new Date().toISOString(),
  });
}

