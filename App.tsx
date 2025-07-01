import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Title>Minhas Tarefas</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e7e6e8;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;
