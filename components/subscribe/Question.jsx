import { useState } from "react"
import Image from "next/image"
import arrowIcon from "../../public/assets/plan/desktop/icon-arrow.svg";
import Card from "./Card";

const Question = ({ questionData }) => {
    const [ open, setOpen ] = useState(false);
    const { question, answers } = questionData;

  return (
    <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center gap-x-8 cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
            <h3 className="text-[24px] leading-[28px] font-fraunces font-bold text-grey md:text-[32px] md:leading-[48px] xl:text-[40px] xl:leading-[48px]">{ question }</h3>
            <Image src={arrowIcon} alt="arrow-icon" className={`${open ? "rotate-180" : "rotate-0"}`} />
        </div>

        {/* Body */}
        { open && (
            <div className="flex flex-col space-y-8 py-8 md:flex-row md:space-y-0 md:space-x-8">
            { answers?.map((answer) => <Card key={answer.id} title={answer.title} description={answer.description} />)}
        </div>
        )}
    </div>
  )
}

export default Question