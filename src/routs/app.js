import 'react-native-gesture-handler';
import React, { Component, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import Home from "../screens/Home/index";
import Tabs  from "./Tabs";
import List from "../screens/List";
import Mapa from "../screens/Map";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();


const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="AppStack" component={Tabs}  />
      <Stack.Screen name="List" component={List} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Mapa" component={Mapa} options={{ headerTitleAlign: 'center' }} />
     <Stack.Screen name="Profile" component={Profile} options={{ headerTitleAlign: 'center' }} />       
    </Stack.Navigator>
  );
};

export default AppStack;  