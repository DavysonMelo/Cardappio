import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { IntlProvider, FormattedNumber } from 'react-intl';

import Header from '../components/Header';
import CheckBoxItem from '../components/CheckBoxItem';
import QuantityButton from '../components/QuantityButton';

import dishDetailsPhoto from '../assets/images/dishDetailsPhoto.png';

import styles from '../styles/dishDetailsStyle';
import { ScrollView } from 'react-native-gesture-handler';
import ConfirmButton from '../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../services/api';
import { DishInterface } from '../types/homeInterfaces';
import { cartPushData, clearCart } from '../services/Cart';

interface ParamsProp {
  id?: string;
}

export default function DishDetails() {
  const [value, setValue] = useState('');
  const [qtyBtnValue, setQtyBtnValue] = useState(1);
  const navigation = useNavigation();
  const [checkboxes, setCheckboxes] = useState({});
  const route = useRoute();

  const [dish, setDish] = useState<DishInterface>({
    id: '',
    name: '',
    ingredients: [''],
    price: 0,
    category: '',
    calories: 0,
    sideDishes: [''],
    image: '',
    image_url: '',
  } as DishInterface);

  const { id } = route.params as ParamsProp;

  useEffect(() => {
    api
      .get(`/dish`, { headers: { id } })
      .then((response) => {
        setDish(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleSubmit() {
    const additionals = Object.keys(checkboxes).filter((checkbox) => {
      if (checkboxes[checkbox]) {
        return checkbox;
      }
    });

    const order = {
      qty: qtyBtnValue,
      dishName: dish.name,
      additional: `${dish.name}: ${additionals.join(';')},`,
      observations: `${dish.name}: ${value};`,
      price: dish.price * qtyBtnValue,
    };

    await cartPushData(order);
    navigation.navigate('OrderDetails');
  }

  function handleCheck(checkboxInfo: string) {
    const checkbox = checkboxInfo.split(':');
    setCheckboxes({ ...checkboxes, [checkbox[0]]: JSON.parse(checkbox[1]) });
  }

  return (
    <>
      <Header title="Detalhes" navigateTo="OrderDetails" screen="DishDetails" />

      <ScrollView>
        <View>
          <Image
            source={
              dish.image
                ? dish.image.includes('https//') ||
                  dish.image.includes('http://')
                  ? { uri: dish.image }
                  : { uri: dish.image_url }
                : dishDetailsPhoto
            }
            style={{ width: '100%', height: 500, resizeMode: 'cover' }}
          />
        </View>

        <View style={styles.dishDetailsBoxContainer}>
          <View style={styles.dishDetailsInfoContainer}>
            <View>
              <Text style={styles.dishTitle}>{dish?.name}</Text>
              <Text style={styles.dishDescription}>
                {dish?.ingredients.join(', ')}
              </Text>
              <View style={styles.dishCalories}>
                <Text style={{ fontWeight: 'bold' }}>Calorias:</Text>
                <Text style={{ color: '#505050' }}> {dish?.calories}</Text>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              {dish?.sideDishes.map((side) => (
                <CheckBoxItem
                  key={side}
                  addCheck={handleCheck}
                  sideDish={side}
                />
              ))}
            </View>

            <View>
              <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>
                Observações:
              </Text>
              <TextInput
                onChangeText={(text) => setValue(text)}
                placeholderTextColor="#505050"
                placeholder="Digite aqui..."
                value={value}
                multiline={true}
                style={styles.textInput}
              />
            </View>

            <View style={styles.quantValueContainer}>
              <View style={{ width: '30%' }}>
                <Text style={styles.labelQuantValue}>Quantidade</Text>
                <QuantityButton
                  qtyState={qtyBtnValue}
                  qtySetState={setQtyBtnValue}
                />
              </View>
              <View>
                <Text style={styles.labelQuantValue}>Valor</Text>
                <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
                  <Text style={{ fontSize: 24 }}>
                    <FormattedNumber
                      value={qtyBtnValue * dish?.price}
                      style="currency"
                      currency="BRL"
                    />
                  </Text>
                </IntlProvider>
              </View>
            </View>

            <ConfirmButton
              handlePress={() => handleSubmit()}
              title="Adicionar item"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
