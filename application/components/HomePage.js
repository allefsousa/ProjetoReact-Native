/**
 * Criando a Pagina Home
 */
import React, { Component } from 'react';
import { Text,View } from 'react-native';


export default class HomePage extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <view>
                <Text>'Esta é a Pagina Hoome'</Text>
            </view>
        );
    }
}