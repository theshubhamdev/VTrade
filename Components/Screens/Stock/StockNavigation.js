import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chart from './Summary/Components/Chart';
import Summary from './Summary';

const Tab = createMaterialTopTabNavigator();

const StockNavigation = ({data}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#0a0a0a'},
        tabBarLabelStyle: {color: 'white', fontSize: 12},
        tabBarActiveTintColor: 'white',
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="StockSummary"
        component={Summary}
        initialParams={{data: data}}
        options={{tabBarLabel: 'Summary'}}
      />
      <Tab.Screen
        name="StockChart"
        component={Chart}
        initialParams={{data: data}}
        options={{tabBarLabel: 'Chart'}}
      />
    </Tab.Navigator>
  );
};

export default StockNavigation;
