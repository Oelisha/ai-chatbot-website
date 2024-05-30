import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3'; // Example with CoinGecko

export const getCryptoPrices = async (ids) => {
  try {
    const response = await axios.get(`${BASE_URL}/simple/price`, {
      params: {
        ids,
        vs_currencies: 'usd'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};
