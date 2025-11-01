import { Link } from 'react-router-dom';
import '../Pages.css';
import '../App.css';
import WalletModal from '../components/WalletModal';
import { useWallet } from '../contexts/WalletContext';
import { useState } from 'react';

function Projects() {
  const { isConnected, walletAddress, connectWallet } = useWallet();
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectWallet = (walletType) => {
    connectWallet(walletType);
    setShowWalletModal(false);
  };

  return (
    <div className="page-container">
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

        {isConnected ? (
          <button className="wallet-address-btn">
            {walletAddress}
          </button>
        ) : (
          <button className="connect-wallet-btn" onClick={() => setShowWalletModal(true)}>
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9z"/>
            </svg>
            CONNECT WALLET
          </button>
        )}
      </header>
      
      <WalletModal 
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleConnectWallet}
      />

      <main className="projects-main">
        {/* Map Section */}
        <div className="map-section">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=90" 
            alt="Dubai Property Map" 
            className="map-image"
          />
        </div>

        {/* Search Bar */}
        <div className="search-filter-section">
          <div className="search-input-wrapper">
            <svg className="search-icon-small" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search" className="search-input-small" />
          </div>
          <button className="filter-dropdown">All <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
          <button className="filter-dropdown">All <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
          <button className="filter-dropdown">All <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
        </div>

        <div className="results-header">
          <h2 className="results-count">3 Search Results Found</h2>
          <button className="sort-dropdown">
            High to Low
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className="property-grid">
          <Link to="/product/1" className="property-card">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90" 
              alt="Kempinski Residences"
              className="property-card-image"
            />
            <div className="property-card-content">
              <h3>Kempinski Residences</h3>
              <p className="property-location">Dubai, Dubai 3222</p>
              <p className="property-description">
                We are proud to present this luxurious 3 bed apartment for sale in a 5 star reso..
              </p>
              <div className="property-specs">
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M6 21h12M9 9v12M15 9v12M3 9h18M3 3v6h18V3" />
                  </svg>
                  <span>3</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M12 6v6M12 18v-6M6 12h12M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                  <span>3</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 8h18M8 3v18" />
                  </svg>
                  <span>2938 sqft</span>
                </span>
              </div>
              <div className="property-price">
                <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="16" height="16" />
                1200 BNB
              </div>
            </div>
          </Link>

          <Link to="/product/2" className="property-card">
            <img 
              src="/the-address-emaar.png" 
              alt="The Address By Emaar"
              className="property-card-image"
            />
            <div className="property-card-content">
              <h3>The Address By Emaar</h3>
              <p className="property-location">Dubai, Dubai 3222</p>
              <p className="property-description">
                We are proud to present this luxurious 3 bed apartment for sale in a 5 star reso..
              </p>
              <div className="property-specs">
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M6 21h12M9 9v12M15 9v12M3 9h18M3 3v6h18V3" />
                  </svg>
                  <span>3</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M12 6v6M12 18v-6M6 12h12M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                  <span>3</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 8h18M8 3v18" />
                  </svg>
                  <span>2938 sqft</span>
                </span>
              </div>
              <div className="property-price">
                <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="16" height="16" />
                600 BNB
              </div>
            </div>
          </Link>

          <Link to="/product/3" className="property-card">
            <img 
              src="/palazzo-versace.png" 
              alt="Palazzo Versace"
              className="property-card-image"
            />
            <div className="property-card-content">
              <h3>Palazzo Versace</h3>
              <p className="property-location">Dubai, Dubai 3333</p>
              <p className="property-description">
                We are proud to present this apartment for sale in a 5 star
              </p>
              <div className="property-specs">
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M6 21h12M9 9v12M15 9v12M3 9h18M3 3v6h18V3" />
                  </svg>
                  <span>3</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <path d="M12 6v6M12 18v-6M6 12h12M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                  <span>4</span>
                </span>
                <span className="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 8h18M8 3v18" />
                  </svg>
                  <span>2938 sd</span>
                </span>
              </div>
              <div className="property-price">
                <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="16" height="16" />
                300 BNB
              </div>
            </div>
          </Link>
        </div>
      </main>

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

export default Projects;

