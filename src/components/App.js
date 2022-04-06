import 'react-native-gesture-handler';
import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { hasLocationPermission } from '../LocationPermission';

import {Provider} from 'react-redux';
import { store } from '../store';

import AppStack from '../routs/app';

export default App = () => {

    useEffect(() => {
        hasLocationPermission()
    }, [])
    
    return (
	<Provider store={store}>
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
	</Provider>
    )
}