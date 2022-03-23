import {
  View,
  Text,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HoldingComponent from './Components/HoldingComponent';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listOrders} from '../../../src/graphql/queries';
import {FlatList} from 'react-native-gesture-handler';
import {useUserData} from '../../Contexts/UserDataContext';

const TradesActive = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();

  const {userid} = useUserData();
  const fetchOrders = async () => {
    if (loading) return;
    setLoading(true);
    const response = await API.graphql(
      graphqlOperation(listOrders, {
        filter: {
          userID: {contains: userid},
          status: {eq: 'PENDING'},
        },
      }),
    );
    setOrders(response.data.listOrders.items);
    setLoading(false);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: '#0a0a0a',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Fetching Orders...
        </Text>
      </View>
    );
  }

  return orders ? (
    <View style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <FlatList
        data={orders}
        renderItem={({item}) => (
          <HoldingComponent item={item} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={fetchOrders}
          />
        }
      />
    </View>
  ) : (
    <View
      style={{
        backgroundColor: '#0a0a0a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>No Orders Yet!</Text>
    </View>
  );
};

export default TradesActive;
