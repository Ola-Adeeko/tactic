"use client";

import React from "react";
import { Box, Input } from "@chakra-ui/react";

interface TaskNameFieldProps {
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
}

const TaskNameField = ({ value, onChange, hasError }: TaskNameFieldProps) => {
  return (
    <Box minW="400px">
      <Input
        placeholder="Task Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fontSize="30px"
        fontWeight="semibold"
        color="primaryText"
        border={hasError ? "1px solid" : "none"}
        borderColor={hasError ? "red.500" : "transparent"}
        p="0"
        _focus={{ boxShadow: "none" }}
        _placeholder={{ color: "#BAC1CC" }}
      />
    </Box>
  );
};

export default TaskNameField;
