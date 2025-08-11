import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard.tsx";
import type { Column as ColumnType, Task } from "../utils/types";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-1/3 flex-col p-6 bg-blue-50 rounded-2xl h-screen">
      <div className="flex flex-row justify-between mb-9 items-center">
        <h2 className=" font-bold text-lg">{column.title}</h2>
        <button className="text-3xl">+</button>
      </div>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Column;
