"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { categories } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplet, Zap, Thermometer, Trees, Sparkles, Home, Paintbrush, Bug } from "lucide-react"

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

function DirectoryContent() {
  const searchParams = useSearchParams()
  const zip = searchParams.get("zip")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Browse Service Categories</h1>
      {zip && <p className="text-gray-600 mb-4">Showing results near ZIP code: <Badge>{zip}</Badge></p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link key={cat.id} href={`/directory/${cat.slug}${zip ? `?zip=${zip}` : ""}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer hover:border-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CategoryIcon iconName={cat.icon_name} className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{cat.name}</CardTitle>
                </div>
              </CardHeader>
              {cat.subcategories?.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.slice(0, 3).map(sub => (
                      <Badge key={sub.id} variant="secondary">{sub.name}</Badge>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <Badge variant="outline">+{cat.subcategories.length - 3} more</Badge>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center"><div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div></div>}>
      <DirectoryContent />
    </Suspense>
  )
}
