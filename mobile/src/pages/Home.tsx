import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, ImageBackground } from 'react-native';

import FoodItem from '../components/FoodItem';
import CategoryBox from '../components/CategoryItem';

import imgCategory from '../assets/images/categoryImg.png';

import styles from '../styles/homeStyle';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header title="Cardappio" navigateTo="OrderDetails" />
      <View style={{ height: '98.5%', backgroundColor: '#F2F3F5' }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.list}
        >
          <CategoryBox name="Bebidas" />
          <CategoryBox name="Hambúrguer" />
          <CategoryBox name="Pastel" />
          <CategoryBox name="Esfiha" />
          <CategoryBox name="Pizza" />
        </ScrollView>

        <View style={styles.categoryContainer}>
          <ImageBackground source={imgCategory} style={styles.imgBackground}>
            <View>
              <Text style={styles.categoryName}>Categoria da comida</Text>
            </View>
          </ImageBackground>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
        </ScrollView>
      </View>
    </>
  );
}
