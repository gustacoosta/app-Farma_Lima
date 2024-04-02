import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';

import Logo from "../../../../assets/logo.png";
import Texto from "../../../componentes/Texto" //componente de exibição de texto

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;


//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Detalhes() {
    return <View style={styles.produto}>
        <View style={styles.logotipo}>
            <Image source={Logo} style={styles.logo} resizeMode='contain'></Image>
            <Texto style={styles.nome}>Protetor Solar Bioré 40ml</Texto>
        </View>
        <Texto style={styles.descricao}> BIORÉ UV PERFECT MILK - Protetor solar Facial e corporal SPF 50 e alta proteção UVA com textura macia e toque seco para uma sensação confortável na pele. A tecnologia exclusiva traz partículas ultrafinas e filtros físicos UV em uma fórmula sem corantes. Esta emulsão leve espalha fácil na pele, oferecendo alta proteção UVA e UVB, sem deixar a sensação de pele oleosa ou comm toque pegajoso. Agitar bem o frasco antes da aplicação.</Texto>
        <Texto style={styles.preco}>R$ 74,29</Texto>
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