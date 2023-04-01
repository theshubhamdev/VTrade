// var axios = require('axios').default;

// export const fetchStocks = async (stocksList, api_key1) => {
//   var options = {
//     method: 'GET',
//     url: 'https://api.coingecko.com/api/v3/',
//   };
//   try {
//     const response = await axios.get(options.url, {
//       ...options,
//       params: {symbols: stocksList},
//     });
//     return response.data.quoteResponse.result;
//   } catch (e) {
//     alert(e);
//     console.error(e);
//   }
// };
// export const fetchStock = async (symbol, api_key) => {
//   var options = {
//     method: 'GET',
//     url: 'https://yfapi.net/v6/finance/quote?region=IN&lang=en',
//     headers: {
//       'x-api-key': api_key,
//     },
//     params: {symbols: symbol},
//   };
//   try {
//     const response = await axios.get(options.url, options);
//     return response.data.quoteResponse.result;
//   } catch (e) {
//     alert(e);
//     console.error(e);
//   }
// };
// export const searchStocks = async (search, api_key) => {
//   try {
//     let optionsSearch = {
//       method: 'GET',
//       url: 'https://yfapi.net/v6/finance/autocomplete?region=IN&lang=en',
//       params: {
//         query: search,
//       },
//       headers: {
//         'x-api-key': api_key,
//       },
//     };
//     const response = await axios.get(optionsSearch.url, optionsSearch);
//     return response.data.ResultSet.Result;
//   } catch (e) {
//     alert(e);
//     console.error(e);
//   }
// };
// export const fetchStockChart = async (ticker, api_key) => {
//   try {
//     const response = await axios.get(
//       `https://yfapi.net/v8/finance/chart/${ticker}?range=1mo&region=IN&interval=1d&lang=en&events=div%2Csplit`,
//       {
//         headers: {
//           'x-api-key': api_key,
//         },
//       },
//     );
//     return response.data.chart.result[0];
//   } catch (e) {
//     alert(e);
//     console.error(e);
//   }
// };

import axios from 'axios';

export const getDetailedCoinData = async coinId => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCoinMarketChart = async (coinId, selectedRange) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMarketData = async (pageNumber = 1) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCoins = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/list?include_platform=false`,
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getCandleChartData = async (coinId, days = 1) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
