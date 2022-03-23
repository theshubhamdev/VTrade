import {SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import Quantity from './Quantity';
import Footer from './Footer';
import Header from './Header';
import {API, graphqlOperation} from 'aws-amplify';
import {updateOrder, updateUser} from '../../../src/graphql/mutations';
import {useUserData} from '../../Contexts/UserDataContext';

const SellOrder = ({route, navigation}) => {
  const {stock, quantity, amount, stockDetails, currentStatusPercentage, id} =
    route.params.orderDetails;
  const orderVersion = route.params.orderDetails._version;
  const {userid, _version, availableToTrade, setAvailableToTrade} =
    useUserData();
  const {regularMarketPrice} = stockDetails;
  const [squantity, setSquantity] = useState(0); //sell quantity
  const samount = squantity * regularMarketPrice; // sell amount
  const difference = samount - (amount / quantity) * squantity;
  const [loading, setLoading] = useState(false);

  const OnClickSell = async () => {
    if (loading) return;
    setLoading(true);
    if (quantity <= 0 || squantity > quantity) {
      Alert.alert(
        'Quantity Error',
        `Quantity Must be between 1 and ${quantity}`,
      );
      return;
    }
    let input = {};
    if (squantity === quantity) {
      input = {
        id: id,
        _version: orderVersion,
        amount: 0,
        quantity: quantity - squantity,
        status: 'SUCCESS',
      };
    } else {
      input = {
        id: id,
        _version: orderVersion,
        amount: (amount - samount).toFixed(2),
        quantity: quantity - squantity,
      };
    }
    try {
      const response = await API.graphql(
        graphqlOperation(updateOrder, {input: input}),
      );
      const updateUserMoney = await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: userid,
            availableToTrade: (availableToTrade + samount).toFixed(2),
            _version: _version,
          },
        }),
      );
      setAvailableToTrade(updateUserMoney.data.updateUser.availableToTrade);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    navigation.navigate('Trades');
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#0a0a0a',
        flex: 1,
      }}>
      <Header
        name={stock}
        price={regularMarketPrice}
        exchange="NSE"
        percentage={currentStatusPercentage}
        navigation={navigation}
      />
      <Quantity
        setQuantity={setSquantity}
        allowedQuantity={quantity}
        quantity={squantity}
      />
      <Footer
        amount={difference}
        quantity={squantity}
        navigation={navigation}
        symbol={stock}
        allowedQuantity={quantity}
        OnClickSell={OnClickSell}
      />
    </SafeAreaView>
  );
};

export default SellOrder;
