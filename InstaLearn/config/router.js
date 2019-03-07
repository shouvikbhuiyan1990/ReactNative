import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import Contact from '../components/Contact';
import NewContact from '../components/NewContact';
import Me from '../components/Me';
import Details from '../components/Details';



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
