import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const Footer = ({
  amount,
  quantity,
  navigation,
  symbol,
  allowedQuantity,
  OnClickSell,
}) => {
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
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              paddingHorizontal: 10,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Overall P&L:
          </Text>
          <Text
            style={{
              color: amount >= 0 ? '#79ea86' : 'red',
              paddingHorizontal: 5,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            ₹{amount.toFixed(2)}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            padding: 10,
            fontSize: 12,
          }}>
          Market Sell {quantity} shares
        </Text>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 10,
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e75757',
          padding: 15,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => OnClickSell()}>
          <Text style={{color: 'white'}}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
