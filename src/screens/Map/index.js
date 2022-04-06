import React, { useState, useEffect, useCallback } from "react";
import { Dimensions, SafeAreaView, View, Text, ImageBackground } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Icon, Image, Button } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';

import { styles } from "./styles";
import Header from '../../components/Header';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Configuración básica: CONSTANTES PARA EL RENDERIZADO
const ASPECT_RADIO = width / height;
const LATITUDE = -32.9320576;
const LONGITUDE = -68.822851;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = 0.0022; //LONGITUDE_DELTA * ASPECT_RADIO;


function Mapa({ navigation }) {
    const [mapType, setMapType] = useState('standard');
    //Definir variable region
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    )

    useEffect(() => {
        console.log(region)
        //_getLocation()
    }, [])
    //Cambiar region
    const onRegionChange = region => {
        console.log(region)
        setRegion(region)
    }
    //fijar region en el mapa
    const fitCoordinates = async () => {
        //this._getLocation()
    }
    //Salvar ubicacion actual
    const saveLocation = async () => {
        //this._getLocation()
    }

    //cambiar tipo de mapa
    const changeMapType = () => {
        if (mapType === 'standard') {
            setMapType('satellite')
        } else {
            setMapType('standard')
        }
    }

    //Obtener ubicacion actual
    _getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async posicion => {
                const longitude = posicion.coords.longitude;
                const latitude = posicion.coords.latitude;
                this.mapRef.animateToRegion(
                    {
                        latitude,
                        longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    },
                    1000
                );
                setRegion({ region: { ...region, longitude, latitude } })
                console.log('posicion actual... Latitud:' + `${JSON.stringify(longitude)}` + 'latitud:' + `${JSON.stringify(latitude)}`)
            },
            (error) => {
                console.log('')
                console.log('')
                console.log('')
                console.log('')
                console.log(error.code, error.message);
            },
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 0,
                forceRequestLocation: true,
            }
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <MapView
                style={styles.map}
                mapType={mapType} // 'standard' 'satellite' 'hybrid'
                initialRegion={region}
                onRegionChange={(region) => onRegionChange(region)}
            >
                {/* <Marker
                    coordinate={region}
                    draggable
                /> */}
            </MapView>
            <View style={styles.markerIcon}>
                <Icon
                    name="crosshairs"
                    type="font-awesome"
                    color='#8d2d84'
                    size={width / 10}
                    onPress={() => fitCoordinates()}
                />
            </View>

            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={require('../../assets/images/location.png')} />
            </View>

            <View style={styles.mapButtonView} >
                <Button
                    title="Mapa Standar"
                    containerStyle={styles.mapButtonContent}
                    buttonStyle={styles.mapButtonStandard}
                    onPress={() => changeMapType()}
                />
                <Button
                    title="Mapa Satelital"
                    containerStyle={styles.mapButtonContent}
                    buttonStyle={styles.mapButtonSatellite}
                    onPress={() => changeMapType()}
                />
                <Button
                    title="Guardar Posición"
                    containerStyle={styles.mapButtonContent}
                    buttonStyle={styles.mapButtonSaveLocation}
                    onPress={() => saveLocation()}
                />
            </View>

            <SafeAreaView style={styles.footer}>
                <Text style={styles.region}> Longitud: {JSON.stringify(region.longitude)}{"\n"} Latitud:{JSON.stringify(region.latitude)}</Text>
            </SafeAreaView>

        </View>
    );
}
export default Mapa;