"use client";

import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";
import {
  Category,
  Stickynote,
  Folder2,
  People,
  Note1,
  Buildings,
  Call,
  TaskSquare,
  Notification,
  MenuBoard,
} from "iconsax-reactjs";

interface SidebarNavListProps {
  mainPath: string;
}

const SidebarNavList = ({ mainPath }: SidebarNavListProps) => {
  return (
    <Box flex={1} overflowY="auto" minH={0} pt={2}>
      <VStack gap={1} align="stretch">
        <SidebarItem
          route="/home"
          icon={<Category size="32" />}
          label="Home"
          active={mainPath === "home"}
        />
        <SidebarItem
          route="/vanbinnen"
          icon={<Stickynote size="32" />}
          label="MKVanBinnen"
          active={mainPath === "vanbinnen"}
        />
        <SidebarItem
          route="/document"
          icon={<Folder2 size="32" />}
          label="Document Management"
          active={mainPath === "document"}
        />
        <SidebarItem
          route="/patient"
          icon={<People size="32" />}
          label="Patient Information"
          active={mainPath === "patient"}
        />
        <SidebarItem
          route="/agenda"
          icon={<Note1 size="32" />}
          label="Agenda"
          active={mainPath === "agenda"}
        />
        <SidebarItem
          route="/department"
          icon={<Buildings size="32" />}
          label="My Department"
          active={mainPath === "department"}
        />
        <SidebarItem route="/news" label="News" active={mainPath === "news"} />
        <SidebarItem
          route="/members"
          label="Members"
          active={mainPath === "members"}
        />
        <SidebarItem
          route="/to-do"
          label="To - Do"
          active={mainPath === "to-do"}
        />
        <SidebarItem
          route="/form-task"
          label="Form Task"
          active={mainPath === "form-task"}
        />
        <SidebarItem
          route="/my-agenda"
          label="Agenda"
          active={mainPath === "my-agenda"}
        />
        <SidebarItem
          route="/follow-up-system"
          label="Follow up system"
          active={mainPath === "follow-up-system"}
        />
        <SidebarItem
          route="/group-settings"
          label="Group Settings"
          active={mainPath === "group-settings"}
        />
        <SidebarItem
          route="/department"
          icon={<Call size="32" />}
          label="Phone Numbers"
          active={mainPath === "department"}
        />
        <SidebarItem
          route="/department"
          icon={<TaskSquare size="32" />}
          label="My To-do Protocols"
          active={mainPath === "department"}
        />
        <SidebarItem
          route="/department"
          icon={<Notification size="32" />}
          label="My Notifications"
          active={mainPath === "department"}
        />
        <SidebarItem
          route="/department"
          icon={<MenuBoard size="32" />}
          label="Knowledge Base"
          active={mainPath === "department"}
        />
      </VStack>
    </Box>
  );
};

export default SidebarNavList;
