import React, { Component } from 'react';
import { Text,View } from 'react-native';


export default class AboutPage extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <view>
                <Text>'Esta é a Pagina About'</Text>
            </view>
        );
    }
}