import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const ListItem = ({data, watchlist, removeWatchlistStock}) => {
  const Navigation = useNavigation();
  const {
    symbol,
    regularMarketPrice,
    regularMarketChange,
    regularMarketChangePercent,
    shortName,
    tradeable,
  } = data;
  const [loading, setLoading] = useState(false);
  const RemoveStock = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    removeWatchlistStock(symbol);
    setLoading(false);
  };

  const sign = regularMarketChange > 0 ? '+' : '';
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#0a0a0a',
        height: 60,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: '#808080',
        borderBottomWidth: 0.2,
        display: 'flex',
      }}
      onPress={() => Navigation.navigate('Stock', data)}>
      <View>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {symbol}
        </Text>
        <Text style={{color: 'grey'}}>{shortName}</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          ₹{regularMarketPrice.toFixed(2)}
        </Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: sign === '+' ? '#79ea86' : '#e75757'}}>
              {sign}
              {regularMarketChange.toFixed(2)}
            </Text>
            <Text
              style={{
                color: sign === '+' ? '#79ea86' : '#e75757',
                fontWeight: 'bold',
              }}>
              {' '}
              {sign}
              {regularMarketChangePercent.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{marginHorizontal: 10}} onPress={RemoveStock}>
        <Icon name="star" color={'#FFD700'} size={30} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;
