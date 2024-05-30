import React, { useState } from 'react';

const Trade = () => {
  const [crypto, setCrypto] = useState('');
  const [amount, setAmount] = useState(0);

  const handleBuy = () => {
    console.log(`Buying ${amount} of ${crypto}`);
    // Implement buy logic
  };

  const handleSell = () => {
    console.log(`Selling ${amount} of ${crypto}`);
    // Implement sell logic
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cryptocurrency (e.g., bitcoin)"
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default Trade;
