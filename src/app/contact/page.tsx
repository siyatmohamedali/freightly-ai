import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageTransition>
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-recursive">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
                Have questions about FreightlyAI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-recursive">
                  Send us a message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-atkinson">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-atkinson"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-atkinson">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-atkinson"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-atkinson">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-atkinson"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-atkinson">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-atkinson"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-atkinson">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-atkinson"
                      placeholder="Tell us about your freight management needs..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 font-atkinson" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-recursive">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8 font-atkinson">
                    We're here to help you streamline your freight operations. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 font-recursive">Email</h3>
                      <p className="text-gray-600 font-atkinson">support@freightlyai.com</p>
                      <p className="text-gray-600 font-atkinson">sales@freightlyai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 font-recursive">Phone</h3>
                      <p className="text-gray-600 font-atkinson">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 font-atkinson">Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 font-recursive">Office</h3>
                      <p className="text-gray-600 font-atkinson">
                        123 Logistics Ave<br />
                        Suite 100<br />
                        Chicago, IL 60601
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 font-recursive">
                    Need immediate help?
                  </h3>
                  <p className="text-gray-600 mb-4 font-atkinson">
                    Our support team is available 24/7 to help with any urgent issues.
                  </p>
                  <Button variant="outline" className="w-full font-atkinson">
                    Access Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}