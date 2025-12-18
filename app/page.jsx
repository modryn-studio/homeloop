"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplet, Zap, Thermometer, Trees, Sparkles, Home, Paintbrush, Bug, Search, ChevronRight } from "lucide-react"

const iconMap = {
  droplet: Droplet,
  zap: Zap,
  thermometer: Thermometer,
  trees: Trees,
  sparkles: Sparkles,
  home: Home,
  paintbrush: Paintbrush,
  bug: Bug,
}

function CategoryIcon({ iconName, className }) {
  const Icon = iconMap[iconName] || Home
  return <Icon className={className} />
}

export default function HomePage() {
  const [searchZip, setSearchZip] = useState("")
  const [searchCategory, setSearchCategory] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchCategory) {
      router.push(`/directory/${searchCategory}${searchZip ? `?zip=${searchZip}` : ""}`)
    } else {
      router.push(`/directory${searchZip ? `?zip=${searchZip}` : ""}`)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Trusted Home Service Providers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with qualified professionals in your area. Fast, easy, and reliable.
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={searchCategory} onValueChange={setSearchCategory}>
                  <SelectTrigger className="flex-1 text-gray-800">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={searchZip}
                  onChange={(e) => setSearchZip(e.target.value)}
                  className="flex-1 text-gray-800"
                />
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-5 w-5 mr-2" /> Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link key={cat.id} href={`/directory/${cat.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group-hover:border-blue-500">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <CategoryIcon iconName={cat.icon_name} className="h-8 w-8 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                    {cat.subcategories?.length > 0 && (
                      <p className="text-sm text-gray-500 mt-1">{cat.subcategories.length} subcategories</p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Search", desc: "Browse categories or search by service and location" },
              { step: 2, title: "Compare", desc: "View provider profiles, services, and contact info" },
              { step: 3, title: "Connect", desc: "Submit a request and get contacted within hours" },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Service Provider?</h2>
          <p className="text-xl text-blue-100 mb-8">Join HomeLoop and start receiving leads today. Setup takes less than 15 minutes.</p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Get Started Free <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
