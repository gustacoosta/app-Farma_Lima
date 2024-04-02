import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Alert } from 'react-native';

import Texto from "../../../componentes/Texto" //componente de exibição de texto
import Botao from "../../../componentes/Botao" 

//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Detalhes({ logo, nome, detalhe, preco }) {
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={logo} style={styles.logo} resizeMode='contain'></Image>
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}> {detalhe} </Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao></Botao>
    </View>
}

const styles = StyleSheet.create({
    produto: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center"
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
    botao: {
        width: "80%",
        marginTop: 16,
        backgroundColor: "#bee0ec",
        paddingVertical: 16,
        borderRadius: 6,
    },
    botaoTexto: {
        textAlign: "center",
        fontSize: 22,
        lineHeight: 26,
        fontWeight: "bold"
    }
});