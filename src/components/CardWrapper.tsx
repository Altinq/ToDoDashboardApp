import CardItem from "./CardItem";

const CardWrapper = ({ title }: { title: string }) => {
  return (
    <div className="p-6 bg-blue-50 rounded-2xl h-screen">
      <h1 className="mb-9 font-bold text-lg">{title}</h1>
      <div className="flex flex-col gap-4 ">
        <CardItem
          title="To Do"
          description="Create a design system for a hero section in 2 different variants. Create a simple presentation with these components."
          author="To Do author"
        />
        <CardItem
          title="In Progress"
          description="In Progress description"
          author="In Progress author"
        />
        <CardItem
          title="Done"
          description="Done description"
          author="Done author"
        />
      </div>
    </div>
  );
};

export default CardWrapper;
