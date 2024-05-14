import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Card, Text } from 'react-native-paper';

import styles from "../styles/style";

export default function CardProd({ item: { titulo, descricao, imagem } }) {
    return <TouchableOpacity style={styles.card} onPress={() => { Alert.alert("Carrinho de compras", "Este produto será adicionado ao seu carrinho de compras.") }}>
        <Card>
            <Card.Content style={styles.container}>
                <Text variant="titleLarge" style={styles.tituloCard}>{titulo}</Text>
                <Text variant="bodyMedium" style={styles.descricao}>{descricao}</Text>
            </Card.Content>
            <Card.Cover style={styles.imgProd} source={imagem} />
        </Card>
    </TouchableOpacity>
}

