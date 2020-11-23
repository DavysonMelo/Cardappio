import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, ImageBackground } from 'react-native';
import { CategoryInterface, DishInterface } from '../types/homeInterfaces';

import FoodItem from '../components/FoodItem';
import CategoryBox from '../components/CategoryItem';

import imgCategory from '../assets/images/categoryImg.png';

import styles from '../styles/homeStyle';
import Header from '../components/Header';

import api from '../services/api';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    api
      .get('/categories')
      .then((resCat) => {
        setCategories(resCat.data);
        setCategory(resCat.data[0].category);
        api
          .get('/dishes-category', {
            headers: { category: resCat.data[0].category },
          })
          .then((resDish) => {
            setDishes(resDish.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCategoryChange(category: string) {
    setCategory(category);
    api
      .get('/dishes-category', {
        headers: { category },
      })
      .then((resDish) => {
        setDishes(resDish.data);
      })
      .catch((err) => console.log(err));
  }

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
            <CategoryBox
              key={category.category}
              name={category.category}
              handlePress={handleCategoryChange}
            />
          ))}
        </ScrollView>

        <View style={styles.categoryContainer}>
          <ImageBackground source={imgCategory} style={styles.imgBackground}>
            <View>
              <Text style={styles.categoryName}>{category}</Text>
            </View>
          </ImageBackground>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {dishes.map((dish: DishInterface) => (
            <FoodItem
              key={dish.id}
              id={dish.id}
              name={dish.name}
              description={dish.ingredients}
              price={dish.price}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
