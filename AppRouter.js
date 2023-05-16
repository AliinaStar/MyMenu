import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dish, Restaurant, Search } from './screens';
import { Appbar, BottomNavigation } from './layout';

const Stack = createNativeStackNavigator();
export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyMenu"
        screenOptions={{
          header: ({ route, back, navigation, ...rest }) => (
            <Appbar route={route} back={back} navigation={navigation} prop={rest} />
          ),
        }}
      >
        <Stack.Screen name="MyMenu" component={BottomNavigation} />
        <Stack.Screen name="Dish" component={Dish} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
