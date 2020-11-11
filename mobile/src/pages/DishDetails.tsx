import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import Header from '../components/Header';
import CheckBoxItem from '../components/CheckBoxItem';

import dishDetailsPhoto from '../assets/images/dishDetailsPhoto.png';

import styles from '../styles/dishDetailsStyle';

export default function DishDetails() {
  const [value, setValue] = useState('');

  return (
    <>
      <Header title="Detalhes" navigateTo="OrderDetails" screen="DishDetails" />
      <View>
        <View>
          <Image source={dishDetailsPhoto} />
        </View>

        <View style={styles.dishDetailsBoxContainer}>
          <View style={styles.dishDetailsInfoContainer}>
            <View>
              <Text style={styles.dishTitle}>Hamburgão de carne</Text>
              <Text style={styles.dishDescription}>
                Alface, tomate, carne 200g, molho especial
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
              <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
                Observações:
              </Text>
              <TextInput
                style={{
                  height: 60,
                  backgroundColor: '#F2F2F2',
                  color: '#505050',
                  padding: 10,
                  textAlignVertical: 'top',
                }}
                onChangeText={(text) => setValue(text)}
                placeholderTextColor="#505050"
                placeholder="Digite aqui..."
                value={value}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
