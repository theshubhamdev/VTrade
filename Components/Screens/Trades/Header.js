import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="search" color={'white'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft: 'auto'}}
        onPress={() => urlOpener('https://theshubham.in', '')}>
        <Text style={{marginLeft: 'auto', color: 'white', fontSize: 10}}>
          Developed with ♥️ by Shubham Lakhmani
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
