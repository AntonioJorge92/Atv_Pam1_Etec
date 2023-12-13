import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Dimensions } from "react-native";


const categorias = [
    {
        codigo_categoria:1,
        nome_categoria:'Informática',
        cat_image: require('../assets/imagens/Categorias/Cat_Info.png'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:2,
        nome_categoria:'Papelaria',
        cat_image: require('../assets/imagens/Categorias/Cat_Papelaria.jpg'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:3,
        nome_categoria:'Higiene pessoal',
        cat_image: require('../assets/imagens/Categorias/Cat_Higiene.jpg'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:4,
        nome_categoria:'Vestuário',
        cat_image: require('../assets/imagens/Categorias/Cat_Vestuario.jpg'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:5,
        nome_categoria:'Eletrônicos',
        cat_image: require('../assets/imagens/Categorias/Cat_Eletronicos.jpg'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:6,
        nome_categoria:'Mé',
        cat_image: require('../assets/imagens/Categorias/Cat_Bebidas.png'),
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },

];

const categoriasItens =({item})=>{
    return(
    <View style={styles.categ_container}>

    <Image style={styles.cat_image}
    source={item.cat_image}/>

    <View style={styles.categ_text_container}>
    <Text style={styles.header_container}>{item.nome_categoria}</Text>
    <Text style={styles.categ_titulo}></Text>
    <Text style={styles.categ_descr}></Text>
    <TouchableOpacity style={styles.btn_categ}
    onPress={categoriasItens.observacoes_categoria}>
    <Text style={styles.produc_btn_text}>Detalhes</Text>

    </TouchableOpacity>
    
    </View>
    </View>
    );
}

export default function Categoria() {
    return(
        
        <SafeAreaView style={styles.container}>
        <FlatList data={categorias}
        renderItem={categoriasItens}
        ListEmptyComponent={<Text>Lista</Text>}
        keyExtractor={categorias => categorias.codigo_categoria}/>

        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header_container: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icone: {
      width: 60,
      height: 60,
      marginRight: 20,
    },

    categ_container: {
      flex: 1,
      flexDirection: 'row',
      padding: 2,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#CCC',
      marginBottom: 10,
      backgroundColor: '#483D8B',
    },
    cat_image: {
      width: 185,
      height: 200,
      marginRight: 10,
      marginBottom: 10,
      justifyContent: 'center',
    },
    categ_text_container: {
      justifyContent: 'center',
    },
    categ_titulo: {
      fontSize: 17,
      fontWeight: '600',
      width: '100%',
      textAlign: 'left',
    },
    categ_descr: {
      fontSize: 17,
      fontWeight: '400',
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      textAlign: 'left',
      color: '#CCC',
      marginBottom: 10,
    },
    btn_categ:{
        alignItems: 'center',
        backgroundColor: '#00008B',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    btn_text:{
        color: '#CD853F',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });
