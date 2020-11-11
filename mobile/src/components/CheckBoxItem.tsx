import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../styles/checkBoxItem';

interface CheckBoxItemProps {
  sideDish: string;
}

export default function CheckBoxItem({ sideDish }: CheckBoxItemProps) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.checkbox}>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <Text style={styles.checkboxLabel}>{sideDish}</Text>
    </View>
  );
}
