import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/categoryItem';

interface CategoryTitle {
  name: string;
  handlePress: Function;
}

export default function BoxCategory({ name, handlePress }: CategoryTitle) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={() => handlePress(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
