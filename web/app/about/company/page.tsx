import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - SepticSleuth Company Story',
  description: 'Learn about SepticSleuth mission to revolutionize septic service operations with AI-powered location technology.',
}

export default function CompanyPage() {
  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-2xl text-blue-100">
              Transforming the septic service industry with AI-powered intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">The Problem We Solve</h2>
            <p className="text-xl text-gray-700 mb-6">
              In 2022, our founder spent three hours helping a septic contractor search for a buried tank on his property. Armed with metal detectors and decades of experience, they dug multiple exploratory holes before finally finding it.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              That experience revealed a massive inefficiency affecting an entire industry. With over 21 million homes on septic systems in the US alone, contractors waste countless hours on location work that should take minutes, not hours.
            </p>
            <p className="text-xl text-gray-700 mb-8">
              We knew there had to be a better way. By combining satellite imagery, public records, machine learning, and crowdsourced data, we created SepticSleuth—the AI-powered solution that's transforming how septic systems are located.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Mission & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To become the definitive septic system intelligence platform, eliminating guesswork and creating predictable, efficient service operations for every provider.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer First</h3>
                <p className="text-gray-700">
                  Every feature we build starts with understanding the real challenges faced by contractors, homeowners, and service providers in the field.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible with AI, satellite imagery, and data science to solve complex location challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">2022</div>
                </div>
                <div className="flex-grow border-l-4 border-blue-600 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Founded</h3>
                  <p className="text-gray-700">SepticSleuth founded with mission to revolutionize septic service location.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">2023</div>
                </div>
                <div className="flex-grow border-l-4 border-blue-600 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Beta Launch</h3>
                  <p className="text-gray-700">Launched beta with 50 contractors. Achieved 95% accuracy rate and positive feedback.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">2024</div>
                </div>
                <div className="flex-grow border-l-4 border-blue-600 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">National Expansion</h3>
                  <p className="text-gray-700">Expanded to all 50 states. Mapped over 1 million septic systems. Launched Enterprise solutions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">2025</div>
                </div>
                <div className="flex-grow border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Today</h3>
                  <p className="text-gray-700">Serving thousands of contractors and hundreds of enterprises. Building the future of infrastructure intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Us in Transforming an Industry
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented people who share our passion for solving real-world problems.
            </p>
            <a href="/about/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
