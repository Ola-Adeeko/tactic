"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import PageSkeleton from "./PageSkeleton";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [layoutLoading, setLayoutLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLayoutLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  console.log("layoutLoading", layoutLoading);

  return (
    <Box bg="primary" display="flex" h="100vh">
      <SideBar />
      <Flex as="main" direction="column" flex={1} overflow="hidden">
        <Navbar />
        {layoutLoading ? (
          <PageSkeleton />
        ) : (
          <Box
            as="main"
            flex={1}
            overflow="auto"
            bg="secondary"
            padding={{ base: "20px", lg: "30px 50px" }}
            display="flex"
          >
            {children}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default ClientLayout;
