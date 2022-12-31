import Image from "next/image"

const Location = ({ thumbnail, countryName, itemOne, itemTwo, itemThree, phone }) => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
      <Image src={thumbnail} alt="illustration-country" />

      <h3 className="font-fraunces font-bold text-[28px] leading-[36px] text-darkGreyBlue mt-8 mb-3 lg:text-[32px]">{ countryName }</h3>
      <ul className="flex flex-col items-center md:items-start">
        <li>{ itemOne }</li>
        <li>{ itemTwo }</li>
        <li>{ itemThree }</li>
        <li>{ phone }</li>
      </ul>
    </div>
  )
}

export default Location