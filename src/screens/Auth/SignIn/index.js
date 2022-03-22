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

    //setear el user en el store - > useDispatch ->1- import { useDispatch } 2- definir const dispatch 3-dispatch(actions.user.setUser(true))
    const dispatch = useDispatch() //ejecutar los actions, hay que importarlos 

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
            // saving error
        }
        dispatch(actions.user.setUser(true))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column', width }}>
                <View style={{ marginVertical: '10%' }}>
                    <Text style={styles.title}>
                        Ingresa a Pilar Tecno
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

                <View style={{ alignItems: 'center' }}>
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