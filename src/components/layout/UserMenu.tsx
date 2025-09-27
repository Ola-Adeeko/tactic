"use client";

import React from "react";
import { Avatar, HStack, Icon, Menu, Portal, Text } from "@chakra-ui/react";
import { BsCaretDownFill } from "react-icons/bs";
import Profile from "@/assets/images/profile.jpg";
import Image from "next/image";

const UserMenu = () => {
  return (
    <Menu.Root positioning={{ placement: "right-end" }}>
      <Menu.Trigger rounded="full" cursor="pointer" w="134px">
        <HStack
          bg="secondary"
          rounded="full"
          padding="3px"
          paddingRight="8px"
          h="46px"
        >
          <Avatar.Root boxSize="40px">
            {Profile ? (
              <Image
                src={Profile}
                alt="Paul Kimber"
                width={40}
                height={40}
                style={{ borderRadius: "100%" }}
                loading="lazy"
              />
            ) : (
              <Avatar.Fallback name="Paul Kimber" />
            )}
          </Avatar.Root>
          <Text textStyle="sm" fontWeight="semibold" color="primaryText">
            Hi Paul
          </Text>
          <Icon color="primaryText" ml="auto" boxSize={4}>
            <BsCaretDownFill />
          </Icon>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner bg="secondary">
          <Menu.Content bg="primary">
            <Menu.Item
              value="account"
              color="primaryText"
              _hover={{ bg: "secondary" }}
            >
              Account
            </Menu.Item>
            <Menu.Item
              value="settings"
              color="primaryText"
              _hover={{ bg: "secondary" }}
            >
              Settings
            </Menu.Item>
            <Menu.Item
              value="logout"
              color="primaryText"
              _hover={{ bg: "secondary" }}
            >
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default UserMenu;
