import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "ws://localhost:5000";

// export const fetchCryptoData = createAsyncThunk(
//     'crypto/fetchCryptoData',
//     async () => {
//         const response = await axios.get(BASE_URL, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         // console.log(response.data);
        
//         const data = response.data.data;
      
//         console.log(data);
        
//         return data.map((coin) => ({
//           id: coin.id,
//           name: coin.name,
//           symbol: coin.symbol,
//           current_price: coin.quote.USD.price,
//           price_change_percentage_1h_in_currency: coin.quote.USD.percent_change_1h,
//           price_change_percentage_24h: coin.quote.USD.percent_change_24h,
//           price_change_percentage_7d_in_currency: coin.quote.USD.percent_change_7d,
//           market_cap: coin.quote.USD.market_cap,
//           volume24h: coin.quote.USD.volume_24h,
//           circulating_supply: coin.circulating_supply,
//           image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`,
//           sparkline_in_7d: {
//             price: Array(7).fill(coin.quote.USD.price), // Placeholder sparkline
//           },
//         }));
        
//       }
//     );

const cryptoSlice = createSlice({
    name: "crypto",
    initialState:{data: [], sortOrder:{
        name: "asc",
        current_price: "asc",
        price_change_percentage_1h_in_currency: "asc",
        price_change_percentage_24h: "asc",
        price_change_percentage_7d_in_currency: "asc",
        market_cap: "asc",
        volume24h: "asc",
        circulating_supply: "asc",
    }},
    reducers: {
        setCryptoData: (state, action) => {
            state.data = action.payload.map((coin) => ({
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
            }));
        },

        sorting: (state, action) => {
            const column = action.payload.column
            switch(column){
              case "name":
                state.sortOrder.name = state.sortOrder.name === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.name === "asc") {
                    return a.name.localeCompare(b.name);
                  } else {
                    return b.name.localeCompare(a.name);
                  }
                });
                break;  
              case "price":
                state.sortOrder.current_price = state.sortOrder.current_price === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.current_price === "asc") {
                    return a.current_price - b.current_price;
                  } else {
                    return b.current_price - a.current_price;
                  }
                });
                break;
              case "change_1h":
                state.sortOrder.price_change_percentage_1h_in_currency = state.sortOrder.price_change_percentage_1h_in_currency === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.price_change_percentage_1h_in_currency === "asc") {
                    return a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency;
                  } else {
                    return b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency;
                  }
                });
                break;
              case "change_24h":
                state.sortOrder.price_change_percentage_24h = state.sortOrder.price_change_percentage_24h === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.price_change_percentage_24h === "asc") {
                    return a.price_change_percentage_24h - b.price_change_percentage_24h;
                  } else {
                    return b.price_change_percentage_24h - a.price_change_percentage_24h;
                  }
                });
                break;
              case "change_7d":
                state.sortOrder.price_change_percentage_7d_in_currency = state.sortOrder.price_change_percentage_7d_in_currency === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.price_change_percentage_7d_in_currency === "asc") {
                    return a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency;
                  } else {
                    return b.price_change_percentage_7d_in_currency - a.price_change_percentage_7d_in_currency;
                  }
                });
                break;
              case "market_cap":
                state.sortOrder.market_cap = state.sortOrder.market_cap === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.market_cap === "asc") {
                    return a.market_cap - b.market_cap;
                  } else {
                    return b.market_cap - a.market_cap;
                  }
                });
                break;
              case "volume24h":
                state.sortOrder.volume24h = state.sortOrder.volume24h === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.volume24h === "asc") {
                    return a.volume24h - b.volume24h;
                  } else {
                    return b.volume24h - a.volume24h;
                  }
                });
                break;
              case "circulating_supply":
                state.sortOrder.circulating_supply = state.sortOrder.circulating_supply === "asc" ? "desc" : "asc";
                state.data.sort((a, b) => {
                  if (state.sortOrder.circulating_supply === "asc") {
                    return a.circulating_supply - b.circulating_supply;
                  } else {
                    return b.circulating_supply - a.circulating_supply;
                  }
                });
                break;
            }
    },
  }
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchCryptoData.fulfilled, (state, action) => {
//             state.data = action.payload;
//         });
// },
});
export const { setCryptoData, sorting } = cryptoSlice.actions;
export default cryptoSlice.reducer;