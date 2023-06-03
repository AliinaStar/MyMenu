import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card as PaperCard, Text } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const RestCard = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { restaurant: restaurant })}>
      <PaperCard>
        <PaperCard.Content>
          <Text variant="titleLarge">{restaurant.title}</Text>
          <Text variant="bodyLarge">{restaurant.content}</Text>
        </PaperCard.Content>
        <PaperCard.Cover source={{ uri: restaurant.url }} />
      </PaperCard>
    </TouchableOpacity>
  );
};

RestCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
};

export default RestCard;
