import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

import styles from '../styles/checkBoxItem';

interface CheckBoxItemProps {
  sideDish: string;
  addCheck: Function;
}

export default function CheckBoxItem({
  sideDish,
  addCheck,
}: CheckBoxItemProps) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.checkbox}>
      <Checkbox
        status={isSelected ? 'checked' : 'indeterminate'}
        onPress={() => {
          setSelection(!isSelected);
          addCheck(`${sideDish}: ${!isSelected}`);
        }}
      />
      <Text style={styles.checkboxLabel}>{sideDish}</Text>
    </View>
  );
}
