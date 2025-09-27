"use client";

import React from "react";
import { HStack, Square, Button, Switch, Text } from "@chakra-ui/react";
import { AddCircle, Calendar, ExportCurve, Sort } from "iconsax-reactjs";

interface HeaderActionsProps {
  onSortClick?: () => void;
  onCalendarClick?: () => void;
  onExportClick?: () => void;
  onAddTaskClick?: () => void;
  onSwitchToggle?: (checked: boolean) => void;
}

const HeaderActions = ({
  onSortClick,
  onCalendarClick,
  onExportClick,
  onAddTaskClick,
  onSwitchToggle,
}: HeaderActionsProps) => {
  return (
    <HStack gap={{ base: "8px", lg: "14px" }}>
      <HStack gap={{ base: "4px", lg: "8px" }} wrap="wrap" justify="end">
        <Square
          size={{ base: "40px", lg: "50px" }}
          bg="secondary"
          color="primaryText"
          border="1px solid"
          borderColor="tertiaryBorder"
          rounded="10px"
        >
          <Switch.Root colorPalette="gray">
            <Switch.HiddenInput
              onChange={(e) => onSwitchToggle?.(e.target.checked)}
            />
            <Switch.Control
              bg="switchTrackDisabled"
              w={{ base: "24px", lg: "32px" }}
            >
              <Switch.Thumb bg="primary" color="white" shadow="none" />
            </Switch.Control>
          </Switch.Root>
        </Square>

        <Square
          as="button"
          size={{ base: "40px", lg: "50px" }}
          bg="secondary"
          color="primaryText"
          border="1px solid"
          borderColor="tertiaryBorder"
          rounded="10px"
          cursor="pointer"
          onClick={onSortClick}
        >
          <Sort size="20" />
        </Square>

        <Square
          as="button"
          size={{ base: "40px", lg: "50px" }}
          bg="secondary"
          color="primaryText"
          border="1px solid"
          borderColor="tertiaryBorder"
          rounded="10px"
          cursor="pointer"
          onClick={onCalendarClick}
        >
          <Calendar size="20" />
        </Square>
      </HStack>
      <HStack
        w="auto"
        gap={{ base: "4px", lg: "8px" }}
        wrap="wrap"
        justify="end"
      >
        <Button
          bg="indigoPrimaryColor"
          h={{ base: "40px", lg: "50px" }}
          color="white"
          rounded="10px"
          fontWeight="semibold"
          fontSize={{ base: "14px", lg: "16px" }}
          px={{ base: "12px", lg: "16px" }}
          onClick={onExportClick}
        >
          <ExportCurve size="20" />
          <Text display={{ base: "none", sm: "inline" }} ml="4px">
            Export xls
          </Text>
        </Button>

        <Button
          bg="aquaPrimaryColor"
          h={{ base: "40px", lg: "50px" }}
          color="white"
          rounded="10px"
          fontWeight="semibold"
          fontSize={{ base: "14px", lg: "16px" }}
          px={{ base: "12px", lg: "16px" }}
          onClick={onAddTaskClick}
        >
          <AddCircle size="20" />
          <Text display={{ base: "none", sm: "inline" }} ml="4px">
            Add Task
          </Text>
        </Button>
      </HStack>{" "}
    </HStack>
  );
};

export default HeaderActions;
