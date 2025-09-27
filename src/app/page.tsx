"use client";

import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Heading,
  Container,
  Center,
} from "@chakra-ui/react";
import { TaskSquare } from "iconsax-reactjs";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleGoToTodo = () => {
    router.push("/to-do");
  };

  return (
    <Container
      maxW="container.xl"
      py={{ base: 4, md: 8 }}
      px={{ base: 4, md: 6 }}
    >
      <Center h="100%" minH={{ base: "60vh", md: "70vh" }}>
        <VStack
          gap={{ base: 6, md: 8 }}
          textAlign="center"
          w="full"
          maxW="600px"
        >
          <VStack gap={{ base: 3, md: 4 }}>
            <Heading
              size={{ base: "lg", md: "xl" }}
              color="gray.800"
              lineHeight="shorter"
            >
              Welcome to Your Todo App
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              maxW="md"
              lineHeight="tall"
            >
              Click the button below to start managing your tasks and stay
              organized.
            </Text>
          </VStack>

          <Button
            size={{ base: "md", md: "lg" }}
            colorScheme="blue"
            onClick={handleGoToTodo}
            px={{ base: 6, md: 8 }}
            py={{ base: 4, md: 6 }}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            borderRadius="sm"
            border="1px solid"
            borderColor="transparent"
            rounded="8px"
            w={{ base: "full", sm: "auto" }}
            _hover={{
              transform: "translateY(-2px)",
              border: "1px solid",
              borderColor: "primaryBorder",
            }}
            transition="all 0.2s"
          >
            Go to Todo Page
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}
