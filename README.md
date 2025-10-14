# 🏠 In-Home TV Repair & Installation

Professional in-home TV repair and installation services in Charlotte, NC. **We come directly to your home** - no need to unplug or move your TV!

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

---

## 🎯 Features

- ✅ **In-Home Service** - We come to you!
- ✅ **Single-page Landing** - Fast & focused
- ✅ **Telegram Bot Integration** - Instant notifications
- ✅ **US Phone Mask** - Auto-formats (XXX) XXX-XXXX
- ✅ **Mobile-First Design** - Optimized for all devices
- ✅ **SEO Optimized** - Google Business ready
- ✅ **Same-Day Service** - Available Mon-Sat 8am-9pm

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Telegram Bot

Create `.env.local` file:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_from_botfather
TELEGRAM_CHAT_ID=your_group_chat_id
```

**Getting credentials:**
1. Open Telegram, search `@BotFather`
2. Send `/newbot` and follow instructions
3. Copy bot token
4. Create a Telegram group
5. Add your bot to the group as admin
6. Get chat ID by visiting: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Tech Stack

- **Framework:** Next.js 15.3.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Bot:** node-telegram-bot-api
- **State:** React Query

---

## 🎨 Features Detail

### In-Home Service Badge
Prominent badge on hero section emphasizing:
- 🏠 We come to your home
- No need to unplug or move TV
- Convenient service at your location

### Phone Number Masking
- Auto-formats as user types: `(XXX) XXX-XXXX`
- Blocks "1" as first digit (no regional code)
- `inputMode="numeric"` for mobile keyboards

### Telegram Notifications
When customers submit the form, you receive:
```
🔔 New Service Request

👤 Name: John Doe
📞 Phone: (980) 987-0005
🛠 Service: In-Home TV Repair & Installation (Visit)
🕐 Time: Jan 15, 2025, 2:30 PM

━━━━━━━━━━━━━━━━
📍 Please call back within 30 minutes
```

### Bot Commands
- `/start` - Welcome message
- `/help` - Show all commands
- `/status` - Check bot status & uptime
- `/test` - Send test notification

---

## 📱 Mobile Optimization

### Mobile-First Header
- Compact design (64px on mobile)
- Smart button text: "Get Quote" (mobile) / "Request Callback" (desktop)
- Mobile info bar with key benefits

### Touch-Friendly Forms
- Large input fields (48px+ height)
- Number keyboard for phone input
- Loading spinner animation
- Clear success/error feedback

### Responsive Design
- Text scales: 3xl → 4xl → 5xl → 6xl
- Optimized for all breakpoints
- No horizontal scrolling
- Fast load times (~147KB)

---

## 🚂 Deployment

### Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [Railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Choose your repository
   - Add environment variables:
     ```
     TELEGRAM_BOT_TOKEN=your_token
     TELEGRAM_CHAT_ID=your_chat_id
     ```

3. **Done!** Railway handles:
   - Building (`npm run build`)
   - Starting (`npm start`)
   - SSL certificate
   - Custom domain support

### Vercel Alternative

```bash
npm install -g vercel
vercel
```

Add env vars in Vercel dashboard.

---

## 🌐 SEO Configuration

### After Deployment

1. **Update Domain** in these files:
   - `src/app/layout.tsx` (line ~60)
   - `src/app/sitemap.ts` (line 9)

2. **Google My Business:**
   - Add your deployed URL
   - Verify business listing
   - Add photos and service hours

3. **Schema.org Markup:**
   - Already configured for LocalBusiness
   - Optimized for Google Business & Maps

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Utilities
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

---

## 📁 Project Structure

```
TV_REPAIR/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tv-repair-callback/    # Telegram API endpoint
│   │   ├── layout.tsx                  # SEO & metadata
│   │   ├── page.tsx                    # Landing page
│   │   ├── not-found.tsx               # 404 page
│   │   ├── sitemap.ts                  # SEO sitemap
│   │   └── robots.ts                   # Crawler rules
│   ├── lib/
│   │   └── telegram-bot.ts             # Bot integration
│   ├── middleware.ts                   # Security headers
│   └── providers/
│       └── QueryProvider.tsx           # React Query
├── public/
│   └── services/
│       └── tv-repair.webp              # Hero image
├── .env.local                          # Your credentials (create this)
└── README.md                           # This file
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather | Yes |
| `TELEGRAM_CHAT_ID` | Group chat ID for notifications | Yes |

