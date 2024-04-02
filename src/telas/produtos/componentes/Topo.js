import React from 'react';
import { StyleSheet, StatusBar, Image, Dimensions } from 'react-native';

import Header from "../../../../assets/produtos/protetor_solar.webp";
import Texto from "../../../componentes/Texto" //componente de exibição de texto

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;


//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Topo() {
    return <>
        <StatusBar />
        <Image source={Header} style={styles.topo}></Image>
        <Texto style={styles.titulo}>Detalhes do produto</Texto>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1000 / 1000 * width,
        marginTop: 35,
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 16,
    },
});