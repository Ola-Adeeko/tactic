"use client";

import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";

const PageSkeleton = () => {
  return (
    <Box
      flex={1}
      overflow="auto"
      bg="secondary"
      padding={{ base: "20px", lg: "30px 50px" }}
      display="flex"
      flexDirection="column"
      gap="16px"
    >
      <Skeleton height="80px" bg="gray.200" />

      <Skeleton height="80px" bg="gray.200" />

      <Box flex={1}>
        <Skeleton height="100%" bg="gray.200" />
      </Box>
    </Box>
  );
};

export default PageSkeleton;