### Business Information

Update in `src/app/page.tsx`:
- **Phone:** (980) 987-0005
- **Service Area:** Charlotte, NC and surrounding areas
- **Hours:** Mon-Sat: 8am-9pm
- **Emergency service available**

---

## 🎯 How It Works

```
┌─────────────────────────────────────────┐
│         Next.js Server Process          │
│                                         │
│  ┌────────────────────────────────────┐│
│  │     Landing Page (React)           ││
│  │                                    ││
│  │  • Hero with IN-HOME badge         ││
│  │  • Common TV problems              ││
│  │  • Why choose us                   ││
│  │  • Contact form (Name + Phone)     ││
│  └────────────────────────────────────┘│
│                                         │
│  ┌────────────────────────────────────┐│
│  │  Telegram Bot (Integrated)         ││
│  │                                    ││
│  │  • Auto-starts with Next.js        ││
│  │  • Listens for commands            ││
│  │  • Sends notifications             ││
│  └────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**User Flow:**
1. User visits website
2. Sees IN-HOME service emphasis
3. Fills form (name + phone with auto-formatting)
4. Submits → Telegram notification sent instantly
5. User sees success message
6. Your team calls back within 30 minutes

---

## 🧪 Testing

### Local Testing
1. Start server: `npm run dev`
2. Visit: http://localhost:3000
3. Fill and submit form
4. Check Telegram group for notification

### Bot Testing
In Telegram group:
- Send `/status` - Check if bot is running
- Send `/test` - Receive test notification
- Submit form - Verify real notification

### Mobile Testing
- Resize browser to mobile size
- Check header compactness
- Test form inputs (number keyboard should appear)
- Verify touch targets are adequate

---

## 📞 Business Details

- **Service:** In-Home TV Repair & Installation
- **Phone:** (980) 987-0005
- **Location:** Charlotte, NC and surrounding areas
- **Hours:** Mon-Sat: 8am-9pm
- **Emergency service available**

---

## 🔐 Security

- ✅ Environment variables for secrets
- ✅ `.env.local` in `.gitignore`
- ✅ HTTPS in production
- ✅ Security headers via middleware
- ✅ Form validation (client + server)

---

## 🎨 Customization

### Update Phone Number
Search and replace in:
- `src/app/page.tsx`
- `src/app/layout.tsx` (schema.org)

### Update Service Area
- `src/app/page.tsx` (footer)
- `src/app/layout.tsx` (metadata)

### Update Colors
All cyan colors in `src/app/page.tsx`:
- `bg-cyan-600` - Primary button color
- `text-cyan-600` - Accent text
- `border-cyan-600` - Borders

---

## 💰 Hosting Costs

- **Railway:** $0-5/month (free tier available)
- **Vercel:** Free tier available
- **Telegram Bot:** FREE (unlimited notifications)
- **Domain:** ~$10-15/year (optional)

**Total: ~$0-5/month** ✅

---

## 📚 Documentation

All features are documented in the code with comments. Key sections:

- **Form handling:** `src/app/page.tsx` (lines 22-88)
- **Phone masking:** `src/app/page.tsx` (lines 22-39)
- **Bot integration:** `src/lib/telegram-bot.ts`
- **API endpoint:** `src/app/api/tv-repair-callback/route.ts`

---

## 🚀 Production Checklist

Before going live:

- [ ] Created `.env.local` with Telegram credentials
- [ ] Tested form submission locally
- [ ] Verified Telegram notifications work
- [ ] Updated domain in `layout.tsx` and `sitemap.ts`
- [ ] Added hero image at `public/services/tv-repair.webp`
- [ ] Tested on mobile device
- [ ] Set up Google My Business
- [ ] Deployed to Railway/Vercel
- [ ] Added environment variables in hosting platform
- [ ] Tested production deployment

---

## 📄 License

MIT License - feel free to use for your business!

---

## 🙏 Support

For issues or questions:
- **GitHub Issues:** [Create an issue](https://github.com/zxc-mrt1n-o4/InHome-TV-Repair/issues)
- **Business Phone:** (980) 987-0005

---

**Built with ❤️ for In-Home TV Repair & Installation**

*Simple. Fast. Professional.*
