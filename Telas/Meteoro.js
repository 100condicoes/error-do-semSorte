import React,{Component} from "react";
import { Text, View, TouchableOpacity} from "react-native";
export default class Meteoro extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text>Tela de Meteoro/meteoritos</Text>
            </View>
        )
    }
}
