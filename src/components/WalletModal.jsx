import '../WalletModal.css';

function WalletModal({ isOpen, onClose, onConnect }) {
  if (!isOpen) return null;

  const handleWalletClick = (walletType) => {
    onConnect(walletType);
  };

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Connect using MetaMask',
      icon: <img src="/logos/metamask.svg" alt="MetaMask" width="32" height="32" />
    },
    {
      id: 'trust',
      name: 'Trust Wallet',
      description: 'Connect using Trust Wallet',
      icon: <img src="/logos/trustwallet.png" alt="Trust Wallet" width="32" height="32" />
    },
    {
      id: 'binance',
      name: 'Binance Wallet',
      description: 'Connect with BNB wallet',
      icon: <img src="/logos/bnb-coin.svg" alt="BNB" width="32" height="32" />
    }
  ];

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="wallet-modal-header">
          <h2>Connect Wallet</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="wallet-modal-body">
          {wallets.map((wallet) => (
            <div 
              key={wallet.id} 
              className="wallet-option" 
              onClick={() => handleWalletClick(wallet.id)}
            >
              <div className="wallet-icon">
                {wallet.icon}
              </div>
              <div className="wallet-info">
                <div className="wallet-name">{wallet.name}</div>
                <div className="wallet-description">{wallet.description}</div>
              </div>
              <div className="wallet-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletModal;

