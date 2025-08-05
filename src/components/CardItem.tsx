interface CardItemProps {
  title: string;
  description: string;
  author: string;
}

const CardItem = ({ title, description, author }: CardItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{author}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
