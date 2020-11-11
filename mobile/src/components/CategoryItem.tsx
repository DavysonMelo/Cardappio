import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from '../styles/categoryItem';

interface CategoryTitle {
  name: string;
}

export default function BoxCategory({ name }: CategoryTitle) {
  return (
    <RectButton style={styles.container}>
      <Text>{name}</Text>
    </RectButton>
  );
}
