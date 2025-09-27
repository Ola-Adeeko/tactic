"use client";

import React from "react";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-reactjs";
import { TodoSearchBarProps } from "@/types/todo";

const TodoSearchBar = ({
  placeholder = "Search for To-Do",
  onSearch,
}: TodoSearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <Box>
      <InputGroup
        flex="1"
        startElement={<SearchNormal1 size="24" />}
        bg="primary"
        rounded="6px"
        border="none"
      >
        <Input
          rounded="10px"
          placeholder={placeholder}
          border="none"
          w="300px"
          h="40px"
          color="primaryText"
          onChange={handleInputChange}
          _focus={{
            border: "none",
          }}
          _active={{
            border: "none",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default TodoSearchBar;
