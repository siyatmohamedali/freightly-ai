import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Ways to Optimize Your Freight Operations",
    excerpt: "Learn how to streamline your logistics processes and reduce costs with these proven strategies.",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Operations"
  },
  {
    title: "The Future of Freight Technology",
    excerpt: "Explore emerging technologies that are transforming the logistics industry.",
    date: "January 10, 2024",
    readTime: "7 min read",
    category: "Technology"
  },
  {
    title: "Building Strong Carrier Relationships",
    excerpt: "Tips for developing and maintaining partnerships with reliable carriers.",
    date: "January 5, 2024",
    readTime: "4 min read",
    category: "Business"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageTransition>
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-recursive">
                FreightlyAI Blog
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
                Insights, tips, and industry news to help you grow your freight business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 font-recursive">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 font-atkinson">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-500 font-atkinson">
                        {post.date}
                      </span>
                      <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base font-atkinson">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}