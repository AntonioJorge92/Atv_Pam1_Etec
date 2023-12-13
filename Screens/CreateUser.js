import {Image, SafeAreaView,  StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateUser({navigation}) {
return (
<SafeAreaView style={Style.container}> 

<View>{/*Imagem de cadastro*/}
    <Image style={Style.login}
    source={require('../assets/imagens/cadastro2.png')}
    />

</View>

    <Text style={Style.texto}>Cadastro</Text> 

    <View style={Style.containerTextInput}>
    <MaterialIcons name='email' size={20} color={'#666'} />
    <TextInput placeholder='E-MAIL'keyboardType='email-address'/>
    </View>

        <View style={Style.textInput}>
        <MaterialIcons name='form-textbox-password' size={20} color={'#666'} />
        <TextInput placeholder='SENHA'secureTextEntry={true}/>
        </View>


        <View style={Style.textInput}>
        <MaterialIcons name='form-textbox-password' size={20} color={'#666'} />
        <TextInput placeholder='CONFIRMAR SENHA'secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={Style.btnlogin} >

          <Text style={Style.txtlogin}>Cadastrar</Text>

        </TouchableOpacity>
        <View style={Style.containerLoginCom}>
          <TouchableOpacity
              onPress={()=>{
                navigation.navigate('CreateUser');
              }}>

            <Text style={Style.botaoRegistro}>Login</Text>

          
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
    
  },
  texto:{
    fontSize:28,
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