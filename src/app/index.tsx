import AddTaskInput from "@/components/add-task-input";
import AppHeader from "@/components/app-header";
import EmptyState from "@/components/empty-state";
import TaskCard from "@/components/task-card";
import { getTasks, saveTasks } from "@/storage/task-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList, StyleSheet, View
} from "react-native";

type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export default function HomeScreen() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const storedTasks = await getTasks();

    setTasks(storedTasks);
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = () => {
    if (!taskText.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskText,
      isDone: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskText("");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Todo List",
        }}
      />
      <AppHeader pendingCount={tasks.filter((task) => !task.isDone).length} />
      <AddTaskInput
        value={taskText}
        onChangeText={setTaskText}
        onAdd={addTask}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyState />}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            isDone={item.isDone}
            onPress={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 70,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  form: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#111",
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#f2f2f2",
    marginBottom: 12,
  },
  doneCard: {
    backgroundColor: "#d8f5dc",
  },
  cardText: {
    fontSize: 18,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});