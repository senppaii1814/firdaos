import { createContext, useContext, useState, useEffect } from 'react';

const WalletContext = createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    // Check if wallet was previously connected
    const stored = localStorage.getItem('walletConnected');
    const storedAddress = localStorage.getItem('walletAddress');
    if (stored === 'true' && storedAddress) {
      setIsConnected(true);
      setWalletAddress(storedAddress);
    }
  }, []);

  const connectWallet = (walletType = 'binance') => {
    // Demo address for all wallets
    const demoAddress = '0xa00fde822f694bf68e278c004be6e6afe5500e6c';
    
    setIsConnected(true);
    setWalletAddress(demoAddress);
    localStorage.setItem('walletConnected', 'true');
    localStorage.setItem('walletAddress', demoAddress);
    localStorage.setItem('walletType', walletType);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
  };

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
}

