import React from 'react';
import { View, Text } from 'react-native';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

import styles from '../styles/extraDishes';

interface ExtraDishes {
  name: string;
}

export default function ExtraDishes({ name }: ExtraDishes) {
  return (
    <View style={styles.extraDishes}>
      <Text style={styles.extraDishesFont}>- {name}</Text>
      <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
        <Text style={styles.extraDishesFontPrice}>
          {/* +<FormattedNumber value={8} style="currency" currency="BRL" /> */}
        </Text>
      </IntlProvider>
    </View>
  );
}
