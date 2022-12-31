import Image from "next/image";
import coffeeMobile from "../../public/assets/about/mobile/image-quality.jpg";
import coffeeTablet from "../../public/assets/about/tablet/image-quality.jpg";
import coffeeDesktop from "../../public/assets/about/desktop/image-quality.jpg";

const Quality = () => {
  return (
    <section className="px-4 py-11">
        <div className="w-[280px] mx-auto md:w-[573px] lg:w-[445px] xl:mx-0 xl:ml-auto xl:mr-12">
            <Image src={coffeeMobile} alt="quality-coffee" className="rounded-lg block md:hidden" />

            <Image src={coffeeTablet} alt="quality-coffee" className="hidden rounded-lg md:block xl:hidden" />

            <Image src={coffeeDesktop} alt="quality-coffee" className="hidden rounded-lg xl:block" />
        </div>

        <div className="quality-bg h-[509px] flex flex-col items-center justify-center text-center rounded-[10px] -mt-[80px] md:h-[488px] xl:items-start xl:text-left xl:justify-start xl:-mt-[350px] xl:p-28">
            <h2 className="text-[28px] leading-7 font-bold text-lightCream font-fraunces mb-8 md:text-[32px] md:leading-[48px] xl:text-[40px] xl:leading-[48px]">Uncompromising quality</h2>
            <p className="text-lightCream text-[15px] leading-[25px] max-w-[300px] md:max-w-[540px] xl:text-base xl:leading-[26px]">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
  consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
    </section>
  )
}

export default Quality