import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Options from './Options';
import Quantity from './Quantity';
import Footer from './Footer';

const Order = ({navigation, route}) => {
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const {symbol, price, percentage, tradeable} = route.params;

  useEffect(() => {
    const CalculateAmount = () => {
      setAmount(quantity * price);
    };
    CalculateAmount();
  }, [quantity]);
  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <View style={{}}>
        <Header
          navigation={navigation}
          name={symbol}
          price={price}
          exchange="NSE"
          percentage={percentage}
        />
      </View>
      <Quantity setQuantity={setQuantity} />
      <Footer
        amount={amount}
        quantity={quantity}
        navigation={navigation}
        symbol={symbol}
        tradeable={tradeable}
      />
    </SafeAreaView>
  );
};

export default Order;
