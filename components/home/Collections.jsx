import Coffee from "./Coffee";
import { coffees } from "../../utils"

const Collections = () => {
  return (
    <section className="py-16 px-4">
        <div className="relative flex items-center justify-center pb-6 md:top-8 md:-z-10">
            <h2 className="font-fraunces text-grey text-[40px] leading-[72px] font-bold md:text-[96px] md:leading-[72px] xl:text-[150px]">our collection</h2>

            <div className="collections-overlay absolute top-0 bottom-0 w-full h-full md:h-[96px] xl:h-[150px]"></div>
        </div>

        <div className="flex flex-col space-y-16 md:items-center xl:flex-row xl:space-y-0 xl:justify-between">
            { coffees.map((coffee) => <Coffee key={coffee.id} cover={coffee.image} title={coffee.name} description={coffee.description} />)}
        </div>
    </section>
  )
}

export default Collections