"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderTitle from "./HeaderTitle";
import HeaderActions from "./HeaderActions";

interface HeaderProps {
  title?: string;
  onBackClick?: () => void;
  onSortClick?: () => void;
  onCalendarClick?: () => void;
  onExportClick?: () => void;
  onAddTaskClick?: () => void;
  onSwitchToggle?: (checked: boolean) => void;
  showBackButton?: boolean;
}

const Header = ({
  title = "Afdeling Kwaliteit",
  onBackClick,
  onSortClick,
  onCalendarClick,
  onExportClick,
  onAddTaskClick,
  onSwitchToggle,
  showBackButton = true,
}: HeaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={{ base: "flex-start", lg: "center" }}
      padding={{ base: "16px", lg: "20px" }}
      borderBottom="1px solid"
      borderColor="primaryBorder"
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 3, lg: 0 }}
    >
      <HeaderTitle
        title={title}
        onBackClick={onBackClick}
        showBackButton={showBackButton}
      />

      <HeaderActions
        onSortClick={onSortClick}
        onCalendarClick={onCalendarClick}
        onExportClick={onExportClick}
        onAddTaskClick={onAddTaskClick}
        onSwitchToggle={onSwitchToggle}
      />
    </Box>
  );
};

export default Header;
