import 'react-native-gesture-handler';
import React, { Component, useCallback, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useDispatch, Provider} from 'react-redux';
import { store, actions } from '../store';
import auth from '@react-native-firebase/auth';

import AppStack from '../routs/app';


export default App = () => {

    return (
	<Provider store={store}>
        <NavigationContainer>
           <AppWrapped />
        </NavigationContainer>
	</Provider>
    )
}

const AppWrapped = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch()
  // Handle user state changes
  async function onAuthStateChanged(user) {
  if(user){
  setUser(user)
  }else{
  dispatch(actions.user.setUser(null))
  }
  if (initializing) setInitializing(false);
  }
  useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);
if (initializing){ return null;}
return(

<AppStack />

);
}
