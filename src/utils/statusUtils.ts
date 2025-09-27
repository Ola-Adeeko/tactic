import { Status } from "@/types/todo";
import { TaskSquare, Status as StatusIcon, TickCircle } from "iconsax-reactjs";

export const getStatusLabel = (status: Status): string => {
  switch (status) {
    case "todo":
      return "To Do";
    case "in-progress":
      return "In Progress";
    case "completed":
      return "Complete";
    default:
      return "To Do";
  }
};

export const getStatusConfig = (status: Status) => {
  switch (status) {
    case "todo":
      return {
        icon: TaskSquare,
        iconColor: "todoIcon",
        headerBg: "todoBackground",
        containerBg: "secondary",
      };
    case "in-progress":
      return {
        icon: StatusIcon,
        iconColor: "inProgressIcon",
        headerBg: "inProgressBackground",
        containerBg: "secondary",
      };
    case "completed":
      return {
        icon: TickCircle,
        iconColor: "completedIcon",
        headerBg: "completedBackground",
        containerBg: "secondary",
      };
    default:
      return {
        icon: TaskSquare,
        iconColor: "todoIcon",
        headerBg: "todoBackground",
        containerBg: "secondary",
      };
  }
};
