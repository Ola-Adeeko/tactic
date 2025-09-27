"use client";

import React from "react";
import { HStack, Text, Icon } from "@chakra-ui/react";
import { Flag } from "iconsax-reactjs";
import { PriorityTagProps } from "@/types/todo";

const PriorityTag = ({ priority }: PriorityTagProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "priorityUrgent";
      case "important":
        return "priorityImportant";
      case "medium":
        return "priorityMedium";
      case "low":
        return "priorityLow";
      default:
        return "priorityLow";
    }
  };

  return (
    <HStack gap="14px" align="center">
      <Icon color={getPriorityColor(priority)}>
        <Flag size="16" variant="Bold" />
      </Icon>
      <Text
        color="primaryText"
        fontSize="14px"
        fontWeight="regular"
        textTransform="capitalize"
      >
        {priority}
      </Text>
    </HStack>
  );
};

export default PriorityTag;
