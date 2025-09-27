"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TaskDateFieldProps {
  value: [Date | null, Date | null];
  onChange: (value: [Date | null, Date | null]) => void;
  hasError: boolean;
}

const TaskDateField = ({ value, onChange, hasError }: TaskDateFieldProps) => {
  return (
    <Box maxW="250px">
      <DatePicker
        selectsRange={true}
        startDate={value[0]}
        endDate={value[1]}
        onChange={(update) => onChange(update)}
        isClearable={true}
        placeholderText="Select date range"
        dateFormat="dd/MM/yyyy"
        className={`date-picker-input ${hasError ? "error" : ""}`}
        wrapperClassName="date-picker-wrapper w-full"
      />
    </Box>
  );
};

export default TaskDateField;
