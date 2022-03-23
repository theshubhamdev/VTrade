import {View, Text} from 'react-native';
import React from 'react';

const Description = ({value,name}) => {
  return (
    <View style={{flex: 1}}>
          <Text style={{ color: 'white', fontWeight: '700' }}>{ value}</Text>
      <Text style={{color: 'white', fontSize: 10}}>{name}</Text>
    </View>
  );
};

export default Description;
