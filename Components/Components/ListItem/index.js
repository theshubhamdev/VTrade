import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const ListItem = ({data, watchlist, removeWatchlistStock}) => {
  const Navigation = useNavigation();
  const {
    symbol,
    current_price,
    price_change_24h,
    name,
    price_change_percentage_24h,
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

  const sign = price_change_24h > 0 ? '+' : '';
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
        alignItems: 'center',
      }}
      onPress={() => Navigation.navigate('Stock', data)}>
      <Image
        style={{width: 30, height: 30, borderRadius: 15, marginHorizontal: 10}}
        source={{uri: data.image}}
      />
      <View>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'grey'}}>{symbol}</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          ${current_price.toFixed(2)}
        </Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: sign === '+' ? '#79ea86' : '#e75757'}}>
              {sign}
              {price_change_24h.toFixed(2)}
            </Text>
            <Text
              style={{
                color: sign === '+' ? '#79ea86' : '#e75757',
                fontWeight: 'bold',
              }}>
              {' '}
              {sign}
              {price_change_percentage_24h.toFixed(2)}%
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
