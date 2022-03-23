import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDefaultValues} from '../aws/queries';
import {API, graphqlOperation} from 'aws-amplify';

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({children}) => {
  const [watchlistStocks, setWatchlistStocks] = useState([]);
  const [api_key1, setApi_key1] = useState();
  const [api_key2, setApi_key2] = useState();
  const [api_key3, setApi_key3] = useState();
  const [api_key4, setApi_key4] = useState();
  const [app_version, setApp_version] = useState();
  const [update_required, setUpdate_required] = useState(false);

  const fetchDefaultValues = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(getDefaultValues, {
          id: '2bd6ad1c-e7a8-49a3-9e72-2d2159052054',
        }),
      );
      setApi_key1(response.data.getDefaultValues.Api_key1);
      setApi_key2(response.data.getDefaultValues.Api_key2);
      setApi_key3(response.data.getDefaultValues.Api_key3);
      setApi_key4(response.data.getDefaultValues.Api_key4);
      setApp_version(response.data.getDefaultValues.App_version);
      setUpdate_required(response.data.getDefaultValues.update_required);
    } catch (err) {
      console.error(err);
    }
  };
  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@watchlist_stocks');
      setWatchlistStocks(jsonValue != null ? JSON.parse(jsonValue) : []);
      if (jsonValue === undefined) {
        const newWatchlist = await AsyncStorage.setItem(
          '@watchlist_stocks',
          JSON.stringify([
            'TCS.NS',
            'RELIANCE.NS',
            'HDFC.NS',
            'ACC.NS',
            'INFY.NS',
            'SBILIFE.NS',
            'TATACHEM.NS',
            'HDFCLIFE.NS',
            'ICICIPRULI.NS',
          ]),
        );
        setWatchlistStocks(newWatchlist);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDefaultValues();
    getWatchlistData();
  }, []);

  const storeWatchlistStock = async stock => {
    try {
      const newWatchlist = [...watchlistStocks, stock];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem('@watchlist_stocks', jsonValue);
      setWatchlistStocks(newWatchlist);
    } catch (e) {
      console.log(e);
    }
  };

  const removeWatchlistStock = async stock => {
    const newWatchlist = watchlistStocks.filter(
      stockValue => stockValue !== stock,
    );
    const jsonValue = JSON.stringify(newWatchlist);
    await AsyncStorage.setItem('@watchlist_stocks', jsonValue);
    setWatchlistStocks(newWatchlist);
  };

  const clearData = async () => {
    await AsyncStorage.clear();
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlistStocks,
        storeWatchlistStock,
        removeWatchlistStock,
        clearData,
        api_key1,
        api_key2,
        api_key3,
        api_key4,
        app_version,
        update_required,
      }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
