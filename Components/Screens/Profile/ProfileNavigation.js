import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileWallets from './ProfileWallets';
import ProfileSettings from './ProfileSettings';

const Tab = createMaterialTopTabNavigator();

const ProfileNavigation = ({user}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#0a0a0a'},
        tabBarLabelStyle: {color: 'white', fontSize: 12},
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="ProfileWallet"
        component={ProfileWallets}
        options={{tabBarLabel: 'Wallet'}}
      />
      <Tab.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        initialParams={user}
        options={{tabBarLabel: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export default ProfileNavigation;
