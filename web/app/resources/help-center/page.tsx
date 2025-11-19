import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Help Center - SepticSleuth Support',
  description: 'Find answers to common questions, tutorials, and troubleshooting guides for SepticSleuth.',
}

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        "How to create your account",
        "Understanding your first lookup",
        "Mobile app installation guide",
        "Setting up team members"
      ]
    },
    {
      title: "Using SepticSleuth",
      icon: "📱",
      articles: [
        "How to perform a location lookup",
        "Reading GPS coordinates",
        "Understanding satellite imagery",
        "Logging discovered locations"
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      articles: [
        "Subscription plans explained",
        "How to upgrade or downgrade",
        "Managing team billing",
        "Cancellation and refunds"
      ]
    },
    {
      title: "Technical Issues",
      icon: "🔧",
      articles: [
        "App not loading properly",
        "GPS accuracy troubleshooting",
        "Offline mode not working",
        "Export issues"
      ]
    },
    {
      title: "API & Integrations",
      icon: "🔌",
      articles: [
        "API authentication",
        "Rate limits and quotas",
        "Webhook configuration",
        "Integration examples"
      ]
    },
    {
      title: "Best Practices",
      icon: "⭐",
      articles: [
        "Tips for contractors",
        "Maximizing accuracy",
        "Field use guidelines",
        "Data security practices"
      ]
    }
  ]

  const popularArticles = [
    {
      title: "How accurate are the GPS coordinates?",
      excerpt: "Learn about our ±3ft accuracy and factors that affect precision."
    },
    {
      title: "What if my location isn't found?",
      excerpt: "Steps to take when the system can't locate a septic tank."
    },
    {
      title: "Can I use SepticSleuth offline?",
      excerpt: "Understanding offline mode capabilities and limitations."
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Search our knowledge base or browse categories below.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.articles.map((article, i) => (
                      <li key={i}>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you succeed.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Available Mon-Fri, 9am-6pm ET</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Start Chat →
                </button>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Response within 24 hours</p>
                <a href="mailto:support@septicsleuth.com" className="text-green-600 font-semibold hover:text-green-700">
                  Send Email →
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Pro & Enterprise only</p>
                <a href="tel:+18005551234" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
