import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from "../screens/Home";
import List from "../screens/List";
import Mapa from "../screens/Map";
import Profile from "../screens/Profile";


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            headerMode="none"
            activeColor="white"
            inactiveColor='skyblue'
            labelStyle={{ fontSize: 14 }}
            barStyle={{ backgroundColor: 'steelblue' }}
        >

            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Lista" component={List}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Mapa" component={Mapa}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Perfil" component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;

/*

*/