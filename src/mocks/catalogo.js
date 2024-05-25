import protetor from "../../assets/catalogo/protetor.webp";
import neutrogena from "../../assets/catalogo/neutrogena.webp";
import organica from "../../assets/catalogo/organica.webp";
import retinol from "../../assets/catalogo/retinol_payot.webp";
import siage from "../../assets/catalogo/siage.webp";
import eudora from "../../assets/catalogo/eudora.webp";


const catalogo = {
    card: {
        titulo: "Veja nossos produtos!",
        produtos: [
            {
                id: 1,
                titulo: "Viagem ISDIN",
                descricao: "Protetor Solar Facial FPS60 30ml + Gel de Banho 100ml + Loção Corporal 100ml",
                imagem: protetor,
            },
            {
                id: 2,
                titulo: "Retinol PAYOT",
                descricao: "Ativos que ajudam na regeneração celular da pele.",
                imagem: retinol,
            },
            {
                id: 3,
                titulo: "Limpeza de Pele",
                descricao: "Remove impurezas, oleosidade e maquiagem.",
                imagem: neutrogena,
            },
            {
                id: 4,
                titulo: "Banho Spa",
                descricao: "Kit completo para um banho relaxante. Deixa sua pele hidratada, macia e perfumada coma fragrância de Chá branco e Gengibre.",
                imagem: organica,
            },
            {
                id: 5,
                titulo: "Siàge Cica-Therapy",
                descricao: "Indicado para cabelos danificados. Limpa os fios suavemente sem ressecar.",
                imagem: siage,
            },
            {
                id: 6,
                titulo: "Instance Ameixa",
                descricao: "Traz uma junção de doçura, higiene, hidratação e perfumação para a pele.",
                imagem: eudora,
            }
        ]
    }
}

export default catalogo;