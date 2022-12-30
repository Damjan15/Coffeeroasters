const Step = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 md:w-[223px] md:text-left md:justify-start md:items-start xl:w-[285px]">
        <span className="block text-[72px] leading-[72px] font-bold font-fraunces text-paleOrange">{ number }</span>
        <h3 className="text-darkGreyBlue font-bold font-fraunces text-[28px] leading-[32px] xl:text-[32px] xl:leading-[36px]">{ title }</h3>
        <p className="text-darkGreyBlue text-[15px] leading-[25px] xl:text-base">{ description }</p>
    </div>
  )
}

export default Step