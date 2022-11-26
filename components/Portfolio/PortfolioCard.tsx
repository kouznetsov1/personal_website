import Image from "next/image";
import { CardProps } from "./CardProps";

export const PortfolioCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  tools,
  url,
}) => {
  return (
    <div className="w-full my-2 border-4 rounded-lg border-black p-4 bg-neutral-100">
      <div className="w-11/12 m-auto">
        <div className="border-4 relative bg-neutral-900 border-neutral-900 h-56 md:h-72 rounded-md">
          <a href={url}>
            <Image
              src={image}
              alt="selfie"
              objectFit="cover"
              className="rounded-md"
              layout="fill"
            />
          </a>
        </div>
        <div className="my-4">
          <a href={url}>
            <h1 className="text-2xl font-semibold my-2">{title}</h1>
          </a>
          <p>{description}</p>
        </div>
        <div className="my-2">
          {tools.length > 0 ? (
            <h3 className="font-semibold">Tech used:</h3>
          ) : (
            <h3 className="font-semibold">Relevant courses:</h3>
          )}
          <ul className="list-disc my-2">
            {tools.length > 0 ? (
              tools.map((tool) => (
                <li className="ml-6" key={tool}>
                  {tool}
                </li>
              ))
            ) : (
              <div className="ml-6">
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Advanced Machine Learning</li>
                <li>Project course: Advanced AI & Machine Learning</li>
                <li>Bachelor Thesis</li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
