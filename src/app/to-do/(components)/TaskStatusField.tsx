"use client";

import React from "react";
import { Box, HStack, Text, Menu } from "@chakra-ui/react";
import { Status as StatusIcon, TaskSquare, TickCircle } from "iconsax-reactjs";
import { Status } from "@/types/todo";

interface TaskStatusFieldProps {
  value: Status;
  onChange: (value: Status) => void;
}

const statusOptions = [
  { value: "todo", label: "To Do", color: "todoIcon", icon: TaskSquare },
  {
    value: "in-progress",
    label: "In Progress",
    color: "inProgressIcon",
    icon: StatusIcon,
  },
  {
    value: "completed",
    label: "Complete",
    color: "completedIcon",
    icon: TickCircle,
  },
];

const TaskStatusField = ({ value, onChange }: TaskStatusFieldProps) => {
  const getCurrentStatusOption = () => {
    return (
      statusOptions.find((option) => option.value === value) || statusOptions[0]
    );
  };

  return (
    <Box>
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger cursor="pointer" asChild>
          <Box
            rounded="6px"
            padding="5px 8px 5px 5px"
            h="30px"
            cursor="pointer"
            bg={getCurrentStatusOption().color}
            w="fit-content"
          >
            <HStack
              gap="10px"
              as="button"
              color="white"
              fontWeight="semibold"
              fontSize="16px"
              transition="all 0.2s ease-in-out"
            >
              {React.createElement(getCurrentStatusOption().icon, {
                size: "20",
                variant: "Bold",
              })}
              <Text fontSize="14px" fontWeight="semibold" color="white">
                {getCurrentStatusOption().label}
              </Text>
            </HStack>
          </Box>
        </Menu.Trigger>
        <Menu.Positioner bg="secondary" rounded="10px">
          <Menu.Content
            bg="primary"
            shadow="none"
            border="1px solid"
            borderColor="primaryBorder"
            rounded="10px"
            w="190px"
            p="20px"
          >
            {statusOptions.map((option) => (
              <Menu.Item
                key={option.value}
                value={option.value}
                _hover={{ bg: "secondary" }}
                onClick={() => onChange(option.value as Status)}
              >
                <HStack
                  gap="10px"
                  as="button"
                  color={option.color}
                  fontWeight="regular"
                  fontSize="16px"
                  transition="all 0.2s ease-in-out"
                >
                  {React.createElement(option.icon, {
                    size: "20",
                    variant: "Bold",
                  })}
                  <Text
                    fontSize="12px"
                    fontWeight="regular"
                    color="primaryText"
                  >
                    {option.label}
                  </Text>
                </HStack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default TaskStatusField;
