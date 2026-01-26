"use client"

import { Truck, Users, Link2, FileText, Mail, Shield } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Smart Shipment Management",
    description: "Effortlessly create, organize, and track every shipment from pickup to delivery. Never lose sight of your freight again.",
    visual: (
      <div className="relative">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Truck className="h-8 w-8 text-white" />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Active Shipments</p>
          <p className="text-2xl font-bold text-gray-900">24</p>
        </div>
      </div>
    )
  },
  {
    icon: Users,
    title: "Carrier Management Hub",
    description: "Build your trusted carrier network with verified MC/DOT numbers, contact details, and performance history in one place.",
    visual: (
      <div className="relative">
        <div className="text-center mb-4">
          <div className="flex justify-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Verified Carriers</p>
        </div>
      </div>
    )
  },
  {
    icon: Link2,
    title: "Intelligent Carrier Assignment",
    description: "Match the perfect carrier to each shipment based on route, capacity, and reliability. Streamline your dispatch process.",
    visual: (
      <div className="relative">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-6 bg-blue-100 rounded flex items-center justify-center">
            <Truck className="h-4 w-4 text-blue-600" />
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Link2 className="h-6 w-6 text-white" />
          </div>
          <div className="w-8 h-6 bg-green-100 rounded flex items-center justify-center">
            <Users className="h-4 w-4 text-green-600" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Auto-matched</p>
        </div>
      </div>
    )
  },
  {
    icon: FileText,
    title: "AI Document Extraction",
    description: "Let AI instantly extract key information from bills of lading, invoices, and shipping documents. Save hours of manual data entry.",
    visual: (
      <div className="relative">
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Extracted
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Mail,
    title: "AI-Powered Email Generator",
    description: "Generate professional, personalized emails to carriers with shipment details, instructions, and updates in seconds.",
    visual: (
      <div className="relative">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
            <span className="text-xs text-white font-bold">AI</span>
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Email Generated</p>
        </div>
      </div>
    )
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with automated backups and 99.9% uptime to keep your freight operations running smoothly.",
    visual: (
      <div className="relative">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Uptime</p>
          <p className="text-2xl font-bold text-green-600">99.9%</p>
        </div>
      </div>
    )
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-recursive">
            Everything you need to manage freight
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
            Streamline your logistics operations with powerful tools designed specifically for freight brokers and logistics companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card-3d bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-2xl border border-gray-100 group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale3d(1.05, 1.05, 1.05) rotateX(8deg) rotateY(8deg)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'
                e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Visual Element */}
              <div className="mb-4 lg:mb-6 h-24 sm:h-28 lg:h-32 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.visual}
              </div>
              
              {/* Content */}
              <div className="text-center transform transition-transform duration-300 group-hover:translateZ-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3 font-recursive">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-atkinson">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}