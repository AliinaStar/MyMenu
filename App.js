import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import {Appbar} from './components'

export default function App() {
  return (
    <PaperProvider>
    <View>
      <Appbar />
      <Text>Welcome to MyMenu!!!</Text>
      <Button.region />
      <StatusBar style="auto" />
    </View>
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
