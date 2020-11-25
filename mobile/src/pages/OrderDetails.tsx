import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import Header from '../components/Header';
import FoodConfirmation from '../components/FoodConfirmation';
import ConfirmButton from '../components/ConfirmButton';

import styles from '../styles/orderDetailsStyle';
import { ScrollView } from 'react-native-gesture-handler';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

import crop from '../assets/images/orderCrop.png';
import { clearCart, getCart } from '../services/Cart';

import { Order } from '../types/homeInterfaces';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { setStatusBarTranslucent } from 'expo-status-bar';

export default function OrderDetails() {
  const [cart, setCart] = useState<Order[]>([] as Order[]);
  const navigation = useNavigation();
  const [btnDisbled, setBtnDisabled] = useState(false);

  useEffect(() => {
    getCart()
      .then((data) => {
        setCart(data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleFinish() {
    const finalOrder = {
      dishName: '',
      tableNumber: 1,
      observations: '',
      additional: '',
      status: 'recebido',
    };
    cart.map((order: Order, index) => {
      if (index === cart.length - 1) {
        finalOrder.dishName = finalOrder.dishName.concat(
          `${order.qty}x-${order.dishName}`
        );
        finalOrder.observations = finalOrder.observations.concat(
          `${order.observations}`
        );
        finalOrder.additional = finalOrder.additional.concat(
          `${order.additional}`
        );
      } else {
        finalOrder.dishName = finalOrder.dishName.concat(
          `${order.qty}x-${order.dishName},`
        );
        finalOrder.observations = finalOrder.observations.concat(
          `${order.observations};`
        );
        finalOrder.additional = finalOrder.additional.concat(
          `${order.additional},`
        );
      }
    });
    setBtnDisabled(true);
    try {
      await api.post('/orders', finalOrder);
      alert('Pedido Enviado');
      await clearCart();
      navigation.navigate('Home');
    } catch (error: any) {
      alert(error);
    }
  }

  return (
    <>
      <Header title="Pedido" navigateTo="OrderDetails" screen="OrderDetails" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          {cart.map((order: Order, index) => (
            <FoodConfirmation
              key={index}
              price={order.price}
              name={order.dishName}
              quantity={order.qty}
              sideDishes={
                order.additional === `${order.dishName}: `
                  ? []
                  : order.additional.split(`${order.dishName}: `)[1].split(';')
              }
              observations={
                order.observations === `${order.dishName}: `
                  ? []
                  : order.observations
                      .split(`${order.dishName}: `)[1]
                      .split(';')
              }
            />
          ))}
          <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
            <Text style={styles.total}>
              {'TOTAL: '}
              <FormattedNumber
                value={cart.reduce((total: number, order: Order) => {
                  return total + order.price;
                }, 0)}
                style="currency"
                currency="BRL"
              />
            </Text>
          </IntlProvider>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            {cart.length !== 0 && (
              <ConfirmButton
                handlePress={() => handleFinish()}
                title="Finalizar pedido"
                disabled={btnDisbled}
              />
            )}
          </View>
        </View>
        <Image source={crop} style={styles.cropContainer} />
      </ScrollView>
    </>
  );
}
