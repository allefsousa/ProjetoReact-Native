import React, { Component } from 'react';
import { Text, Button, View, Alert, StyleSheet } from 'react-native';
import STYLE from './Counter.style'
/**
 * criando uma variavel para ser contadora
 * com state
 */
export default class CounterComponent extends Component{
    static navigationOptions = {
         title:'counter - App'
    }
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
                <Text style = {STYLE.textCounter}>
                    {this.state.counter}
                </Text>
                <Button title = "inc" onPress={this.increment} color="#F44336" ></Button> 
                <Button title = "desk"onPress={this.decrement}></Button>
            </View>
        );
    }
}
/** Crinado uma constante folha de stylo para ser aplicada no componentes
 * Comentado para deixar o codigo aqui e utilizar o stylo do arquivo Counter.style.js
 
const STYLE = StyleSheet.create({
   
    textCounter:{ 
            fontSize:20,
            textAlign: 'center',
            margin:50
    }
});
*/