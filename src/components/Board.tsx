import CardWrapper from "./CardWrapper";

const Board = () => {
  return (
    <div>
      <h1>Board</h1>
      <CardWrapper title="To Do" />
      <CardWrapper title="In Progress" />
      <CardWrapper title="Done" />
    </div>
  );
};

export default Board;
