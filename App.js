import 'react-native-gesture-handler';
import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientList as Clients } from "./components/ClientList"
import { Login } from "./components/Login"

const Stack = createNativeStackNavigator();
//https://reactnavigation.org/docs/auth-flow
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: 'tomato' }
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          option={{title: "Login"}}
        />
        <Stack.Screen
          name="Clients"
          component={Clients}
          option={{title: "Clients"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



