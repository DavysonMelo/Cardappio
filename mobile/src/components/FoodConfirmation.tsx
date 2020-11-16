import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/foodConfirmationStyle';
import ExtraDishes from '../components/ExtraDishes';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

interface FoodConfirmation {
  name: string;
  price: number;
  quantity: number;
}

export default function FoodConfirmation({
  price,
  name,
  quantity,
}: FoodConfirmation) {
  return (
    <View style={styles.container}>
      <View style={styles.foodInfos}>
        <Text style={styles.foodInfosFont}>
          {quantity}x {name}
        </Text>
        <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
          <Text style={styles.foodInfosFont}>
            <FormattedNumber value={price} style="currency" currency="BRL" />
          </Text>
        </IntlProvider>
      </View>
      <View style={styles.extraDishesContainer}>
        <ExtraDishes name="Água Mineral" />
        <ExtraDishes name="Batata Frita M" />
        <ExtraDishes name="Carne extra" />
        <ExtraDishes name="Batata frita G" />
        <ExtraDishes name="Refrigerante 500ml" />
        <View style={styles.line} />
      </View>
    </View>
  );
}
