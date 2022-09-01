import React,{Component} from "react";
import { Text, View, TouchableOpacity, StyleSheet , SafeAreaView, Platform, StatusBar, ImageBackground, Image} from "react-native";
import { elastic } from "react-native/Libraries/Animated/Easing";
export default class Inicial extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <SafeAreaView style={estilos.droidSafeArae}/>
               <ImageBackground source={require("../assets/bg_image.png")} style={estilos.ImageBg}>
               <View style={estilos.TitleBar}>
                <Text style={estilos.TitleText}
                >App rastreador de EEI</Text>
                </View>
                      <TouchableOpacity style={estilos.Botao}
                       onPress={()=>this.props.navigation.navigate("Localisador")}>
                        <Text style={estilos.BotaoText}> Localisador de EEI </Text>
                        <Text style={estilos.saibaMais}>{"saiba Mais --->"}</Text>
                        <Text style={estilos.numero}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={estilos.icone}></Image>
                        </TouchableOpacity> 

                        <TouchableOpacity style={estilos.Botao}
                        onPress={()=>this.props.navigation.navigate("Meteoro")}>
                        <Text style={estilos.BotaoText}> Meteoros </Text>
                        <Text style={estilos.numero}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={estilos.icone}></Image>
                        <Text style={estilos.saibaMais}>{"saiba Mais --->"}</Text>
                        </TouchableOpacity>    

            </ImageBackground>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    } ,
    droidSafeArae:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    },
    TitleBar:{
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
    TitleText:{
        fontSize: 40,
        fontWeight: "bold",
        color:"white"
    },
    Botao:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius: 30,
        backgroundColor: "gold",
    },
    BotaoText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop: 80,
        paddingLeft: 30,
    },
    ImageBg:{
        flex:1,
        resizeMode:"cover",

    },
    icone:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode: "contain",
        right: 20,
        top:-80,
    },
    saibaMais:{
        padding:30,
        color: "red",
        fontsize: 15
    },
    numero:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize: 150,
        right:20,
        bottom:-15,
        zIndex:-1,
    }
})