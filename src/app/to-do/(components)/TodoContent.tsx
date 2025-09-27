"use client";

import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import TodoTable from "./TodoTable";
import TodoCards from "./TodoCards";
import TodoTabs from "./TodoTabs";
import { TodoContentProps, TodoItem, Status } from "@/types/todo";

interface TodoContentPropsWithHandlers extends TodoContentProps {
  onAddTask?: (status?: Status) => void;
  onEditTask?: (task: TodoItem) => void;
}

const TodoContent = ({
  viewMode,
  activeTab,
  items,
  onAddTask,
  onEditTask,
}: TodoContentPropsWithHandlers) => {
  const filteredItems = items.filter((item) => {
    switch (activeTab) {
      case "todo":
        return item.status === "todo";
      case "in-progress":
        return item.status === "in-progress";
      case "completed":
        return item.status === "completed";
      default:
        return item.status === "todo";
    }
  });

  const counts = {
    todo: items.filter((item) => item.status === "todo").length,
    inProgress: items.filter((item) => item.status === "in-progress").length,
    completed: items.filter((item) => item.status === "completed").length,
  };

  return (
    <Box flex={1} overflow="auto">
      {viewMode === "table" ? (
        <VStack flex={1} gap="10px" align="stretch">
          <TodoTabs counts={counts} />
          <TodoTable
            items={filteredItems}
            activeTab={activeTab}
            onEditTask={onEditTask}
          />
        </VStack>
      ) : (
        <TodoCards
          items={items}
          activeTab={activeTab}
          onAddTask={onAddTask}
          onEditTask={onEditTask}
        />
      )}
    </Box>
  );
};

export default TodoContent;
