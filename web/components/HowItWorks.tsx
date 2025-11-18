export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload Address",
      description: "Enter the property address into our mobile app or web dashboard."
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our system combines satellite imagery, property records, and machine learning to locate the tank."
    },
    {
      number: "3",
      title: "Receive Location",
      description: "Get GPS coordinates, photos, depth estimates, and access notes instantly."
    },
    {
      number: "4",
      title: "Complete Job",
      description: "Arrive prepared with the right equipment and complete the job in 15 minutes."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How SepticSleuth Works
          </h2>
          <p className="text-xl text-gray-600">
            From address to location in seconds. No more treasure hunts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 -z-10" />
              )}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
