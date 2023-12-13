import {Image, StyleSheet, Text, View } from 'react-native';

//IMPORTAÇÕES DO MENU DRAWER

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    } from '@react-navigation/drawer';

import MyDrawer from './MyDrawer';

export default function DrawerMenu() {
return (
<MyDrawer/>
);
}

const styles = StyleSheet.create({
  container: {    //Metodo para configurar cores, assemelha ao CSS
    flex: 1,
    backgroundColor: '#fff', //Esquema de cores
    alignItems: 'center', //Horizontal
    justifyContent: 'center', //Vertical
},
});