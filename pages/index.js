import { Hero, Collections, Choose, Steps } from "../components"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Collections />
      <Choose />
      <Steps />
    </div>
  )
}
