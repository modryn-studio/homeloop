"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { providers } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"
import { toast } from "sonner"

// Demo admin stats
const demoStats = {
  total_providers: providers.length,
  active_providers: providers.filter(p => p.status === "active").length,
  pending_providers: 2,
  suspended_providers: 0,
  total_submissions: 15,
}

// Demo submissions for admin
const demoAdminSubmissions = [
  {
    id: "sub_1",
    homeowner_name: "Sarah Johnson",
    homeowner_email: "sarah.j@email.com",
    provider_name: "Premier Plumbing Solutions",
    service_needed: "Need emergency repair for a leaking pipe under the kitchen sink.",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "sub_2",
    homeowner_name: "Michael Chen",
    homeowner_email: "m.chen@email.com",
    provider_name: "Bright Spark Electric",
    service_needed: "Looking for EV charger installation quote.",
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "sub_3",
    homeowner_name: "Emily Rodriguez",
    homeowner_email: "emily.r@email.com",
    provider_name: "Cool Comfort HVAC",
    service_needed: "AC not cooling properly, need inspection.",
    created_at: new Date(Date.now() - 259200000).toISOString(),
  },
]

export default function AdminDashboard() {
  const { token, userType, loading } = useAuth()
  const router = useRouter()
  const [filter, setFilter] = useState("active")
  const [providerList, setProviderList] = useState([])

  useEffect(() => {
    if (!loading && (!token || userType !== "admin")) {
      router.push("/admin/login")
      return
    }
    
    // Filter providers based on status
    if (filter === "pending") {
      // Create some demo pending providers
      setProviderList([
        { id: "pending_1", business_name: "Quick Fix Plumbing", email: "quickfix@email.com", category_name: "Plumbing", status: "pending" },
        { id: "pending_2", business_name: "Lightning Electric Co", email: "lightning@email.com", category_name: "Electrical", status: "pending" },
      ])
    } else {
      setProviderList(providers.filter(p => p.status === filter))
    }
  }, [token, userType, loading, router, filter])

  const handleApprove = (providerId) => {
    setProviderList(providerList.filter(p => p.id !== providerId))
    toast.success("Provider approved!")
  }

  const handleSuspend = (providerId) => {
    setProviderList(providerList.filter(p => p.id !== providerId))
    toast.success("Provider suspended!")
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Providers</p>
            <p className="text-3xl font-bold">{demoStats.total_providers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Active</p>
            <p className="text-3xl font-bold text-green-600">{demoStats.active_providers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">{demoStats.pending_providers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Submissions</p>
            <p className="text-3xl font-bold text-blue-600">{demoStats.total_submissions}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="providers">
        <TabsList className="mb-8">
          <TabsTrigger value="providers">Providers</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="providers">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Manage Providers</CardTitle>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {providerList.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No {filter} providers found.</p>
              ) : (
                <div className="space-y-4">
                  {providerList.map(provider => (
                    <div key={provider.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div>
                        <h4 className="font-semibold">{provider.business_name}</h4>
                        <p className="text-sm text-gray-600">{provider.email} • {provider.category_name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={provider.status === "active" ? "default" : provider.status === "pending" ? "secondary" : "destructive"}>
                          {provider.status}
                        </Badge>
                        {provider.status === "pending" && (
                          <Button size="sm" onClick={() => handleApprove(provider.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" /> Approve
                          </Button>
                        )}
                        {provider.status === "active" && (
                          <Button size="sm" variant="destructive" onClick={() => handleSuspend(provider.id)}>
                            <XCircle className="h-4 w-4 mr-1" /> Suspend
                          </Button>
                        )}
                        {provider.status === "suspended" && (
                          <Button size="sm" onClick={() => handleApprove(provider.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" /> Reactivate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Contact Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demoAdminSubmissions.map(sub => (
                  <div key={sub.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{sub.homeowner_name}</h4>
                        <p className="text-sm text-gray-600">{sub.homeowner_email}</p>
                      </div>
                      <Badge>{sub.provider_name}</Badge>
                    </div>
                    <p className="text-sm mt-2">{sub.service_needed}</p>
                    <p className="text-xs text-gray-400 mt-1">{new Date(sub.created_at).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
