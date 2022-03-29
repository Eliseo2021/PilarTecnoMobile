import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import Collapsible from "react-native-collapsible";

import { styles } from "./styles";
import Header from "../../components/Header";
import { getPokemon, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";

const ListItem = (props) => {
    const { url } = props.route.params.item;
    const [pokemon, setPokemon] = useState();
    const [imgId, setImgId] = useState();
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        console.log(JSON.stringify(url));
        getPokemon(url).then((data) => {
            const path = url.split("/");
            setPokemon(data);
            setImgId(getPokemonImgId(path[6]));
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header
                leftIcon="arrow-back"
                title={pokemon?.name}
                leftAction={() => props.navigation.goBack()}
            />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.idContent}>
                    <Text style={styles.idNunberContent}>{imgId}</Text>
                </View>
                <View style={styles.imgContent}>
                    <Image
                        style={styles.imgStyleContent}
                        resizeMode="contain"
                        source={{ uri: `${IMG_URL}${imgId}.png` }}
                    />
                </View>

                <View style={styles.hrContent} />

                <View style={styles.view2Content}>
                    <View style={styles.descriContent}>
                        <View style={styles.view3Content}>
                            <Text style={styles.textContent}>Peso: </Text>
                            <Text style={styles.titleContent}>{pokemon?.weight}</Text>
                            <Text style={styles.textContent}>Altura: </Text>
                            <Text style={styles.titleContent}>{pokemon?.height}</Text>
                        </View>
                        <Text style={styles.titleContent}>Tipos</Text>
                        <View style={styles.view3Content}>
                            <Text style={styles.textContent}>Tipo: </Text>
                            {pokemon?.types.map((type) => (
                                <Text style={styles.titleContent }>{type.type.name}</Text>
                            ))}
                        </View>
                        <View></View>
                        <View style={styles.view4Content}>
                            <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                                <Text style={styles.titleContent}>Habilidades</Text>
                            </TouchableOpacity>
                            <Collapsible collapsed={isCollapsed}>
                                {pokemon?.abilities.map((a) => (
                                    <>
                                        <Text key="{item}">
                                            <Text style={styles.puntoContent}>.</Text>
                                            <Text style={styles.textContent}>{a.ability.name}</Text>
                                        </Text>
                                    </>
                                ))}
                            </Collapsible>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ListItem;
