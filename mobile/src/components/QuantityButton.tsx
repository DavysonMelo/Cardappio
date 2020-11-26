import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles/quantityButton';
interface QtyBtnProps {
  qtyState: number;
  qtySetState: Function;
}

export default function QuantityButton({ qtyState, qtySetState }: QtyBtnProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (qtyState > 1) {
            qtySetState(qtyState - 1);
          }
        }}
      >
        <AntDesign name="minuscircle" size={28} color="#FFF" />
      </TouchableOpacity>
      <View>
        <Text>{qtyState}</Text>
      </View>
      <TouchableOpacity onPress={() => qtySetState(qtyState + 1)}>
        <AntDesign name="pluscircle" size={28} color="#FF6161" />
      </TouchableOpacity>
    </View>
  );
}
