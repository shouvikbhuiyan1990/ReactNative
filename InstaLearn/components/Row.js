import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../config/colors';

export default (  ) => (
    <View style={styles.container}>
        <View>
            <Text>Email</Text>
            <Text>Email@j.com</Text>
        </View>
        <View>
            <Icon 
                name="ios-mail"
                size={25}
                style={styles.icon}
            />
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.grayBackground,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
});