import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card as PaperCard, Text } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const DishCard = ({ title, content, url, subtitle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Dish', { title: title })}>
      <PaperCard>
        <PaperCard.Title title={title} subtitle={subtitle} left={LeftContent} />
        <PaperCard.Content>
          <Text variant="titleLarge">{title}</Text>
          <Text variant="bodyMedium">{content}</Text>
        </PaperCard.Content>
        <PaperCard.Cover source={{ uri: url ? url : 'https://picsum.photos/700' }} />
      </PaperCard>
    </TouchableOpacity>
  );
};

DishCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
};

export default DishCard;
