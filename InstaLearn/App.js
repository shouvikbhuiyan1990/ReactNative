import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { ContactsStack }  from './config/router';
import {createAppContainer} from 'react-navigation';

type Props = {};
export default createAppContainer(ContactsStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
