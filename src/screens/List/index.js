import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { ActivityIndicator, Button, ListItem, Avatar } from "react-native-elements";

import { styles } from "./styles";

import Header from "../../components/Header";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function List(props) {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }, []);


  const loadMore = () => {
    setLoadingMore(true);
    getPokemonList(next).then((data) => {
      setPokemons([...pokemons, ...data.results]);
      setNext(data.next);
      setLoadingMore(false);
    });
  }


  const renderItem = (item) => {
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          ListFooterComponent={
            loadingMore ?
              (< ActivityIndicator />)
              :
              (<Button title='Cargar mas' onPress={() => loadMore()} />)
          }
        />
      </View>
    </View>
  );
}

export default List;

