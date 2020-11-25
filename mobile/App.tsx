import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import Cart from './src/services/Cart';

import {
  useFonts,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';

export default function App() {
  useEffect(() => {
    const cart = new Cart();
  }, []);

  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="#BF4B4B" />
    </>
  );
}
