import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';

const Options = ({option, setOption, option1, option2, optiontitle}) => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          paddingHorizontal: 10,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        {optiontitle}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#252525',
          padding: 5,
          borderRadius: 50,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            padding: 15,
            backgroundColor: option === true ? '#79ea86' : '#252525',
            borderRadius: 50,
          }}
          onPress={() => setOption(true)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            padding: 15,
            backgroundColor: option === false ? '#e75757' : '#252525',
            borderRadius: 50,
          }}
          onPress={() => setOption(false)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{option2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Options;
