import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../config/colors';

export default ( {label, body, actions}  ) => (
    <View style={styles.container}>
        <View>
            <Text style={styles.subtleText}>{label}</Text>
            <Text style={styles.primaryText}>{body}</Text>
        </View>
        <View style={styles.actionsContainer}>
            {
                actions && actions.map((action, index)=>(
                    <TouchableOpacity
                    key={index}
                    onPress={action.action}
                    >
                        <Icon 
                            name={Platform.OS==='ios'? action.iosIcon : action.androidIcon}
                            size={25}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    icon: {
        color: Color.link,
        paddingHorizontal: 5
    },
    actionsContainer: {
        flexDirection: 'row'
    },
    primaryText: {
        fontSize: 20,
        color: Color.primaryText
    },
    subtleText: {
        fontSize: 18,
        color: Color.subtleText
    }
});