"use client";

import React from "react";
import { Box, Flex, HStack, Icon, Switch, Text } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-reactjs";

const SidebarFooter = () => {
  return (
    <Flex
      mt={6}
      flexShrink={0}
      border="1px solid"
      borderColor="primaryBorder"
      borderRadius="10px"
      bg="secondary"
      padding="10px 14px"
      direction="column"
      gap="10px"
    >
      <Box
        w="full"
        bg="primary"
        padding="6px 10px"
        rounded="6px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
      >
        <HStack gap={2}>
          <Box
            w="20px"
            h="20px"
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            overflow="hidden"
            border="1px solid"
            borderColor="primaryBorder"
          >
            🇬🇧
          </Box>
          <Text textStyle="xs" fontWeight="medium" color="primaryText">
            English
          </Text>
        </HStack>
        <Icon as={ArrowDown2} w={4.5} h={4.5} color="primaryText" />
      </Box>
      <Box
        w="full"
        bg="primary"
        padding="6px 10px"
        rounded="6px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text textStyle="xs" fontWeight="medium" color="primaryText">
          Dark mode
        </Text>
        <Switch.Root colorPalette="gray">
          <Switch.HiddenInput />
          <Switch.Control bg="switchTrack">
            <Switch.Thumb bg="primary" color="white" shadow="none" />
          </Switch.Control>
        </Switch.Root>
      </Box>
    </Flex>
  );
};

export default SidebarFooter;
