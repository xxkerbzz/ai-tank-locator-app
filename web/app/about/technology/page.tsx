import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Technology - SepticSleuth Platform',
  description: 'Learn about the AI, machine learning, and satellite imagery technology powering SepticSleuth accurate septic system location service.',
}

export default function TechnologyPage() {
  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              The Technology Behind SepticSleuth
            </h1>
            <p className="text-2xl text-gray-300">
              Advanced AI, machine learning, and data integration delivering industry-leading accuracy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Multi-Layer Intelligence System
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🛰️</span>
                  Satellite Imagery Analysis
                </h3>
                <p className="text-gray-700 mb-4">
                  Our computer vision models analyze high-resolution satellite and aerial imagery to detect visual indicators of septic systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Detection of manholes and inspection ports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Identification of concrete rectangles and access points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Vegetation pattern analysis indicating drain fields</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Multi-temporal imagery comparison</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🧠</span>
                  Machine Learning Engine
                </h3>
                <p className="text-gray-700 mb-4">
                  Neural networks trained on millions of verified septic system locations continuously improve accuracy.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Convolutional Neural Networks (CNNs) for image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Gradient boosting for location prediction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regional model specialization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Continuous learning from new data</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">📊</span>
                  Data Integration Platform
                </h3>
                <p className="text-gray-700 mb-4">
                  Combines multiple authoritative data sources for comprehensive location intelligence.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Property records and parcel data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Building permit databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Soil survey and geological data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Historical construction records</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-4xl mr-3">🤝</span>
                  Crowdsourced Verification
                </h3>
                <p className="text-gray-700 mb-4">
                  Field technicians contribute verified discoveries, creating network effects that improve accuracy for everyone.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Verified location database</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Photo and dimension documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Quality scoring and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Community-driven improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Performance Metrics
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Location Accuracy</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">±3ft</div>
                <div className="text-gray-600">GPS Precision</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">&lt;3s</div>
                <div className="text-gray-600">Query Response Time</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Platform Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Security & Infrastructure
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SOC 2 Type II certified</li>
                  <li>• Bank-level encryption (AES-256)</li>
                  <li>• Role-based access control</li>
                  <li>• Regular security audits</li>
                  <li>• GDPR & CCPA compliant</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scalable Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cloud-native architecture</li>
                  <li>• Auto-scaling capabilities</li>
                  <li>• Global CDN for fast delivery</li>
                  <li>• Redundant data centers</li>
                  <li>• 99.9% uptime SLA</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">API & Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• RESTful API</li>
                  <li>• Comprehensive documentation</li>
                  <li>• Webhook support</li>
                  <li>• SDKs for major languages</li>
                  <li>• Developer sandbox</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience the Technology
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See how our platform can transform your septic service operations.
            </p>
            <a href="/pricing" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
