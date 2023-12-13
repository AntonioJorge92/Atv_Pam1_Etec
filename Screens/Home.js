import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Dimensions } from "react-native";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Home({navigation}){
return(
    <SafeAreaView style={StyleSheet.safeArea}>
    <View style={Style.container}>

    <Image style={Style.img_home} source={require('../assets/imagens/Categorias/Welcome.jpg')}/>

    <View style={Style.Button_Container}>
    <TouchableOpacity style={Style.Button_home}
    onPress={()=>{navigation.navigate('Produto');}}>
        <Text style={Style.txt}>Produto</Text>
    </TouchableOpacity>


    <TouchableOpacity style={Style.Button_home}
    onPress={()=>{navigation.navigate('Categoria');}}>
        <Text style={Style.txt}>Categoria</Text>
    </TouchableOpacity>
    </View>

    <Text></Text>

    </View>
    </SafeAreaView>


);
}

const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'transparent',
        padding:10,
        alignItems: 'center',
    },
    safeArea:{
        flex: 1,
        backgroundColor: '#483D8B',
    },
    topo:{
        alignItems: 'center'
    },
    Button_home:{
    backgroundColor:'#00008B',
    borderRadius:10,
    padding:20,
    marginBtn:30,
    width: 170,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
    },
    img_home:{
        width: 350,
        height: 300,
        alignItems: 'center'
    },
    txt:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:22,
        color:'#CD853F'
    },
    Button_Container:{
        flexDirection: 'row',
        marginTop: 20,
    }
});