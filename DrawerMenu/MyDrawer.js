import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';


import Categoria from '../Screens/Categoria'
import Produto from '../Screens/Produto'
import CreateUser from '../Screens/CreateUser'
import Home from '../Screens/Home';

//CRIAÇÃO DO NAVIG DO DRAWER
const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            >

        <Drawer.Screen 
            name='Home'
            component={Home}
            options={ {title:'Home',
            headerTitleStyle:{color:'transparent'}
            }}
            />
            <Drawer.Screen 
            name='Produto'
            component={Produto}
            options={ {title:'Produto',
            headerTitleStyle:{color:'transparent'}
            }}
            />

            <Drawer.Screen 
            name='Categoria'
            component={Categoria}
            options={ {title:'Categoria',
                headerTitleStyle:{color:'transparent'}
            }
            }
            />

            <Drawer.Screen 
            name='Criar Usuario'
            component={CreateUser}
            options={
                {title:'CriarUser',
                headerTitleStyle:{color:'transparent'}
            }
            }
            />
            
        </Drawer.Navigator>
    );

}
