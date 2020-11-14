import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/categoryItem';

interface CategoryTitle {
  name: string;
}

export default function BoxCategory({ name }: CategoryTitle) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
