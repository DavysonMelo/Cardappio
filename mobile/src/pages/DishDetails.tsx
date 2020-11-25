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

interface ParamsProp {
  id?: string;
}

export default function DishDetails() {
  const [value, setValue] = useState('');
  const [qtyBtnValue, setQtyBtnValue] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const [dish, setDish] = useState({
    id: '',
    name: '',
    ingredients: '',
    price: 0,
    calories: '',
  });
  const { id } = route.params as ParamsProp;

  useEffect(() => {
    api.get(`/dish`, { headers: { id } }).then((response) => {
      setDish(response.data);
    });
  }, []);

  console.log(dish);
  return (
    <>
      <Header title="Detalhes" navigateTo="OrderDetails" screen="DishDetails" />

      <ScrollView>
        <View>
          <Image source={dishDetailsPhoto} style={{ width: '100%' }} />
        </View>

        <View style={styles.dishDetailsBoxContainer}>
          <View style={styles.dishDetailsInfoContainer}>
            <View>
              <Text style={styles.dishTitle}>{dish?.name}</Text>
              <Text style={styles.dishDescription}>{dish?.ingredients}</Text>
              <View style={styles.dishCalories}>
                <Text style={{ fontWeight: 'bold' }}>Calorias:</Text>
                <Text style={{ color: '#505050' }}> {dish?.calories}</Text>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <View>
                <CheckBoxItem sideDish="Cebola" />
                <CheckBoxItem sideDish="Picles" />
                <CheckBoxItem sideDish="Coca-cola" />
              </View>
              <View>
                <CheckBoxItem sideDish="BBQ" />
                <CheckBoxItem sideDish="Bacon" />
                <CheckBoxItem sideDish="Mostarda" />
              </View>
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

            <ConfirmButton title="Adicionar item" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
