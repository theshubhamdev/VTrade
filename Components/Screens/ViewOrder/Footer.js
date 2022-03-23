import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Footer = ({OnSellPressed}) => {
  return (
    <TouchableOpacity
      onPress={() => OnSellPressed()}
      style={{
        backgroundColor: '#e75757',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 'auto',
        marginBottom: 10,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
        Sell
      </Text>
    </TouchableOpacity>
  );
};

export default Footer;
