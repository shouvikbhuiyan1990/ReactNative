import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import {Capitalize} from '../Helper/capitalize';
import Color from '../config/colors';

const window = Dimensions.get('window');

export default ( { picture, name } ) => (
    <View style={styles.container}>
        <Image
        style={styles.thumbnail}
        source={{uri:picture.large }}
        />
        <Text style={styles.primaryText}>{ `${Capitalize(name.first)} ${Capitalize(name.last)}` }</Text>
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
    },
    primaryText: {
        fontSize: 22,
        color: Color.primaryText
    }
});