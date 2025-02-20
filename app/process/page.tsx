import { CheckCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Research Programs",
    description: "Explore our various programs and find the one that interests you.",
  },
  {
    id: 2,
    title: "Contact Us",
    description: "Reach out to our team for more information or to express your interest.",
  },
  { id: 3, title: "Application", description: "Complete the application process for your chosen program." },
  { id: 4, title: "Interview", description: "Participate in an interview or orientation session." },
  { id: 5, title: "Onboarding", description: "Complete any necessary training or onboarding procedures." },
  { id: 6, title: "Start Your Journey", description: "Begin your participation in the program and make a difference!" },
]

export default function Process() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Process</h1>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-4 mt-4 ml-4 h-full border-l-2 border-blue-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

