"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-recursive">
              Ready to streamline your freight operations?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-atkinson">
              Join hundreds of freight brokers who are already using FreightlyAI to grow their business. Starting at just $29/month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-2xl shadow-xl group">
                    Start with Small Business Plan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-2xl shadow-xl group">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </SignedIn>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-2xl group">
                <Play className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Shipments Processed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}