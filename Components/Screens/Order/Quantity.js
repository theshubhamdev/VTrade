import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Quantity = ({setQuantity}) => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        Quantity
      </Text>
      <TextInput
        placeholder="0"
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
        onChangeText={value => setQuantity(value)}
      />
    </View>
  );
};

export default Quantity;
