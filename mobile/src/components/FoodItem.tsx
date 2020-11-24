import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import 'intl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import 'intl/locale-data/jsonp/pt-BR';

import foodImg from '../assets/images/foodImg.png';

import styles from '../styles/foodItemStyle';
import { useNavigation } from '@react-navigation/native';

interface FoodItem {
  id: string;
  name: string;
  description: string[];
  price: number;
  image_url: string;
  image: string;
}

export default function FoodItem({
  id,
  name,
  description,
  price,
  image_url,
  image,
}: FoodItem) {
  const navigation = useNavigation();

  function goToDishDetails() {
    navigation.navigate('DishDetails', { id });
  }

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.foodContainer}
        onPress={() => {
          goToDishDetails();
        }}
      >
        <View style={styles.foodImgContainer}>
          <Image
            source={
              image.includes('https//') || image.includes('http://')
                ? { uri: image }
                : { uri: image_url }
            }
            style={styles.foodImg}
          />
        </View>

        <View style={styles.containerTitleDesc}>
          <Text style={styles.foodFont}>{name}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionFont} numberOfLines={4}>
                {description.join(', ')}
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
      </TouchableOpacity>
    </View>
  );
}
