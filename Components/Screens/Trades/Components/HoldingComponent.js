import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {fetchStock} from '../../../Helpers/Data';
import {useWatchlist} from '../../../Contexts/WatchlistContext';

const HoldingComponent = ({item, navigation}) => {
  const {amount, quantity, stock, status, _version, id} = item;
  const [loading, setLoading] = useState(false);
  const {api_key1} = useWatchlist();
  const OnViewOrderPressed = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await fetchStock(stock, api_key1);
      navigation.navigate('ViewOrder', {
        stock: stock,
        amount: amount,
        quantity: quantity,
        status: status,
        stockDetails: data[0],
        _version: _version,
        id: id,
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <TouchableOpacity
      onPress={() => OnViewOrderPressed()}
      style={{
        flexDirection: 'row',
        backgroundColor: '#0a0a0a',
        padding: 10,
      }}>
      <View>
        <Text style={{color: 'white', paddingVertical: 5, fontSize: 17}}>
          {stock}
        </Text>
        <Text style={{color: 'grey', paddingVertical: 5}}>
          Invested ₹{amount}
        </Text>
        <Text style={{color: 'grey', paddingVertical: 5}}>
          {quantity} QTY ₹{amount / quantity} Avg
        </Text>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: 'grey',
            paddingVertical: 5,
          }}>
          +/-
        </Text>
        <Text
          style={{
            color: 'grey',
            paddingVertical: 5,
          }}>
          (+/-%)
        </Text>
        <Text
          style={{
            color: 'grey',
            paddingVertical: 5,
          }}>
          ₹
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HoldingComponent;
