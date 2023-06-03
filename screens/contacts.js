import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import { Avatar } from 'react-native-paper';



const styles = StyleSheet.create({
  display: 'flex',
  // justifyContent: 'start',
  margin: 10,
});

const MyIcon = () => (
  <Avatar.Icon size={24} icon="account" />
);

export default function Contacts() {
  const MyIcon = () => (
    <Avatar.Icon size={128} icon="account" />
  );
  return (
    <View style={styles}>
      <Link to={{ screen: 'Home' }}>
        <Text variant="headlineLarge">Профіль</Text>
      </Link>
      {MyIcon()}
    </View>
  );
}
