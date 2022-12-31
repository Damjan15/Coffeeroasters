import Image from "next/image";
import mobileImage from "../../public/assets/about/mobile/image-commitment.jpg";
import tabletImage from "../../public/assets/about/tablet/image-commitment.jpg";
import desktopImage from "../../public/assets/about/desktop/image-commitment.jpg";

const Commitment = () => {
  return (
    <section className="px-4 py-16 flex flex-col items-center justify-center md:flex-row md:justify-between lg:justify-around">
        <div>
            <Image src={mobileImage} className="block rounded-lg md:hidden" alt="barista" />

            <Image src={tabletImage} className="hidden rounded-lg w-[281px] h-[470px] md:block lg:hidden" alt="barista" />

            <Image src={desktopImage} className="hidden rounded-lg w-[445px] h-[520px] lg:block" alt="barista" />
        </div>

        <div className="flex flex-col items-center mt-8 text-center md:max-w-[340px] md:text-left md:items-start lg:max-w-[480px]">
            <h2 className="font-fraunces text-darkGreyBlue text-[32px] leading-[48px] mb-4 lg:text-[40px] lg:leading-[48px] lg:mb-8">Our commitment</h2>
            <p className="text-darkGreyBlue/80 text-[15px] leading-[25px] lg:text-base lg:leading-[26px]">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
    </section>
  )
}

export default Commitment