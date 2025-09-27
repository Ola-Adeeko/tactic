import { TodoItem } from "@/types/todo";

const STORAGE_KEY = "tact-todos";

export const saveTodosToStorage = (todos: TodoItem[]): void => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, serializedTodos);
  } catch (error) {
    console.error("Failed to save todos to localStorage:", error);
  }
};

export const loadTodosFromStorage = (): TodoItem[] => {
  try {
    const serializedTodos = localStorage.getItem(STORAGE_KEY);
    if (serializedTodos) {
      const todos = JSON.parse(serializedTodos);
      return todos.map((todo: any) => ({
        ...todo,
        dateRange: [
          todo.dateRange[0] ? new Date(todo.dateRange[0]) : null,
          todo.dateRange[1] ? new Date(todo.dateRange[1]) : null,
        ],
      }));
    }
  } catch (error) {
    console.error("Failed to load todos from localStorage:", error);
  }
  return [];
};

export const clearTodosFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear todos from localStorage:", error);
  }
};
