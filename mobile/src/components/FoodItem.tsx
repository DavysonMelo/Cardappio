import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/foodItemStyle';
import foodImg from '../../assets/images/foodImg.png';
import { RectButton } from 'react-native-gesture-handler';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

interface FoodBox {
  name: string;
  description: string;
  price: number;
}

export default function FoodBox({ name, description, price }: FoodBox) {
  return (
    <View>
      <RectButton style={styles.foodContainer}>
        <View style={styles.foodImgContainer}>
          <Image source={foodImg} style={styles.foodImg} />
        </View>

        <View style={styles.containerTitleDesc}>
          <Text style={styles.foodFont}>{name}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionFont} numberOfLines={4}>
                {description}
              </Text>
            </View>
            <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
              <View style={styles.priceContainer}>
                <Text style={styles.priceFont}>
                  <FormattedNumber
                    value={price}
                    style="currency"
                    currency="BRL"
                  />
                </Text>
              </View>
            </IntlProvider>
          </View>
        </View>
      </RectButton>
    </View>
  );
}
