import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BoxCategory() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Hambúrgueres</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 123,
    height: 34,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#F5F4CD',
    color: '#474747',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
});
