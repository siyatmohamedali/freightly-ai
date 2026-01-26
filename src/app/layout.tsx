import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ 
  subsets: ["latin"],
  variable: "--font-recursive"
});

export const metadata: Metadata = {
  title: "FreightlyAI - Freight Management SaaS",
  description: "Simple freight management for logistics brokers",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
          card: "shadow-lg",
          headerTitle: "text-gray-900 font-recursive",
          headerSubtitle: "text-gray-600 font-atkinson",
          socialButtonsBlockButton: "border-gray-300 hover:bg-gray-50",
          formFieldInput: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          footerActionLink: "text-blue-600 hover:text-blue-700",
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
        }
      }}
      // Development-friendly options
      options={{
        // Disable bot protection in development
        experimental: {
          captchaPublicKey: process.env.NODE_ENV === 'development' ? undefined : 'auto'
        }
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
          {/* Preload Clerk scripts for better performance */}
          <link rel="preconnect" href="https://clerk.accounts.dev" />
          <link rel="preconnect" href="https://api.clerk.com" />
          <title>FreightlyAI</title>
        </head>
        <body className={`${inter.className} ${recursive.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
