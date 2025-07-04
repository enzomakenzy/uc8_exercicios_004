import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #212121;
  gap: 25px;
  padding: 25px 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #8c00ff;
  font-family: "Quicksand_700Bold";
  text-align: center;
`

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #e6e6e6;
  border-radius: 50px;
  height: 110px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  color: #e6e6e6;
`;

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6
})`
  background-color: #8c00ff;
  border-radius: 50px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 5px 
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-family: "Quicksand_500Medium";
  color: #e6e6e6;
`;