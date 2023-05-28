import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  display: 'flex',
  // justifyContent: 'start',
  margin: 10,
});

export default function Contacts() {
  return (
    <View style={styles}>
      <Link to={{ screen: 'Home' }}>
        <Text variant="headlineLarge">Профіль</Text>
      </Link>
    </View>
  );
}
