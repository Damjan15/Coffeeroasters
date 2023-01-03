import { useState } from "react"

const Card = ({ title, description }) => {
    const [ active, setActive ] = useState(false);

  return (
    <div className={`w-[328px] h-[140px] ${active ? "bg-darkCyan" : "bg-[#F4F1EB]"} flex flex-col justify-center rounded-lg cursor-pointer md:w-[223px] md:h-[250px] md:justify-start md:py-12 xl:w-[228px] hover:bg-paleOrange`} onClick={() => setActive((prev) => !prev)}>
        <div className="max-w-[278px] mx-auto md:max-w-[172px]">
            <h3 className={`text-[24px] leading-[32px] font-fraunces font-bold ${active ? "text-lightCream" : "text-darkGreyBlue"} mb-3`}>{ title }</h3>
            <p className={`${active ? "text-lightCream" : "text-darkGreyBlue"} text-base leading-[26px]`}>{ description }</p>
        </div>
    </div>
  )
}

export default Card