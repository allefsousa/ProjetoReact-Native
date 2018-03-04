import React, { Component } from 'react';
import { NavigationExperimental  } from 'react-native-deprecated-custom-components';

/*importando as paginas criadas */
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default class InitRouter extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Navigator initialRouter = {{name: 'home',title: 'Home Page'}}>
                renderScene = {this.renderScene}

            </Navigator>
        );
    }
    renderScene(route,navigator){
        if(route.name == 'home'){
            return(
                <HomePage 
                    navigator = {navigator}/>
            );
        }
        if(route.name == 'About'){
            return (
                <AboutPage 
                    navigator = { navigator}/>
            );
        }

    }
}