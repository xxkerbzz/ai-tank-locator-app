export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Hidden Septic Tanks in Minutes, Not Hours
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            AI-powered location service using satellite imagery and machine learning
            to pinpoint exact septic tank locations for service providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold">21M+</div>
              <div className="text-blue-200 text-sm">Homes with septic systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold">15min</div>
              <div className="text-blue-200 text-sm">Average job time</div>
            </div>
            <div>
              <div className="text-4xl font-bold">95%</div>
              <div className="text-blue-200 text-sm">Location accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
