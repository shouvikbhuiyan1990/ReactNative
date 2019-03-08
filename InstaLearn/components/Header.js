import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import {Capitalize} from '../Helper/capitalize';

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
        width: 160,
        height: 160,
        borderRadius: 80
    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
});