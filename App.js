import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Buttonregion, Сard1, Card2 } from './components';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <Appbar />
        <Text>Welcome to MyMenu!!!</Text>
        <Buttonregion />
        <Сard1 />
        <Card2 />
        <StatusBar style="auto" />
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
