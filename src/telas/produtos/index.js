import React from 'react';
import { FlatList } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";


//import uma fonte diferente do Google Fonts
//npx expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Produto({ topo, detalhes, itens }) {
    return <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.id}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <Detalhes {...detalhes} />
            </>
        }}
    />
}
