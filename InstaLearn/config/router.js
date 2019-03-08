import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import Contact from '../screens/Contact';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import Details from '../screens/Details';

import {Capitalize} from '../Helper/capitalize';


export const ContactsStack = createStackNavigator({
    Contact: {
        screen: NewContact,
        navigationOptions: ( ) => ({
            title: 'Contacts'
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation } ) => ({
            title: `${Capitalize(navigation.state.params.name.first)} ${Capitalize(navigation.state.params.name.last)}`
        })
    },
});
