import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - SepticSleuth Support',
  description: 'Get in touch with SepticSleuth. Sales inquiries, support questions, or partnership opportunities - we are here to help.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-2xl text-gray-600">
              We'd love to hear from you. Choose the best way to reach us below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sales</h3>
                <p className="text-gray-700 mb-4">
                  Questions about pricing, plans, or enterprise solutions?
                </p>
                <a href="mailto:sales@septicsleuth.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  sales@septicsleuth.com
                </a>
                <div className="mt-2">
                  <a href="tel:+18005551234" className="text-blue-600 font-semibold hover:text-blue-700">
                    1-800-555-1234
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-700 mb-4">
                  Need help with your account or technical issues?
                </p>
                <a href="mailto:support@septicsleuth.com" className="text-green-600 font-semibold hover:text-green-700">
                  support@septicsleuth.com
                </a>
                <div className="mt-2">
                  <a href="/resources/help-center" className="text-green-600 font-semibold hover:text-green-700">
                    Visit Help Center →
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Interested in partnering or integrating with us?
                </p>
                <a href="mailto:partnerships@septicsleuth.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  partnerships@septicsleuth.com
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunity</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">📍</span>
                      Headquarters
                    </h3>
                    <p className="text-gray-700">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">⏰</span>
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM ET<br />
                      Saturday: 10:00 AM - 4:00 PM ET<br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🌐</span>
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <a href="/pricing" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
