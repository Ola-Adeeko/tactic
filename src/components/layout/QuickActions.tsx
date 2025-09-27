"use client";

import React from "react";
import { Button, HStack } from "@chakra-ui/react";

const QuickActions = () => {
  return (
    <HStack
      bg="secondary"
      rounded="10px"
      padding="4px"
      h="46px"
      border="1px solid"
      borderColor="secondaryBorder"
    >
      <Button
        bg="indigoPrimaryColor"
        color="white"
        rounded="10px"
        px="10px"
        textStyle="sm"
        h="38px"
        fontWeight="bold"
      >
        Melding Maken
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px="10px"
        textStyle="sm"
        h="38px"
        fontWeight="bold"
      >
        VIM
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px="10px"
        textStyle="sm"
        h="38px"
        fontWeight="bold"
      >
        LMS
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px="10px"
        textStyle="sm"
        h="38px"
        fontWeight="bold"
      >
        BHV
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px="10px"
        textStyle="sm"
        h="38px"
        fontWeight="bold"
      >
        Datalek
      </Button>
    </HStack>
  );
};

export default QuickActions;
