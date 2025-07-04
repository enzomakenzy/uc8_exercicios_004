import { StatusBar } from "react-native";

import { Quicksand_500Medium, Quicksand_700Bold, useFonts } from "@expo-google-fonts/quicksand"

import { Routes } from "./src/routes";
import { LoadingIcon } from "./src/screens/Loading/styles";

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_500Medium, Quicksand_700Bold });
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      { fontsLoaded ? <Routes /> : <LoadingIcon /> }
    </>
  );
}
