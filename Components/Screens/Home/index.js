import {
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ListItem from '../../Components/ListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useWatchlist} from '../../Contexts/WatchlistContext';
import {urlOpener} from '../../../App';
import {getMarketData} from '../../Helpers/Data';

const Home = ({navigation}) => {
  const {watchlistStocks, removeWatchlistStock} = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async pageNumber => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins(existingCoins => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  // const fetchStocksData = async () => {
  //   if (loading) {
  //     return;
  //   }
  //   setLoading(true);
  //   const stockData = await fetchStocks(watchlistStocks.join(), api_key1);
  //   setStock(stockData);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   if (watchlistStocks?.length > 0) {
  //     fetchStocksData();
  //   }
  // }, []);
  // useEffect(() => {
  //   if (watchlistStocks?.length > 0) {
  //     fetchStocksData();
  //   }
  // }, [watchlistStocks]);
  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1, padding: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" color={'white'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 'auto'}}
          onPress={() => urlOpener('https://theshubham.in', '')}>
          <Text
            style={{
              marginLeft: 'auto',
              color: 'white',
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            Developed with ♥️ by Shubham Lakhmani
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            marginVertical: 15,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Watchlist ({watchlistStocks?.length})
        </Text>
        <Text
          style={{
            color: 'white',
            marginVertical: 15,
            marginLeft: 'auto',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          You can add upto 10 items
        </Text>
      </View> */}

      <FlatList
        data={coins}
        renderItem={({item}) => (
          <ListItem
            data={item}
            watchlist={watchlistStocks}
            removeWatchlistStock={removeWatchlistStock}
          />
        )}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
