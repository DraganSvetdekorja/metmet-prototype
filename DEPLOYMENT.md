# 🚀 Me&Met Prototype - Deployment Guide

## Option 1: Deploy with Vercel CLI (Recommended)

### Step 1: Login to Vercel
```bash
vercel login
```
- This will open your browser
- Sign in with GitHub, GitLab, Bitbucket, or email

### Step 2: Deploy
```bash
vercel
```
- Press Enter to accept defaults
- Your site will be deployed in seconds!
- You'll get a live URL like: `https://metmet-prototype-xxx.vercel.app`

### Step 3: Deploy to Production
```bash
vercel --prod
```
- This creates the production version with custom domain support

---

## Option 2: Deploy via GitHub + Vercel Dashboard

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `metmet-b2b-prototype`
3. Make it Public or Private
4. **Don't** initialize with README (we already have code)
5. Click "Create repository"

### Step 2: Push Code to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/metmet-b2b-prototype.git
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Done! 🎉

---

## Option 3: One-Click Deploy Button

Add this to your GitHub README for one-click deployments:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/metmet-b2b-prototype)

---

## 🔧 Vercel Configuration (Auto-detected)

Vercel automatically detects these settings for Vite:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

---

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add `www.metmet-prototype.com` (or your domain)
4. Follow DNS instructions

---

## 📱 Preview Deployments

Every `git push` creates a preview URL:
- Production: `metmet-prototype.vercel.app`
- Preview: `metmet-prototype-git-feature.vercel.app`

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` → Production deployment
- Every PR → Preview deployment
- Automatic builds on commits

---

## 💡 Useful Commands

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm metmet-prototype
```

---

## 🐛 Troubleshooting

### Build fails?
```bash
# Test build locally first
npm run build
npm run preview
```

### Wrong Node version?
Add to `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

---

## 📊 Analytics & Performance

Vercel provides:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero-config deployment
- ✅ Edge functions support
- ✅ Web Analytics (upgrade for advanced)
- ✅ Real-time logs

---

## 🎯 Post-Deployment Checklist

- [ ] Check live URL works
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test product navigation
- [ ] Check mega-menu works
- [ ] Verify cart functionality

---

## 🔗 Quick Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- This Project: https://github.com/YOUR_USERNAME/metmet-b2b-prototype

---

**Ready to deploy?** Run `vercel` in your terminal now! 🚀
