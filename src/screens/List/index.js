import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Avatar} from "react-native-elements";

import { styles } from "./styles";

import Header from "../../components/Header";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";

function List(props) {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();

  useEffect(() => {
    getPokemonList().then((data) => {
      //console.log('data :' + JSON.stringify(data))
      setPokemons(data.results);
      console.log(setPokemons);
      setNext(data.next);
    });
  }, []);

  const renderItem = (item) => {
    //console.log('data :' + JSON.stringify(item))
    const path = item.url.split("/");
    const imgID = getPokemonImgId(path[6]);

    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ListItem", (item = { item }))}
        style={styles.containerTouchable}
      >
        <ListItem bottomDivider style={styles.containerBottomDivider}>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
          </ListItem.Content>
          <Avatar source={{ uri: `${IMG_URL}${imgID}.png` }} />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <FlatList
          data={pokemons}
          renderItem={(item, index) => renderItem(item.item, index)}
          keyExtractor={(item, index) => index}
          style={styles.containerFlatList}
        />
      </View>
    </View>
  );
}

export default List;
