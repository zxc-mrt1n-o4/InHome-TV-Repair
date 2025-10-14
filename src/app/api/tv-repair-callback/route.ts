import { NextRequest, NextResponse } from 'next/server';

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

interface CallbackRequest {
  name: string;
  phone: string;
  service_type: string;
}

/**
 * Send message to Telegram group
 */
async function sendTelegramMessage(message: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials not configured');
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
}

/**
 * Format callback request as Telegram message
 */
function formatTelegramMessage(data: CallbackRequest): string {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
🔔 <b>New Service Request</b>

👤 <b>Name:</b> ${data.name}
📞 <b>Phone:</b> ${data.phone}
🛠 <b>Service:</b> ${data.service_type}
🕐 <b>Time:</b> ${timestamp}

━━━━━━━━━━━━━━━━
📍 Please call back within 30 minutes
  `.trim();
}

/**
 * POST endpoint for TV repair callback requests
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CallbackRequest;

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Format and send Telegram message
    const message = formatTelegramMessage(body);
    const sent = await sendTelegramMessage(message);

    if (!sent) {
      console.error('Failed to send Telegram notification');
      // Still return success to user, but log the error
    }

    return NextResponse.json({
      success: true,
      message: 'Callback request received',
    });

  } catch (error) {
    console.error('Error processing callback request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint - returns API info
 */
export async function GET() {
  return NextResponse.json({
    service: 'TV Repair Callback API',
    version: '1.0.0',
    status: 'active',
  });
}

