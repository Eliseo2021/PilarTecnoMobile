import React, { useSatate, useEffect, useCallback } from "react";
import { Dimensions, Button, SafeAreaView, View, Text, ImageBackground } from "react-native";
import MapView, { Maker } from 'react-native-maps'; 

import { styles } from "./styles";
import Header from '../../components/Header';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Configuración básica: CONSTANTES PARA EL RENDERIZADO
const ASPECT_RADIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LONGITUDE_DELTA * ASPECT_RADIO;


function Mapa({ navigation }) {
  return (
    <View  style={styles.container}>
<Header />
      <Text  style={styles.mainContainer}>Mapa 4444444</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default Mapa;