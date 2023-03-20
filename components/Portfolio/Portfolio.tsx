import { PortfolioCard } from "./PortfolioCard";
import { CardProps } from "./CardProps";
import { portfolioData } from "./portfolioData";

export const Portfolio = () => {
  return (
    <div className="w-5/6 2xl:w-3/5 m-auto text-neutral-800" id="portfolio">
      <div>
        <h1 className="text-4xl font-semibold text-center mt-10 mb-4">
          Projects
        </h1>
      </div>
      <div className="flex flex-col">
        {portfolioData.map((card: CardProps) => (
          <div className="sm:mx-6 my-2" key={card.title}>
            <PortfolioCard
              title={card.title}
              description={card.description}
              image={card.image}
              tools={card.tools}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
