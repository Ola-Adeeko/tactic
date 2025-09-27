"use client";

import React, { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Status, TodoItem, TaskFormData } from "@/types/todo";
import Header from "./(components)/Header";
import TodoControls from "./(components)/TodoControls";
import TodoContent from "./(components)/TodoContent";
import AddTaskModal from "./(components)/AddTaskModal";
import Assignee1 from "@/assets/images/user1.png";
import Assignee2 from "@/assets/images/user2.png";
import Assignee3 from "@/assets/images/user3.png";
import Assignee4 from "@/assets/images/user4.png";
import Assignee5 from "@/assets/images/user5.png";

const mockTodoItems = [
  {
    id: "1",
    name: "MKV Intranet V2",
    dateRange: "04/06/2024 - 16/06/2024",
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
    dateRange: "23/06/2024 - 24/06/2024",
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
    dateRange: "23/06/2024 - 24/06/2024",
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
    dateRange: "16/06/2024 - 18/06/2024",
    assignees: [{ name: "Dr. Smith", image: Assignee5 }],
    priority: "urgent" as const,
    status: "todo" as const,
  },
  {
    id: "5",
    name: "Testing Data",
    dateRange: "23/06/2024 - 24/06/2024",
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
    dateRange: "16/06/2024 - 18/06/2024",
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
    dateRange: "23/06/2024 - 24/06/2024",
    assignees: [{ name: "Dr. Brown", image: Assignee5 }],
    priority: "low" as const,
    status: "completed" as const,
  },
];

const layout = () => {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>(mockTodoItems);
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as Status) || "todo";

  const handleViewChange = (mode: "table" | "cards") => {
    setViewMode(mode);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleAddTask = () => {
    setIsAddTaskModalOpen(true);
  };

  const handleTaskSubmit = (taskData: TaskFormData) => {
    const newTask: TodoItem = {
      id: (todoItems.length + 1).toString(),
      name: taskData.name,
      dateRange: taskData.dateRange,
      assignees: taskData.assignees,
      priority: taskData.priority,
      status: taskData.status,
    };
    setTodoItems((prev) => [...prev, newTask]);
  };

  const filteredItems = todoItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
          />
        </VStack>
      </Box>

      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onSubmit={handleTaskSubmit}
      />
    </Box>
  );
};

export default layout;
