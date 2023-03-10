import { Banner, Commitment, CustomHead, Headquarters, Quality } from "../components";

export default function AboutUs() {
    return (
        <div className="max-w-7xl mx-auto">
            <CustomHead pageTitle="About Us | Coffeeroasters" />
            <Banner bannerImg="banner-about" heading="About Us" description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment." />
            <Commitment />
            <Quality />
            <Headquarters />
        </div>
    )
}