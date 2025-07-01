import { useState } from "react";
import styled from "styled-components/native";

export default function App() {
  const [ inputContent, setInputContent ] = useState("");
  const [ taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = () => {
    setTaskList([...taskList, inputContent]);
    setInputContent("")
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

      <InputTextResult>{JSON.stringify(taskList)}</InputTextResult>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #e6e6e6;
  gap: 12px;
  padding: 40px 20px 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #58008f;
`;

const AddTaskContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #58008f;
  padding: 8px;
  flex: 1;
  font-size: 16px;
`;

const AddTaskButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: #58008f;
  padding: 8px;
`;

const AddTaskTextButton = styled.Text`
  color: #e6e6e6;
  font-size: 16px;
`

const InputTextResult = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #58008f;
`