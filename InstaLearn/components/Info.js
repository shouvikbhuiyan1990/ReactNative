import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default (  ) => (
    <View style={styles.container}>
        <Text>Info</Text>
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