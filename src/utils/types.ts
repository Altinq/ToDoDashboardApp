export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  status: TaskStatus;
  title: string;
  description?: string;
  dueDate?: string;
  priority: "Low" | "Medium" | "High";
};

export type Column = {
  id: TaskStatus;
  title: string;
};
