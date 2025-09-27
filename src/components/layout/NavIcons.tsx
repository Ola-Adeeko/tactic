"use client";

import React from "react";
import { HStack, Square } from "@chakra-ui/react";
import Image from "next/image";
import Nav1 from "@/assets/images/nav1.png";
import Nav2 from "@/assets/images/nav2.png";
import Nav3 from "@/assets/images/nav3.png";
import Nav4 from "@/assets/images/nav4.png";

const NavIcons = () => {
  return (
    <HStack>
      <Square
        size="46px"
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav1} alt="mail" width={24} height={24} loading="lazy" />
      </Square>
      <Square
        size="46px"
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav2} alt="mail" width={24} height={24} loading="lazy" />
      </Square>
      <Square
        size="46px"
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav3} alt="mail" width={24} height={24} loading="lazy" />
      </Square>
      <Square
        size="46px"
        bg="secondary"
        border="1px solid"
        borderColor="secondaryBorder"
        cursor="pointer"
        rounded="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Nav4} alt="mail" width={24} height={24} loading="lazy" />
      </Square>
    </HStack>
  );
};

export default NavIcons;
