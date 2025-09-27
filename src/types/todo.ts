export type Priority = "low" | "medium" | "important" | "urgent";
export type Status = "todo" | "in-progress" | "completed";

export interface Assignee {
  name: string;
  image: string | any;
}

export interface TodoItem {
  id: string;
  name: string;
  dateRange: [Date | null, Date | null];
  assignees: Assignee[];
  priority: Priority;
  status: Status;
  description?: string;
}

export interface TodoTabsProps {
  counts?: {
    todo: number;
    inProgress: number;
    completed: number;
  };
  activeTab?: Status;
  onTabChange?: (tab: Status) => void;
}

export interface TodoCardProps {
  id: string;
  name: string;
  dateRange: [Date | null, Date | null];
  assignees: Assignee[];
  priority: Priority;
  isAddButton?: boolean;
  onAddClick?: () => void;
  onClick?: () => void;
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
  dateRange: [Date | null, Date | null];
  assignees: Assignee[];
  priority: Priority | null;
  description: string;
}

export interface ManageTaskProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (taskData: TaskFormData) => void;
  editTask?: TodoItem | null;
  defaultStatus?: Status;
}
