export type Priority = "low" | "medium" | "important" | "urgent";
export type Status = "todo" | "in-progress" | "completed";

export interface Assignee {
  name: string;
  image: string | any;
}

export interface TodoItem {
  id: string;
  name: string;
  dateRange: string;
  assignees: Assignee[];
  priority: Priority;
  status: Status;
}

export interface TodoTabsProps {
  counts?: {
    todo: number;
    inProgress: number;
    completed: number;
  };
}

export interface TodoCardProps {
  id: string;
  name: string;
  dateRange: string;
  assignees: Assignee[];
  priority: Priority;
  isAddButton?: boolean;
  onAddClick?: () => void;
}

export interface AssigneeAvatarsProps {
  assignees: Assignee[];
  maxVisible?: number;
}

export interface PriorityTagProps {
  priority: Priority;
}

export interface TodoTableProps {
  items: TodoItem[];
  activeTab: Status;
}

export interface TodoCardsProps {
  items: TodoItem[];
  activeTab: Status;
}

export interface TodoContentProps {
  viewMode: "table" | "cards";
  activeTab: Status;
  items: TodoItem[];
}

export interface TodoSearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export interface ViewToggleProps {
  viewMode: "table" | "cards";
  onViewChange: (mode: "table" | "cards") => void;
}

export interface TodoControlsProps {
  viewMode: "table" | "cards";
  onViewChange: (mode: "table" | "cards") => void;
  onSearch: (query: string) => void;
  searchPlaceholder?: string;
}

export interface TaskFormData {
  name: string;
  status: Status;
  dateRange: string;
  assignees: Assignee[];
  priority: Priority;
  description: string;
}

export interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (taskData: TaskFormData) => void;
}
