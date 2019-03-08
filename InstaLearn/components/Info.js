import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Row from './Row';
import moment from 'moment';

export default ( { dob, registered, login:{username}, location:{city} } ) => (
    <View style={styles.container}>
        <Row
        style={styles.container}
        label="city"
        body={city}
        />
        <Row
        style={styles.container}
        label="username"
        body={username}
        />
        <Row
        style={styles.container}
        label="date of birth"
        body={moment(dob).format('MMMM Do, YYYY')}
        />
        <Row
        style={styles.container}
        label="date of registration"
        body={moment(registered).format('MMMM Do, YYYY')}
        />
    </View>
);


const styles = StyleSheet.create({
    thumbnail: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
    container: {
        paddingHorizontal: 25
    }
});