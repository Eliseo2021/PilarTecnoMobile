import React, { useState } from 'react';
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

import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Login = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const dispatch = useDispatch() 

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

            </View>
        </SafeAreaView>
    )
}