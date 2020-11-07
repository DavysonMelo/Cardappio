import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './pages/Home';
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            title: 'Cardappio',
            headerStyle: {
              backgroundColor: '#FF6161',
            },
            headerTitleStyle: {
              alignSelf: 'center',
              fontWeight: 'bold',
              color: '#FFFFFF',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
