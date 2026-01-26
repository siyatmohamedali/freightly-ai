import { SignUp } from '@clerk/nextjs'
import { Header } from '@/components/header'
import { PageTransition } from '@/components/page-transition'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <PageTransition>
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-recursive">
                  Create your account
                </h1>
                <p className="text-gray-600 font-atkinson">
                  Start managing your freight operations today
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <SignUp 
                  routing="path"
                  path="/sign-up"
                  appearance={{
                    elements: {
                      formButtonPrimary: 
                        "bg-blue-600 hover:bg-blue-700 text-sm normal-case font-medium",
                      card: "shadow-none",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden",
                      socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50 text-gray-700",
                      dividerLine: "bg-gray-200",
                      dividerText: "text-gray-500 font-atkinson",
                      formFieldInput: "border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-atkinson",
                      formFieldLabel: "text-gray-700 font-atkinson font-medium",
                      footerActionLink: "text-blue-600 hover:text-blue-700 font-atkinson",
                      identityPreviewText: "font-atkinson",
                      formResendCodeLink: "text-blue-600 hover:text-blue-700",
                      // CAPTCHA specific styling
                      captcha: "border-gray-200 rounded-lg",
                      // Error handling
                      formFieldErrorText: "text-red-600 text-sm font-atkinson",
                      alertText: "font-atkinson",
                    },
                    layout: {
                      socialButtonsPlacement: "top",
                      showOptionalFields: false,
                    },
                    variables: {
                      colorPrimary: "#2563eb",
                      colorBackground: "#ffffff",
                      colorInputBackground: "#ffffff",
                      colorInputText: "#1f2937",
                      borderRadius: "0.5rem",
                    }
                  }}
                  // Development mode options
                  {...(process.env.NODE_ENV === 'development' && {
                    experimental: {
                      captchaPublicKey: undefined // Disable CAPTCHA in development
                    }
                  })}
                />
              </div>
              
              {/* Development Notice */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 font-atkinson">
                    <strong>Development Mode:</strong> CAPTCHA is disabled for easier testing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  )
}