import Step from "../shared/Step"
import Divider from "../shared/Divider"
import { steps } from "../../utils"

const StepsDark = () => {
  return (
    <section className="mx-4 steps-bg rounded-[10px] p-8 my-12 xl:py-14">
      <Divider />

      <div className="flex flex-col items-center space-y-16 mt-14 md:flex-row md:space-y-0 md:space-x-8 xl:space-x-0 xl:justify-between">
        { steps.map((step) => <Step key={step.id} number={step.stepNum} title={step.title} description={step.description} isDark />)}
      </div>
    </section>
  )
}

export default StepsDark