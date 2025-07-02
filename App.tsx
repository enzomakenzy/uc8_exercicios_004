import { useState } from "react";
import { Alert, ScrollView, StatusBar } from "react-native";

import { Container, Title, AddTaskContainer, Input, AddTaskButton, AddTaskIcon, TasklistTextHeader, TasklistEmptyText, TaskContainer, Task, IconTouch, RemoveTaskIcon, Loading } from "./styles/style"

import { Quicksand_500Medium, Quicksand_700Bold, useFonts } from "@expo-google-fonts/quicksand"

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_500Medium, Quicksand_700Bold });

  const [ inputContent, setInputContent ] = useState("");
  const [ taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = () => {
    setInputContent("")
    if (inputContent === "") {
      return Alert.alert("Item vazio", "A tarefa adicionada não pode ser vazia!");
    } 

    if (inputContent.length > 48) {
      return Alert.alert("A tarefa não pode ter mais de 48 caracteres");
    }

    setTaskList([...taskList, inputContent]);
  }

  const handleRemoveTask = (task: string) => {
    setTaskList(list => list.filter((taskName) => taskName !== task))
  }
  
  return (
    <Container>
      {
        fontsLoaded ?  
          <>
            <StatusBar barStyle="light-content" />
            <Title>Minhas Tarefas</Title>
            <AddTaskContainer>
              <Input 
                value={inputContent}
                onChangeText={setInputContent}
              />

              <AddTaskButton onPress={handleAddTask}>
                <AddTaskIcon name="add-circle" />
              </AddTaskButton>
            </AddTaskContainer>

            <ScrollView 
              showsVerticalScrollIndicator={false} 
              contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 40  }}>
              {
                taskList.length > 0 &&
                <TasklistTextHeader>
                  Tarefas
                </TasklistTextHeader>
              }

              {
                taskList.length === 0 ? 
                <TasklistEmptyText>Você não possui tarefas {"\n"} no momento...</TasklistEmptyText>
                :
                taskList.map((task, index) => (
                  <TaskContainer key={index}>
                    <Task>{task}</Task>
                    <IconTouch onPress={() => handleRemoveTask(task)}>
                      <RemoveTaskIcon name="close" />
                    </IconTouch>
                  </TaskContainer>
                ))
              }
            </ScrollView>
          </>
        : 
          <Loading />
      }
    </Container>
  );
}