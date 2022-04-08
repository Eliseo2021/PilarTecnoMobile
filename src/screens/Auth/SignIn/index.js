import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Dimensions,
} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
   GoogleSignin,
   GoogleSigninButton,
   statusCodes,
} from '@react-native-google-signin/google-signin';


import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Login = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const dispatch = useDispatch() 

    useEffect(() => {
        GoogleSignin.configure({
		webClientId: "351728171332-pkqahdlrutr53sfq784hk9cj12380gti.apps.googleusercontent.com",
	});
    }, [])

    const onChangeEmail = (value) => {
        setEmail(value)
    }

    const onChangePW = (value) => {
        setPw(value)
    }

    const _sigIn = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(true)) //JSON.stringfy ->solo se almacenan string
        } catch (e) {
            
        }
        dispatch(actions.user.setUser(true))
    }

    onGoogleButtonPress = async () => {
	// Get the users ID token
	const { idToken } = await GoogleSignin.signIn();
	// Create a Google credential with the token
	const googleCredential = auth.GoogleAuthProvider.credential(idToken);
	// Sign-in the user with the credential
	return auth().signInWithCredential(googleCredential);
     }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerCard1}>
                <View style={styles.containerCard2}>
                    <Text style={styles.title}>
                        Ingresa a Pilar Tecno App
                    </Text>
                </View>
                <Input
                    placeholder='Correo@email.com'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => onChangeEmail(value)}
                />
                <Input
                    placeholder='******'
                    secureTextEntry={true} //secret password
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    keyboardType='number-pad' //teclado numerico
                    onChangeText={value => onChangePW(value)}
                />

                <View style={styles.containerCard3}>
                    <Button style={styles.buttonSinIn}
                        title="Ingresar"
                        onPress={() => _sigIn()}
                        containerStyle={{ width: '80%' }}
                    />
                </View>

                <View style={styles.containerCard3}>
                    <Button style={styles.buttonSinInGoogle}
                        title="Continuar con Gooogle"
                        containerStyle={{ width: '60%' }}
			//llamo la sesion con onGoogleButtonPress()
			onPress={()=>onGoogleButtonPress().then(async(data)=>{
			console.log('Signed in with Google!')
			if(data){
			console.log('res login: '+JSON.stringify(data.user))
			try {
			// obtener y guardar el usuario: con AsyncStorage.setItem var: 'user'
			await AsyncStorage.setItem('user', JSON.stringify(data.user))
			} catch (e) {
			console.log('ubo un error :'+e)
			}
			dispatch(actions.user.setUser(data.user))
			}
			})}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}