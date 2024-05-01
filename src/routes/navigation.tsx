import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerTitle: '',
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
