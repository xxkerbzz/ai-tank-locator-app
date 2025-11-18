export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Wasting Time Hunting for Septic Tanks
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join thousands of service providers who have transformed their operations with SepticSleuth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#pricing"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Start Your Free Trial
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Schedule a Demo
            </a>
          </div>
          <p className="text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
