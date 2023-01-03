import { Hero, Collections, Choose, Steps, CustomHead } from "../components"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <CustomHead pageTitle="Home | Coffeeroasters" />

      <Hero />
      <Collections />
      <Choose />
      <Steps />
    </div>
  )
}
