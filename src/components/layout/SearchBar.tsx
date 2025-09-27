"use client";

import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-reactjs";

const SearchBar = () => {
  return (
    <Box>
      <InputGroup
        flex="1"
        startElement={<SearchNormal1 size="20" />}
        bg="secondary"
        rounded="10px"
        border="none"
      >
        <Input
          rounded="10px"
          placeholder="Search..."
          border="1px solid"
          borderColor="primaryBorder"
          w="220px"
          color="primaryText"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
