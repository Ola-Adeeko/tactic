"use client";

import React from "react";
import { Box, HStack, Text, Icon, Menu, Button } from "@chakra-ui/react";
import { Flag, Slash } from "iconsax-reactjs";
import { Priority } from "@/types/todo";

interface TaskPriorityFieldProps {
  value: Priority | null;
  onChange: (value: Priority | null) => void;
  hasError: boolean;
}

const priorityOptions = [
  { value: "urgent", label: "Urgent", color: "priorityUrgent" },
  { value: "important", label: "Important", color: "priorityImportant" },
  { value: "medium", label: "Medium", color: "priorityMedium" },
  { value: "low", label: "Low", color: "priorityLow" },
];

const TaskPriorityField = ({
  value,
  onChange,
  hasError,
}: TaskPriorityFieldProps) => {
  const getCurrentPriorityOption = () => {
    return (
      priorityOptions.find((option) => option.value === value) || {
        color: "",
        label: "",
      }
    );
  };

  return (
    <Box position="relative" maxW="250px">
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger cursor="pointer" asChild>
          <Button
            w="full"
            h="40px"
            bg="transparent"
            border={hasError ? "1px solid" : "none"}
            borderColor={hasError ? "red.500" : "transparent"}
            rounded="8px"
            justifyContent="flex-start"
            fontSize="14px"
            color={getCurrentPriorityOption() ? "primaryText" : "#BAC1CC"}
            _hover={{ bg: "transparent" }}
          >
            <Text
              color={
                getCurrentPriorityOption()?.label ? "primaryText" : "#BAC1CC"
              }
            >
              {getCurrentPriorityOption()?.label || "Select Priority"}
            </Text>
          </Button>
        </Menu.Trigger>
        <Menu.Positioner bg="secondary" rounded="10px">
          <Menu.Content
            bg="primary"
            shadow="none"
            border="1px solid"
            borderColor="primaryBorder"
            rounded="10px"
            w="250px"
            p="20px"
          >
            {priorityOptions.map((option) => (
              <Menu.Item
                key={option.value}
                value={option.value}
                _hover={{ bg: "secondary" }}
                rounded="6px"
                bg="primary"
                onClick={() => onChange(option.value as Priority)}
              >
                <HStack
                  gap="10px"
                  as="button"
                  fontWeight="regular"
                  fontSize="16px"
                  transition="all 0.2s ease-in-out"
                >
                  <Icon color={option.color}>
                    <Flag size="16" variant="Bold" />
                  </Icon>
                  <Text
                    fontSize="14px"
                    fontWeight="regular"
                    color="primaryText"
                  >
                    {option.label}
                  </Text>
                </HStack>
              </Menu.Item>
            ))}
            <Menu.Item
              value="clear"
              rounded="6px"
              _hover={{ bg: "secondary" }}
              onClick={() => onChange(null)}
            >
              <HStack
                gap="10px"
                as="button"
                fontWeight="regular"
                fontSize="16px"
                transition="all 0.2s ease-in-out"
              >
                <Icon color="gray.400">
                  <Slash size="16" />
                </Icon>
                <Text fontSize="14px" fontWeight="regular" color="gray.500">
                  Clear
                </Text>
              </HStack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default TaskPriorityField;
