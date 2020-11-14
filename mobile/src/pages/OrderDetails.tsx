import React from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import FoodConfirmation from '../components/FoodConfirmation';

import styles from '../styles/orderDetailsStyle';
import { ScrollView } from 'react-native-gesture-handler';

import crop from '../assets/images/orderCrop.png';

export default function OrderDetails() {
  return (
    <>
      <Header title="Pedido" navigateTo="OrderDetails" screen="OrderDetails" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
          <FoodConfirmation
            price={35}
            name={'Hambúrguer de carne'}
            quantity={2}
          />
        </View>
        <Image source={crop} style={styles.cropContainer} />
      </ScrollView>
    </>
  );
}
