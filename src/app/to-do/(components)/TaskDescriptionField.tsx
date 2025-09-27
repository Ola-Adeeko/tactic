"use client";

import React from "react";
import { HStack, Text, Icon, Textarea } from "@chakra-ui/react";
import { Stickynote } from "iconsax-reactjs";

interface TaskDescriptionFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const TaskDescriptionField = ({
  value,
  onChange,
}: TaskDescriptionFieldProps) => {
  return (
    <>
      <HStack gap="16px" align="center">
        <Icon color="cardIcon">
          <Stickynote size="24" />
        </Icon>
        <Text color="primaryText" fontSize="16px" fontWeight="medium">
          Description
        </Text>
      </HStack>
      <Textarea
        placeholder="Write something or type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
    </>
  );
};

export default TaskDescriptionField;
