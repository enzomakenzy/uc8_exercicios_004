import { Button, Container, Input, TextButton, Title } from "./styles";

export function TaskDetails() {
  return (
    <Container>
      <Title>
        Editar Tarefa
      </Title>
      <Input multiline={true} />
      <Button>
        <TextButton>
          Salvar
        </TextButton>
      </Button>
    </Container>
  );
}