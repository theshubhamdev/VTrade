import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, name, price, exchange, percentage}) => {
  const sign = percentage > 0 ? '+' : '';
  return (
    <View
      style={{
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="close"
            color={'white'}
            size={30}
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#79ea86',
            fontSize: 20,
            letterSpacing: 0.6,
          }}>
          SELL
        </Text>
      </View>
      <View style={{padding: 10, flexDirection: 'row'}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
        <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 'auto'}}>
          {price}
        </Text>
      </View>
      <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
        <Text style={{color: 'grey', fontSize: 12}}>{exchange}</Text>
        <Text
          style={{
            color: sign === '-' ? '#e75757' : '#79ea86',
            marginLeft: 'auto',
            fontSize: 12,
          }}>
          {sign}
          {percentage}
        </Text>
      </View>
    </View>
  );
};

export default Header;
