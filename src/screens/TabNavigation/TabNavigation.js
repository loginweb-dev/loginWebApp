import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import StackNavigation from '../StackNavigation/StackNavigation';
import Details from '../Details/Details';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigation} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}

export default TabNavigation;