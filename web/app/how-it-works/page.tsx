import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'How It Works - SepticSleuth',
  description: 'Learn how SepticSleuth uses AI and satellite imagery to locate septic tanks in minutes. Simple 4-step process from address to location.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Upload Address",
      description: "Enter the property address into our mobile app or web dashboard. Our system accepts full addresses, GPS coordinates, or parcel IDs.",
      details: [
        "Mobile app or web interface",
        "Multiple input formats supported",
        "Batch processing available for Pro users",
        "Instant address validation"
      ]
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our advanced system combines multiple data sources to pinpoint the exact location of the septic tank.",
      details: [
        "Satellite imagery analysis with computer vision",
        "Property records and permit database search",
        "Machine learning prediction algorithms",
        "Crowdsourced data from verified discoveries"
      ]
    },
    {
      number: "3",
      title: "Receive Location",
      description: "Get comprehensive location data delivered to your device in seconds, not hours.",
      details: [
        "GPS coordinates with±3ft accuracy",
        "Annotated satellite imagery",
        "Estimated depth and tank dimensions",
        "Access notes and safety warnings"
      ]
    },
    {
      number: "4",
      title: "Complete Job & Log",
      description: "Arrive prepared with the right equipment and complete the job efficiently. Optionally log your findings to improve the database.",
      details: [
        "Complete jobs in 15 minutes on average",
        "Log actual location for future reference",
        "Add photos and notes",
        "Contribute to network effects"
      ]
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How SepticSleuth Works
            </h1>
            <p className="text-2xl text-gray-600">
              From address to location in seconds. Transform your septic service operations with AI-powered precision.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Technology Behind SepticSleuth
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Satellite Imagery</h3>
              <p className="text-gray-700">
                High-resolution satellite and aerial imagery analyzed with advanced computer vision to detect visual indicators like manholes, inspection ports, and concrete rectangles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Machine Learning</h3>
              <p className="text-gray-700">
                Neural networks trained on millions of septic system locations improve accuracy with every data point, learning patterns specific to different regions and property types.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Integration</h3>
              <p className="text-gray-700">
                Combines public property records, permit databases, soil surveys, and crowdsourced technician discoveries for comprehensive location intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
