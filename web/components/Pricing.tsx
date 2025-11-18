export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for solo operators and small service providers",
      features: [
        "50 location lookups/month",
        "Basic GPS coordinates",
        "Property records access",
        "Mobile app access",
        "Email support"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Best for growing septic service companies",
      features: [
        "200 location lookups/month",
        "GPS + depth estimates",
        "Satellite imagery analysis",
        "Photo documentation",
        "Priority support",
        "Log new discoveries",
        "Team access (up to 5)"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$250",
      period: "/month",
      description: "For large operations and municipalities",
      features: [
        "Unlimited lookups",
        "Full AI analysis suite",
        "Custom territory coverage",
        "API access",
        "White-label options",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-4 ring-blue-300 scale-105'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-green-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <button className={`w-full py-3 rounded-lg font-semibold mb-6 transition-colors ${
                plan.highlighted
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {plan.cta}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-green-300' : 'text-green-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
