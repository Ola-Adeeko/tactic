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
      padding="10px 50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="primary"
      borderBottom="1px solid"
      borderColor="primaryBorder"
      h="90px"
    >
      <SearchBar />
      <NavIcons />
      <HStack wrap="wrap" gap="10px">
        <QuickActions />
        <LinkButton />
      </HStack>

      <HStack>
        <NotificationBell />
        <UserMenu />
      </HStack>
    </Box>
  );
};

export default Navbar;
