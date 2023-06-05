import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { restaurants } from '../helpers/constants';
import { RestCard } from '../components';

export default function HomeScreen() {

  const mapCards = restaurants.map((card) => (
    <RestCard key={card.id} restaurant={card} />
  ));

  return (
    <View>
      <Text variant="headlineMedium">MyMenu </Text>
      <Text variant="bodyLarge">- це вільна платформа для розміщення меню кафе та ресторанів, що дозволяє знайти омріяну
        страву й заклади. Введіть назву в пошукову систему MyMenu.
      </Text>
      <Text></Text>
      <Text variant="headlineMedium">Актуальне</Text>
      {mapCards[0]}
    </View>
  );
}
