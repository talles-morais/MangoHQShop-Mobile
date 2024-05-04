import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import OrderConfirmation from "../screens/OrderConfirmation";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: '',
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
