"use client";

import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Icon,
  Button,
  InputGroup,
  Input,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { SearchNormal1, TickCircle } from "iconsax-reactjs";
import { Assignee } from "@/types/todo";
import AssigneeAvatars from "./AssigneeAvatars";
import Image from "next/image";

interface TaskAssigneeFieldProps {
  value: Assignee[];
  onChange: (value: Assignee[]) => void;
  hasError: boolean;
}

const mockAssignees: Assignee[] = [
  { name: "Maria Vetrovs", image: "/user1.png" },
  { name: "Adison Mango", image: "/user2.png" },
  { name: "Gustavo Culhane", image: "/user3.png" },
  { name: "Adison Bator", image: "/user4.png" },
  { name: "Zaire George", image: "/user5.png" },
];

const TaskAssigneeField = ({
  value,
  onChange,
  hasError,
}: TaskAssigneeFieldProps) => {
  const [showAssigneeSearch, setShowAssigneeSearch] = useState(false);
  const [assigneeSearchQuery, setAssigneeSearchQuery] = useState("");

  const handleAssigneeToggle = (assignee: Assignee) => {
    const isSelected = value.some((a) => a.name === assignee.name);
    if (isSelected) {
      onChange(value.filter((a) => a.name !== assignee.name));
    } else {
      onChange([...value, assignee]);
    }
  };

  const filteredAssignees = mockAssignees.filter((assignee) =>
    assignee.name.toLowerCase().includes(assigneeSearchQuery.toLowerCase())
  );

  return (
    <Box position="relative" maxW="250px">
      <Button
        w="full"
        h="40px"
        bg="transparent"
        border={hasError ? "1px solid" : "none"}
        borderColor={hasError ? "red.500" : "transparent"}
        rounded="8px"
        justifyContent="flex-start"
        fontSize="14px"
        color={value.length > 0 ? "primaryText" : "#BAC1CC"}
        onClick={() => setShowAssigneeSearch(!showAssigneeSearch)}
        _hover={{ bg: "transparent" }}
      >
        {value.length > 0 ? (
          <HStack gap="8px" align="center">
            <AssigneeAvatars assignees={value} maxVisible={3} />
            <Text fontSize="12px" color="primaryText">
              {value.length} selected
            </Text>
          </HStack>
        ) : (
          "Select Assignee"
        )}
      </Button>

      {showAssigneeSearch && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          right="0"
          bg="white"
          border="1px solid"
          borderColor="primaryBorder"
          rounded="8px"
          mt="4px"
          zIndex={10}
          w="300px"
          shadow="none"
        >
          <Box p="12px" borderBottom="1px solid" borderColor="primaryBorder">
            <InputGroup
              startElement={<SearchNormal1 size="16" />}
              border="none"
              bg="secondary"
              rounded="6px"
            >
              <Input
                placeholder="Search user"
                value={assigneeSearchQuery}
                onChange={(e) => setAssigneeSearchQuery(e.target.value)}
                size="sm"
                border="none"
                color="primaryText"
              />
            </InputGroup>
          </Box>
          <VStack align="stretch" p="8px" maxH="200px" overflow="auto">
            {filteredAssignees.map((assignee) => {
              const isSelected = value.some((a) => a.name === assignee.name);
              return (
                <HStack
                  key={assignee.name}
                  p="8px"
                  rounded="6px"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  onClick={() => handleAssigneeToggle(assignee)}
                  bg={isSelected ? "completedBackground" : "transparent"}
                  border={isSelected ? "1px solid" : "none"}
                  borderColor={isSelected ? "primaryBorder" : "transparent"}
                >
                  <Avatar.Root
                    variant="subtle"
                    boxSize="24px"
                    bg="switchTrackDisabled"
                    border="1px solid"
                    borderColor="gray.200"
                    color="primaryText"
                    overflow="hidden"
                  >
                    {assignee.image ? (
                      <Image
                        src={assignee.image}
                        alt={assignee.name}
                        width={24}
                        height={24}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Avatar.Fallback
                        name={assignee.name}
                        fontSize="10px"
                        fontWeight="medium"
                      />
                    )}
                  </Avatar.Root>
                  <Text fontSize="14px" color="primaryText" flex={1}>
                    {assignee.name}
                  </Text>
                  {isSelected && (
                    <Icon color="completedIcon">
                      <TickCircle size="16" variant="Bold" />
                    </Icon>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default TaskAssigneeField;
