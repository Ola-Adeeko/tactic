"use client";

import React from "react";
import { Box, VStack, HStack, Text, Icon, Button } from "@chakra-ui/react";
import { Calendar, ProfileCircle, Add } from "iconsax-reactjs";
import AssigneeAvatars from "./AssigneeAvatars";
import PriorityTag from "./PriorityTag";
import { TodoCardProps } from "@/types/todo";
import { formatDateRange } from "@/utils/dateUtils";

const TodoCard = ({
  id,
  name,
  dateRange,
  assignees,
  priority,
  isAddButton = false,
  onAddClick,
  onClick,
}: TodoCardProps) => {
  if (isAddButton) {
    return (
      <Button
        w="full"
        h="40px"
        bg="primary"
        color="primaryText"
        rounded="6px"
        fontWeight="medium"
        fontSize="14px"
        cursor="pointer"
        onClick={onAddClick}
        justifyContent="flex-start"
      >
        <Add size="16" /> Add Task
      </Button>
    );
  }

  return (
    <Box
      bg="white"
      p="14px"
      borderRadius="10px"
      position="relative"
      cursor="pointer"
      onClick={onClick}
      _hover={{ bg: "gray.50" }}
    >
      <VStack align="stretch" gap="10px">
        <Text
          fontWeight="semibold"
          color="primaryText"
          fontSize="14px"
          flex={1}
        >
          {name}
        </Text>

        <HStack gap="14px" align="center">
          <Icon color="cardIcon">
            <Calendar size="16" />
          </Icon>
          <Text color="primaryText" fontSize="14px" fontWeight="regular">
            {formatDateRange(dateRange)}
          </Text>
        </HStack>

        <HStack gap="14px" align="center">
          <Icon color="cardIcon">
            <ProfileCircle size="16" />
          </Icon>
          <AssigneeAvatars assignees={assignees} />
        </HStack>
        <PriorityTag priority={priority} />
      </VStack>
    </Box>
  );
};

export default TodoCard;
