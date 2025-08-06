interface CardItemProps {
  title: string;
  description: string;
  author: string;
}

const CardItem = ({ title, description, author }: CardItemProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl">
      <p className="font-normal uppercase text-xs">{author}</p>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

export default CardItem;
