"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="bg-white py-12 sm:py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-recursive">
                <TypingAnimation 
                  text="Streamline Freight, Maximize Growth" 
                  speed={80}
                  pauseDuration={3000}
                  className="font-recursive"
                />
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-atkinson">
                Take control of your logistics operations with our intuitive dashboard. Track, 
                analyze, and optimize every aspect of your freight business effortlessly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 w-full sm:w-auto">
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 w-full sm:w-auto">
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <Button variant="outline" size="lg" className="flex items-center justify-center gap-2 w-full sm:w-auto">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img 
                src="https://i.ibb.co/0p8LgcKV/1000316630.jpg" 
                alt="FreightlyAI Dashboard Preview" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}