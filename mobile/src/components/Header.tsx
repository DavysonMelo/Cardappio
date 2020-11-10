import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/headerStyle';
import bellImg from '../../assets/images/bellImg.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Header {
  title: string;
  navigateTo: string;
}

export default function Header({ title, navigateTo }: Header) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
          <Image source={bellImg}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
