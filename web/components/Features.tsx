export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Instant GPS Coordinates",
      description: "Upload an address and receive precise GPS coordinates before your crew leaves the shop."
    },
    {
      icon: "🛰️",
      title: "Satellite Imagery Analysis",
      description: "Computer vision detects manholes, inspection ports, and concrete rectangles in aerial photos."
    },
    {
      icon: "📊",
      title: "Property Records Integration",
      description: "Combines public records with geospatial data for comprehensive location intelligence."
    },
    {
      icon: "📏",
      title: "Depth Estimates",
      description: "Get depth information for buried tanks to arrive with the right equipment."
    },
    {
      icon: "📸",
      title: "Photo Documentation",
      description: "View photos of identified locations with visual markers and annotations."
    },
    {
      icon: "🤝",
      title: "Crowdsourced Database",
      description: "Technicians log new discoveries, building a database that improves for everyone."
    },
    {
      icon: "🧠",
      title: "Machine Learning Engine",
      description: "System learns from successful locations, improving accuracy with every data point."
    },
    {
      icon: "📱",
      title: "Mobile-First Interface",
      description: "Simple, accessible app designed for field use with offline capabilities."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Septic Service Operations
          </h2>
          <p className="text-xl text-gray-600">
            Stop wasting hours with metal detectors and guesswork. Get instant, AI-powered location data.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
