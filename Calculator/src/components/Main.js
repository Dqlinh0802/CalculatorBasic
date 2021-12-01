import React, { Component } from "react";
import { Text, View} from 'react-native';
import styles from "../styles/boxNumber";
import TouchableOpacitys from "./TouchableOpacitys";

export default class Main extends Component{


    render(){
        return(
            <View>
                <View style={{backgroundColor: '#3D155F'}}>
                    <Text style={{textAlign: 'center', 
                    fontSize: 40, fontWeight: 'bold', 
                    marginBottom: 20, marginTop: 20, color: '#DF678C' }}>
                        Caculator
                    </Text>
                </View>
                <TouchableOpacitys />
            </View>
        )
    }
}
