import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { FormWithState } from '../screens/FormWithState';
import { FormWithReactHookForm } from '../screens/FormWithReactHookForm';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FormWithState" component={FormWithState} />
        <Stack.Screen name="FormWithReactHookForm" component={FormWithReactHookForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}