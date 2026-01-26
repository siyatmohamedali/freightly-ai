"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "Swift Logistics",
    content: "FreightlyAI transformed our operations. We've reduced manual work by 70% and increased our shipment volume by 150% in just 6 months.",
    rating: 5,
    avatar: "SJ",
    bgColor: "bg-purple-500"
  },
  {
    name: "Mike Chen",
    role: "Freight Broker",
    company: "Pacific Transport",
    content: "The carrier management features are incredible. We can now track performance and build stronger relationships with our best carriers.",
    rating: 5,
    avatar: "MC",
    bgColor: "bg-green-500"
  },
  {
    name: "Lisa Rodriguez",
    role: "CEO",
    company: "Metro Freight Solutions",
    content: "Finally, a platform built specifically for freight brokers. The analytics help us make better decisions and grow our business.",
    rating: 5,
    avatar: "LR",
    bgColor: "bg-blue-500"
  }
]

const stats = [
  { value: "500+", label: "Active Brokers", icon: "👥" },
  { value: "50K+", label: "Shipments Managed", icon: "📦" },
  { value: "99.9%", label: "Uptime", icon: "⚡" },
  { value: "24/7", label: "Support", icon: "🎧" }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-recursive">
            Trusted by freight professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
            See how FreightlyAI is helping logistics companies streamline operations and grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative group cursor-pointer transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale3d(1.03, 1.03, 1.03) rotateX(3deg) rotateY(3deg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed text-lg font-atkinson">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className={`w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold text-lg font-recursive">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg font-recursive">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 font-atkinson">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500 font-atkinson">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}