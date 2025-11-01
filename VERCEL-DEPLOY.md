# 🚀 Deploy to Vercel

This project is configured for seamless deployment to Vercel!

## Quick Deploy Options

### Option 1: Vercel CLI (Recommended) ⚡

```bash
# Install Vercel CLI globally (one-time)
npm install -g vercel

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option 2: GitHub Integration 🌐

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings from `vercel.json`
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` = Production
   - Every push to other branches = Preview

### Option 3: Direct Upload 📤

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Choose "Upload"
4. Upload the entire project folder
5. Vercel will auto-build and deploy

## Configuration

The project includes `vercel.json` with:

✅ **SPA Routing:** All routes redirect to `index.html` for React Router  
✅ **Security Headers:** XSS protection, content type sniffing prevention  
✅ **Build Settings:** Auto-detects Vite framework  
✅ **Output Directory:** `dist` (Vite's build output)

## Environment Variables

If you need environment variables:

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add variables like:
   - `VITE_API_URL=https://...`
   - `VITE_WALLET_NETWORK=...`

## Custom Domain

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Features

- ⚡ **Zero Configuration:** Works out of the box
- 🔄 **Auto HTTPS:** SSL certificates included
- 🌍 **Global CDN:** Fast worldwide performance
- 🚀 **Instant Deploys:** Push to deploy in seconds
- 📊 **Analytics:** Built-in performance monitoring
- 🔒 **Security:** DDoS protection included

## Troubleshooting

**Build Fails:**
- Check `npm run build` works locally
- Verify Node.js version in `package.json` engines

**Routes Return 404:**
- `vercel.json` includes SPA rewrites
- This should work automatically

**Assets Not Loading:**
- Check file paths use `/logos/` not `../logos/`
- All assets should be in `public/` folder

## Comparison: Vercel vs Hostinger

| Feature | Vercel | Hostinger |
|---------|--------|-----------|
| Deploy Speed | ⚡ Seconds | 🐌 Minutes |
| HTTPS | ✅ Free Auto | ⚙️ Manual setup |
| CDN | ✅ Global | ❌ Limited |
| Git Integration | ✅ Auto-deploy | ❌ Manual FTP |
| Rollback | ✅ 1-click | ❌ Manual restore |
| Analytics | ✅ Included | ⚙️ Third-party |
| SPA Support | ✅ Native | ⚙️ Needs .htaccess |

## Success! 🎉

Your site will be live at: `https://your-project.vercel.app`

