"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  route: string;
}

const SidebarItem = ({
  icon,
  label,
  active = false,
  route,
}: SidebarItemProps) => {
  const router = useRouter();
  const isDisabled = route === "#";

  const content = (
    <Box
      aria-label={label}
      display="flex"
      cursor={isDisabled ? "not-allowed" : "pointer"}
      alignItems="center"
      gap="14px"
      rounded="10px"
      px="6px"
      py={3}
      transition="all 0.2s ease-in-out"
      bg={active ? "sidebarActive" : "transparent"}
      color={
        isDisabled ? "gray.400" : active ? "sidebarActiveText" : "primaryText"
      }
      opacity={isDisabled ? 0.6 : 1}
      _hover={isDisabled ? {} : { bg: active ? "sidebarActive" : "gray.100" }}
    >
      <Box
        as="span"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        boxSize={4.5}
        color={
          isDisabled ? "gray.400" : active ? "sidebarActiveText" : "sidebarIcon"
        }
      >
        {icon ? <Icon boxSize={4.5}>{icon}</Icon> : null}
      </Box>
      <Text textStyle="sm" fontWeight="semibold" flex={1} truncate>
        {label}
      </Text>
    </Box>
  );

  if (isDisabled) {
    return content;
  }

  return <Link href={route}>{content}</Link>;
};

export default SidebarItem;
