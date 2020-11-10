import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

import Home from './pages/Home';
import bellImg from '../assets/images/bellImg.png';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#F2F3F5' },
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
              fontFamily: 'DancingScript_700Bold',
              fontSize: 35,
              color: '#FFFFFF',
              marginLeft: 50,
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 6 }}>
                <Image source={bellImg} />
              </TouchableOpacity>
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
