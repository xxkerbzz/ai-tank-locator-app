import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Team - SepticSleuth Leadership',
  description: 'Meet the team behind SepticSleuth. Industry experts, engineers, and innovators working to transform septic service operations.',
}

export default function TeamPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at a leading GIS company. 15 years experience in geospatial technology and AI.",
      expertise: ["Geospatial Tech", "AI/ML", "SaaS"]
    },
    {
      name: "Sarah Martinez",
      role: "CTO & Co-Founder",
      bio: "PhD in Computer Vision from MIT. Previously led satellite imagery analysis team at a major tech company.",
      expertise: ["Computer Vision", "Machine Learning", "Satellite Imagery"]
    },
    {
      name: "Mike Johnson",
      role: "Head of Operations",
      bio: "30 years as septic service contractor. Brings real-world industry knowledge and customer perspective.",
      expertise: ["Septic Industry", "Field Operations", "Customer Success"]
    },
    {
      name: "Jennifer Park",
      role: "VP of Engineering",
      bio: "Former Principal Engineer at mapping startup. Specializes in scalable infrastructure and APIs.",
      expertise: ["Infrastructure", "APIs", "Scalability"]
    },
    {
      name: "David Kumar",
      role: "Head of Data Science",
      bio: "Former research scientist. Expert in ML model development and geospatial data analysis.",
      expertise: ["Data Science", "ML Models", "Analytics"]
    },
    {
      name: "Emily Roberts",
      role: "VP of Sales",
      bio: "15 years in B2B SaaS sales. Previously grew enterprise division at construction tech company.",
      expertise: ["Enterprise Sales", "Customer Success", "Partnerships"]
    }
  ]

  return (
    <>
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-2xl text-blue-100">
              Industry experts and innovators working to transform septic service operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mb-4 mx-auto"></div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-semibold text-center mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're growing and always looking for talented individuals who are passionate about solving real-world problems.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Remote-First</h3>
                <p className="text-gray-600 text-sm">Work from anywhere in North America</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600 text-sm">Health, dental, vision, and 401(k)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 text-sm">Learn and advance your career</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="/about/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
