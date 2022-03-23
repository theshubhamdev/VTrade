import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
const ListItem = ({data, watchlist, removeWatchlistStock}) => {
  const Navigation = useNavigation();
  const {
    symbol,
    regularMarketPrice,
    regularMarketChange,
    regularMarketChangePercent,
    shortName,
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
  const LeftSwipeActions = () => {
    return (
      <View
        style={{
          width: '100%',
          padding: 20,
          backgroundColor: '#79ea86',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          Buy
        </Text>
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View
        style={{
          width: '100%',
          padding: 20,
          backgroundColor: '#e75757',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          Sell
        </Text>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    Navigation.navigate('Stock', data);
    Navigation.navigate('Order', {
      option: 'BUY',
      price: regularMarketPrice,
      symbol: symbol,
      difference: regularMarketChange.toFixed(2),
      percentage: regularMarketChangePercent.toFixed(2),
    });
  };
  const swipeFromRightOpen = () => {
    Navigation.navigate('Stock', data);
    Navigation.navigate('Order', {
      option: 'SELL',
      price: regularMarketPrice,
      symbol: symbol,
      difference: regularMarketChange.toFixed(2),
      percentage: regularMarketChangePercent.toFixed(2),
    });
  };
  const sign = regularMarketChange > 0 ? '+' : '';
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
      onSwipeableLeftOpen={swipeFromLeftOpen}>
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
    </Swipeable>
  );
};

export default ListItem;
