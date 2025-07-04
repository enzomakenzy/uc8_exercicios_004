import styled from "styled-components/native";

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #212121;
  gap: 25px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: "Quicksand_700Bold";
  color: #8c00ff;
  text-align: center;
`;

export const AddTaskContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #e6e6e6;
  border-radius: 50px;
  height: 43px;
  padding: 10px 20px;
  flex: 1;
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  color: #e6e6e6;
`;

export const AddTaskButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;

export const AddTaskIcon = styled(Ionicons).attrs({
  color: "#8c00ff",
  size: 48
})``;

export const TasklistEmptyText = styled.Text`
  color: #e6e6e63b;
  font-size: 18px;
  font-family: "Quicksand_500Medium";
  text-align: center;
  line-height: 32px;
  margin-top: 60px;
`;

export const TasklistTextHeader = styled.Text`
  font-family: "Quicksand_700Bold";
  color: #e6e6e6;
  font-size: 19px;
  margin-bottom: 20px;
`

export const TaskContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Task = styled.Text`
  font-size: 18px;
  font-family: "Quicksand_500Medium";
  color: #e6e6e6;
  width: 80%;
`

export const IconTouch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;

export const RemoveTaskIcon = styled(AntDesign).attrs({
  color: "#e6e6e6",
  size: 30,
})``;

