import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#0a0a0a',
          borderColor: 'white',
          borderWidth: 1,
          alignItems: 'center',
          paddingVertical: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
