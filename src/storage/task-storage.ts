import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "TASKS";

export async function saveTasks(tasks: any[]) {
  try {
    const jsonValue = JSON.stringify(tasks);

    await AsyncStorage.setItem(TASKS_KEY, jsonValue);
  } catch (error) {
    console.log("Save error:", error);
  }
}

export async function getTasks() {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_KEY);

    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Get error:", error);

    return [];
  }
}