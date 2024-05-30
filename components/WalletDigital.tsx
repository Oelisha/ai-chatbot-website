/*
import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';


function Wallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);

  const connectWallet = async () => {
    const ethereumProvider: any = await detectEthereumProvider();
    if (ethereumProvider) {
      setProvider(ethereumProvider);
      const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert('Please install MetaMask!');
    }
  };

  const registerWallet = async () => {
    if (account) {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address: account })
        });
        const result = await response.text();
        alert(result);
      } catch (error) {
        console.error('Error registering wallet:', error);
        alert('Failed to register wallet!');
      }
    } else {
      alert('Connect wallet first!');
    }
  };

  const sendPayment = async () => {
    if (account && provider) {
      const web3 = new Web3(provider);
      const amount = web3.utils.toWei('0.01', 'ether'); // 0.01 ETH
      const recipientAddress = '0xRecipientAddressHere'; // replace with recipient address

      try {
        await web3.eth.sendTransaction({
          from: account,
          to: recipientAddress,
          value: amount
        });
        alert('Payment successful!');
      } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed!');
      }
    } else {
      alert('Connect wallet first!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Wallet App</h1>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account}` : 'Connect Wallet'}
        </button>
        <button onClick={registerWallet}>Register Wallet</button>
        <button onClick={sendPayment}>Send Payment</button>
      </header>
    </div>
  );
}

export default Wallet;

*/


import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

interface WalletProps {
  onPayment: () => void;
}

const Wallet: React.FC<WalletProps> = ({ onPayment }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);

  const connectWallet = async () => {
    const ethereumProvider: any = await detectEthereumProvider();
    if (ethereumProvider) {
      setProvider(ethereumProvider);
      const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert('Please install MetaMask!');
    }
  };

  const registerWallet = async () => {
    if (account) {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address: account })
        });
        const result = await response.text();
        alert(result);
      } catch (error) {
        console.error('Error registering wallet:', error);
        alert('Failed to register wallet!');
      }
    } else {
      alert('Connect wallet first!');
    }
  };

  const sendPayment = async () => {
    if (account && provider) {
      const web3 = new Web3(provider);
      const amount = web3.utils.toWei('0.01', 'ether'); // 0.01 ETH
      const recipientAddress = '0xRecipientAddressHere'; // replace with recipient address

      try {
        await web3.eth.sendTransaction({
          from: account,
          to: recipientAddress,
          value: amount
        });
        alert('Payment successful!');
        if (onPayment) {
          onPayment(); // Call the callback function on successful payment
        }
      } catch (error) {
        console.error('Payment error:', error);
        alert('Payment failed!');
      }
    } else {
      alert('Connect wallet first!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Wallet App</h1>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account}` : 'Connect Wallet'}
        </button>
        <button onClick={registerWallet}>Register Wallet</button>
        <button onClick={sendPayment}>Send Payment</button>
      </header>
    </div>
  );
}

export default Wallet;
