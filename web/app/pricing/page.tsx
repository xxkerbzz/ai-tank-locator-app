import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'

export const metadata: Metadata = {
  title: 'Pricing - SepticSleuth',
  description: 'Simple, transparent pricing for septic service providers. Plans starting at $49/month. 14-day free trial, no credit card required.',
}

export default function PricingPage() {
  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What happens if I exceed my lookup limit?",
      answer: "We'll send you a notification when you reach 80% of your limit. You can either upgrade to a higher tier or purchase additional lookups at $1.50 each."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No contracts required. All plans are month-to-month. We believe in earning your business every month with great service."
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer: "Yes! Save 20% by paying annually. Contact our sales team for annual pricing details."
    },
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to Pro features with up to 25 lookups. No credit card required to start."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month's payment."
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-2xl text-gray-600">
              Choose the plan that fits your business. Start with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white -mt-32">
        <div className="container mx-auto px-4">
          <Pricing />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">Bank-level encryption and GDPR compliance</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile & Web Access</h3>
                <p className="text-gray-600">Access from any device, anywhere</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">Continuous improvements and new features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
