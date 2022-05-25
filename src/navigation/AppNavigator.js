import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, NewMeasurement } from '../containers';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="NewMeasurement" component={NewMeasurement} />
  </Stack.Navigator>
);

export default AppNavigator;
