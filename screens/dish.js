import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { List, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  display: 'flex',
  margin: 10,
});

export default function Dish({ route }) {
  const recipe = route.params.dish.recipe

  const recipeMap = recipe.map((ing) => (
    <List.Item key={ing.name} title={ing.name} description={ing.url} />
  ));

  return (
    <View>
      <Text variant="titleLarge">{route.params.title}</Text>
      <Text variant="titleMedium">   Інгредієнти:</Text>
      <List.Section>{recipeMap}</List.Section>
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
