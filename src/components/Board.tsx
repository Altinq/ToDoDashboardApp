import { useState, useRef, useEffect } from "react";
import type { Task, Column as ColumnType } from "../utils/types.ts";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import Column from "./Column.tsx";
import Modal from "./Modal.tsx";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements",
    status: "TODO",
    priority: "High",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library",
    status: "TODO",
    priority: "Medium",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API",
    status: "IN_PROGRESS",
    priority: "Low",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests",
    status: "DONE",
    priority: "Low",
  },
];

const Board = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [currentColumn, setCurrentColumn] = useState<Task["status"] | null>(
    null
  );
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  function handleAddOrEditTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newTask: Task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      priority: formData.get("priority") as Task["priority"],
      dueDate: (formData.get("dueDate") as string) || undefined,
      status: editingTask ? editingTask.status : currentColumn!,
    };

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? newTask : t))
      );
    } else {
      setTasks((prev) => [...prev, newTask]);
    }
    e.currentTarget.reset();
    setEditingTask(null);
    modalRef.current?.close();
  }

  function handleDeleteTask(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed) return;
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="w-full lg:mt-28 mr-11">
      <h1 className="font-semibold text-3xl mb-9 text-center w-full lg:text-left">
        Board
      </h1>
      <div className="flex lg:flex-row flex-col gap-8 items-center ">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
              onAddClick={() => {
                setCurrentColumn(column.id);
                setEditingTask(null);
                modalRef.current?.open();
              }}
              onEditClick={(task) => {
                setEditingTask(task);
                modalRef.current?.open();
              }}
              onDeleteClick={handleDeleteTask}
            />
          ))}
        </DndContext>
      </div>

      <Modal ref={modalRef}>
        <h2 className="text-lg font-bold mb-4">
          {editingTask ? "Edit Task" : "Add Task"}
        </h2>
        <form onSubmit={handleAddOrEditTask} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Title"
            className="border p-2 rounded"
            defaultValue={editingTask?.title || ""}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="border p-2 rounded"
            defaultValue={editingTask?.description || ""}
          />
          <select
            name="priority"
            className="border p-2 rounded"
            defaultValue={editingTask?.priority || "Medium"}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="date"
            name="dueDate"
            className="border p-2 rounded"
            defaultValue={editingTask?.dueDate || ""}
          />

          <button type="submit" className="bg-blue-500 text-white py-2 rounded">
            {editingTask ? "Save Changes" : "Add Task"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Board;
