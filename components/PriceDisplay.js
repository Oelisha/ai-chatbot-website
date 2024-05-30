import React, { useEffect, useState } from 'react';
import { getCryptoPrices } from '../pages/api/cryptoApi';

const PriceDisplay = () => {
  const [prices, setPrices] = useState({});
  const cryptoIds = 'bitcoin,ethereum,ripple'; // Example IDs

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await getCryptoPrices(cryptoIds);
        setPrices(data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      {Object.keys(prices).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <p>${prices[key].usd}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceDisplay;
