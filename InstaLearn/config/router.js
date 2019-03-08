import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import Contact from '../screens/Contact';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Details from '../screens/Details';



export const ContactsStack = createStackNavigator({
    Contact: {
        screen: NewContact,
        navigationOptions: ( ) => ({
            title: 'Contacts'
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ( ) => ({
            title: 'Details'
        })
    },
});
