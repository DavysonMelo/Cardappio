import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import OrderDetails from './pages/OrderDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="DishDetails" component={DishDetails} />
        <Screen name="OrderDetails" component={OrderDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
