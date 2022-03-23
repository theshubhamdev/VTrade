import {View, Text, Pressable, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fetchStock} from '../../Helpers/Data';
import {useNavigation} from '@react-navigation/native';
import {RemoveStock} from '../../Helpers/Utils/WatchlistFunctions';
import {useWatchlist} from '../../Contexts/WatchlistContext';

const SearchItem = ({data, watchlist, storeWatchlistStock}) => {
  const Navigation = useNavigation();
  const {symbol, exch, regularPrice, previousPrice, netPrice} = data;
  const [loading, setLoading] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(watchlist?.includes(symbol));
  const {api_key3} = useWatchlist();
  const StockDetails = async () => {
    if (loading) return;
    setLoading(true);
    if (exch === 'NSI') {
      const data = await fetchStock(symbol, api_key3);
      Navigation.navigate('Stock', data[0]);
    } else {
      Alert.alert("Can't find data", 'This app functions only on NSI data');
    }
    setLoading(false);
  };
  useEffect(() => {
    const update = async () => {
      setInWatchlist(await watchlist.includes(symbol));
    };
    update();
  }, [watchlist]);

  const AddStock = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (watchlist.length > 9) {
      Alert.alert(
        'Watchlist is full',
        'You can add only 10 items in the watchlist. Please remove an item from the list to Add new item',
      );
    } else {
      if (watchlist.includes(symbol)) {
        Alert.alert(
          `Item Already in the list`,
          `${symbol} is already in your watchlist`,
        );
      } else {
        if (exch != 'NSI') {
          Alert.alert(
            `Unable to add ${symbol} (${exch})`,
            `This App functions only on NSI Data`,
          );
        } else {
          storeWatchlistStock(symbol);
        }
      }
    }
    setLoading(false);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#0a0a0a',
        height: 50,
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: '#808080',
        borderBottomWidth: 0.2,
      }}
      onPress={() => StockDetails()}>
      <View>
        <Text style={{color: 'white', fontSize: 18}}>{symbol}</Text>
        <Text style={{color: 'grey'}}>{exch}</Text>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 17}}>₹{regularPrice}</Text>
          <Text style={{color: '#79ea86'}}>+</Text>
        </View>
        {inWatchlist ? (
          <>
            <TouchableOpacity
              onPress={() => RemoveStock(loading, setLoading, symbol)}>
              <Icon
                name="star"
                color={'#FFD700'}
                size={30}
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={AddStock}>
              <Icon
                name="star-border"
                color={'white'}
                size={30}
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;
