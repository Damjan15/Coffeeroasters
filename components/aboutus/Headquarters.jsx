import { headquarters } from "../../utils"
import Location from "./Location"

const Headquarters = () => {
  return (
    <section className="px-4 flex flex-col items-center md:items-start lg:py-12">
        <h4 className="text-[24px] leading-[32px] font-bold font-fraunces text-grey">Our headquarters</h4>

        <div className="flex flex-col space-y-12 mt-12 md:flex-row md:space-y-0 md:space-x-12 lg:space-x-[250px] lg:w-full lg:mt-28">
            { headquarters.map((location) => <Location key={location.id} thumbnail={location.thumbnail} countryName={location.title} itemOne={location.itemOne} itemTwo={location.itemTwo} itemThree={location.itemThree} phone={location.phone} />)}
        </div>
    </section>
  )
}

export default Headquarters