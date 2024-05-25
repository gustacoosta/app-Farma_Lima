import React from 'react';
import { FlatList , View} from 'react-native';

import Texto from "../../componentes/Texto";
import styles from "./styles/style";
import Card from "./componentes/CardProd";

export default function Catalogo({ card }) {
    return <View style={styles.tela}>
        <Texto style={styles.titulo}>{card.titulo}</Texto>
        <FlatList
            style={styles.lista}
            data={card.produtos}
            renderItem={Card}
            keyExtractor={card.produtos.id}
            numColumns={2}
        />
    </View>
}

