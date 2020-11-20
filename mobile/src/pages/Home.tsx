import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, ImageBackground } from 'react-native';
import { CategoryInterface } from '../types/homeInterfaces';

import FoodItem from '../components/FoodItem';
import CategoryBox from '../components/CategoryItem';

import imgCategory from '../assets/images/categoryImg.png';

import styles from '../styles/homeStyle';
import Header from '../components/Header';

import api from '../services/api';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    api
      .get('/categories')
      .then((resCat) => {
        setCategories(resCat.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header title="Cardappio" navigateTo="OrderDetails" screen="Home" />
      <View style={{ flex: 1, backgroundColor: '#F2F3F5' }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.list}
        >
          {categories.map((category: CategoryInterface) => (
            <CategoryBox key={category.category} name={category.category} />
          ))}
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
            description="Água com gás, saborosa para se tomar gelada"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para se tomar gelada"
            price={8}
          />
          <FoodItem
            name="Água"
            description="Água com gás, saborosa para se tomar gelada"
            price={8}
          />
        </ScrollView>
      </View>
    </>
  );
}
