import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { PageTransition } from "@/components/page-transition"

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <PageTransition>
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-recursive">
                FreightlyAI Dashboard
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-atkinson">
                Welcome to your freight management dashboard. Manage your shipments, carriers, and grow your business.
              </p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 font-atkinson">Total Shipments</p>
                    <p className="text-3xl font-bold text-gray-900 font-recursive">24</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚛</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 font-atkinson">Active Carriers</p>
                    <p className="text-3xl font-bold text-gray-900 font-recursive">12</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 font-atkinson">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-gray-900 font-recursive">$45k</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 font-atkinson">Delivered</p>
                    <p className="text-3xl font-bold text-gray-900 font-recursive">18</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-recursive">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                  <div className="text-2xl mb-2">📦</div>
                  <h3 className="font-semibold text-gray-900 font-recursive">Create Shipment</h3>
                  <p className="text-sm text-gray-600 font-atkinson">Add a new shipment to track</p>
                </button>
                
                <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                  <div className="text-2xl mb-2">🚚</div>
                  <h3 className="font-semibold text-gray-900 font-recursive">Add Carrier</h3>
                  <p className="text-sm text-gray-600 font-atkinson">Register a new carrier</p>
                </button>
                
                <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="font-semibold text-gray-900 font-recursive">View Reports</h3>
                  <p className="text-sm text-gray-600 font-atkinson">Analyze your performance</p>
                </button>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  )
}