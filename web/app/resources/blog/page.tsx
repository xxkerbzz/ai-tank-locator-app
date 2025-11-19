import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - SepticSleuth Resources',
  description: 'Expert insights on septic systems, industry trends, and best practices for contractors and homeowners.',
}

export default function BlogPage() {
  const posts = [
    {
      title: "5 Signs Your Septic Tank Needs Immediate Attention",
      excerpt: "Learn the warning signs that indicate your septic system requires professional service before costly damage occurs.",
      category: "Maintenance",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "How AI is Revolutionizing Septic Service Operations",
      excerpt: "Discover how artificial intelligence and satellite imagery are transforming the septic service industry.",
      category: "Technology",
      date: "March 10, 2025",
      readTime: "7 min read"
    },
    {
      title: "Septic System Regulations by State: A Complete Guide",
      excerpt: "Navigate the complex landscape of septic system regulations across different states and municipalities.",
      category: "Compliance",
      date: "March 5, 2025",
      readTime: "10 min read"
    },
    {
      title: "Maximizing Efficiency: Tips for Septic Service Contractors",
      excerpt: "Proven strategies to increase your daily job count and improve profitability in the septic service business.",
      category: "Business",
      date: "February 28, 2025",
      readTime: "6 min read"
    },
    {
      title: "Understanding Septic System Lifespan and Replacement",
      excerpt: "Everything homeowners need to know about septic system longevity, maintenance schedules, and replacement costs.",
      category: "Homeowners",
      date: "February 20, 2025",
      readTime: "8 min read"
    },
    {
      title: "The True Cost of Septic Tank Location Services",
      excerpt: "A detailed breakdown of traditional location methods vs. modern AI-powered solutions for contractors and homeowners.",
      category: "Industry Analysis",
      date: "February 15, 2025",
      readTime: "5 min read"
    }
  ]

  const categories = ["All Posts", "Technology", "Maintenance", "Business", "Compliance", "Homeowners"]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SepticSleuth Blog
            </h1>
            <p className="text-2xl text-gray-600">
              Expert insights, industry trends, and best practices for septic service professionals and homeowners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest industry insights, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
