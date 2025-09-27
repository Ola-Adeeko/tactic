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
      w={{ base: "200px", lg: "250px" }}
      direction="column"
      borderRight="1px solid"
      borderColor="primaryBorder"
      padding={{ base: "8px 12px 20px 12px", lg: "10px 20px 30px 20px" }}
      flexShrink={0}
    >
      <SidebarLogo />
      <SidebarNavList mainPath={mainPath} />
      <SidebarFooter />
    </Flex>
  );
};

export default SideBar;
