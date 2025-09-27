"use client";

import React from "react";
import { Circle } from "@chakra-ui/react";
import { Notification } from "iconsax-reactjs";

const NotificationBell = () => {
  return (
    <Circle size="46px" bg="secondary" color="primaryText" cursor="pointer">
      <Notification size="22" />
    </Circle>
  );
};

export default NotificationBell;
