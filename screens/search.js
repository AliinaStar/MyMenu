import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Searchbar } from '../components';

const styles = StyleSheet.create({
  display: 'flex',
  // justifyContent: 'start',
  margin: 10,
});

export default function Search() {
  return (
    <View style={styles}>
      <Text variant="headlineLarge">Search</Text>
      <Searchbar />
    </View>
  );
}
