var axios = require('axios').default;

export const fetchStocks = async (stocksList, api_key1) => {
  var options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote?region=IN&lang=en',
    headers: {
      'x-api-key': api_key1,
    },
  };
  try {
    const response = await axios.get(options.url, {
      ...options,
      params: {symbols: stocksList},
    });
    return response.data.quoteResponse.result;
  } catch (e) {
    console.error(e);
  }
};
export const fetchStock = async (symbol, api_key) => {
  var options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote?region=IN&lang=en',
    headers: {
      'x-api-key': api_key,
    },
    params: {symbols: symbol},
  };
  try {
    const response = await axios.get(options.url, options);
    return response.data.quoteResponse.result;
  } catch (e) {
    console.error(e);
  }
};
export const searchStocks = async (search, api_key) => {
  try {
    let optionsSearch = {
      method: 'GET',
      url: 'https://yfapi.net/v6/finance/autocomplete?region=IN&lang=en',
      params: {
        query: search,
      },
      headers: {
        'x-api-key': api_key,
      },
    };
    const response = await axios.get(optionsSearch.url, optionsSearch);
    return response.data.ResultSet.Result;
  } catch (e) {
    console.error(e);
  }
};
export const fetchStockChart = async (ticker, api_key) => {
  try {
    const response = await axios.get(
      `https://yfapi.net/v8/finance/chart/${ticker}?range=1mo&region=IN&interval=1d&lang=en&events=div%2Csplit`,
      {
        headers: {
          'x-api-key': api_key,
        },
      },
    );
    return response.data.chart.result[0];
  } catch (e) {
    console.error(e);
  }
};

//API key 1 zT3IGbFLs97MgH79Z7S7b6aTRfxsDSH6tKRrWVDf sh
//API key 2 R4kXV1oUGn21uYalfufB48d3gLw3sk9JaVN5jR0c sl
//API key 3 M761NnOQhM2BAjHHmZYDDFoiVSnDYdSUjl5EyQ80 tm1
//API key 4 l0Go8BbMlI3YX9pFG8tNc8b2VWtVXwLw8uTdo83m tm2
