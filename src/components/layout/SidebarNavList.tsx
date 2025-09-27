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
          route="/"
          icon={<Category size="32" />}
          label="Home"
          active={mainPath === "" || mainPath === "home"}
        />

        <SidebarItem
          route="#"
          icon={<Stickynote size="32" />}
          label="MKVanBinnen"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<Folder2 size="32" />}
          label="Document Management"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<People size="32" />}
          label="Patient Information"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<Note1 size="32" />}
          label="Agenda"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<Buildings size="32" />}
          label="My Department"
          active={false}
        />
        <SidebarItem route="#" label="News" active={false} />
        <SidebarItem route="#" label="Members" active={false} />
        <SidebarItem
          route="/to-do"
          label="To - Do"
          active={mainPath === "to-do"}
        />
        <SidebarItem route="#" label="Form Task" active={false} />
        <SidebarItem route="#" label="Agenda" active={false} />
        <SidebarItem route="#" label="Follow up system" active={false} />
        <SidebarItem route="#" label="Group Settings" active={false} />
        <SidebarItem
          route="#"
          icon={<Call size="32" />}
          label="Phone Numbers"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<TaskSquare size="32" />}
          label="My To-do Protocols"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<Notification size="32" />}
          label="My Notifications"
          active={false}
        />
        <SidebarItem
          route="#"
          icon={<MenuBoard size="32" />}
          label="Knowledge Base"
          active={false}
        />
      </VStack>
    </Box>
  );
};

export default SidebarNavList;
