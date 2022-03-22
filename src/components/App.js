import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import AppStack from '../routs/app';


export default App = () => {

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}