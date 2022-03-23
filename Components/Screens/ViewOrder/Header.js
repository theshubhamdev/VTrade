import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({
  navigation,
  stock,
  currentStatusPrice,
  currentStatusPercentage,
}) => {
  const sign = currentStatusPrice >= 0 ? '+' : '-';
  return (
    <View
      style={{
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingVertical: 10,
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
            name="arrow-back"
            color={'white'}
            size={30}
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', marginLeft: 20, fontSize: 18}}>
          {stock}
        </Text>
      </View>
      <View style={{padding: 10}}>
        {currentStatusPrice && currentStatusPercentage ? (
          <>
            <Text
              style={{
                color: sign === '+' ? '#79ea86' : '#e75757',
                fontSize: 32,
                paddingBottom: 5,
              }}>
              {sign === '+' ? '+' : ''}₹{currentStatusPrice}
            </Text>
            <Text
              style={{
                color: sign === '+' ? '#79ea86' : '#e75757',
                fontSize: 16,
              }}>
              ({sign === '+' ? '+' : ''}
              {currentStatusPercentage}%)
            </Text>
          </>
        ) : (
          <ActivityIndicator color={'white'} />
        )}
      </View>
    </View>
  );
};

export default Header;
