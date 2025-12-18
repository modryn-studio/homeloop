"use client"

import { use, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getProvidersByCategory } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Zap, Thermometer, Trees, Sparkles, Home, Paintbrush, Bug, Search, Phone, Clock, MapPin, ChevronRight } from "lucide-react"

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

function CategoryProvidersContent({ slug }) {
  const searchParams = useSearchParams()
  const zip = searchParams.get("zip")
  
  const { category, providers } = getProvidersByCategory(slug, zip)

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <Link href="/directory" className="hover:text-blue-600">Directory</Link>
        <ChevronRight className="h-4 w-4" />
        <span>{category.name}</span>
      </div>
      
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <CategoryIcon iconName={category.icon_name} className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{category.name} Services</h1>
          {zip && <p className="text-gray-600">Near ZIP code: {zip}</p>}
        </div>
      </div>

      {providers.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Providers Found</h3>
            <p className="text-gray-600">Try adjusting your search or browse other categories.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {providers.map(provider => (
            <Link key={provider.id} href={`/providers/${provider.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-blue-500">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {provider.logo_url ? (
                        <img src={provider.logo_url} alt={provider.business_name} className="w-full h-full object-cover" />
                      ) : (
                        <Home className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{provider.business_name}</h3>
                      <p className="text-gray-600 line-clamp-2 mb-2">{provider.bio}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {provider.average_response_time}</span>
                        <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {provider.service_areas?.length || 0} areas</span>
                        <span className="flex items-center"><Phone className="h-4 w-4 mr-1" /> {provider.phone}</span>
                      </div>
                    </div>
                    <Button className="flex-shrink-0">View Profile <ChevronRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CategoryProvidersPage({ params }) {
  const { slug } = use(params)
  
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center"><div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div></div>}>
      <CategoryProvidersContent slug={slug} />
    </Suspense>
  )
}
