"use client";

import React, { useState, useEffect } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Status, TodoItem, TaskFormData, Priority } from "@/types/todo";
import Header from "./(components)/Header";
import TodoControls from "./(components)/TodoControls";
import TodoContent from "./(components)/TodoContent";
import ManageTask from "./(components)/ManageTask";
import Assignee1 from "@/assets/images/user1.png";
import Assignee2 from "@/assets/images/user2.png";
import Assignee3 from "@/assets/images/user3.png";
import Assignee4 from "@/assets/images/user4.png";
import Assignee5 from "@/assets/images/user5.png";
import { saveTodosToStorage, loadTodosFromStorage } from "@/utils/storage";

const mockTodoItems: TodoItem[] = [
  {
    id: "1",
    name: "MKV Intranet V2",
    dateRange: [new Date("2024-06-04"), new Date("2024-06-16")] as [Date, Date],
    assignees: [
      { name: "John Doe", image: Assignee1 },
      { name: "Jane Smith", image: Assignee2 },
    ],
    priority: "medium" as const,
    status: "todo" as const,
  },
  {
    id: "2",
    name: "Design System",
    dateRange: [new Date("2024-06-23"), new Date("2024-06-24")] as [Date, Date],
    assignees: [
      { name: "Alice Johnson", image: Assignee3 },
      { name: "Bob Wilson", image: Assignee4 },
    ],
    priority: "important" as const,
    status: "todo" as const,
  },
  {
    id: "3",
    name: "Break System",
    dateRange: [new Date("2024-06-23"), new Date("2024-06-24")] as [Date, Date],
    assignees: [
      { name: "Alice Johnson", image: Assignee3 },
      { name: "Bob Wilson", image: Assignee4 },
      { name: "Jane Smith", image: Assignee2 },
    ],
    priority: "important" as const,
    status: "todo" as const,
  },
  {
    id: "4",
    name: "Medical Appointment",
    dateRange: [new Date("2024-06-16"), new Date("2024-06-18")] as [Date, Date],
    assignees: [{ name: "Dr. Smith", image: Assignee5 }],
    priority: "urgent" as const,
    status: "todo" as const,
  },
  {
    id: "5",
    name: "Testing Data",
    dateRange: [new Date("2024-06-23"), new Date("2024-06-24")] as [Date, Date],
    assignees: [
      { name: "Test User", image: Assignee3 },
      { name: "QA Lead", image: Assignee4 },
    ],
    priority: "urgent" as const,
    status: "in-progress" as const,
  },
  {
    id: "6",
    name: "Patient Request",
    dateRange: [new Date("2024-06-16"), new Date("2024-06-18")] as [Date, Date],
    assignees: [
      { name: "Nurse A", image: Assignee3 },
      { name: "Nurse B", image: Assignee4 },
    ],
    priority: "urgent" as const,
    status: "in-progress" as const,
  },
  {
    id: "7",
    name: "Patient Meetup",
    dateRange: [new Date("2024-06-23"), new Date("2024-06-24")] as [Date, Date],
    assignees: [{ name: "Dr. Brown", image: Assignee5 }],
    priority: "low" as const,
    status: "completed" as const,
  },
];

const layout = () => {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [isManageTaskOpen, setIsManageTaskOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TodoItem | null>(null);
  const [defaultStatus, setDefaultStatus] = useState<Status>("todo");
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as Status) || "todo";

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = loadTodosFromStorage();
    if (savedTodos.length > 0) {
      setTodoItems(savedTodos);
    } else {
      // Use mock data only if no saved todos exist
      setTodoItems(mockTodoItems);
    }
    setIsLoaded(true);
  }, []);

  // Save todos to localStorage whenever todoItems change
  useEffect(() => {
    if (isLoaded) {
      saveTodosToStorage(todoItems);
    }
  }, [todoItems, isLoaded]);

  const handleViewChange = (mode: "table" | "cards") => {
    setViewMode(mode);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleAddTask = (status?: Status) => {
    setEditingTask(null);
    setDefaultStatus(status || "todo");
    setIsManageTaskOpen(true);
  };

  const handleEditTask = (task: TodoItem) => {
    setEditingTask(task);
    setIsManageTaskOpen(true);
  };

  const handleTaskSubmit = (taskData: TaskFormData) => {
    if (editingTask) {
      // Update existing task
      setTodoItems((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                name: taskData.name,
                status: taskData.status,
                dateRange: taskData.dateRange,
                assignees: taskData.assignees,
                priority: taskData.priority as Priority,
                description: taskData.description,
              }
            : task
        )
      );
    } else {
      // Create new task
      const newTask: TodoItem = {
        id: Date.now().toString(),
        name: taskData.name,
        dateRange: taskData.dateRange,
        assignees: taskData.assignees,
        priority: taskData.priority as Priority,
        status: taskData.status,
        description: taskData.description,
      };
      setTodoItems((prev) => [...prev, newTask]);
    }
  };

  const filteredItems = todoItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      bg="primary"
      rounded="10px "
      flex={1}
      h="fit-content"
      display="flex"
      flexDirection="column"
    >
      <Header onAddTaskClick={handleAddTask} />
      <Box padding="20px" flex={1}>
        <TodoControls
          viewMode={viewMode}
          onViewChange={handleViewChange}
          onSearch={handleSearch}
          searchPlaceholder="Search for To-Do"
        />

        <VStack flex={1} mt="10px" align="stretch">
          <TodoContent
            viewMode={viewMode}
            activeTab={activeTab}
            items={filteredItems}
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
          />
        </VStack>
      </Box>

      <ManageTask
        isOpen={isManageTaskOpen}
        onClose={() => setIsManageTaskOpen(false)}
        onSubmit={handleTaskSubmit}
        editTask={editingTask}
        defaultStatus={defaultStatus}
      />
    </Box>
  );
};

export default layout;
