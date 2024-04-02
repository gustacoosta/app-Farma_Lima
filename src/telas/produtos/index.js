import React from 'react';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";


//import uma fonte diferente do Google Fonts
//npm expo install expo-font @expo-google-fonts/nome-da-fonte
export default function Produto({topo, detalhes}) {
    return <>
        <Topo {...topo}/>
        <Detalhes {...detalhes}/>
    </>
}
