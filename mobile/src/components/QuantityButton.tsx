import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles/quantityButton';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      >
        <AntDesign name="minuscircle" size={28} color="#FFF" />
      </TouchableOpacity>
      <View>
        <Text>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
        <AntDesign name="pluscircle" size={28} color="#FF6161" />
      </TouchableOpacity>
    </View>
  );
}
