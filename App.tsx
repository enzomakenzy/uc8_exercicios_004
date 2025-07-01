import { useState } from "react";
import styled from "styled-components/native";

export default function App() {
  const [ inputContent, setInputContent ] = useState("");
  
  return (
    <Container>
      <Title>Minhas Tarefas</Title>
      <Input 
        value={inputContent}
        onChangeText={setInputContent}
      />
      <InputTextResult>{inputContent}</InputTextResult>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  gap: 12px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #58008f;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #58008f;
  padding: 8px;
  width: 275px;
  font-size: 16px;
`;

const InputTextResult = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #58008f;
`