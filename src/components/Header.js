import React from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Header as HeaderRN, Icon } from 'react-native-elements';

const Header = (props) => {
const { leftIcon, leftAction, title } = props

    const createAlert = () => {
        Alert.alert(
            'Cohete', 'Presionaste el cohete',
            [
                { text: 'ok', onPress: () => console.log('OK Pressed') },
            ]
        );
    };

    return (
        <View style={{ position: 'absolute', top: 0 }}>
            <HeaderRN
                barStyle="light-content"
                containerStyle={styles.headerContainer}
                backgroundColor="#397af8"
                leftComponent={leftIcon ?
                    (
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={leftAction?() => leftAction():false}
                        >
                            <Icon type="material" name={leftIcon} color="white" size={50} />
                        </TouchableOpacity>
                    )
                    :
                    { icon: 'menu', color: '#fff', }
                }

                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => createAlert()}>
                            <Icon type="antdesign" name="rocket1" color="white" />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{ text: title?title :'Pilar Tecno', style: styles.heading }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        fle: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 10,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
});

export default Header;
