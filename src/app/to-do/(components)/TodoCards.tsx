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
} from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import { getStatusLabel, getStatusConfig } from "@/utils/statusUtils";
import { TodoCardsProps } from "@/types/todo";
import { Add } from "iconsax-reactjs";

const TodoCards = ({ items, activeTab }: TodoCardsProps) => {
  const getStatusCount = (status: string) => {
    return items.filter((item) => item.status === status).length;
  };

  const statuses = ["todo", "in-progress", "completed"] as const;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="20px" h="full">
      {statuses.map((status) => {
        const statusItems = items.filter((item) => item.status === status);
        const count = getStatusCount(status);
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
                      <Text
                        fontWeight="medium"
                        fontSize="14px"
                        color="primaryText"
                      >
                        {`(${count})`}
                      </Text>
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
                {statusItems.map((item) => (
                  <TodoCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    dateRange={item.dateRange}
                    assignees={item.assignees}
                    priority={item.priority}
                  />
                ))}

                <TodoCard
                  id="add"
                  name=""
                  dateRange=""
                  assignees={[]}
                  priority="medium"
                  isAddButton={true}
                  onAddClick={() => console.log(`Add task to ${status}`)}
                />
              </VStack>
            </VStack>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default TodoCards;
