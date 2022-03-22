import React, { Component, useCallback } from "react";
import { Button, SafeAreaView, View, Text, ImageBackground } from "react-native";

import { styles } from "./styles";
import Header from '../../components/Header';

function Mapa({ navigation }) {
  return (
    <View  style={styles.container}>
<Header />
      <Text  style={styles.mainContainer}>Mapa screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default Mapa;