import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";

import Porduto from "./Screens/Produto";
import Login from "./Screens/Login";
import CreateUser from "./Screens/CreateUser";
import DrawerMenu from "./DrawerMenu/DraweMenu";
import Categoria from "./Screens/Categoria";
import MyDrawer from "./DrawerMenu/MyDrawer";
import Home from "./Screens/Home";

const Stack = createNativeStackNavigator();

export default function App(){
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Login">

    <Stack.Screen name="Login"
    component={Login}
    options={{title:"Inicio"}}/>

    <Stack.Screen name="CreateUser"
    component={CreateUser}
    options={{title:"Cadastro"}}/>

    <Stack.Screen name="Produto"
    component={Porduto}
    options={{title:"Produto"}}/>

    <Stack.Screen name="Categoria"
    component={Categoria}
    options={{title:"Categoria"}}/>

    <Stack.Screen  name="MyDrawer"
    component={MyDrawer}
    options={{title:"Principal"}}/>

    
<Stack.Screen name="Home"
    component={Home}
    options={{title:"Home"}}/>


  <Stack.Screen name="DrawerMenu"
  component={DrawerMenu}
  options={{title:"Dreawer", headerShown:false}}/>


  </Stack.Navigator>


  </NavigationContainer>
  );
}