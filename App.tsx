import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import styled from "styled-components/native";

export default function App() {
  const [ inputContent, setInputContent ] = useState("");
  const [ taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = () => {
    if (inputContent === "") {
      Alert.alert("Item vazio", "A tarefa adicionada não pode ser vazia!");
    } else {
      setTaskList([...taskList, inputContent]);
      setInputContent("")
    }
  }

  const handleRemoveTask = (task: string) => {
    setTaskList(list => list.filter((taskName) => taskName !== task))
  }
  
  return (
    <Container>
      <Title>Minhas Tarefas</Title>
      <AddTaskContainer>
        <Input 
          value={inputContent}
          onChangeText={setInputContent}
        />

        <AddTaskButton onPress={handleAddTask}>
          <AddTaskTextButton>Adicionar Tarefa</AddTaskTextButton>
        </AddTaskButton>
      </AddTaskContainer>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        {
          taskList.map((task, index) => (
            <TaskContainer key={index}>
              <Task>{task}</Task>
              <IconTouch onPress={() => handleRemoveTask(task)}>
                <CloseIcon name="close" />
              </IconTouch>
            </TaskContainer>
          ))
        }
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #212121;
  gap: 15px;
  padding: 65px 20px 50px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #7700ff;
`;

const AddTaskContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #e6e6e6;
  border-radius: 5px;
  padding: 8px;
  flex: 1;
  font-size: 16px;
  color: #e6e6e6;
`;

const AddTaskButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: #7700ff;
  padding: 8px;
  border-radius: 5px;
`;

const AddTaskTextButton = styled.Text`
  color: #e6e6e6;
  font-size: 16px;
  font-weight: 600;
`

const TaskContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`

const Task = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #e6e6e6;
`

const IconTouch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;

const CloseIcon = styled(AntDesign).attrs({
  color: "#e6e6e6",
  size: 30,
})``;