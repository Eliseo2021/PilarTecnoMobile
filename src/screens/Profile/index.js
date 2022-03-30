import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from '../../store/actions';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import { styles } from './styles';


const Profile = () => {

    const dispatch = useDispatch()

    const _sigOut = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(false))
        } catch (e) {
            // saving error
        }
        dispatch(actions.user.setUser(false))
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.header}></View>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                />
                <View style={styles.body}>
                    <Text style={styles.name}>Juan Carlos</Text>
                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                    <Text style={styles.description}>
                        Email: juancarlos@gmail.com
                    </Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Pilar Tecno </Text>
                    </TouchableOpacity>
                    <Button style={styles.buttonSingOut}
                        title="SALIR"
                        onPress={() => _sigOut()}
                        containerStyle={{ width: '80%' }}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}


export default Profile;