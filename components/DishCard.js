import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card as PaperCard, Text } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const DishCard = ({ dish }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Dish', { dish: dish })}>
      <PaperCard>
        <PaperCard.Content>
          <Text variant="titleLarge">{dish.title}</Text>
        </PaperCard.Content>
        <PaperCard.Cover source={{ uri: dish.url ? dish.url : 'https://picsum.photos/700' }} />
      </PaperCard>
    </TouchableOpacity>
  );
};

DishCard.propTypes = {
  dish: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })
};

export default DishCard;
