import { Card } from "flowbite-react";

export default function Carta({image,title,description}) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={`cardimage${title}`}
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
