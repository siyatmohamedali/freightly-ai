"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Menu, X } from "lucide-react"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-recursive">FreightlyAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <SmoothScrollLink href="#home" className="text-gray-600 hover:text-gray-900 font-medium font-atkinson transition-colors">
              Home
            </SmoothScrollLink>
            <SmoothScrollLink href="#features" className="text-gray-600 hover:text-gray-900 font-medium font-atkinson transition-colors">
              Features
            </SmoothScrollLink>
            <SmoothScrollLink href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium font-atkinson transition-colors">
              Pricing
            </SmoothScrollLink>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium font-atkinson transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium font-atkinson transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="font-atkinson">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-blue-600 hover:bg-blue-700 font-atkinson">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            <SmoothScrollLink 
              href="#home" 
              className="text-gray-600 hover:text-gray-900 font-medium font-atkinson py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 font-medium font-atkinson py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Features
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#pricing" 
              className="text-gray-600 hover:text-gray-900 font-medium font-atkinson py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Pricing
            </SmoothScrollLink>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 font-medium font-atkinson py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 font-medium font-atkinson py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full font-atkinson">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 font-atkinson">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center justify-center pt-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10"
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}