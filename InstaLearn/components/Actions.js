import React from 'react';
import { View, StyleSheet } from 'react-native';

import Row from './Row';
import Color from '../config/colors';

export default ( {email, phone, cell} ) => (
    <View style={styles.container}>
        <Row
        style={styles.container}
        label="email"
        body={email}
        actions={
            [
                {onPress : ()=> null, iosIcon: 'ios-mail', androidIcon: 'md-mail'}
            ]
        }
        />
        <Row
        style={styles.container}
        label="cell"
        body={cell}
        actions={
            [
                {onPress : ()=> null, iosIcon: 'ios-call', androidIcon: 'md-call'}
            ]
        }
        />
        <Row
        style={styles.container}
        label="phone"
        body={phone}
        actions={
            [
                {onPress : ()=> null, iosIcon: 'ios-megaphone', androidIcon: 'md-landline'}
            ]
        }
        />
    </View>
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.grayBackground,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Color.border,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Color.border,
    }
});