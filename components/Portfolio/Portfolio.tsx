import { PortfolioCard } from "./PortfolioCard";
import { CardProps } from "./CardProps";
import { portfolioData } from "./portfolioData";

export const Portfolio = () => {
  return (
    <div className="w-2/3 xl:w-1/2 m-auto" id="portfolio">
      <div>
        <h1 className="text-4xl font-semibold text-center mt-12 mb-6">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {portfolioData.map((card: CardProps) => (
          <div className="sm:mx-6 my-4">
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
