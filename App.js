/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// declarando o elemnto da view que foi criado  na classe principal do app
import TextComponent from './application/components/Text';
import CounterComponent from './application/components/Counter';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View>
        <TextComponent myText = "Allef sousa React Native"></TextComponent>
        <CounterComponent></CounterComponent>
      </View>
    );
  }
}


