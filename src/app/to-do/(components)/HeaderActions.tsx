"use client";

import React from "react";
import { HStack, Square, Button, Switch } from "@chakra-ui/react";
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
    <HStack gap="14px">
      <Square
        size="50px"
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
          <Switch.Control bg="switchTrackDisabled" w="32px">
            <Switch.Thumb bg="primary" color="white" shadow="none" />
          </Switch.Control>
        </Switch.Root>
      </Square>

      <Square
        as="button"
        size="50px"
        bg="secondary"
        color="primaryText"
        border="1px solid"
        borderColor="tertiaryBorder"
        rounded="10px"
        cursor="pointer"
        onClick={onSortClick}
      >
        <Sort size="24" />
      </Square>

      <Square
        as="button"
        size="50px"
        bg="secondary"
        color="primaryText"
        border="1px solid"
        borderColor="tertiaryBorder"
        rounded="10px"
        cursor="pointer"
        onClick={onCalendarClick}
      >
        <Calendar size="24" />
      </Square>

      <Button
        bg="indigoPrimaryColor"
        h="50px"
        color="white"
        rounded="10px"
        fontWeight="semibold"
        fontSize="16px"
        onClick={onExportClick}
      >
        <ExportCurve size="24" /> Export xls
      </Button>

      <Button
        bg="aquaPrimaryColor"
        h="50px"
        color="white"
        rounded="10px"
        fontWeight="semibold"
        fontSize="16px"
        onClick={onAddTaskClick}
      >
        <AddCircle size="24" /> Add Task
      </Button>
    </HStack>
  );
};

export default HeaderActions;
