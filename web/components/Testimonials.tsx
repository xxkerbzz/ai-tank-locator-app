export default function Testimonials() {
  const testimonials = [
    {
      quote: "SepticSleuth cut our average job time from 2 hours to 15 minutes. It's like having X-ray vision for every property we service.",
      author: "Mike Johnson",
      role: "Owner, Johnson Septic Services",
      location: "North Carolina"
    },
    {
      quote: "We used to show up unprepared and waste hours digging. Now we arrive knowing exactly where the tank is and what equipment we need.",
      author: "Sarah Martinez",
      role: "Operations Manager",
      location: "Texas Septic Solutions"
    },
    {
      quote: "The crowdsourced database means every job we complete helps the next guy. The accuracy just keeps getting better.",
      author: "Tom Chen",
      role: "Field Technician",
      location: "West Coast Septic Co."
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Service Providers Nationwide
          </h2>
          <p className="text-xl text-gray-300">
            See how SepticSleuth is transforming septic service operations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl">
              <div className="text-blue-400 text-4xl mb-4">"</div>
              <p className="text-gray-200 mb-6 text-lg">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
