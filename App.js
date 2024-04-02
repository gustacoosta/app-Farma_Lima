import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import Produto from "./src/telas/produtos"
import { View } from "react-native"

export default function App() {
  //Carrega a fonte para projeto
  const [fonteCarregada] = useFonts({
    "PoppinsRegular" : Poppins_500Medium,
    "PoppinsBold" : Poppins_600SemiBold,
  })
  //Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />
  }

  return <Produto />
}

