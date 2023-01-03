import Question from "./Question"
import { questions } from "../../utils"

const StepsForm = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 space-y-12">
      { questions.map((question) => <Question key={question.id} questionData={question} />)}
    </section>
  )
}

export default StepsForm