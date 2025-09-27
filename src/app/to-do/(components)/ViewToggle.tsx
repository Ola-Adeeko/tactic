"use client";

import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { RowHorizontal, RowVertical } from "iconsax-reactjs";
import { ViewToggleProps } from "@/types/todo";

const ViewToggle = ({ viewMode, onViewChange }: ViewToggleProps) => {
  return (
    <HStack h="40px" bg="primary" gap="6px" rounded="6px" padding="6px">
      <Box
        as="button"
        w="32px"
        h="28px"
        bg={viewMode === "cards" ? "aquaPrimaryColor" : "secondary"}
        rounded="4px"
        color={viewMode === "cards" ? "white" : "sidebarIcon"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => onViewChange("cards")}
        _hover={{
          bg: viewMode === "cards" ? "aquaPrimaryColor" : "gray.100",
        }}
      >
        <RowHorizontal size="20" />
      </Box>
      <Box
        as="button"
        w="32px"
        h="28px"
        bg={viewMode === "table" ? "aquaPrimaryColor" : "secondary"}
        rounded="4px"
        color={viewMode === "table" ? "white" : "sidebarIcon"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => onViewChange("table")}
        _hover={{
          bg: viewMode === "table" ? "aquaPrimaryColor" : "gray.100",
        }}
      >
        <RowVertical size="20" />
      </Box>
    </HStack>
  );
};

export default ViewToggle;
