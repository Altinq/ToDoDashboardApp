import CardWrapper from "./CardWrapper";

const Board = () => {
  return (
    <div className="w-full mt-28 mr-11">
      <h1 className="font-semibold text-3xl mb-9">Board</h1>
      <div className="flex flex-row gap-8   ">
        <CardWrapper title="To Do" />
        <CardWrapper title="In Progress" />
        <CardWrapper title="Done" />
      </div>
    </div>
  );
};

export default Board;
