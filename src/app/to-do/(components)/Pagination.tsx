"use client";

import React from "react";
import {
  Box,
  HStack,
  Text,
  IconButton,
  Select,
  Portal,
  createListCollection,
} from "@chakra-ui/react";

import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  showItemsPerPage?: boolean;
  itemsPerPageOptions?: number[];
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  showItemsPerPage = true,
  itemsPerPageOptions = [5, 10, 20, 50],
}: PaginationProps) => {
  const itemsPerPageCollection = createListCollection({
    items: itemsPerPageOptions.map((option) => ({
      label: option.toString(),
      value: option.toString(),
    })),
  });
  const handleFirstPage = () => onPageChange(1);
  const handlePrevPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () =>
    onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => onPageChange(totalPages);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt="20px"
      px="20px"
      py="16px"
      bg="white"
      borderTop="1px solid"
      borderColor="primaryBorder"
    >
      {/* Navigation Buttons */}
      <HStack
        gap="6px"
        bg="secondary"
        rounded="20px"
        padding="5px 10px"
        h="40px"
      >
        <IconButton
          aria-label="First page"
          variant="ghost"
          size="sm"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          color="primaryText"
          _hover={{ bg: "gray.100" }}
          _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          <FaAnglesLeft size="16" />
        </IconButton>

        <IconButton
          aria-label="Previous page"
          variant="ghost"
          size="sm"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          color="primaryText"
          _hover={{ bg: "gray.100" }}
          _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          <FaAngleLeft size="16" />
        </IconButton>

        {/* Page Numbers */}
        <HStack gap="14px">
          {visiblePages.map((page, index) => {
            if (page === "...") {
              return (
                <Text
                  key={`ellipsis-${index}`}
                  color="primaryText"
                  fontSize="14px"
                  fontWeight="medium"
                  px="8px"
                >
                  ...
                </Text>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <Box
                as="button"
                key={pageNumber}
                aria-label={`Page ${pageNumber}`}
                onClick={() => onPageChange(pageNumber)}
                bg={isActive ? "paginationActive" : "white"}
                color={isActive ? "white" : "primaryText"}
                border="1px solid"
                borderColor="paginationActive"
                rounded="full"
                w="30px"
                h="30px"
                fontSize="13px"
                fontWeight="semibold"
                _hover={{
                  bg: isActive ? "paginationActive" : "paginationHover",
                }}
                p="0"
              >
                {pageNumber}
              </Box>
            );
          })}
        </HStack>

        <IconButton
          aria-label="Next page"
          variant="ghost"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          bg="secondary"
          color="primaryText"
          _hover={{ bg: "gray.100" }}
          _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          <FaAngleRight size="16" />
        </IconButton>

        <IconButton
          aria-label="Last page"
          variant="ghost"
          size="sm"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          bg="secondary"
          color="primaryText"
          _hover={{ bg: "gray.100" }}
          _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          <FaAnglesRight size="16" />
        </IconButton>
      </HStack>

      {/* Rows Per Page Selector */}
      {showItemsPerPage && (
        <HStack gap="8px">
          <Text color="primaryText" fontSize="14px" fontWeight="semibold">
            Rows Per page:
          </Text>
          <Select.Root
            collection={itemsPerPageCollection}
            value={[itemsPerPage.toString()]}
            onValueChange={(details) =>
              onItemsPerPageChange(Number(details.value[0]))
            }
            size="sm"
            width="70px"
            color="primaryText"
            fontWeight="semibold"
            rounded="20px"
            border="2px solid"
            borderColor="paginationActive"
            variant="outline"
            h="40px"
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger border="none">
                <Select.ValueText />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {itemsPerPageCollection.items.map((option) => (
                    <Select.Item item={option} key={option.value}>
                      {option.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </HStack>
      )}
    </Box>
  );
};

export default PaginationComponent;
