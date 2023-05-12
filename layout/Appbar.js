import * as React from 'react';
import { Appbar as PaperAppbar } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const Appbar = ({ route, back, navigation }) => {
  return (
    <PaperAppbar.Header>
      {back && <PaperAppbar.BackAction onPress={navigation.goBack} />}
      <PaperAppbar.Content title={route.name} />
      <PaperAppbar.Action icon="magnify" onPress={() => navigation.navigate('Search')} />
    </PaperAppbar.Header>
  );
};

export default Appbar;

Appbar.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  back: PropTypes.object,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }),
};
