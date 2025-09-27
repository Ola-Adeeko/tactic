"use client";

import React, { useState, useMemo } from "react";
import { Box, Table, IconButton, Text } from "@chakra-ui/react";
import { More } from "iconsax-reactjs";
import PriorityTag from "./PriorityTag";
import AssigneeAvatars from "./AssigneeAvatars";
import PaginationComponent from "./Pagination";
import { TodoTableProps } from "@/types/todo";

const TodoTable = ({ items, activeTab }: TodoTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };
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
              Name
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
              Date
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
              Assignee
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
              Priority
            </Table.ColumnHeader>
            <Table.ColumnHeader
              w="60px"
              borderBottom="1px solid"
              borderColor="primaryBorder"
            ></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedItems.map((item, index) => {
            const isLastRow = index === paginatedItems.length - 1;
            return (
              <Table.Row key={item.id} bg="white">
                <Table.Cell
                  py={4}
                  pl="40px"
                  borderBottom={isLastRow ? "none" : "1px solid"}
                  borderColor="primaryBorder"
                >
                  <Text
                    fontWeight="semibold"
                    fontSize="14px"
                    color="primaryText"
                  >
                    {item.name}
                  </Text>
                </Table.Cell>
                <Table.Cell
                  py={4}
                  pl="14px"
                  borderBottom={isLastRow ? "none" : "1px solid"}
                  borderColor="primaryBorder"
                >
                  <Text color="primaryText" fontSize="14px" fontWeight="medium">
                    {item.dateRange}
                  </Text>
                </Table.Cell>
                <Table.Cell
                  py={4}
                  pl="14px"
                  borderBottom={isLastRow ? "none" : "1px solid"}
                  borderColor="primaryBorder"
                >
                  <AssigneeAvatars assignees={item.assignees} />
                </Table.Cell>
                <Table.Cell
                  py={4}
                  pl="14px"
                  borderBottom={isLastRow ? "none" : "1px solid"}
                  borderColor="primaryBorder"
                >
                  <PriorityTag priority={item.priority} />
                </Table.Cell>
                <Table.Cell
                  py={4}
                  px="20px"
                  borderBottom={isLastRow ? "none" : "1px solid"}
                  borderColor="primaryBorder"
                >
                  <IconButton
                    aria-label="More actions"
                    variant="ghost"
                    size="sm"
                    rounded="6spx"
                    w="40px"
                    h="30px"
                    bg="secondary"
                    color="primaryText"
                    _hover={{ bg: "gray.100" }}
                  >
                    <More size="16" />
                  </IconButton>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      {/* Pagination */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </Box>
  );
};

export default TodoTable;
