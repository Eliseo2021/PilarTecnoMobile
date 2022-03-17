import React, { Component, useCallback } from "react";
import { Button, SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";


function Mapa({ navigation }) {
  return (
    <View  style={styles.container}>
      <Text  style={styles.mainContainer}>Mapa screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default List;