import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Home, Dishes, Restaurants, Contacts } from '../screens';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'dishes', title: 'Dishes', focusedIcon: 'food', unfocusedIcon: 'food-outline' },
    {
      key: 'restaurants',
      title: 'Restaurants',
      focusedIcon: 'food-takeout-box',
      unfocusedIcon: 'food-takeout-box-outline',
    },
    { key: 'contacts', title: 'Contacts', focusedIcon: 'email', unfocusedIcon: 'email-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    dishes: Dishes,
    restaurants: Restaurants,
    contacts: Contacts,
  });

  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default MyComponent;
