"use client";

import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { TaskSquare, Status as StatusIcon, TickCircle } from "iconsax-reactjs";
import { TodoTabsProps, Status } from "@/types/todo";

const TodoTabs = ({
  counts = { todo: 0, inProgress: 0, completed: 0 },
}: TodoTabsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as Status) || "todo";

  const handleTabChange = (tab: Status) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  const getTabConfig = (tabKey: Status) => {
    switch (tabKey) {
      case "todo":
        return {
          icon: TaskSquare,
          iconBg: "todoIcon",
          activeBg: "todoIcon",
          countBg: "todoBackground",
        };
      case "in-progress":
        return {
          icon: StatusIcon,
          iconBg: "inProgressIcon",
          activeBg: "inProgressIcon",
          countBg: "inProgressBackground",
        };
      case "completed":
        return {
          icon: TickCircle,
          iconBg: "completedIcon",
          activeBg: "completedIcon",
          countBg: "completedBackground",
        };
      default:
        return {
          icon: TaskSquare,
          iconBg: "todoIcon",
          activeBg: "todoIcon",
          countBg: "todoBackground",
        };
    }
  };

  const tabs = [
    { key: "todo" as Status, label: "To Do", count: counts.todo },
    {
      key: "in-progress" as Status,
      label: "In Progress",
      count: counts.inProgress,
    },
    { key: "completed" as Status, label: "Complete", count: counts.completed },
  ];

  return (
    <HStack gap="10px" bg="secondary" rounded="6px" padding="10px">
      {tabs.map((tab) => {
        const config = getTabConfig(tab.key);
        const IconComponent = config.icon;
        const isActive = activeTab === tab.key;

        return (
          <HStack
            key={tab.key}
            rounded="6px"
            padding="4px 4px 4px 10px"
            h="40px"
            gap="44px"
            onClick={() => handleTabChange(tab.key)}
            cursor="pointer"
            bg={isActive ? config.activeBg : "primary"}
            border={isActive ? "none" : "1px solid transparent"}
            transition="all 0.2s ease-in-out"
            _hover={{
              border: isActive ? "none" : "1px solid",
              borderColor: isActive ? "transparent" : "primaryBorder",
            }}
          >
            <HStack
              gap="10px"
              as="button"
              color={isActive ? "white" : config.iconBg}
              fontWeight="semibold"
              fontSize="16px"
              transition="all 0.2s ease-in-out"
            >
              <IconComponent size="24" variant="Bold" />
              <Text
                fontSize="14px"
                fontWeight="medium"
                color={isActive ? "white" : "primaryText"}
              >
                {tab.label}
              </Text>
            </HStack>

            <Box
              h="32px"
              bg={isActive ? "white" : config.countBg}
              rounded="6px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize="14px"
                fontWeight="medium"
                color="primaryText"
                p="10px 12px"
              >
                ({tab.count})
              </Text>
            </Box>
          </HStack>
        );
      })}
    </HStack>
  );
};

export default TodoTabs;
