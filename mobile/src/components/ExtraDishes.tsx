import React from 'react';
import { View, Text } from 'react-native';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

import styles from '../styles/extraDishes';

export default function ExtraDishes() {
  return (
    <View style={styles.extraDishes}>
      <Text style={styles.extraDishesFont}>- Água mineral</Text>
      <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
        <Text style={styles.extraDishesFontPrice}>
          +<FormattedNumber value={8} style="currency" currency="BRL" />
        </Text>
      </IntlProvider>
    </View>
  );
}
