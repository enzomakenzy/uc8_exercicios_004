import { Quicksand_500Medium, Quicksand_700Bold, useFonts } from "@expo-google-fonts/quicksand"
import { MyTasks } from "./src/screens/MyTasks";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_500Medium, Quicksand_700Bold });
  
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      { fontsLoaded ? <MyTasks /> : <Loading /> }
    </Container>
  );
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  gap: 25px;
  padding: 0px 20px 50px 20px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: "#8c00ff",
  size: "large"
})``;