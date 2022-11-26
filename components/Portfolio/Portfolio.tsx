import { PortfolioCard } from "./PortfolioCard";
import { CardProps } from "./CardProps";
import { portfolioData } from "./portfolioData";

export const Portfolio = () => {
  return (
    <div className="w-2/3 sm:w-1/2 m-auto" id="portfolio">
      <div className="my-12 grid grid-cols-1 lg:grid-cols-2">
        {portfolioData.map((card: CardProps) => (
          <div className="sm:mx-6 my-4">
            <PortfolioCard
              title={card.title}
              description={card.description}
              image={card.image}
              tools={card.tools}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
