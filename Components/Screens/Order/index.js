import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Options from './Options';
import Quantity from './Quantity';
import Footer from './Footer';

const Order = ({navigation, route}) => {
  const defaultChoice = route.params.option === 'BUY' ? true : false;
  const [buy, setBuy] = useState(defaultChoice);
  const [delivery, setDelivery] = useState(true);
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const {symbol, price, percentage} = route.params;

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
      />
    </SafeAreaView>
  );
};

export default Order;
