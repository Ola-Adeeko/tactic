"use client";

import React from "react";
import { Circle, HStack, Text } from "@chakra-ui/react";
import { ArrowCircleLeft2 } from "iconsax-reactjs";

interface HeaderTitleProps {
  title: string;
  onBackClick?: () => void;
  showBackButton?: boolean;
}

const HeaderTitle = ({
  title,
  onBackClick,
  showBackButton = true,
}: HeaderTitleProps) => {
  return (
    <HStack gap="30px">
      {showBackButton && (
        <Circle
          as="button"
          size="46px"
          bg="primary"
          color="primaryText"
          border="1px solid"
          borderColor="primaryBorder"
          cursor="pointer"
          onClick={onBackClick}
        >
          <ArrowCircleLeft2 size="26" />
        </Circle>
      )}

      <Text
        fontSize={{ base: "20px", lg: "30px" }}
        fontWeight="bold"
        color="primaryText"
      >
        {title}
      </Text>
    </HStack>
  );
};

export default HeaderTitle;
