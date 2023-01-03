import { Banner, StepsDark, StepsForm } from "../components";

export default function CreatePlan() {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner bannerImg="banner-plan" heading="Create plan" description="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality." isLg />
            <StepsDark />
            <StepsForm />
        </div>
    )
}