"use client";

import React from "react";
import { HStack } from "@chakra-ui/react";
import TodoSearchBar from "./TodoSearchBar";
import ViewToggle from "./ViewToggle";
import { TodoControlsProps } from "@/types/todo";

const TodoControls = ({
  viewMode,
  onViewChange,
  onSearch,
  searchPlaceholder,
}: TodoControlsProps) => {
  return (
    <HStack
      bg="tealSwitchSection"
      justifyContent="space-between"
      rounded="6px"
      padding="10px"
    >
      <TodoSearchBar placeholder={searchPlaceholder} onSearch={onSearch} />
      <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
    </HStack>
  );
};

export default TodoControls;
