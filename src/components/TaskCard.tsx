import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../utils/types";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
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
      {...listeners}
      {...attributes}
      className="cursor-grab gap-2 bg-white p-6 rounded-2xl  shadow-sm hover:shadow-md"
      style={style}
    >
      <h3 className="font-bold text-xl">{task.title}</h3>
      <p className=" text-sm ">{task.description}</p>
      <p className={`text-sm ${priorityClass}`}>{task.priority}</p>
    </div>
  );
};

export default TaskCard;
