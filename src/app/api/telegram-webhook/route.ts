import { NextResponse } from 'next/server';
import { processTelegramUpdate } from '@/lib/telegram-bot';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const providedSecret = request.headers.get('x-telegram-bot-api-secret-token');

  if (expectedSecret && expectedSecret !== providedSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const update = await request.json();
  const ok = processTelegramUpdate(update);

  return NextResponse.json({ ok }, { status: ok ? 200 : 500 });
}

export async function GET() {
  return NextResponse.json({
    service: 'Telegram Webhook',
    status: 'ready',
    timestamp: new Date().toISOString(),
  });
}
