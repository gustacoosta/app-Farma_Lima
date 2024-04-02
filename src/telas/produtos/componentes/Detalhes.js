import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';

import Texto from "../../../componentes/Texto" //componente de exibição de texto

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;


//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Detalhes({logo, nome, detalhe, preco}) {
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}> {detalhe} </Texto>
        <Texto style={styles.preco}>{preco}</Texto>
    </View>
}

const styles = StyleSheet.create({
    produto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 25,
        color: "purple",
        paddingTop: 18,
        paddingLeft: 10,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        color: "black",
    },
    preco: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
        color: "black",
    },
    logo: {
        width: 50,
        height: 70
    },
    logotipo: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
});