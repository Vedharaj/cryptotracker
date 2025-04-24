import axios from 'axios';


const BASE_URL = "http://localhost:5000/api/crypto";

export const fetchCryptoData = async () => {
  const response = await axios.get(BASE_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(response.data);
  
  const data = response.data.data;

  console.log(data);
  
  return data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.quote.USD.price,
    price_change_percentage_1h_in_currency: coin.quote.USD.percent_change_1h,
    price_change_percentage_24h: coin.quote.USD.percent_change_24h,
    price_change_percentage_7d_in_currency: coin.quote.USD.percent_change_7d,
    market_cap: coin.quote.USD.market_cap,
    volume24h: coin.quote.USD.volume_24h,
    circulating_supply: coin.circulating_supply,
    image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`,
    sparkline_in_7d: {
      price: Array(7).fill(coin.quote.USD.price), // Placeholder sparkline
    },
  }));
  
}