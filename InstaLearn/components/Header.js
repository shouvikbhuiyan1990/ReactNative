import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import {Capitalize} from '../Helper/capitalize';

const window = Dimensions.get('window');

export default ( { picture, name } ) => (
    <View style={styles.container}>
        <Image
        style={styles.thumbnail}
        source={{uri:picture.large }}
        />
        <Text>{ `${Capitalize(name.first)} ${Capitalize(name.last)}` }</Text>
    </View>
);


const styles = StyleSheet.create({
    thumbnail: {
        width: window.width / 2,
        height: window.width / 2,
        borderRadius: window.width / 4
    },
    container: {
        alignItems: 'center',
        paddingVertical: 25,
        marginBottom: 20
    }
});