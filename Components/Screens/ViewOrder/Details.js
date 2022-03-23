import {View, Text} from 'react-native';
import React from 'react';

const Details = ({name, value, color}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'grey', padding: 10}}>{name}</Text>
      <Text style={{color: color, marginLeft: 'auto', padding: 10}}>
        {value}
      </Text>
    </View>
  );
};

export default Details;
