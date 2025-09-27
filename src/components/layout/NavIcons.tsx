"use client";

import React from "react";
import { HStack, Square } from "@chakra-ui/react";
import Image from "next/image";
import Nav1 from "@/assets/icons/nav1.svg";
import Nav2 from "@/assets/icons/nav2.svg";
import Nav3 from "@/assets/icons/nav3.svg";
import Nav4 from "@/assets/icons/nav4.svg";

const NavIcons = () => {
  return (
    <HStack gap={{ base: "4px", lg: "8px" }}>
      <Square
        size={{ base: "36px", lg: "46px" }}
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav1} alt="mail" width={20} height={20} loading="lazy" />
      </Square>
      <Square
        size={{ base: "36px", lg: "46px" }}
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav2} alt="mail" width={20} height={20} loading="lazy" />
      </Square>
      <Square
        size={{ base: "36px", lg: "46px" }}
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav3} alt="mail" width={20} height={20} loading="lazy" />
      </Square>
      <Square
        size={{ base: "36px", lg: "46px" }}
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav4} alt="mail" width={20} height={20} loading="lazy" />
      </Square>
    </HStack>
  );
};

export default NavIcons;
