"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Portal,
  Dialog,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import { TaskFormData, ManageTaskProps } from "@/types/todo";
import TaskNameField from "./TaskNameField";
import TaskStatusField from "./TaskStatusField";
import TaskDateField from "./TaskDateField";
import TaskAssigneeField from "./TaskAssigneeField";
import TaskPriorityField from "./TaskPriorityField";
import TaskDescriptionField from "./TaskDescriptionField";
import {
  Calendar,
  Flag,
  ProfileCircle,
  Status as StatusIcon,
} from "iconsax-reactjs";

const ManageTask = ({
  isOpen,
  onClose,
  onSubmit,
  editTask = null,
  defaultStatus = "todo",
}: ManageTaskProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    name: "",
    status: "todo",
    dateRange: [null, null],
    assignees: [],
    priority: null,
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isOpen) {
      if (editTask) {
        setFormData({
          name: editTask.name,
          status: editTask.status,
          dateRange: editTask.dateRange,
          assignees: editTask.assignees,
          priority: editTask.priority,
          description: editTask.description || "",
        });
      } else {
        setFormData({
          name: "",
          status: defaultStatus,
          dateRange: [null, null],
          assignees: [],
          priority: null,
          description: "",
        });
      }
      setErrors({});
    }
  }, [isOpen, editTask, defaultStatus]);

  const handleInputChange = (field: keyof TaskFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) {
      newErrors.name = true;
    }

    if (!formData.dateRange[0] || !formData.dateRange[1]) {
      newErrors.dateRange = true;
    }

    if (formData.assignees.length === 0) {
      newErrors.assignees = true;
    }

    if (!formData.priority) {
      newErrors.priority = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      status: "todo",
      dateRange: [null, null],
      assignees: [],
      priority: null,
      description: "",
    });
    setErrors({});
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && handleClose()}>
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
              onClick={handleClose}
              color="primaryText"
            >
              <MdOutlineClose size="24" />
            </IconButton>

            <Dialog.Body p="40px">
              <VStack gap="20px" align="start">
                <TaskNameField
                  value={formData.name}
                  onChange={(value) => handleInputChange("name", value)}
                  hasError={errors.name || false}
                />

                <HStack w="full" gap="60px" align="start">
                  <VStack align="stretch" gap="24px" flex={1}>
                    <Box
                      display="grid"
                      gridTemplateColumns="150px 250px"
                      gap="16px"
                      w="full"
                    >
                      <HStack gap="16px" align="center">
                        <Icon color="cardIcon">
                          <StatusIcon size="24" />
                        </Icon>
                        <Text
                          color="primaryText"
                          fontSize="16px"
                          fontWeight="medium"
                        >
                          Status
                        </Text>
                      </HStack>
                      <TaskStatusField
                        value={formData.status}
                        onChange={(value) => handleInputChange("status", value)}
                      />

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
                      <TaskDateField
                        value={formData.dateRange}
                        onChange={(value) =>
                          handleInputChange("dateRange", value)
                        }
                        hasError={errors.dateRange || false}
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
                      <TaskAssigneeField
                        value={formData.assignees}
                        onChange={(value) =>
                          handleInputChange("assignees", value)
                        }
                        hasError={errors.assignees || false}
                      />

                      <HStack gap="16px" align="center">
                        <Icon
                          color={
                            formData.priority
                              ? `priority${formData.priority.charAt(0).toUpperCase() + formData.priority.slice(1)}`
                              : "cardIcon"
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
                      <TaskPriorityField
                        value={formData.priority}
                        onChange={(value) =>
                          handleInputChange("priority", value)
                        }
                        hasError={errors.priority || false}
                      />
                    </Box>

                    <TaskDescriptionField
                      value={formData.description}
                      onChange={(value) =>
                        handleInputChange("description", value)
                      }
                    />
                  </VStack>
                </HStack>

                <HStack w="full" justify="flex-end" gap="12px" pt="20px">
                  <Button
                    bg="aquaPrimaryColor"
                    color="white"
                    onClick={handleSubmit}
                    px="24px"
                    py="12px"
                    fontSize="14px"
                    fontWeight="semibold"
                    rounded="10px"
                    w="250px"
                    h="46px"
                  >
                    {editTask ? "Update Task" : "Create Task"}
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

export default ManageTask;
