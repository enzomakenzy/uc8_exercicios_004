import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import { MyTasks } from "../screens/MyTasks";
import { TaskDetails } from "../screens/TaskDetails";

type StackAppRoutesProps = {
  myTasks: undefined;
  taskDetails: {
    taskName: string
  };
}

export type TaskDetailsProps = NativeStackScreenProps<StackAppRoutesProps, "taskDetails"> 

const { Navigator, Screen } = createNativeStackNavigator<StackAppRoutesProps>()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="myTasks" screenOptions={{ headerShown: false }}>
      <Screen 
        name="myTasks"
        component={MyTasks}
      />

      <Screen 
        name="taskDetails"
        component={TaskDetails}
      />
    </Navigator>
  );
}