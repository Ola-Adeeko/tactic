"use client";

import React from "react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import Image from "next/image";
import { AssigneeAvatarsProps } from "@/types/todo";

const AssigneeAvatars = ({
  assignees,
  maxVisible = 2,
}: AssigneeAvatarsProps) => {
  const visibleAssignees = assignees.slice(0, maxVisible);
  const remainingCount = assignees.length - maxVisible;

  return (
    <AvatarGroup gap="0" spaceX="-1" size="sm">
      {visibleAssignees.map((assignee, index) => (
        <Avatar.Root
          variant="subtle"
          key={index}
          boxSize="20px"
          bg="switchTrackDisabled"
          border="2px solid"
          borderColor="white"
          color="primaryText"
          overflow="hidden"
        >
          {assignee.image ? (
            <Image
              src={assignee.image}
              alt={assignee.name}
              width={20}
              height={20}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Avatar.Fallback
              name={assignee.name}
              fontSize="8px"
              fontWeight="medium"
            />
          )}
        </Avatar.Root>
      ))}
      {remainingCount > 0 && (
        <Avatar.Root
          boxSize="20px"
          border="2px solid"
          borderColor="white"
          color="primaryText"
          bg="#F6ECFF"
        >
          <Avatar.Fallback fontSize="10px" fontWeight="semibold">
            +{remainingCount}
          </Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
};

export default AssigneeAvatars;
