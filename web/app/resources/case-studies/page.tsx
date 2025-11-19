import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies - SepticSleuth Success Stories',
  description: 'Real results from septic contractors, construction firms, and homeowners using SepticSleuth to locate septic systems faster and more accurately.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Johnson Septic Services",
      location: "North Carolina",
      type: "Septic Contractor",
      challenge: "Wasting 2+ hours per job searching for tanks, limiting daily capacity to 2-3 jobs.",
      solution: "Implemented SepticSleuth Pro with team access for all field technicians.",
      results: [
        "Increased from 2-3 to 6-8 jobs per day",
        "95% reduction in location time",
        "ROI achieved in first week",
        "$45,000 additional revenue in first quarter"
      ],
      quote: "SepticSleuth transformed our business. We're completing triple the jobs with the same crew size.",
      author: "Mike Johnson, Owner"
    },
    {
      company: "Regional Construction Co.",
      location: "Pacific Northwest",
      type: "Construction Firm",
      challenge: "Hit unmarked septic system causing $38,000 in damages and 3-week project delay.",
      solution: "Adopted SepticSleuth Enterprise for pre-construction site analysis on all residential developments.",
      results: [
        "Zero septic system incidents in 18 months",
        "Avoided estimated $200K+ in potential damages",
        "Reduced site prep time by 40%",
        "Improved stakeholder confidence"
      ],
      quote: "The cost of one septic system incident far exceeds years of SepticSleuth service. It's essential insurance.",
      author: "David Park, Project Manager"
    },
    {
      company: "Martinez Property Management",
      location: "Texas",
      type: "Property Management",
      challenge: "Managing 150+ properties with septic systems, inconsistent maintenance records.",
      solution: "Mapped all properties with SepticSleuth, integrated into maintenance scheduling system.",
      results: [
        "100% of properties now have documented system locations",
        "60% reduction in emergency service calls",
        "Maintenance costs down 35%",
        "Improved tenant satisfaction scores"
      ],
      quote: "Having accurate septic data for every property has been a game-changer for preventive maintenance.",
      author: "Sarah Martinez, Operations Director"
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-2xl text-blue-100">
              Real results from businesses using SepticSleuth to transform their operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Company</div>
                    <div className="font-semibold text-gray-900">{study.company}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-semibold text-gray-900">{study.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="font-semibold text-gray-900">{study.type}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h3>
                  <p className="text-gray-700">{study.solution}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-700 mb-3 italic">"{study.quote}"</p>
                  <p className="font-semibold text-gray-900">— {study.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of businesses using SepticSleuth to increase efficiency and profitability.
            </p>
            <a href="/pricing" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
