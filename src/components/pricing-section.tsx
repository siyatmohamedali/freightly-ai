"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap, Crown, Building } from "lucide-react"

const plans = [
  {
    name: "Small Business",
    price: "$29",
    period: "per month",
    description: "Perfect for small freight brokers",
    icon: Zap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    features: [
      "Up to 50 shipments per month",
      "Up to 20 carriers",
      "Shipment management",
      "Carrier assignment",
      "AI document extraction",
      "AI email generator",
      "Email support"
    ],
    cta: "Get Started",
    popular: true,
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-300"
  },
  {
    name: "Medium Business",
    price: "$49",
    period: "per month",
    description: "For growing logistics companies",
    icon: Crown,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    features: [
      "Unlimited shipments",
      "Unlimited carriers",
      "Everything in Small Business",
      "Priority support",
      "Advanced reporting",
      "Team collaboration",
      "Custom fields"
    ],
    cta: "Get Started",
    popular: false,
    cardBg: "bg-white",
    borderColor: "border-gray-200"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large logistics operations",
    icon: Building,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    features: [
      "Everything in Medium Business",
      "Custom integrations",
      "Dedicated support manager",
      "SLA guarantee",
      "Advanced security",
      "Custom training",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    popular: false,
    cardBg: "bg-white",
    borderColor: "border-gray-200"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-recursive">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
            Choose the plan that fits your business. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative ${plan.cardBg} rounded-3xl border-2 ${plan.borderColor} p-8 ${
                plan.popular 
                  ? 'shadow-2xl scale-105 ring-2 ring-blue-500 ring-opacity-20' 
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300 group cursor-pointer transform-gpu`}
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = 'scale3d(1.03, 1.03, 1.03) rotateX(3deg) rotateY(3deg)'
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'
                }
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-recursive">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900 font-recursive">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg font-atkinson">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 text-lg font-atkinson">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg font-atkinson">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full text-lg py-6 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg' 
                    : 'bg-gray-900 hover:bg-gray-800'
                } transition-all duration-300`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg mb-4">
              <strong>All plans include:</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <span className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                24/7 support
              </span>
              <span className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                30-day money-back guarantee
              </span>
              <span className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                No setup fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}