import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Video Library - SepticSleuth Tutorials',
  description: 'Watch video tutorials and guides on using SepticSleuth effectively. From getting started to advanced features.',
}

export default function VideoLibraryPage() {
  const videoCategories = [
    {
      category: "Getting Started",
      videos: [
        {
          title: "Welcome to SepticSleuth - Platform Overview",
          duration: "5:30",
          views: "12.5K",
          description: "A comprehensive introduction to the SepticSleuth platform and its key features."
        },
        {
          title: "Your First Location Lookup",
          duration: "3:45",
          views: "8.2K",
          description: "Step-by-step guide to performing your first septic system lookup."
        },
        {
          title: "Setting Up Your Team",
          duration: "4:20",
          views: "5.1K",
          description: "How to add team members and manage permissions for collaborative work."
        }
      ]
    },
    {
      category: "For Contractors",
      videos: [
        {
          title: "Field Use Best Practices",
          duration: "6:15",
          views: "15.3K",
          description: "Tips and tricks for using SepticSleuth efficiently in the field."
        },
        {
          title: "Logging Discovered Locations",
          duration: "4:50",
          views: "9.7K",
          description: "How to contribute to the database by logging tanks you discover."
        },
        {
          title: "Offline Mode Tutorial",
          duration: "5:40",
          views: "7.4K",
          description: "Using SepticSleuth in rural areas without internet connectivity."
        }
      ]
    },
    {
      category: "Advanced Features",
      videos: [
        {
          title: "Understanding GPS Accuracy",
          duration: "7:25",
          views: "6.8K",
          description: "Deep dive into how GPS coordinates are generated and factors affecting accuracy."
        },
        {
          title: "Batch Processing for Large Projects",
          duration: "8:10",
          views: "4.2K",
          description: "How to process multiple addresses at once for construction sites."
        },
        {
          title: "API Integration Walkthrough",
          duration: "12:30",
          views: "3.5K",
          description: "Complete guide to integrating SepticSleuth into your existing systems."
        }
      ]
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Video Library
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Learn how to use SepticSleuth with our comprehensive video tutorials.
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {videoCategories.map((section, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {section.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.videos.map((video, vIndex) => (
                    <div key={vIndex} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {video.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {video.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Request a tutorial or check our Help Center for written guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/resources/help-center" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Visit Help Center
              </a>
              <a href="/about/contact" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Request Tutorial
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
