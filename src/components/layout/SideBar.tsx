"use client";

import React from "react";
import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import SidebarLogo from "./SidebarLogo";
import SidebarNavList from "./SidebarNavList";
import SidebarFooter from "./SidebarFooter";

const SideBar = () => {
  const pathname = usePathname();
  const mainPath = pathname.split("/")[1];

  return (
    <Flex
      as="aside"
      bg="primary"
      h="100vh"
      w="250px"
      direction="column"
      borderRight="1px solid"
      borderColor="primaryBorder"
      padding="10px 20px 30px 20px"
    >
      <SidebarLogo />
      <SidebarNavList mainPath={mainPath} />
      <SidebarFooter />
    </Flex>
  );
};

export default SideBar;
