import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({
  symbol,
  otherSeries,
  navigation,
  inWatchlist,
  RemoveStock,
  AddStock,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 15}}>
        <Text style={{color: 'white', fontSize: 17}}>{symbol}</Text>
        <Text style={{color: 'white'}}>{otherSeries}</Text>
      </View>
      {inWatchlist ? (
        <>
          <TouchableOpacity onPress={RemoveStock} style={{marginLeft: 'auto'}}>
            <Icon
              name="star"
              color={'#FFD700'}
              size={30}
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={AddStock} style={{marginLeft: 'auto'}}>
            <Icon
              name="star-border"
              color={'white'}
              size={30}
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
