import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Quantity = ({setQuantity, allowedQuantity, quantity}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Quantity Left
        </Text>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            marginTop: 10,
            fontWeight: 'bold',
            marginLeft: 'auto',
          }}>
          {allowedQuantity - quantity === NaN ? '' : allowedQuantity - quantity}
        </Text>
      </View>
      <TextInput
        placeholder={`1-${allowedQuantity}`}
        placeholderTextColor={'grey'}
        style={{
          borderColor: 'white',
          borderWidth: 1,
          fontSize: 18,
          padding: 10,
          borderRadius: 10,
          margin: 10,
          color: 'white',
        }}
        textAlign="center"
        keyboardType="numeric"
        onChangeText={value => setQuantity(parseInt(value))}
      />
    </View>
  );
};

export default Quantity;
