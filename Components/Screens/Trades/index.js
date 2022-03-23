import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import Header from './Header';
import TradesNavigation from './TradesNavigation';

const Trades = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <Header navigation={navigation} />
      <TradesNavigation />
    </SafeAreaView>
  );
};

export default Trades;
