import Image from "next/image";

const BenefitCard = ({ cover, title, description }) => {
  return (
    <div className="bg-darkCyan w-[279px] h-[382px] rounded-lg flex flex-col items-center justify-center md:flex-row md:w-[573px] md:h-[180px] md:justify-evenly xl:w-[350px] xl:h-[382px] xl:flex-col">
      <Image src={cover} alt={title} className="mb-14 md:mb-0" />

      <div className="max-w-[255px] text-center md:text-left md:max-w-[344px] xl:text-center xl:max-w-[255px]">
        <h3 className="text-[24px] leading-[32px] text-lightCream font-fraunces mb-6">{ title }</h3>
        <p className="text-[15px] leading-[25px] text-lightCream">{ description }</p>
      </div>
    </div>
  )
}

export default BenefitCard