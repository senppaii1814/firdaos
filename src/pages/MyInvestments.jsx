import { Link } from 'react-router-dom';
import '../Pages.css';
import '../App.css';
import WalletModal from '../components/WalletModal';
import { useWallet } from '../contexts/WalletContext';
import { useState } from 'react';

function MyInvestments() {
  const { isConnected, walletAddress, connectWallet } = useWallet();
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectWallet = (walletType) => {
    connectWallet(walletType);
    setShowWalletModal(false);
  };

  // Show connect prompt if not connected
  if (!isConnected && !showWalletModal) {
    return (
      <div className="page-container">
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
            <Link to="/my-investments" className="nav-link active">MY INVESTMENTS</Link>
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
        
        <main className="investments-main">
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Connect Your Wallet</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
              Connect your wallet to view your investments and manage your portfolio.
            </p>
            <button className="connect-wallet-btn" onClick={() => setShowWalletModal(true)} style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              <svg className="lock-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9z"/>
              </svg>
              Connect Wallet to Continue
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo">家</div>
          <div className="footer-powered">
            <span>POWERED BY</span>
            <img src="/logos/binance-full.svg" alt="Binance" className="binance-logo-img" />
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-icon">
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
          <Link to="/my-investments" className="nav-link active">MY INVESTMENTS</Link>
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

      <main className="investments-main">
        <div className="investments-content">
          <div className="investments-left">
            <h1 className="page-title">Ongoing Projects</h1>

            <div className="projects-table-container">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Ownership</th>
                    <th>Pool</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="asset-info">
                        <img 
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=90" 
                          alt="Kempinski"
                          className="asset-thumb"
                        />
                        <div className="asset-details">
                          <div className="asset-name">Kempinski Residences</div>
                          <div className="asset-amount">
                            <span>0.07/1103000</span>
                            <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="16" height="16" />
                            <span>BNB</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>0.0%</td>
                    <td>
                      <div className="pool-progress">
                        <div className="progress-circle-small">
                          <div className="progress-text">0.0%</div>
                          <div className="progress-number">0.071103000</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="refund-btn">REFUND</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="asset-info">
                        <img 
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=90" 
                          alt="Kempinski"
                          className="asset-thumb"
                        />
                        <div className="asset-details">
                          <div className="asset-name">Kempinski Residences</div>
                          <div className="asset-amount">
                            <span>0.05/2697</span>
                            <img src="/logos/bnb-coin.svg" alt="BNB" className="bnb-icon" width="16" height="16" />
                            <span>BNB</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>0.0%</td>
                    <td>
                      <div className="pool-progress">
                        <div className="progress-circle-small">
                          <div className="progress-text">0.0%</div>
                          <div className="progress-number">0.052697</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="refund-btn">REFUND</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="investments-right">
            <p className="no-finished-text">You don't have finished projects.</p>
          </div>
        </div>

        <div className="background-skyline">
          <img 
            src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=90" 
            alt="Skyline"
            className="skyline-image"
          />
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

export default MyInvestments;

