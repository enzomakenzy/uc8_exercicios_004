import { useState } from "react";
import { Alert, ScrollView } from "react-native";

import { Container, Title, AddTaskContainer, Input, AddTaskButton, AddTaskIcon, TasklistTextHeader, TasklistEmptyText, TaskContainer, Task, IconTouch, RemoveTaskIcon } from "./style";
import { useNavigation } from "@react-navigation/native";

import { AppRoutesNavigationProps } from "../../routes/app.routes";

export function MyTasks() {
  const [ inputContent, setInputContent ] = useState("");
  const [ taskList, setTaskList] = useState<string[]>([]);

  const navigation = useNavigation<AppRoutesNavigationProps>();

  const handleAddTask = () => {
    setInputContent("")
    if (inputContent === "") {
      return Alert.alert("Item vazio", "A tarefa adicionada não pode ser vazia!");
    } 

    if (inputContent.length > 78) {
      return Alert.alert("A tarefa não pode ter mais de 48 caracteres");
    }

    setTaskList([...taskList, inputContent]);
  }

  const handleRemoveTask = (task: string) => {
    setTaskList(list => list.filter((taskName) => taskName !== task))
  }

  const handleTaskEdit = (task: string) => {
    navigation.navigate("taskDetails", {
      taskName: task
    })
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
            <TaskContainer key={index} onPress={() => handleTaskEdit(task)}>
              <Task>{task}</Task>
              <IconTouch onPress={() => handleRemoveTask(task)}>
                <RemoveTaskIcon name="close" />
              </IconTouch>
            </TaskContainer>
          ))
        }
      </ScrollView>
    </Container>
  );
}