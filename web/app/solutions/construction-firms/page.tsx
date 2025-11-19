import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'SepticSleuth for Construction Firms - Site Planning Solutions',
  description: 'Locate existing septic systems before breaking ground. Avoid costly delays, prevent damage, and streamline site preparation for construction projects.',
}

export default function ConstructionFirmsPage() {
  const challenges = [
    {
      title: "Avoid Costly Damage",
      description: "Hitting an unmarked septic system can cost $15,000-$50,000 in repairs, delays, and liability. Know before you dig.",
      stat: "$35K",
      statLabel: "Average damage cost"
    },
    {
      title: "Prevent Project Delays",
      description: "Unexpected septic system discoveries can delay projects by weeks. Identify systems during site planning, not excavation.",
      stat: "2-4 weeks",
      statLabel: "Typical delay"
    },
    {
      title: "Streamline Site Prep",
      description: "Plan around existing systems efficiently. Coordinate with contractors and reduce site preparation time.",
      stat: "40%",
      statLabel: "Faster site prep"
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              SepticSleuth for Construction Firms
            </h1>
            <p className="text-2xl mb-8 text-green-100">
              Locate existing septic systems before breaking ground. Avoid damage, delays, and liability.
            </p>
            <a href="/pricing" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-block">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              The Hidden Risk in Every Site
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Unmarked or poorly documented septic systems are a major risk for construction projects. SepticSleuth helps you identify them before excavation begins.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">{challenge.stat}</div>
                  <div className="text-gray-600 mb-4">{challenge.statLabel}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Complete Site Intelligence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pre-Construction Site Analysis</h3>
                <p className="text-gray-700 mb-4">
                  Identify all existing septic systems, drainage fields, and related infrastructure before site planning begins.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Batch processing for multiple parcels</li>
                  <li>• Overlay with site plans</li>
                  <li>• Export to CAD software</li>
                  <li>• Share with stakeholders</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk Mitigation</h3>
                <p className="text-gray-700 mb-4">
                  Reduce liability and protect your project timeline with comprehensive septic system documentation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Due diligence documentation</li>
                  <li>• Insurance claim support</li>
                  <li>• Regulatory compliance</li>
                  <li>• Neighbor notifications</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Excavation Planning</h3>
                <p className="text-gray-700 mb-4">
                  Plan excavation work around existing systems. Coordinate with operators to avoid costly mistakes.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Precise GPS coordinates</li>
                  <li>• Depth and dimension estimates</li>
                  <li>• Safe distance recommendations</li>
                  <li>• Mobile access for operators</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Management Integration</h3>
                <p className="text-gray-700 mb-4">
                  Integrate septic system data into your existing project management workflows.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• API access for enterprise</li>
                  <li>• Team collaboration tools</li>
                  <li>• Project history tracking</li>
                  <li>• Custom reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Trusted by Leading Construction Firms
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-xl text-gray-700 mb-4 italic">
                "We use SepticSleuth on every residential development project. It's saved us from multiple potential disasters and pays for itself many times over."
              </p>
              <div className="font-semibold text-gray-900">David Park</div>
              <div className="text-gray-600">Project Manager, Regional Construction Co.</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
