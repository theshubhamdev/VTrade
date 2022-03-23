import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/Search';
import BottomTabNavigation from './BottomTabNavigation';
import Stock from '../Screens/Stock';
import Authentication from '../Screens/Authentication';
import Order from '../Screens/Order';
import OrderSummary from '../Screens/OrderSummary';
import {
  View,
  ActivityIndicator,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useUserData} from '../Contexts/UserDataContext';
import ViewOrder from '../Screens/ViewOrder';
import SellOrder from '../Screens/SellOrder';
import {useWatchlist} from '../Contexts/WatchlistContext';
import Logo from '../../assets/images/Logo_1.png';

const RootStack = createStackNavigator();
const Navigation = () => {
  const {app_version} = useWatchlist();
  const {user} = useUserData();
  const codeVersion = 1;
  if (app_version > codeVersion) {
    return (
      <View
        style={{
          backgroundColor: '#0a0a0a',
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image
          source={Logo}
          style={{
            width: '70%',
            maxWidth: 400,
            maxHeight: 300,
            height: '30%',
          }}
          resizeMode="contain"
        />
        <Text style={{color: 'white'}}>
          Update the App from Play Store to Continue
        </Text>
      </View>
    );
  }
  if (user === undefined) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a0a0a',
        }}>
        <ActivityIndicator size="large" color="white" />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Loading...
        </Text>
      </View>
    );
  }
  return (
    <RootStack.Navigator
      initialRouteName={user ? 'BottomTabs' : 'Authentication'}>
      {user ? (
        <>
          <RootStack.Screen
            name={'BottomTabs'}
            component={BottomTabNavigation}
            initialParams={{}}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Stock"
            component={Stock}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Order"
            component={Order}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name={'OrderSummary'}
            component={OrderSummary}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="ViewOrder"
            component={ViewOrder}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="SellOrder"
            component={SellOrder}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <RootStack.Screen
          name={'Authentication'}
          component={Authentication}
          options={{
            headerShown: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default Navigation;
