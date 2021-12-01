import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from "../styles/boxNumber";
import TouchableOpacitys from "./TouchableOpacitys";
import { connect } from 'react-redux';

export default class Main extends Component{


    render(){
        return(
            <View>
                <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', marginBottom: 20, marginTop: 20}}>Caculator</Text>
                
                <TouchableOpacitys />

            </View>
        )
    }
}
