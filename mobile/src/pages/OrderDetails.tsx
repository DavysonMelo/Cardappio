import React from 'react';
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
          <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
            <Text style={styles.total}>
              {'TOTAL: '}
              <FormattedNumber value={150} style="currency" currency="BRL" />
            </Text>
          </IntlProvider>
          <ConfirmButton title="Finalizar pedido" />
        </View>
        <Image source={crop} style={styles.cropContainer} />
      </ScrollView>
    </>
  );
}
