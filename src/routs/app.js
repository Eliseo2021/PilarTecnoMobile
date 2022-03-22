import React, { Component, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/index";
import List from "../screens/List";
import Mapa from "../screens/Map";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" > 
      <Stack.Screen name="Home" component={Home} options={{ header: () => null }}  />
      <Stack.Screen name="List" component={List} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Mapa" component={Mapa} options={{ headerTitleAlign: 'center' }} />
     <Stack.Screen name="Profile" component={Profile} options={{ headerTitleAlign: 'center' }} />       
    </Stack.Navigator>
  );
};

export default AppStack;  