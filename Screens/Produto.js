//import { StatusBar } from "expo-status-bar";
import { Image, FlatList, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const produtos = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        nome_produto: 'Teclado',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/informatica1.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 2,
        codigo_categoria: 1,
        nome_produto: 'Mouse',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/informatica2.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 3,
        codigo_categoria: 5,
        nome_produto: 'Isaac SmartWatch',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/eletronico1.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 4,
        codigo_categoria: 5,
        nome_produto: 'SmartPhone',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/eletronico2.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 5,
        codigo_categoria: 4,
        nome_produto: 'Camiseta',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/vestuario1.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 6,
        codigo_categoria: 4,
        nome_produto: 'Calça',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/vestuario2.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 7,
        codigo_categoria: 3,
        nome_produto: 'Desodorante',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/higiene1.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 8,
        codigo_categoria: 3,
        nome_produto: 'Shampoo',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/higiene2.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 9,
        codigo_categoria: 2,
        nome_produto: 'Caderno',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/papelaria1.png'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 10,
        codigo_categoria: 2,
        nome_produto: 'Caneta',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/papelaria2.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 11,
        codigo_categoria: 6,
        nome_produto: 'Buchanas',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Buchanas.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 12,
        codigo_categoria: 6,
        nome_produto: 'Macallan',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Macallan.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 13,
        codigo_categoria: 6,
        nome_produto: 'Amarula',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Amarula.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 14,
        codigo_categoria: 6,
        nome_produto: 'Sagatiba',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Sagatiba.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 15,
        codigo_categoria: 6,
        nome_produto: 'Salinissima',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Salinissima.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto: 16,
        codigo_categoria: 6,
        nome_produto: 'Tequila',
        valor_produto: '90,00',
        imagem_livro: require('../assets/imagens/Tequila.jpg'),
        descricao_produto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
];


const prodItem = ({ item }) => {
    return (
        <View style={style.produto_container}>

            <Image style={style.imagem_livro}
                source={item.imagem_livro} />

            <View style={style.produto_text_container}>

                <Text style={style.header_title}>{item.nome_produto}</Text>
                <Text style={style.desc_produto}>{item.valor_produto}</Text>
                <TouchableOpacity style={style.produc_button_details}
                onPress={()=>{produtos.descricao_produto}}>
                    <Text style={style.produc_button_text}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default function Produto() {
    return (
        <SafeAreaView style={style.container}>
            <FlatList data={produtos}
                renderItem={prodItem}
                ListEmptyComponent={<Text>Lista de produtos</Text>}
                keyExtractor={produtos => produtos.codigo_produto} />
        </SafeAreaView>
    );
}
//*Config. Area Visual*//
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alingItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alingItems: 'center',
        justifyContent: 'center'
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    book_list_header: {
        height: 100,
    },
    produto_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        backgroundColor: '#999',
    },
    imagem_livro: {
        width: 150,
        height: 190,
        marginRight: 10,
        marginBottom: 10,
    },
    produto_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    desc_produto: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    descricao_produto: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    produc_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    produc_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
