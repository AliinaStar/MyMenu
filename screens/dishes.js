import * as React from 'react';
import { ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import { DishCard } from '../components';
import { dishes } from '../helpers/constants';

export default function DishesScreen() {
  const mapCards = dishes.map((card) => (
    <DishCard key={card.id} title={'Dish card ' + card.title} content={card.content} subtitle={card.subtitle} />
  ));

  return <ScrollView>{mapCards}</ScrollView>;
}

DishesScreen.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
};
