import Image from "next/image";

const Coffee = ({ cover, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 xl:flex-col xl:space-x-0">
        <Image src={cover} alt={title} className="w-[200px] h-[151px] md:w-[255px] md:h-[193px] xl:mb-8" />

        <div className="max-w-[282px] text-center md:text-left xl:text-center xl:max-w-[255px]">
            <h3 className="text-[24px] leading-[32px] text-darkGreyBlue font-fraunces font-bold mb-4">{ title }</h3>
            <p className="text-[15px] leading-[25px] text-darkGreyBlue">{ description }</p>
        </div>
    </div>
  )
}

export default Coffee