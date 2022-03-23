import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import Details from './Details';
import Footer from './Footer';

const ViewOrder = ({navigation, route}) => {
  const {stock, quantity, amount, stockDetails} = route.params;
  const {regularMarketPrice} = stockDetails;
  const currentStatusPrice = (regularMarketPrice * quantity - amount).toFixed(
    2,
  );
  const currentStatusPercentage = ((currentStatusPrice * 100) / amount).toFixed(
    2,
  );

  const OnSellPressed = () => {
    navigation.navigate('SellOrder', {
      orderDetails: route.params,
      currentStatusPercentage: currentStatusPercentage,
    });
  };
  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <Header
        navigation={navigation}
        stock={stock}
        currentStatusPrice={currentStatusPrice}
        currentStatusPercentage={currentStatusPercentage}
      />
      <Text style={{color: 'white', padding: 10}}>Summary</Text>
      <Details name="Product" value="Delivery" color="white" />
      <Details name="Quantity" value={`+${quantity}`} color="#79ea86" />
      <Details
        name="Avg. price"
        value={`₹${(amount / quantity).toFixed(2)}`}
        color="white"
      />
      <Details
        name="Current Value"
        value={`₹${regularMarketPrice.toFixed(2)}`}
        color="white"
      />
      <Details
        name="Overall P&L"
        value={`₹${currentStatusPrice}`}
        color={currentStatusPrice >= 0 ? '#79ea86' : '#e75757'}
      />
      <Details
        name="Overall P&L"
        value={`${currentStatusPercentage}%`}
        color={currentStatusPercentage >= 0 ? '#79ea86' : '#e75757'}
      />

      <Details
        name="Investment"
        value={`₹${amount.toFixed(2)}`}
        color="white"
      />

      <Footer OnSellPressed={OnSellPressed} />
    </SafeAreaView>
  );
};

export default ViewOrder;
