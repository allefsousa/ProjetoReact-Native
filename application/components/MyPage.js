/**
 * Criando a Pagina Home
 */
import React, { Component } from 'react';
import {View,Text,StyleSheet } from 'react-native';


export default class MyPage extends Component{
    static navigationOptions = {
        title:'Minha pagina App'
   }
    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <Text style= {STYLE.textCounter}>'Esta é a Minha Pagina inicia '</Text>
            </View>
        );
    }
}
const STYLE = StyleSheet.create({
   
    textCounter:{ 
            fontSize:20,
            textAlign: 'center',
            margin:50
    }
});