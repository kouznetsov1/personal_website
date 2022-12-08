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
    <div className="w-full my-2 border-4 rounded-md border-black p-4 bg-neutral-200 shadow-xl">
      <div className="m-auto flex flex-col lg:flex-row">
        <div className="">
          <div className="border-4 relative bg-neutral-900 border-neutral-900 h-72 lg:w-96 md:justify-around w-full rounded-md">
            <a href={url}>
              <Image
                src={image}
                alt="selfie"
                objectFit="cover"
                objectPosition="top"
                className="rounded-md"
                layout="fill"
              />
            </a>
          </div>
        </div>
        <div className="mx-4 md:mx-6">
          <div className="">
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
          </div>
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
