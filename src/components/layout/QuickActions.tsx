"use client";

import React from "react";
import { Button, HStack } from "@chakra-ui/react";

const QuickActions = () => {
  return (
    <HStack
      bg="secondary"
      rounded="10px"
      padding={{ base: "2px", lg: "4px" }}
      h={{ base: "36px", lg: "46px" }}
      border="1px solid"
      borderColor="secondaryBorder"
      gap={{ base: "2px", lg: "4px" }}
    >
      <Button
        bg="indigoPrimaryColor"
        color="white"
        rounded="10px"
        px={{ base: "6px", lg: "10px" }}
        textStyle={{ base: "xs", lg: "sm" }}
        h={{ base: "32px", lg: "38px" }}
        fontWeight="bold"
        fontSize={{ base: "xs", lg: "sm" }}
      >
        Melding Maken
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px={{ base: "6px", lg: "10px" }}
        textStyle={{ base: "xs", lg: "sm" }}
        h={{ base: "32px", lg: "38px" }}
        fontWeight="bold"
        fontSize={{ base: "xs", lg: "sm" }}
      >
        VIM
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px={{ base: "6px", lg: "10px" }}
        textStyle={{ base: "xs", lg: "sm" }}
        h={{ base: "32px", lg: "38px" }}
        fontWeight="bold"
        fontSize={{ base: "xs", lg: "sm" }}
      >
        LMS
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px={{ base: "6px", lg: "10px" }}
        textStyle={{ base: "xs", lg: "sm" }}
        h={{ base: "32px", lg: "38px" }}
        fontWeight="bold"
        fontSize={{ base: "xs", lg: "sm" }}
      >
        BHV
      </Button>
      <Button
        bg="aquaPrimaryColor"
        color="white"
        rounded="10px"
        px={{ base: "6px", lg: "10px" }}
        textStyle={{ base: "xs", lg: "sm" }}
        h={{ base: "32px", lg: "38px" }}
        fontWeight="bold"
        fontSize={{ base: "xs", lg: "sm" }}
      >
        Datalek
      </Button>
    </HStack>
  );
};

export default QuickActions;
