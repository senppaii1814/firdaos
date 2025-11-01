import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import ProductDetail from './pages/ProductDetail';
import MyInvestments from './pages/MyInvestments';
import WalletModal from './components/WalletModal';
import { useWallet } from './contexts/WalletContext';
import { useState, useEffect } from 'react';

function HomePage() {
  const navigate = useNavigate();
  const { isConnected, walletAddress, connectWallet } = useWallet();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set target date to November 18th
  useEffect(() => {
    const targetDate = new Date('2024-11-18T23:59:59');

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleConnectWallet = (walletType) => {
    connectWallet(walletType);
    setShowWalletModal(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/" className="logo-link">
            <img src="/logos/jia-logo.png" alt="Jiā" className="logo" />
          </Link>
          <a href="https://x.com/jiaonbnb" target="_blank" rel="noopener noreferrer" className="header-social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
          <Link to="/my-investments" className="nav-link">MY INVESTMENTS</Link>
        </nav>

        <button className="connect-wallet-btn" onClick={() => setShowWalletModal(true)}>
          <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9z"/>
          </svg>
          CONNECT WALLET
        </button>
      </header>
      
      <WalletModal 
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleConnectWallet}
      />

      {/* Hero Section - Split Layout */}
      <section className="hero-section">
        <div className="hero-left animate-fade-in-up">
          <div className="accent-line"></div>
          <h1 className="hero-title">Real World Assets<br />Reimagined</h1>
          <p className="hero-description">
            Jiā revolutionises owning real-estate around the world virtually by participating in fractionalised pools funded with BNB and built fully onchain powered by BNBChain.
          </p>
          <div className="search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Find your Jiā" onKeyDown={(e) => e.key === 'Enter' && navigate('/projects')} />
            <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </div>
        </div>
        <div className="hero-right">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=90" 
            alt="Burj Khalifa, Dubai"
            className="hero-image"
          />
          {/* Floating Countdown Timer - Centered on Image */}
          <div className="floating-countdown">
            <div className="countdown-label">Limited Time</div>
            <div className="countdown-time">
              <div className="countdown-item">
                <span className="countdown-value">{String(countdown.days).padStart(2, '0')}</span>
                <span className="countdown-unit">Days</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
                <span className="countdown-unit">Hours</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
                <span className="countdown-unit">Mins</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
                <span className="countdown-unit">Secs</span>
              </div>
            </div>
          </div>
          <button className="find-home-btn" onClick={() => navigate('/projects')}>
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Find your Jiā
          </button>
        </div>
      </section>

      {/* Developer Logos Section */}
      <section className="developer-logos">
        <Link to="/projects" className="see-properties-link">See the properties listed &gt;</Link>
        <div className="logos-grid">
          <div className="logo-item">
            <img src="/logos/emaar.svg" alt="EMAAR" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src="/logos/damac.svg" alt="DAMAC" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src="/logos/meraas.svg" alt="MERAAS" className="logo-image" />
          </div>
        </div>
      </section>

      {/* Search by Area Section */}
      <section className="search-by-area">
        <div className="section-header">
          <h2 className="section-title">Search by Country</h2>
          <div className="carousel-controls">
            <button className="carousel-btn">‹</button>
            <button className="carousel-btn">›</button>
          </div>
        </div>
        <div className="area-cards">
          <div className="area-card" onClick={() => navigate('/projects')}>
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=90" alt="United Arab Emirates" />
            <span>United Arab Emirates</span>
          </div>
          <div className="area-card" onClick={() => navigate('/product/2')}>
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=90" alt="Asia" />
            <span>Asia</span>
          </div>
          <div className="area-card" onClick={() => navigate('/projects')}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90" alt="United Kingdom" />
            <span>United Kingdom</span>
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="bridge-section">
        <div className="bridge-left">
          <img src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=90" alt="Dubai Skyline" className="bridge-image" />
          <div className="progress-ring">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#4A9EFF" strokeWidth="3" fill="none" strokeDasharray="283" strokeDashoffset="200" />
              <circle cx="50" cy="50" r="45" stroke="#5EC4E8" strokeWidth="3" fill="none" strokeDasharray="283" strokeDashoffset="250" />
            </svg>
          </div>
        </div>
        <div className="bridge-right">
          <div className="accent-line-small"></div>
          <h2 className="bridge-title">Tokenizing RWAs and Investing<br />in them made easy on BNBChain.</h2>
          <p className="bridge-description">
            Jiā (家) which translates to home, is an eccentric and seamless platform to acquire shares in pools of RWAs listed which can be managed via smart contracts and fully trade-able for retail users.<br /><br />Giving birth to a whole new asset class.
          </p>
          <button className="get-started-btn" onClick={() => navigate('/projects')}>
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Get Started Now
            <span className="arrow">›</span>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8AD4F" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3>Seamless and Secure</h3>
          <p>We turn every listed asset into a smart contract to boost transparency of all transactions on a public ledger</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8AD4F" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M4 10h16M10 4v16" />
            </svg>
          </div>
          <h3>Guaranteed Yield</h3>
          <p>All backers that contribute towards successfully funding the asset pool receives an assured fixed % of yield in a specified tenure linked to the property.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8AD4F" strokeWidth="2">
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Powered by Binance</h3>
          <p>Built on Binance Smart Chain, leveraging secure blockchain technology for transparent property crowdfunding and instant yield distribution</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <img src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=90" alt="Dubai" className="cta-background" />
        <div className="cta-overlay">
          <h2>Disrupting Real Estate</h2>
          <button className="cta-btn">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Link
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/logos/jia-logo.png" alt="Jiā" className="footer-logo" />
        <div className="footer-powered">
          <span>POWERED BY</span>
          <img src="/logos/binance-full.svg" alt="Binance" className="binance-logo-img" />
        </div>
        <div className="footer-social">
          <a href="https://x.com/jiaonbnb" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://t.me/jiarwa" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </a>
        </div>
        <div className="footer-copyright">
          © 2025 家
        </div>
      </footer>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/my-investments" element={<MyInvestments />} />
      </Routes>
    </Router>
  );
}

export default App;
