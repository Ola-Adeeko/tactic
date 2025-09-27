"use client";

import React from "react";
import { Box, Table, Skeleton, SkeletonCircle, HStack } from "@chakra-ui/react";

const TableSkeleton = () => {
  return (
    <Box
      bg="white"
      borderRadius="10px"
      overflow="hidden"
      border="1px solid"
      borderColor="primaryBorder"
      padding="0"
    >
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row
            bg="secondary"
            h="72px"
            borderBottom="1px solid"
            borderColor="primaryBorder"
          >
            <Table.ColumnHeader
              w="31%"
              fontWeight="bold"
              fontSize="14px"
              color="headerText"
              py={4}
              pl="40px"
              borderBottom="1px solid"
              borderColor="primaryBorder"
            >
              <Skeleton height="20px" width="60px" bg="gray.200" />
            </Table.ColumnHeader>
            <Table.ColumnHeader
              fontWeight="bold"
              fontSize="14px"
              color="headerText"
              py={4}
              pl="14px"
              borderLeft="1px solid"
              borderColor="primaryBorder"
            >
              <Skeleton height="20px" width="40px" bg="gray.200" />
            </Table.ColumnHeader>
            <Table.ColumnHeader
              fontWeight="bold"
              fontSize="14px"
              color="headerText"
              py={4}
              pl="14px"
              borderLeft="1px solid"
              borderColor="primaryBorder"
            >
              <Skeleton height="20px" width="70px" bg="gray.200" />
            </Table.ColumnHeader>
            <Table.ColumnHeader
              fontWeight="bold"
              fontSize="14px"
              color="headerText"
              py={4}
              pl="14px"
              borderLeft="1px solid"
              borderColor="primaryBorder"
            >
              <Skeleton height="20px" width="60px" bg="gray.200" />
            </Table.ColumnHeader>
            <Table.ColumnHeader
              w="60px"
              borderBottom="1px solid"
              borderColor="primaryBorder"
            >
              <Skeleton height="20px" width="20px" bg="gray.200" />
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({ length: 5 }).map((_, index) => (
            <Table.Row key={index} bg="white">
              <Table.Cell
                py={4}
                pl="40px"
                borderBottom={index === 4 ? "none" : "1px solid"}
                borderColor="primaryBorder"
              >
                <Skeleton height="16px" width="200px" bg="gray.200" />
              </Table.Cell>
              <Table.Cell
                py={4}
                pl="14px"
                borderBottom={index === 4 ? "none" : "1px solid"}
                borderColor="primaryBorder"
              >
                <Skeleton height="16px" width="120px" bg="gray.200" />
              </Table.Cell>
              <Table.Cell
                py={4}
                pl="14px"
                borderBottom={index === 4 ? "none" : "1px solid"}
                borderColor="primaryBorder"
              >
                <HStack gap="8px">
                  <SkeletonCircle size="24px" bg="gray.200" />
                  <SkeletonCircle size="24px" bg="gray.200" />
                </HStack>
              </Table.Cell>
              <Table.Cell
                py={4}
                pl="14px"
                borderBottom={index === 4 ? "none" : "1px solid"}
                borderColor="primaryBorder"
              >
                <Skeleton
                  height="24px"
                  width="80px"
                  rounded="4px"
                  bg="gray.200"
                />
              </Table.Cell>
              <Table.Cell
                py={4}
                px="20px"
                borderBottom={index === 4 ? "none" : "1px solid"}
                borderColor="primaryBorder"
              >
                <Skeleton
                  height="30px"
                  width="40px"
                  rounded="6px"
                  bg="gray.200"
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TableSkeleton;
