import 'react-native-gesture-handler';
import React, { Component, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Provider} from 'react-redux';
import { store } from '../store';

import AppStack from '../routs/app';


export default App = () => {

    return (
	<Provider store={store}>
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
	</NavigationContainer>
    )
}