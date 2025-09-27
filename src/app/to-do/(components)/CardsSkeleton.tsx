"use client";

import React from "react";
import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  Icon,
  HStack,
  Square,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { getStatusLabel, getStatusConfig } from "@/utils/statusUtils";
import { Add } from "iconsax-reactjs";

const CardsSkeleton = () => {
  const statuses = ["todo", "in-progress", "completed"] as const;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="20px" h="full">
      {statuses.map((status) => {
        const config = getStatusConfig(status);
        const IconComponent = config.icon;

        return (
          <GridItem key={status}>
            <VStack
              align="stretch"
              gap={0}
              h="auto"
              bg={config.containerBg}
              rounded="6px"
            >
              <Box
                padding="5px 5px 10px 5px"
                bg={config.headerBg}
                roundedTopLeft="6px"
                roundedTopRight="6px"
              >
                <HStack justify="space-between" align="center">
                  <HStack>
                    <HStack
                      bg="primary"
                      h="30px"
                      w="auto"
                      rounded="6px"
                      padding="5px 10px 5px 5px"
                    >
                      <Icon
                        h="20px"
                        w="20px"
                        rounded="6px"
                        color={config.iconColor}
                      >
                        <IconComponent size="24" variant="Bold" />
                      </Icon>
                      <Text
                        fontWeight="semibold"
                        fontSize="14px"
                        color="primaryText"
                      >
                        {getStatusLabel(status)}
                      </Text>
                    </HStack>
                    <Square size="30px" bg="primary" rounded="6px">
                      <Skeleton height="14px" width="20px" bg="gray.200" />
                    </Square>
                  </HStack>
                  <Square
                    as="button"
                    cursor="pointer"
                    size="30px"
                    bg="primary"
                    rounded="6px"
                  >
                    <Icon fontWeight="medium" color="primaryText">
                      <Add size="20" />
                    </Icon>
                  </Square>
                </HStack>
              </Box>

              <VStack gap="5px" align="stretch" flex={1} padding="5px">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Box
                    key={index}
                    bg="white"
                    p="14px"
                    borderRadius="10px"
                    position="relative"
                  >
                    <VStack align="stretch" gap="10px">
                      <Skeleton height="16px" width="80%" bg="gray.200" />
                      <HStack gap="14px" align="center">
                        <SkeletonCircle size="16px" bg="gray.200" />
                        <Skeleton height="14px" width="100px" bg="gray.200" />
                      </HStack>
                      <HStack gap="14px" align="center">
                        <SkeletonCircle size="16px" bg="gray.200" />
                        <HStack gap="8px">
                          <SkeletonCircle size="24px" bg="gray.200" />
                          <SkeletonCircle size="24px" bg="gray.200" />
                        </HStack>
                      </HStack>
                      <Skeleton
                        height="20px"
                        width="60px"
                        rounded="4px"
                        bg="gray.200"
                      />
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default CardsSkeleton;
