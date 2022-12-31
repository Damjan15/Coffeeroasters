const Banner = ({ heading, description, isLg, bannerImg }) => {
  return (
    <section className={`banner ${bannerImg } mx-4 flex flex-col items-center justify-center md:items-start md:pl-12 xl:mx-0 xl:pl-16`}>
        <div className="text-center max-w-[280px] md:max-w-[400px] md:text-left xl:max-w-[445px]">
            <h1 className={`${ isLg ? "banner-heading-lg" : "banner-heading-sm"} `}>{ heading }</h1>
            <p className="text-[15px] leading-[25px] text-lightCream/80 xl:text-lightCream/100">{ description }</p>
        </div>
    </section>
  )
}

export default Banner