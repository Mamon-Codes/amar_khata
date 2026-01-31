# Amar Khata - Vercel Deployment Guide

## Quick Deploy with Vercel CLI

### Prerequisites
- Node.js installed
- Vercel account (free) - https://vercel.com

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Navigate to Project
```bash
cd "/home/saif/Desktop/New Folder/amar_khata"
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Follow Prompts
- Login when prompted (browser will open)
- Confirm project name (or customize it)
- Confirm settings (press Enter for defaults)
- Wait for deployment to complete

### Step 5: Get Your Live URL
After deployment, Vercel will give you a URL like:
```
https://amar-khata-xyz.vercel.app
```

---

## Deploy via Vercel Dashboard (Alternative)

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Amar Khata landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amar-khata.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Deploy
- Click "Deploy"
- Wait for build to complete (usually 1-2 minutes)
- Your site is live! 🚀

---

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `amarkhata.com`)
4. Follow DNS configuration instructions

---

## Automatic Deployments

Once connected to GitHub:
- Every `git push` to `main` branch → Automatic deployment
- Pull requests → Preview deployments
- Zero configuration needed!

---

## Environment Variables (If Needed)

If you need to add environment variables:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., API keys)
3. Redeploy for changes to take effect

---

## Production URL

Your production site will be available at:
- `https://amar-khata.vercel.app` (default)
- Or your custom domain if configured

---

## Troubleshooting

**Build fails?**
- Check that `npm run build` works locally first
- Ensure all dependencies are in `package.json`

**404 on routes?**
- Vite handles routing automatically for SPAs
- No additional config needed for this project

**Deployment taking too long?**
- First deployment may take 2-3 minutes
- Subsequent deployments are faster (30-60 seconds)

---

## That's It!

Your Amar Khata landing page will be live and accessible worldwide! 🌍
