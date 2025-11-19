import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'SepticSleuth for Homeowners - Find Your Septic Tank',
  description: 'Locate your septic tank instantly. Essential for maintenance, selling your home, or DIY projects. Simple, affordable, one-time purchase option available.',
}

export default function HomeownersPage() {
  const useCases = [
    {
      icon: "🏡",
      title: "Buying or Selling",
      description: "Required for inspections and disclosures. Know your septic system location before putting your home on the market or during purchase."
    },
    {
      icon: "🔧",
      title: "Maintenance & Pumping",
      description: "Regular pumping every 3-5 years is essential. Save money by showing your service provider exactly where to find your tank."
    },
    {
      icon: "🌳",
      title: "Landscaping Projects",
      description: "Planning a patio, deck, or tree planting? Know where your septic system is to avoid costly damage and failed projects."
    },
    {
      icon: "🏗️",
      title: "Home Additions",
      description: "Adding onto your home? Septic system location is critical for permit applications and construction planning."
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Septic Tank in Minutes
            </h1>
            <p className="text-2xl mb-8 text-green-100">
              Stop guessing. Get your septic system location instantly with SepticSleuth Homeowner Edition.
            </p>
            <div className="bg-white text-gray-900 p-8 rounded-xl max-w-md mx-auto mb-8">
              <div className="text-4xl font-bold text-green-600 mb-2">$29</div>
              <div className="text-gray-600 mb-4">One-time purchase</div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GPS coordinates for your property
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Annotated satellite imagery
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Printable report for records
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System information & records
                </li>
              </ul>
              <a href="/pricing" className="block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Your Location Now
              </a>
            </div>
            <p className="text-green-100 text-sm">
              Money-back guarantee • Instant results • No subscription required
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Homeowners Need SepticSleuth
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              The Cost of Not Knowing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$200-500</div>
                <div className="text-gray-600 mb-2">Emergency location service</div>
                <p className="text-sm text-gray-500">What contractors charge to find your tank</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$5,000+</div>
                <div className="text-gray-600 mb-2">Accidental damage</div>
                <p className="text-sm text-gray-500">Cost to repair damaged septic systems</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$10,000+</div>
                <div className="text-gray-600 mb-2">Failed sale</div>
                <p className="text-sm text-gray-500">Inspection failures during home sales</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                For just $29, know exactly where your septic system is located.
              </p>
              <a href="/pricing" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Happy Homeowners
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 mb-3 italic">
                  "Saved me $400! Was about to pay a contractor to locate my tank. Found it in 5 minutes with SepticSleuth."
                </p>
                <div className="font-semibold text-gray-900">Jennifer M.</div>
                <div className="text-gray-600">Portland, OR</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 mb-3 italic">
                  "Essential for our home sale. Buyer's inspector was impressed we had detailed records."
                </p>
                <div className="font-semibold text-gray-900">Robert K.</div>
                <div className="text-gray-600">Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
