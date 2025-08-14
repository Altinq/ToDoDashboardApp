import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../utils/types";

type TaskCardProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
};

const TaskCard = ({ task, onDelete, onEdit }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const priorityColors: Record<string, string> = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  const priorityClass = priorityColors[task.priority] || "text-gray-500";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white p-4 rounded-2xl shadow flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{task.title}</h3>
        {/* Drag handle */}
        <span
          {...listeners}
          {...attributes}
          className="cursor-grab text-gray-400 hover:text-gray-600"
        >
          ⠿
        </span>
      </div>
      <p className=" text-sm ">{task.description}</p>
      <p className={`text-sm ${priorityClass}`}>Priority: {task.priority}</p>
      {task.dueDate && (
        <span className="text-xs text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      )}

      <div className="flex gap-2 mt-2">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-800 hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
