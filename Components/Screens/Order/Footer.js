import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const Footer = ({amount, quantity, navigation, symbol, tradeable}) => {
  const OnClickReview = () => {
    if (quantity <= 0 || quantity > 25000) {
      Alert.alert('Quantity Error', 'Quantity Must be between 1 and 25000');
      return;
    }
    navigation.navigate('OrderSummary', {
      symbol: symbol,
      amount: amount.toFixed(2),
      quantity: quantity,
      tradeable: tradeable,
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#252525',
        alignItems: 'center',
        marginTop: 'auto',
      }}
      behavior="padding">
      <View style={{}}>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          ₹{amount.toFixed(2)}
        </Text>
        <Text
          style={{
            color: 'white',
            padding: 10,
            fontSize: 12,
          }}>
          Market buy {quantity} shares
        </Text>
      </View>
      <View style={{marginLeft: 'auto', marginRight: 10}}>
        <TouchableOpacity
          style={{backgroundColor: '#79ea86', padding: 15, borderRadius: 20}}
          onPress={() => OnClickReview()}>
          <Text style={{color: 'white'}}>Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
