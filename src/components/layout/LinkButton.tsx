"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Link1 } from "iconsax-reactjs";

const LinkButton = () => {
  return (
    <Box
      h="46px"
      w="40px"
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
      <Link1 size="24" />
    </Box>
  );
};

export default LinkButton;
