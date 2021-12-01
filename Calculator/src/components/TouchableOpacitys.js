import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import styles from "../styles/boxNumber";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default class TouchableOpacitys extends Component {
    
    constructor(props){
        super(props);
        this.state={
            resultText: "",
            myValue: ""
        };
        this.buttonResult = this.buttonResult.bind(this);
    }

    buttonXoa() {
        let text = this.state.resultText.split('');
        text.pop()
        console.log(this.state.text);
        this.setState({
            resultText: text.join('')
        })
    }

    buttonClear() {
        let text = "";
        this.setState({
            resultText: text
        })
    }

    validate() {
        const text = this.state.resultText;
        console.log(text);
        switch(text.slice(-1)) {
            case "+": 
            case "-": 
            case "*": 
            case "/":
                return false;
        }
        if(text.includes("+/") || text.includes("*/")
        || text.includes("/*") || text.includes("-/") 
        || text.startsWith("*")|| text.startsWith("/")
        || text.includes("***")){
        Alert.alert("Cảnh báo", "Sai cú pháp rồi bạn ơi", 
            [
                {text: 'OK', onPress: () => {this.buttonClear()}}
        ]);
            return false;
        }
        return true;
    }

    buttonResult() {
        const textMu = this.state.resultText;
        let text = eval(this.state.resultText);
        if(!textMu.includes("**")){
            this.setState({
                myValue: textMu + " = " + text,
            });
        }
        this.setState({
            myValue: textMu.replace("**", "^") + " = " + text,
        });
        this.buttonClear();
    }

    buttonPress(text) {
        console.log(text)
        if(text == '='){
            if(this.state.resultText != ""){
                return this.validate() && this.buttonResult();
            }
            else
                return null;
        }
        if(text == 'C'){
            return this.buttonClear();
        }
        if(text == 'X'){
            return this.buttonXoa();
        }
        this.setState({
            resultText: this.state.resultText + text
        })
    }

    
    

    render(){
        return(
            <View>
                <Text style={[styles.input, {marginBottom: 0, height: 70, lineHeight: 70, fontSize: 30}]}
                numberOfLines={1} ellipsizeMode="head">
                    {this.state.myValue}
                </Text>
                <Text style={[styles.input, {marginBottom: 0}]} numberOfLines={1} ellipsizeMode="head">
                    {this.state.resultText}
                </Text>
            
                <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', width: '75%'}}>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#c24444'}]}
                                onPress={() => this.buttonPress("C")}>
                                    <Text style={[styles.num, {fontWeight: 'normal'}]}>C</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}
                                onPress={() => this.buttonPress("*")}>
                                    <Text style={[styles.num, {fontWeight: 'normal'}]}>*</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}
                                onPress={() => this.buttonPress("/")}>
                                    <Text style={[styles.num, {fontWeight: 'normal'}]}>/</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("7")}>
                                    <Text style={styles.num}>7</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("8")}>
                                    <Text style={styles.num}>8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("9")}>
                                    <Text style={styles.num}>9</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("4")}>
                                    <Text style={styles.num}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("5")}>
                                    <Text style={styles.num}>5</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("6")}>
                                    <Text style={styles.num}>6</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("1")}>
                                    <Text style={styles.num}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("2")}>
                                    <Text style={styles.num}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("3")}>
                                    <Text style={styles.num}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={[styles.box, {width: '62%', marginRight: 6, marginLeft: 6, backgroundColor: '#046ab0'}]}
                                onPress={() => this.buttonPress("0")}>
                                    <Text style={styles.num}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress(".")}>
                                    <Text style={[styles.num, {fontSize: 50, lineHeight: 70}]}>.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'column', width: '25%'}}>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#c24444'}]}
                            onPress={() => this.buttonPress("X")}>
                                <MaterialCommunityIcons name="backspace" style={styles.num}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}
                            onPress={() => this.buttonPress("-")}>
                                <Text style={[styles.num, {fontSize: 45, fontWeight: 'normal'}]}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}
                            onPress={() => this.buttonPress("+")}>
                                <Text style={[styles.num, {fontWeight: 'normal'}]}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', height: 170, backgroundColor: '#cf7961' }]}
                            onPress={() => this.buttonPress("=")}>
                                <Text style={[styles.num, 
                                    {lineHeight: 170, height: 170, fontSize: 45}]}>
                                    =
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        )
    }
}
// export default connect()(TouchableOpacitys);