"use client";

import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputElement,
  Textarea,
  Icon,
  Circle,
  Square,
  Select,
  Portal,
  Dialog,
  createListCollection,
  Menu,
} from "@chakra-ui/react";
import {
  Calendar,
  ProfileCircle,
  Flag,
  DocumentText,
  SearchNormal1,
  Status as StatusIcon,
  Stickynote,
  TaskSquare,
  TickCircle,
  Slash,
} from "iconsax-reactjs";
import {
  Status,
  Priority,
  Assignee,
  TaskFormData,
  AddTaskModalProps,
} from "@/types/todo";
import { MdOutlineClose } from "react-icons/md";
import { config } from "node:process";

const AddTaskModal = ({ isOpen, onClose, onSubmit }: AddTaskModalProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    name: "",
    status: "todo",
    dateRange: "",
    assignees: [],
    priority: "medium",
    description: "",
  });

  const [showAssigneeSearch, setShowAssigneeSearch] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [assigneeSearchQuery, setAssigneeSearchQuery] = useState("");

  // Mock assignees data
  const mockAssignees: Assignee[] = [
    { name: "Maria Vetrovs", image: "/api/placeholder/32/32" },
    { name: "Adison Mango", image: "/api/placeholder/32/32" },
    { name: "Gustavo Culhane", image: "/api/placeholder/32/32" },
    { name: "Adison Bator", image: "/api/placeholder/32/32" },
    { name: "Zaire George", image: "/api/placeholder/32/32" },
  ];

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

  const priorityOptions = [
    { value: "urgent", label: "Urgent", color: "priorityUrgent" },
    { value: "important", label: "Important", color: "priorityImportant" },
    { value: "medium", label: "Medium", color: "priorityMedium" },
    { value: "low", label: "Low", color: "priorityLow" },
  ];

  const quickDateOptions = [
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
    { label: "This Weekend", value: "weekend" },
    { label: "Next Week", value: "next-week" },
    { label: "Next Weekend", value: "next-weekend" },
    { label: "2 Week", value: "2-week" },
    { label: "4 Week", value: "4-week" },
  ];

  const handleInputChange = (field: keyof TaskFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAssigneeToggle = (assignee: Assignee) => {
    setFormData((prev) => {
      const isSelected = prev.assignees.some((a) => a.name === assignee.name);
      if (isSelected) {
        return {
          ...prev,
          assignees: prev.assignees.filter((a) => a.name !== assignee.name),
        };
      } else {
        return {
          ...prev,
          assignees: [...prev.assignees, assignee],
        };
      }
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      name: "",
      status: "todo",
      dateRange: "",
      assignees: [],
      priority: "medium",
      description: "",
    });
    onClose();
  };

  const filteredAssignees = mockAssignees.filter((assignee) =>
    assignee.name.toLowerCase().includes(assigneeSearchQuery.toLowerCase()),
  );

  const getCurrentStatusOption = () => {
    return (
      statusOptions.find((option) => option.value === formData.status) ||
      statusOptions[0]
    );
  };

  const getCurrentPriorityOption = () => {
    return (
      priorityOptions.find((option) => option.value === formData.priority) || {
        color: "",
        label: "",
      }
    );
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            rounded="20px"
            bg="white"
            maxW="800px"
            mx="auto"
            my="auto"
            shadow="none"
            position="relative"
          >
            <IconButton
              position="absolute"
              top="10px"
              right="10px"
              aria-label="Close modal"
              variant="ghost"
              bg="secondary"
              size="lg"
              h="45px"
              w="45px"
              rounded="full"
              p="0"
              onClick={onClose}
              color="primaryText"
            >
              <MdOutlineClose size="24" />
            </IconButton>

            <Dialog.Body p="40px">
              <VStack gap="20px" align="start">
                <Box minW="400px">
                  <Input
                    placeholder="Task Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    fontSize="30px"
                    fontWeight="semibold"
                    color="primaryText"
                    border="none"
                    p="0"
                    _focus={{ boxShadow: "none" }}
                    _placeholder={{ color: "#BAC1CC" }}
                  />
                </Box>

                <HStack w="full" gap="60px" align="start">
                  <VStack align="stretch" gap="24px" flex={1}>

                    <Box
                      display="grid"
                      gridTemplateColumns="150px 200px"
                      gap="16px"
                      w="full"
                    >
                      <HStack gap="16px" align="center">
                        <Icon color="cardIcon">
                          <StatusIcon size="24px" />
                        </Icon>
                        <Text
                          color="primaryText"
                          fontSize="16px"
                          fontWeight="medium"
                        >
                          Status
                        </Text>
                      </HStack>
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
                                {React.createElement(
                                  getCurrentStatusOption().icon,
                                  { size: "20", variant: "Bold" },
                                )}
                                <Text
                                  fontSize="14px"
                                  fontWeight="semibold"
                                  color="white"
                                >
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
                                  onClick={() =>
                                    handleInputChange("status", option.value)
                                  }
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

                      <HStack gap="16px" align="center">
                        <Icon color="cardIcon">
                          <Calendar size="24" />
                        </Icon>
                        <Text
                          color="primaryText"
                          fontSize="16px"
                          fontWeight="medium"
                        >
                          Dates
                        </Text>
                      </HStack>
                      <Input
                        placeholder="00/00/0000"
                        value={formData.dateRange}
                        onChange={(e) =>
                          handleInputChange("dateRange", e.target.value)
                        }
                        maxW="200px"
                        h="40px"
                        border="none"
                        rounded="8px"
                        fontSize="14px"
                        color="primaryText"
                        bg="transparent"
                        _focus={{ boxShadow: "none" }}
                        _placeholder={{ color: "#BAC1CC" }}
                      />

                      <HStack gap="16px" align="center">
                        <Icon color="cardIcon">
                          <ProfileCircle size="24" />
                        </Icon>
                        <Text
                          color="primaryText"
                          fontSize="16px"
                          fontWeight="medium"
                        >
                          Assignees
                        </Text>
                      </HStack>
                      <Box position="relative" maxW="200px">
                        <Button
                          w="full"
                          h="40px"
                          bg="transparent"
                          border="none"
                          rounded="8px"
                          justifyContent="flex-start"
                          fontSize="14px"
                          color={
                            formData.assignees.length > 0
                              ? "primaryText"
                              : "#BAC1CC"
                          }
                          onClick={() =>
                            setShowAssigneeSearch(!showAssigneeSearch)
                          }
                          _hover={{ bg: "transparent" }}
                        >
                          {formData.assignees.length > 0
                            ? `${formData.assignees.length} selected`
                            : "Select Assignee"}
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
                            shadow="lg"
                            zIndex={10}
                          >
                            <Box
                              p="12px"
                              borderBottom="1px solid"
                              borderColor="primaryBorder"
                            >
                              <InputGroup>
                                <>
                                  <InputElement>
                                    <Icon>
                                      <SearchNormal1 size="16" />
                                    </Icon>
                                  </InputElement>
                                  <Input
                                    placeholder="Search user"
                                    value={assigneeSearchQuery}
                                    onChange={(e) =>
                                      setAssigneeSearchQuery(e.target.value)
                                    }
                                    size="sm"
                                  />
                                </>
                              </InputGroup>
                            </Box>
                            <VStack
                              align="stretch"
                              p="8px"
                              maxH="200px"
                              overflow="auto"
                            >
                              {filteredAssignees.map((assignee) => (
                                <HStack
                                  key={assignee.name}
                                  p="8px"
                                  rounded="6px"
                                  cursor="pointer"
                                  _hover={{ bg: "gray.50" }}
                                  onClick={() => handleAssigneeToggle(assignee)}
                                >
                                  <Circle size="24px" bg="gray.200" />
                                  <Text fontSize="14px" color="primaryText">
                                    {assignee.name}
                                  </Text>
                                </HStack>
                              ))}
                            </VStack>
                          </Box>
                        )}
                      </Box>

                      <HStack gap="16px" align="center">
                        <Icon
                          color={
                            getCurrentPriorityOption()?.color || "cardIcon"
                          }
                        >
                          <Flag size="24" variant="Bold" />
                        </Icon>
                        <Text
                          color="primaryText"
                          fontSize="16px"
                          fontWeight="medium"
                        >
                          Priority
                        </Text>
                      </HStack>

                      <Box position="relative" maxW="200px">
                        <Menu.Root positioning={{ placement: "bottom-start" }}>
                          <Menu.Trigger cursor="pointer" asChild>
                            <Button
                              w="full"
                              h="40px"
                              bg="transparent"
                              border="none"
                              rounded="8px"
                              justifyContent="flex-start"
                              fontSize="14px"
                              color={
                                getCurrentPriorityOption()
                                  ? "primaryText"
                                  : "#BAC1CC"
                              }
                              _hover={{ bg: "transparent" }}
                            >
                              <Text
                                color={
                                  getCurrentPriorityOption()?.label
                                    ? "primaryText"
                                    : "#BAC1CC"
                                }
                              >
                                {getCurrentPriorityOption()?.label ||
                                  "Select Priority"}
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
                              w="200px"
                              p="20px"
                            >
                              {priorityOptions.map((option) => (
                                <Menu.Item
                                  key={option.value}
                                  value={option.value}
                                  _hover={{ bg: "secondary" }}
                                  rounded="6px"
                                  bg="primary"
                                  onClick={() =>
                                    handleInputChange("priority", option.value)
                                  }
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
                                onClick={() =>
                                  handleInputChange("priority", "")
                                }
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
                                  <Text
                                    fontSize="14px"
                                    fontWeight="regular"
                                    color="gray.500"
                                  >
                                    Clear
                                  </Text>
                                </HStack>
                              </Menu.Item>
                            </Menu.Content>
                          </Menu.Positioner>
                        </Menu.Root>
                      </Box>
                    </Box>

                    <HStack gap="16px" align="center">
                      <Icon color="cardIcon">
                        <Stickynote size="24" />
                      </Icon>
                      <Text
                        color="primaryText"
                        fontSize="16px"
                        fontWeight="medium"
                      >
                        Description
                      </Text>
                    </HStack>
                    <Textarea
                      placeholder="Write something or type"
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      minH="120px"
                      w="full"
                      border="1px solid"
                      borderColor="primaryBorder"
                      rounded="8px"
                      fontSize="14px"
                      resize="vertical"
                      bg="secondary"
                      color="primaryText"
                    />
                  </VStack>

                  {showDatePicker && (
                    <Box w="300px" bg="gray.50" p="16px" rounded="8px">
                      <Text fontSize="16px" fontWeight="medium" mb="12px">
                        Select Date
                      </Text>
                      <VStack align="stretch" gap="8px">
                        {quickDateOptions.map((option) => (
                          <Button
                            key={option.value}
                            size="sm"
                            variant="ghost"
                            justifyContent="flex-start"
                            fontSize="14px"
                            onClick={() => {
                              handleInputChange("dateRange", option.label);
                              setShowDatePicker(false);
                            }}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  )}
                </HStack>

                <HStack w="full" justify="flex-end" gap="12px" pt="20px">
                  <Button
                    bg="aquaPrimaryColor"
                    color="white"
                    onClick={handleSubmit}
                    px="24px"
                    py="12px"
                    fontSize="14px"
                    fontWeight="medium"
                    rounded="10px"
                    w="250px"
                    h="46px"
                  >
                    Create Task
                  </Button>
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddTaskModal;
