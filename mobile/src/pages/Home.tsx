import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import CategoryBox from '../components/CategoryItem';
import FoodBox from '../components/FoodItem';

import imgCategory from '../../assets/images/categoryImg.png';
import { ScrollView } from 'react-native-gesture-handler';

import styles from '../styles/homeStyle';

export default function Home() {
  return (
    <>
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
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
          <FoodBox
            name="Água"
            description="Água com gás, saborosa para um caralho"
            price={8}
          />
        </ScrollView>
      </View>
    </>
  );
}
