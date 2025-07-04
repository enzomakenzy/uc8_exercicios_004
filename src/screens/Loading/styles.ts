import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;  

export const LoadingIcon = styled(ActivityIndicator).attrs({
  color: "#8c00ff",
  size: "large"
})``;