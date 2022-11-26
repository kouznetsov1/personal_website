import Image from "next/image";
import { CardProps } from "./CardProps";

export const PortfolioCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  tools,
}) => {
  return (
    <div className="w-full my-2">
      <div>
        <div className="w-11/12 m-auto">
          <div className="border-4 relative bg-emerald-600 border-emerald-600 h-56 md:h-72 rounded-md">
            <Image
              src={image}
              alt="selfie"
              objectFit="cover"
              className="rounded-md"
              layout="fill"
            />
          </div>
          <div className="my-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
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
                tools.map((tool) => <li className="ml-6">{tool}</li>)
              ) : (
                <div className="ml-6">
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>Advanced Machine Learning</li>
                  <li>...</li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
