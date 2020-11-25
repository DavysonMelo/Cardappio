import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/headerStyle';
import bellImg from '../assets/images/bellImg.png';

import { Feather } from '@expo/vector-icons';
import { getCart } from '../services/Cart';

interface Header {
  title: string;
  navigateTo?: string;
  screen: string;
}

export default function Header({ title, screen }: Header) {
  const navigation = useNavigation();
  const [notifNumber, setNotifNumber] = useState(0);

  useEffect(() => {
    getCart().then((cart) => {
      setNotifNumber(cart.length);
    });
  }, []);

  return (
    <View style={styles.container}>
      {screen === 'Home' ? (
        <>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderDetails')}
            >
              {notifNumber === 0 ? (
                <View style={styles.notifContainer}>
                  <Image source={bellImg}></Image>
                </View>
              ) : (
                <View style={styles.notifContainer}>
                  <Image source={bellImg}></Image>
                  <View style={styles.notifMain}>
                    <Text style={styles.notifNumber}>{notifNumber}</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Feather name="arrow-left" color={'#FFF'} size={35} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderDetails')}
            >
              {notifNumber === 0 ? (
                <View style={styles.notifContainer}>
                  <Image source={bellImg}></Image>
                </View>
              ) : (
                <View style={styles.notifContainer}>
                  <Image source={bellImg}></Image>
                  <View style={styles.notifMain}>
                    <Text style={styles.notifNumber}>{notifNumber}</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
