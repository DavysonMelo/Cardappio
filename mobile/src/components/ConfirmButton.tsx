import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/confirmButton';

interface ConfirmButtonProps {
  title: string;
}

export default function ConfirmButton({ title }: ConfirmButtonProps) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.container}>
          <Text style={styles.label}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
