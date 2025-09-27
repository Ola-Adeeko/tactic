"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Link1 } from "iconsax-reactjs";

const LinkButton = () => {
  return (
    <Box
      h={{ base: "36px", lg: "46px" }}
      w={{ base: "32px", lg: "40px" }}
      bg="secondary"
      color="primaryText"
      border="1px solid"
      borderColor="secondaryBorder"
      rounded="8px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <Link1 size="20" />
    </Box>
  );
};

export default LinkButton;
