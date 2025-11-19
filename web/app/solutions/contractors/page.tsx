import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'SepticSleuth for Contractors - Septic Service Solutions',
  description: 'Built for septic contractors. Find tanks in minutes, not hours. Increase jobs per day, reduce labor costs, and improve customer satisfaction.',
}

export default function ContractorsPage() {
  const benefits = [
    {
      icon: "⚡",
      title: "Complete More Jobs Per Day",
      description: "Reduce average job time from 2+ hours to 15 minutes. Take on more clients without hiring additional staff."
    },
    {
      icon: "💰",
      title: "Lower Labor Costs",
      description: "Stop paying crews to hunt for tanks. Arrive knowing exactly where to dig, what equipment to bring."
    },
    {
      icon: "😊",
      title: "Happier Customers",
      description: "No more torn-up yards from exploratory digging. Provide accurate arrival times and completion estimates."
    },
    {
      icon: "📈",
      title: "Grow Your Business",
      description: "Handle 3-4x more jobs with the same team size. Expand your service area without adding overhead."
    }
  ]

  const features = [
    "GPS coordinates with ±3ft accuracy",
    "Depth estimates for proper equipment planning",
    "Annotated satellite imagery",
    "Property access notes and warnings",
    "Mobile app for field use",
    "Offline mode for rural areas",
    "Job history and logging",
    "Team member management"
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              SepticSleuth for Contractors
            </h1>
            <p className="text-2xl mb-8 text-blue-100">
              The professional tool for septic service contractors. Stop hunting, start servicing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Start Free Trial
              </a>
              <a href="/how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Contractors Choose SepticSleuth
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Everything You Need in the Field
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  SepticSleuth provides comprehensive location data and tools designed specifically for professional contractors.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-12 rounded-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
                  <p className="text-gray-700 text-lg">
                    Built for contractors on the go. Works offline in rural areas, syncs when back online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Real Results from Real Contractors
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-xl text-gray-700 mb-4 italic">
                  "We went from doing 2-3 jobs per day to 6-8. SepticSleuth paid for itself in the first week. Game changer for our business."
                </p>
                <div className="font-semibold text-gray-900">Mike Johnson</div>
                <div className="text-gray-600">Johnson Septic Services, NC</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-xl text-gray-700 mb-4 italic">
                  "No more guesswork, no more wasted time. My customers love that we show up prepared and finish quickly."
                </p>
                <div className="font-semibold text-gray-900">Tom Chen</div>
                <div className="text-gray-600">West Coast Septic Co., CA</div>
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
