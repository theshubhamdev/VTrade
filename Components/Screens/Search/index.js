import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import {searchStocks} from '../../Helpers/Data';
import {useWatchlist} from '../../Contexts/WatchlistContext';
import {useUserData} from '../../Contexts/UserDataContext';

const Search = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {watchlistStocks, storeWatchlistStock, removeWatchlistStock, api_key4} =
    useWatchlist();

  const SearchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setData(await searchStocks(search, api_key4));
    setLoading(false);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#0a0a0a',
        flex: 1,
      }}>
      <Header
        navigation={navigation}
        setSearch={setSearch}
        search={search}
        SearchData={SearchData}
      />
      <View style={{padding: 10}}>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <ActivityIndicator size="large" color="white" />
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Searching...
            </Text>
          </View>
        ) : (
          <>
            <Text style={{color: 'white', paddingVertical: 10}}>
              Search results
            </Text>
            <View>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <SearchItem
                    data={item}
                    watchlist={watchlistStocks}
                    storeWatchlistStock={storeWatchlistStock}
                    removeWatchlistStock={removeWatchlistStock}
                  />
                )}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
