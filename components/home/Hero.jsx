const Hero = () => {
  return (
    <section className="bg-hero h-[500px] rounded-md mx-4 lg:h-[600px] lg:mx-0">
        <div className="flex flex-col items-center justify-center h-full text-center px-4 space-y-8 md:max-w-[398px] md:items-start md:text-left md:pl-12 lg:max-w-[493px] xl:max-w-[520px]">
            <h1 className="text-lightCream text-[40px] leading-[40px] font-bold font-fraunces md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px]">Great coffee made simple.</h1>
            <p className="text-lightCream/80 md:text-base">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>

            <button className="btn">Create your plan</button>
        </div>
    </section>
  )
}

export default Hero