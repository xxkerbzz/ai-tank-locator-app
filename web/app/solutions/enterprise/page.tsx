import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Enterprise Solutions - SepticSleuth',
  description: 'Custom septic system location solutions for municipalities, insurance companies, and large organizations. API access, white-label options, and dedicated support.',
}

export default function EnterprisePage() {
  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Custom septic system intelligence for municipalities, insurance companies, and large organizations.
            </p>
            <a href="/about/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Enterprise Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Municipalities</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive septic system mapping for regulatory compliance, permitting, and public health monitoring.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• County-wide system mapping</li>
                  <li>• Permit application integration</li>
                  <li>• Compliance tracking</li>
                  <li>• Public health monitoring</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Insurance Companies</h3>
                <p className="text-gray-700 mb-4">
                  Property assessment data for underwriting, risk evaluation, and claims processing.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automated property assessments</li>
                  <li>• Risk scoring integration</li>
                  <li>• Claims verification</li>
                  <li>• Portfolio analysis</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real Estate Platforms</h3>
                <p className="text-gray-700 mb-4">
                  Add septic system data to property listings and disclosure reports automatically.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• MLS integration</li>
                  <li>• Automated disclosures</li>
                  <li>• Buyer information packets</li>
                  <li>• Inspection coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Enterprise Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔌</span>
                  API Access
                </h3>
                <p className="text-gray-700 mb-4">
                  RESTful API with comprehensive documentation. Integrate septic system data directly into your existing systems and workflows.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Unlimited API calls</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• Dedicated support</li>
                  <li>• Custom endpoints available</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🎨</span>
                  White-Label Options
                </h3>
                <p className="text-gray-700 mb-4">
                  Rebrand SepticSleuth as your own service. Custom domain, branding, and user interface.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Custom branding & colors</li>
                  <li>• Your domain name</li>
                  <li>• Customized reports</li>
                  <li>• Co-branded options</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Custom Data Layers
                </h3>
                <p className="text-gray-700 mb-4">
                  Add your proprietary data to our platform. Create custom overlays and analysis tools.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Import custom datasets</li>
                  <li>• Multi-layer analysis</li>
                  <li>• Custom reporting dashboards</li>
                  <li>• Export in any format</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔒</span>
                  Enterprise Security
                </h3>
                <p className="text-gray-700 mb-4">
                  SOC 2 compliant infrastructure with advanced security features and dedicated support.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Single sign-on (SSO)</li>
                  <li>• Custom security policies</li>
                  <li>• Audit logs & compliance</li>
                  <li>• Dedicated account manager</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We partner with municipalities, insurance companies, and real estate platforms across North America.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Municipal Partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-gray-600">Systems Mapped</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">API Uptime</div>
              </div>
            </div>
            <a href="/about/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Schedule Enterprise Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
