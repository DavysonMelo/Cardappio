import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import Header from '../components/Header';
import CheckBoxItem from '../components/CheckBoxItem';
import QuantityButton from '../components/QuantityButton';

import dishDetailsPhoto from '../assets/images/dishDetailsPhoto.png';

import styles from '../styles/dishDetailsStyle';
import { ScrollView } from 'react-native-gesture-handler';
import ConfirmButton from '../components/ConfirmButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DishDetails() {
  const [value, setValue] = useState('');

  return (
    <>
      <Header title="Detalhes" navigateTo="OrderDetails" />

      <ScrollView>
        <View>
          <Image source={dishDetailsPhoto} />
        </View>

        <View style={styles.dishDetailsBoxContainer}>
          <View style={styles.dishDetailsInfoContainer}>
            <View>
              <Text style={styles.dishTitle}>Hamburguer de carne</Text>
              <Text style={styles.dishDescription}>
                Alface, tomate, carne 200g, molho especial, queijo cheedar e
                picles
              </Text>
              <View style={styles.dishCalories}>
                <Text style={{ fontWeight: 'bold' }}>Calorias:</Text>
                <Text style={{ color: '#505050' }}> 340</Text>
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
                <QuantityButton />
              </View>
              <View>
                <Text style={styles.labelQuantValue}>Valor</Text>
                <Text style={{ fontSize: 24 }}>R$ 28,00</Text>
              </View>
            </View>

            <ConfirmButton title="Adicionar item" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
