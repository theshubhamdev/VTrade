import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TradesInactive from './TradesInactive';
import TradesActive from './TradesActive';

const Tab = createMaterialTopTabNavigator();

const TradesNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#0a0a0a'},
        tabBarLabelStyle: {color: 'white', fontSize: 12},
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="TradesActive"
        component={TradesActive}
        options={{tabBarLabel: 'Active'}}
      />
      <Tab.Screen
        name="TradesInactive"
        component={TradesInactive}
        options={{tabBarLabel: 'Inactive'}}
      />
    </Tab.Navigator>
  );
};

export default TradesNavigation;
