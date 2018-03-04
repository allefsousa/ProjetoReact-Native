import React, { Component } from 'react';
import { Text, Button, View, Alert } from 'react-native';
/**
 * criando uma variavel para ser contadora
 * com state
 */
export default class CounterComponent extends Component{
    constructor(){
        super();
        this.state={
            counter: 0
        }
    }
     /**funções para executar a adição de valoresa variavel  */
    increment = () =>{
        this.setState({
            counter:this.state.counter +1
        });
        Alert.alert('My Title',this.state.counter.toString());

    }
         /**funções para executar a remoção de valoresa variavel  */

    decrement = ()=>{
        this.setState({
            counter:this.state.counter -1
        });
        Alert.alert('My Title',this.state.counter.toString());

    }
    /* renderizando os componentes na View  */
    render(){
        return(
            <View>
                <Text>
                    {this.state.counter}
                </Text>
                <Button title = "inc" onPress={this.increment}></Button> 
                <Button title = "desk"onPress={this.decrement}></Button>
            </View>
        );
    }
}