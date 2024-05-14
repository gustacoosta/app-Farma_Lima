import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tela: {
        alignItems: "center",
        backgroundColor: "#ADFF2F",
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 26,
        color: "black",
        padding: 16,
    },
    lista:{
        marginTop: 60,
    },
    card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        backgroundColor: "white",
    },
    tituloCard: {
        height: 80,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        color: "black",
        padding: 10,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 18,
        color: "black",
        padding: 5,
        minHeight: 90,
    },
    imgProd: {
        borderRadius: 20,
        height: 200,
    },
});
