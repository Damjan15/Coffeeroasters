import Divider from "../shared/Divider"
import Step from "../shared/Step"
import { steps } from "../../utils"
import { useRouter } from "next/router"

const Steps = () => {
  const router = useRouter();

  return (
    <section className="px-4">
      <h4 className="font-fraunces font-bold text-grey text-2xl leading-[32px] text-center md:text-left">How it works</h4>

      <Divider />

      <div className="flex flex-col items-center space-y-16 mt-14 md:flex-row md:space-y-0 md:space-x-8 xl:space-x-0 xl:justify-between">
        { steps.map((step) => <Step key={step.id} number={step.stepNum} title={step.title} description={step.description} />)}
      </div>

      <div className="text-center mt-12 md:text-left">
        <button className="btn" onClick={() => router.push("/create-plan")}>Create your plan</button>
      </div>
    </section>
  )
}

export default Steps