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
      padding={{ base: "8px", lg: "10px" }}
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 3, lg: 0 }}
      alignItems={{ base: "stretch", lg: "center" }}
    >
      <TodoSearchBar placeholder={searchPlaceholder} onSearch={onSearch} />
      <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
    </HStack>
  );
};

export default TodoControls;
