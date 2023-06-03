import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Title } from 'react-native-paper';

const styles = StyleSheet.create({
  display: 'flex',
  margin: 10,
});

export default function Restaurant({ route }) {
  // const rest = route.params.restaurant

  return (
    <View>
      <Text variant="headlineLarge">{route.params.Title}</Text>
    </View>
  );
}
