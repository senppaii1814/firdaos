import { Link, useParams } from 'react-router-dom';
import '../Pages.css';
import '../App.css';
import WalletModal from '../components/WalletModal';
import { useWallet } from '../contexts/WalletContext';
import { useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const { isConnected, walletAddress, connectWallet } = useWallet();
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectWallet = (walletType) => {
    connectWallet(walletType);
    setShowWalletModal(false);
  };

  // Define product data based on ID
  const products = {
    '1': {
      name: 'Kempinski Residences',
      location: 'Dubai, Dubai 3222',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90',
      price: 1200
    },
    '2': {
      name: 'The Address By Emaar',
      location: 'Dubai, Dubai 3222',
      image: '/the-address-emaar.png',
      price: 600
    },
    '3': {
      name: 'Palazzo Versace',
      location: 'Dubai, Dubai 3333',
      image: '/palazzo-versace.png',
      price: 300
    }
  };

  const product = products[id] || products['1'];

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

      <main className="product-main">
        <div className="product-left">
          <div className="property-image-container">
            <img 
              src={product.image}
              alt={product.name}
              className="property-image"
            />
            <div className="property-badges">
              <button className="badge badge-sale">FOR SALE</button>
              <button className="badge badge-initiated">INITIATED</button>
            </div>
          </div>

          <div className="property-details">
            <div className="location">{product.location}</div>
            <h1 className="property-title">{product.name}</h1>
            <div className="contract-section">
              <div className="contract-address">
                Smart Contract: 0x7350E3F2b2D04f0f5aAe32081eD4E43388DC05a2
              </div>
            </div>
            <p className="property-full-description">
              We are proud to present this luxurious 3 bed apartment for sale in a 5 star resort on the crescent of The Palm Jumeirah. The property comprises of the following: Beautiful view of the resorts green gardens; 3 Bedrooms with en-suite bathrooms; Spacious living / dinning room; Spacious fitted semi closed Kitchen; Maids bedroom and bathroom; Guest washroom; Large balcony.
            </p>
            <div className="related-properties">
              Related Properties
            </div>
          </div>
        </div>

        <div className="sidebar-investment">
          <div className="sidebar-header">
            <h2 className="sidebar-title">OVERVIEW</h2>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <path d="M6 21h12M9 9v12M15 9v12M3 9h18M3 3v6h18V3" />
                </svg>
              </div>
              <span>3 Bedrooms</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <path d="M12 6v6M12 18v-6M6 12h12M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
              </div>
              <span>3 Bathrooms</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 8h18M8 3v18" />
                </svg>
              </div>
              <span>2938 Sq Feet</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M8 7V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
                </svg>
              </div>
              <span>1 Parking</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span>Garden</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-4-4 4 4 0 0 1-5-5Z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span>Swimming Pool</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <polygon points="12,2 2,7 12,12 22,7" />
                  <polygon points="12,12 2,17 12,22 22,17" />
                </svg>
              </div>
              <span>Hold 2 BNB to be able to invest</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A9EFF" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>20 days left</span>
            </div>
          </div>

          <div className="progress-circle">
            <div className="progress-text">0.0%</div>
            <div className="progress-number">{product.price}</div>
          </div>

          <div className="price-display">
            <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="20" height="20" />
            {product.price.toLocaleString()}.0 BNB
          </div>

          <div className="investment-input-section">
            <div className="percentage-buttons">
              <button className="percentage-btn">25%</button>
              <button className="percentage-btn">50%</button>
              <button className="percentage-btn">75%</button>
              <button className="percentage-btn">100%</button>
            </div>
            <div className="input-wrapper">
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="amount-input"
              />
            </div>
          </div>

          <button className="invest-btn">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            INVEST
          </button>
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

export default ProductDetail;

