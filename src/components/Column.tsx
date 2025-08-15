import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard.tsx";
import type { Column as ColumnType, Task } from "../utils/types";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
  onAddClick: () => void;
  onEditClick: (task: Task) => void;
  onDeleteClick: (id: string) => void;
};

const Column = ({
  column,
  tasks,
  onAddClick,
  onEditClick,
  onDeleteClick,
}: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex lg:w-1/3 flex-col p-6 w-full bg-gray-100 rounded-2xl lg:h-screen">
      <div className="flex flex-row justify-between mb-9 items-center">
        <h2 className=" font-bold text-lg">{column.title}</h2>
        <button
          onClick={onAddClick}
          className="text-3xl hover:text-gray-500 cursor-pointer"
        >
          +
        </button>
      </div>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return (
            <TaskCard
              onDelete={() => onDeleteClick(task.id)}
              onEdit={() => onEditClick(task)}
              key={task.id}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Column;
