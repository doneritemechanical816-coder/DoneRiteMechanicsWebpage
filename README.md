# 🔧 DoneRite Mechanics — Company Website

A professional company website with tabs, image gallery, appointment scheduling, and Google OAuth sign-in. Built to deploy to Railway in one click.

---

## 🗂 What's Inside

| File | What it does |
|---|---|
| `server.js` | Express server + Google OAuth routes |
| `public/index.html` | Full site — Welcome, Services/Schedule, Gallery, Contact tabs |
| `public/style.css` | All styles (beige + red/blue HVAC theme) |
| `public/script.js` | Tabs, image gallery, auth modal, appointment forms |
| `railway.toml` | Railway deploy config |
| `.env.example` | Environment variable template |

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Copy example env file and fill in Google OAuth credentials
cp .env.example .env

# Run locally
npm run dev
# → http://localhost:3000
```

### Deploy to Railway

1. Push this code to GitHub
2. Go to [railway.app](https://railway.app) → **New Project**
3. **Deploy from GitHub repo** → select this repository
4. Railway auto-detects Node.js and installs dependencies
5. Go to **Variables** tab → add all variables from `.env.example`
6. Your live URL: `https://your-app.up.railway.app`

---

## 🔐 Google OAuth Setup (5 minutes)

### Get Credentials

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. **Create a new project** → name it "DoneRite Mechanics"
3. **APIs & Services** → **OAuth consent screen** → External → fill in basics
4. **APIs & Services** → **Credentials** → Create → **OAuth Client ID** → Web Application
5. Add **Authorized redirect URIs**:
   - `http://localhost:3000/auth/google/callback` (local dev)
   - `https://your-app.up.railway.app/auth/google/callback` (production)
6. Copy **Client ID** and **Client Secret**

### Add to `.env` (local) or Railway (production)

```
GOOGLE_CLIENT_ID       = paste client ID
GOOGLE_CLIENT_SECRET   = paste client secret
GOOGLE_REDIRECT_URI    = https://your-app.up.railway.app/auth/google/callback
SESSION_SECRET         = any long random string
NODE_ENV               = production
```

---

## ✏️ Customizing

| What | Where |
|---|---|
| Company name, phone, address | `public/index.html` — search "DoneRite Mechanics" and "(555) 123-4567" |
| Colors / brand theme | `public/style.css` → `:root` variables at top |
| Services & pricing | `public/index.html` → `#tab-services` section |
| Team photos | Replace `picsum.photos` URLs with your actual image URLs |
| About text | `public/index.html` → `.about-text` section |

---

## 📁 Project Structure

```
DoneRiteMechanicsWebpage/
├── public/
│   ├── index.html         ← Main website HTML
│   ├── style.css          ← All styling
│   └── script.js          ← Interactivity & API calls
├── server.js              ← Express server + OAuth
├── package.json           ← Dependencies
├── railway.toml           ← Railway deploy config
├── .env.example           ← Environment template (commit this)
├── .env                   ← Secrets (NEVER commit this)
├── .gitignore             ← What to ignore in git
└── README.md              ← This file
```

---

## 🎯 Features

✅ **Welcome Tab** — Hero section with company info and hours
✅ **Services Tab** — Service cards with pricing + appointment scheduling form
✅ **Gallery Tab** — Image gallery with click-to-enlarge
✅ **Contact Tab** — Contact info blocks + message form
✅ **Google OAuth** — Sign in with Google
✅ **Responsive Design** — Works on mobile, tablet, desktop
✅ **Railway Ready** — One-click deploy with `railway.toml`

---

## 🆘 Troubleshooting

### "Cannot GET /"
- Make sure `server.js` is running
- Check that `public/index.html` exists

### Google OAuth not working
- Verify Client ID/Secret are correct in `.env`
- Check Redirect URI matches exactly (including `http://` vs `https://`)
- Make sure Google OAuth 2.0 consent screen is set to "External"

### Appointment form not submitting
- Open browser DevTools (F12) → Console → check for errors
- Verify all form fields are filled
- Check that `server.js` POST `/api/appointments` route exists

---

## 📞 Support

For issues or questions:
1. Check the `.env.example` file to ensure all variables are set
2. Review browser console (F12) for JavaScript errors
3. Check Railway logs for backend errors
4. Verify Google Cloud Console OAuth settings

---

**Built with ❤️ for DoneRite Mechanics**
