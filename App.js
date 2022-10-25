import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ClientList } from "./components/ClientList"
import { Login } from "./components/Login"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          option={{title: "Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



