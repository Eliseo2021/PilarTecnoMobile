import 'react-native-gesture-handler';
import React, { Component, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import Home from "../screens/Home/index";
import Tabs  from "./Tabs";
import List from "../screens/List";
import Mapa from "../screens/Map";
import Profile from "../screens/Profile";
import Login from '../screens/Auth/SignIn';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


const AppStack = () => {
const user = useSelector(state=>state.user.user)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      
	{user ?
                <Stack.Screen name="AppStack" component={Tabs} />
                :
                <Stack.Screen name="AppStack" component={Login} />
            }

      <Stack.Screen name="List" component={List} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Mapa" component={Mapa} options={{ headerTitleAlign: 'center' }} />
     <Stack.Screen name="Profile" component={Profile} options={{ headerTitleAlign: 'center' }} />       
    </Stack.Navigator>
  );
};

export default AppStack;  