import React, { Component, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    ImageBackground,
    Alert,
    Image,
} from 'react-native';
import { styles } from './styles'

//const IMG_FONDO = 'https://www.wallpaperkiss.com/wimg/b/221-2216607_big.jpg'

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.mainContent} source={{ uri: IMG_FONDO }}> //source={require('../../assets/images/bg-0.png')}
                <View>
                    <Pressable
                        onPress={() => Alert.alert(
                            'Estas en HOME...',
                            'Por Favor-> Selecciona otro Boton para ir a otra Pagina',
                            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
                        )}
                        style={styles.buttonContent}>
                        <Text style={styles.textButton}>Home</Text>
                        <Icon
                            name="home"
                            type="font-awesome-5"
                            size={30}
                            color="steelblue"
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.buttonContent}>
                        <Text style={styles.textButton}>Perfil</Text>
                        <Icon
                            name="user"
                            size={25}
                            type="font-awesome-5"
                            color="#fff"
                        />
                    </Pressable>
                </View>

                <View>
                    <Pressable
                        onPress={() => navigation.navigate('Mapa')}
                        style={styles.buttonContent}>
                        <Text style={styles.textButton}>Mapa</Text>
                        <Icon
                            name="map"
                            type="font-awesome-5"
                            color="red"
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('List')}
                        style={styles.buttonContent}>
                        <Text style={styles.textButton}>Lista</Text>
                        <Icon
                            name="list"
                            type="font-awesome-5"
                            size={25}
                            color="#FFE400"
                        />
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
