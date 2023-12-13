import {Image, SafeAreaView,  StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Produto from '../Screens/Produto';
import MyDrawer from '../DrawerMenu/MyDrawer';

export default function Login({navigation}) {
    return (
      <SafeAreaView style={Style.container}>
      <View Style>
        <Image
          style={Style.login}
          source={require('../assets/Mussum.jpg')}
          
          />
      </View>

        <Text style={Style.texto}> Amazuns </Text> 

        {/* INPUTTEXT DE EMAIL*/}
        <View style={Style.containerTextInput}>
            <MaterialIcons name='email' size={20} color={'#666'} />
          <TextInput placeholder='E-MAIL'keyboardType='email-address'/>
        </View>
        {/* INPUTTEXT DE SENHA */}
        <View style={Style.textInput}>
        <MaterialIcons name='form-textbox-password' size={20} color={'#666'} />
        <TextInput placeholder='SENHA'secureTextEntry={true}/>
        </View>

        {/* Botão de Login */}

        <TouchableOpacity  style={Style.btnlogin}
              onPress={()=>{
                navigation.navigate('MyDrawer');
                }} >

          <Text style={Style.txtlogin}>Logins</Text>

        </TouchableOpacity>

        <View style={Style.containerLoginCom}>
          <TouchableOpacity
              onPress={()=>{
                navigation.navigate('CreateUser');
              }}>

            <Text style={Style.botaoRegistro}>Criar Logins</Text>

          
          </TouchableOpacity>


        </View>


      
      </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {    //Metodo para configurar cores, assemelha ao CSS
    flex: 1,
    backgroundColor: '#fff', //Esquema de cores
    padding:10
  },
  topo:{
    alignItems: 'center'
    
  },
  login:{
    width: 350,
    height: 350,
    alignItems: 'center'
  },
  texto:{
    fontSize: 30,
    fontWeight:'500',
    color:'#333',
    marginBottom:30
  },
  containerTextInput:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:8,
    marginBottom:25,
    alignItems: 'center'
  },
  textInput:{
    padding:10
  },
  btnlogin:{
    backgroundColor:'#3480EB',
    borderRadius:10,
    padding:20,
    marginBottom:30
  },
  txtlogin:{
    textAlign:'center',
    fontWeight:'700',
    fontSize:16,
    color:'#FFF'
  },
  loginCom:{
    textAlign: 'center',
    color: '#666',
    marginBottom:15,
  },
containerLoginCom:{
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom:15
},
  btnloginCom:{
  borderBlockCollor:'#DDD',
  borderWidth:2,
  borderRadius:10,
  paddingHorizontal:30,
  paddingVertical:10,
  marginRight:10
},
botaoRegistro:{
    color:'#3480EB',
    fontWeight:'700'
}
});