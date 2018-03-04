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
  Button,
  View
} from 'react-native';

// declarando o elemnto da view que foi criado  na classe principal do app
import TextComponent from './application/components/Text';
import Counter from './application/components/Counter';
import {StackNavigator} from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 class App extends Component {
  static navigationOptions = {
    title:'Tela Principal'
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View>
        <Button title= "Mudar de tela" onPress = {() => navigate('Counter')}></Button>
      </View> 
    );
  }
}

const StackApp = StackNavigator({
  Home:{screen:App},
  Counter: {screen:Counter}
});
export default StackApp



