import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/headerStyle';
import bellImg from '../assets/images/bellImg.png';

import { Feather } from '@expo/vector-icons';

interface Header {
  title: string;
  navigateTo?: string;
  screen: string;
}

export default function Header({ title, navigateTo, screen }: Header) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {screen === 'Home' ? (
        <>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={
                navigateTo ? () => navigation.navigate(navigateTo) : () => {}
              }
            >
              <Image source={bellImg}></Image>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" color={'#FFF'} size={35} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={
                navigateTo ? () => navigation.navigate(navigateTo) : () => {}
              }
            >
              <Image source={bellImg}></Image>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
