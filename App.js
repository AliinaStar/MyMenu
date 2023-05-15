import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider, Searchbar } from 'react-native-paper';
import { Appbar, Buttonregion, Сard, Searchbar, BottomNavigation, CardFood } from './components';

const cards = [
  { id: 'id1', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id2', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id3', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id4', title: 'card1', subtitle: 'sub1', content: 'content1' },
]

const fcards = [
  { id: 'id1', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id2', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id3', title: 'card1', subtitle: 'sub1', content: 'content1' },
  { id: 'id4', title: 'card1', subtitle: 'sub1', content: 'content1' },
]

export default function App() {
  const mapCards = cards.map((card) => <Сard key={card.id} title={card.title} content={card.content} subtitle={card.subtitle} />)
  const mapfoodCards = fcards.map((CardFood) => <CardFood key={CardFood.id} title={FoodCard.title} content={FoodCard.content} subtitle={FoodCard.subtitle} />)
  return (
    <PaperProvider>
      <ScrollView>
        <Appbar />
        <Text>Welcome to MyMenu!!!</Text>
        <Buttonregion />
        {mapCards}
        <StatusBar style="auto" />
        <Searchbar />
        <BottomNavigation />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
