import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import QuickActions from "./QuickActions";
import LinkButton from "./LinkButton";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <Box
      padding={{ base: "10px 16px", lg: "10px 50px" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="primary"
      borderBottom="1px solid"
      borderColor="primaryBorder"
      minH={{ base: "120px", lg: "90px" }}
      flexWrap="wrap"
      gap={{ base: 2, lg: 0 }}
    >
      <SearchBar />
      <NavIcons />
      <HStack wrap="wrap" gap={{ base: "4px", lg: "10px" }}>
        <QuickActions />
        <LinkButton />
      </HStack>

      <HStack gap={{ base: "6px", lg: "10px" }}>
        <NotificationBell />
        <UserMenu />
      </HStack>
    </Box>
  );
};

export default Navbar;
