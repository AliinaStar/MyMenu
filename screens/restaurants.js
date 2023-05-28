import * as React from 'react';
import { ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import { RestCard } from '../components';
import { restaurants } from '../helpers/constants';

export default function RestaurantsScreen() {
  const mapCards = restaurants.map((card) => (
    <RestCard key={card.id} title={card.title} content={card.content} subtitle={card.subtitle} />
  ));

  return <ScrollView>{mapCards}</ScrollView>;
}

RestaurantsScreen.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
};
