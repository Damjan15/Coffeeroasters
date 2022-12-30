import BenefitCard from "./BenefitCard";
import { chooseCards } from "../../utils";

const Choose = () => {
  return (
    <section className="px-4 my-28">
      <div className="bg-darkGreyBlue rounded-[10px] flex flex-col items-center  text-center py-16 px-4 h-[900px] md:h-[573px] lg:h-[728px] xl:py-28">
        <div className="max-w-[540px]">
        <h2 className="text-[28px] leading-[28px] text-lightCream font-fraunces font-bold mb-8 md:text-[32px] md:leading-[48px] lg:text-[40px]">Why Choose Us?</h2>
        <p className="text-lightCream text-[15px] leading-[25px]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 -mt-[600px] md:-mt-[280px] lg:-mt-[450px] xl:-mt-[300px] xl:flex-row xl:space-y-0 xl:justify-around">
        { chooseCards.map((card) => <BenefitCard key={card.id} cover={card.image} title={card.title} description={card.description} />) }
      </div>
    </section>
  );
};

export default Choose;
