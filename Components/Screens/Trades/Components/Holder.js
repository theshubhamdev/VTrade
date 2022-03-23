import {View, Text} from 'react-native';
import React from 'react';

const Holder = ({value, description}) => {
  return (
    <View
      style={{
        backgroundColor: '#252525',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      <Text style={{color: 'white'}}>{value}</Text>
      <Text style={{color: 'grey'}}>{description}</Text>
    </View>
  );
};

export default Holder;
