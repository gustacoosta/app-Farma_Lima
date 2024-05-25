import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styles from "../styles/style";
import Modal from "./Modal";

export default function CardProd({ item: { titulo, descricao, imagem } }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity
                style={styles.card}
                onPress={() => setModalVisible(true)}
            >
                <Card>
                    <Card.Content style={styles.container}>
                        <Text variant="titleLarge" style={styles.tituloCard}>{titulo}</Text>
                        <Text variant="bodyMedium" style={styles.descricao}>{descricao}</Text>
                    </Card.Content>
                    <Card.Cover style={styles.imgProd} source={imagem} />
                </Card>
            </TouchableOpacity>
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                titulo={titulo}
                descricao={descricao}
                imagem={imagem}
            />
        </>
    );
}
