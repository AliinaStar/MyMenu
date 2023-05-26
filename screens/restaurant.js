import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  display: 'flex',
  margin: 10,
});

export default function Restaurant() {
  return (
    <View style={styles}>
      <Text variant="headlineLarge">Restaurant Screen</Text>
    </View>
  );
}
