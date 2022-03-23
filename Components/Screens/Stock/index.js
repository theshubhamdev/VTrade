import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import MainDetails from './MainDetails';
import {useWatchlist} from '../../Contexts/WatchlistContext';
import StockNavigation from './StockNavigation';

const Stock = ({route, navigation}) => {
  const {watchlistStocks, removeWatchlistStock, storeWatchlistStock} =
    useWatchlist();
  const {
    symbol,
    longName,
    regularMarketPrice,
    fullExchangeName,
    regularMarketChange,
    regularMarketChangePercent,
  } = route.params;
  const [inWatchlist, setInWatchlist] = useState(
    watchlistStocks.includes(symbol),
  );
  const [loading, setLoading] = useState(false);

  const RemoveStock = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    removeWatchlistStock(symbol);
    setInWatchlist(false);
    setLoading(false);
  };
  const AddStock = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (watchlistStocks.length > 9) {
      Alert.alert(
        'Watchlist is full',
        'You can add only 10 items in the watchlist. Please remove an item from the list to Add new item',
      );
    } else {
      if (watchlistStocks.includes(symbol)) {
        Alert.alert(
          `Item Already in the list`,
          `${symbol} is already in your watchlist`,
        );
      } else {
        storeWatchlistStock(symbol);
        setInWatchlist(true);
      }
    }
    setLoading(false);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#0a0a0a',
        flex: 1,
      }}>
      <View style={{padding: 10}}>
        <Header
          symbol={symbol}
          otherSeries={fullExchangeName}
          navigation={navigation}
          inWatchlist={inWatchlist}
          RemoveStock={RemoveStock}
          AddStock={AddStock}
        />
        <MainDetails
          difference={regularMarketChange?.toFixed(2)}
          percentage={regularMarketChangePercent?.toFixed(2)}
          symbol={symbol}
          lastUpdateTime={'not available'}
          companyName={longName}
          buyPrice1={regularMarketPrice}
        />
      </View>
      <StockNavigation data={route.params} />
      <View style={{flexDirection: 'row', marginTop: 'auto'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#79ea86',
            borderRadius: 50,
            marginBottom: 10,
          }}
          onPress={() =>
            navigation.navigate('Order', {
              price: regularMarketPrice,
              symbol: symbol,
              difference: regularMarketChange?.toFixed(2),
              percentage: regularMarketChangePercent?.toFixed(2),
            })
          }>
          <Text style={{color: 'white', fontWeight: 'bold'}}>BUY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Stock;
