import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  display: 'flex',
  margin: 10,
});

export default function Dish({ route }) {
  return (
    <View style={styles}>
      <Text variant="headlineLarge">{route.params.title}</Text>
    </View>
  );
}

Dish.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
};
