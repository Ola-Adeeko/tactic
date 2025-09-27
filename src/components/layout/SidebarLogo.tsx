"use client";

import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/assets/icons/Logo.svg";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <Box mb={7} flexShrink={0}>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="left"
      >
        <Box h="50px" w="153px">
          <HStack alignItems="center" justifyContent="center">
            <Image
              src={Logo}
              alt="logo"
              loading="lazy"
              height={50}
              style={{
                cursor: "pointer",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
              onClick={() => router.push("/")}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarLogo;
