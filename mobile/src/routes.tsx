import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import DishDetails from './pages/DishDetails';

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
        <Screen
          name="DishDetails"
          component={DishDetails}
          options={{ cardStyle: { backgroundColor: '#FFF' } }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
