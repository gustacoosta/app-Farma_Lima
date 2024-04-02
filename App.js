import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { View } from "react-native";

import Produto from "./src/telas/produtos";
import Mocks from "./src/mocks/produto";

export default function App() {
  /*
  //Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />
  }
  */

  return <Produto {...Mocks} />
}

