import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { AppTabNavigator }  from './config/router';
import {createAppContainer} from 'react-navigation';

type Props = {};
export default createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
