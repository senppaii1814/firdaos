# Jiā 家 - Real Estate Investment Platform

A modern real estate investment platform built with React + Vite, featuring blockchain integration for property investments.

## ✨ Features

- **🏠 Homepage**: Stunning hero with glass countdown timer
- **📋 Projects Page**: Browse available properties with filtering
- **🏢 Product Detail**: Detailed property view with investment options
- **💼 My Investments**: Track your ongoing investment projects
- **🔌 Wallet Integration**: MetaMask, Trust Wallet, and Binance Wallet support
- **🌐 Social Links**: Twitter integration
- **🎨 Modern Design**: Glassmorphism, gold accents, responsive layout

## 🛠 Tech Stack

- **React 19** - Modern UI library
- **Vite 7** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Custom CSS** - Beautiful modern design with animations

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Deploy to Vercel ⚡

**Fastest way to deploy:**

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy
vercel --prod
```

Or see **[VERCEL-DEPLOY.md](./VERCEL-DEPLOY.md)** for complete deployment guide.

**Why Vercel?**
- ⚡ Deploy in seconds
- 🌍 Global CDN included
- 🔒 Auto HTTPS
- 🎯 SPA routing built-in
- 🔄 Auto-deploy from Git

## 📄 Pages

- `/` - Homepage
- `/projects` - Browse all projects
- `/product/:id` - Property detail page
- `/my-investments` - Your investments

## Toast Notification

To use the green toast notification (shown on successful investments):

```jsx
import Toast from './components/Toast';

// In your component
const [showToast, setShowToast] = useState(false);

// Show toast
<button onClick={() => setShowToast(true)}>Invest</button>
<Toast 
  message="Investment completed!" 
  isVisible={showToast}
  onClose={() => setShowToast(false)}
/>
```

## License

MIT
