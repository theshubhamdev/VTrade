import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {API, graphqlOperation} from 'aws-amplify';
import {createOrder, updateUser} from '../../../src/graphql/mutations';
import {useUserData} from '../../Contexts/UserDataContext';

const OrderSummary = ({route, navigation}) => {
  const {quantity, amount, symbol} = route.params;
  const {
    userid,
    availableToTrade,
    _version,
    setName,
    setAvailableToTrade,
    setVmoney,
    set_version,
  } = useUserData();

  const [loading, setLoading] = useState(false);

  const OnSubmitOrder = async () => {
    if (loading) return;
    setLoading(true);
    const orderData = {
      status: 'PENDING',
      stock: symbol,
      amount: amount,
      quantity: quantity,
      userID: userid,
    };
    const moneyLeft = (availableToTrade - amount).toFixed(2);
    if (moneyLeft < 0) {
      Alert.alert(
        'Insufficient funds',
        `Amount exceeded, please remove ${moneyLeft} worth of quantity`,
      );
      return;
    }
    const input = {
      id: userid,
      availableToTrade: moneyLeft,
      _version: _version,
    };
    try {
      const response = await API.graphql(
        graphqlOperation(updateUser, {input: input}),
      );
      setAvailableToTrade(response.data.updateUser.availableToTrade);
      set_version(response.data.updateUser._version);
      setVmoney(response.data.updateUser.vmoney);
      const orderResponse = await API.graphql(
        graphqlOperation(createOrder, {
          input: orderData,
        }),
      );
      navigation.navigate('Trades');
    } catch (e) {
      console.error('error in Order Summary', e);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="white" size={30} />
        </Pressable>
        <Text style={{color: 'white', padding: 5}}>Delivery Order Summary</Text>
      </View>
      <Text
        style={{
          color: '#e75757',
          marginTop: 10,
          fontSize: 12,
          padding: 5,
        }}>
        Markets are closed for the day. Your order will be scheduled and placed
        when the markets open next for trading.
      </Text>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'white',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          Quantity
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 'auto'}}>
          +{quantity}
        </Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Margin coverage
          </Text>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 'auto'}}>
            ₹{amount}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Taxes and Charges
          </Text>
          <Text style={{color: 'white', fontSize: 16, marginLeft: 'auto'}}>
            ₹0
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          Est. total cost
        </Text>
        <Text style={{color: 'white', fontSize: 16, marginLeft: 'auto'}}>
          ₹{amount}
        </Text>
      </View>
      <TouchableOpacity onPress={OnSubmitOrder}>
        <View
          style={{
            backgroundColor: '#79ea86',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: 'auto',
          }}>
          {loading ? (
            <Text style={{color: 'white'}}>Loading...</Text>
          ) : (
            <Text style={{color: 'white'}}>Submit order</Text>
          )}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderSummary;
