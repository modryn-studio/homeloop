"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { providers } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, FileText, Upload, Mail, Plus, Trash2, Home } from "lucide-react"
import { toast } from "sonner"

// Demo profile data - simulates what would come from a database
const getDemoProfile = () => {
  // Use first provider as demo data
  const baseProvider = providers[0]
  return {
    ...baseProvider,
    status: "active",
    submissions_count: 3,
  }
}

// Demo submissions
const demoSubmissions = [
  {
    id: "sub_1",
    homeowner_name: "Sarah Johnson",
    homeowner_email: "sarah.j@email.com",
    homeowner_phone: "(512) 555-1234",
    service_needed: "Need emergency repair for a leaking pipe under the kitchen sink. Water is dripping constantly.",
    preferred_contact_time: "Morning (8am-12pm)",
    zip_code: "78702",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "sub_2",
    homeowner_name: "Michael Chen",
    homeowner_email: "m.chen@email.com",
    homeowner_phone: "(512) 555-5678",
    service_needed: "Looking to replace my old water heater with a tankless system. Would like a quote.",
    preferred_contact_time: "Afternoon (12pm-5pm)",
    zip_code: "78704",
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "sub_3",
    homeowner_name: "Emily Rodriguez",
    homeowner_email: "emily.r@email.com",
    homeowner_phone: "(512) 555-9012",
    service_needed: "Bathroom remodel - need new plumbing for shower and vanity.",
    preferred_contact_time: "Anytime",
    zip_code: "78703",
    created_at: new Date(Date.now() - 259200000).toISOString(),
  },
]

function ProfileEditor({ profile, onUpdate }) {
  const [formData, setFormData] = useState({
    business_name: profile?.business_name || "",
    phone: profile?.phone || "",
    bio: profile?.bio || "",
    business_hours: profile?.business_hours || "",
    average_response_time: profile?.average_response_time || "",
    service_areas: profile?.service_areas?.join(", ") || ""
  })
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    toast.success("Profile updated!")
    setSaving(false)
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Business Name</Label>
              <Input value={formData.business_name} onChange={(e) => setFormData({...formData, business_name: e.target.value})} />
            </div>
            <div>
              <Label>Phone</Label>
              <Input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <Label>Bio (max 500 characters)</Label>
              <Textarea value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} maxLength={500} rows={4} />
            </div>
            <div>
              <Label>Business Hours</Label>
              <Input value={formData.business_hours} onChange={(e) => setFormData({...formData, business_hours: e.target.value})} placeholder="e.g., Mon-Fri: 8AM-6PM" />
            </div>
            <div>
              <Label>Average Response Time</Label>
              <Select value={formData.average_response_time} onValueChange={(v) => setFormData({...formData, average_response_time: v})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Within 1 hour">Within 1 hour</SelectItem>
                  <SelectItem value="Within 2 hours">Within 2 hours</SelectItem>
                  <SelectItem value="Within 4 hours">Within 4 hours</SelectItem>
                  <SelectItem value="Within 24 hours">Within 24 hours</SelectItem>
                  <SelectItem value="Within 48 hours">Within 48 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Service Areas (ZIP codes, comma-separated)</Label>
              <Input value={formData.service_areas} onChange={(e) => setFormData({...formData, service_areas: e.target.value})} placeholder="02138, 02139, 02140" />
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Logo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {profile?.logo_url ? (
                <img src={profile.logo_url} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <Home className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <Label htmlFor="logo-upload" className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 border-2 border-dashed rounded-lg p-4 hover:border-blue-500 transition-colors">
                <Upload className="h-5 w-5" />
                <span>Upload Logo</span>
              </div>
              <input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={() => toast.info("Demo mode: File upload simulated")} />
            </Label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Publish Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Submit your profile for admin review to go live on HomeLoop.</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Requirements:</strong></p>
            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
              <li>Minimum 3 services</li>
              <li>At least 1 service area</li>
            </ul>
            <Button className="w-full" disabled={profile?.status === "active"} onClick={() => toast.success("Profile submitted for review!")}>
              {profile?.status === "active" ? "Already Published" : "Submit for Review"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ServicesEditor({ profile }) {
  const [services, setServices] = useState(profile?.services || [])
  const [newService, setNewService] = useState({ title: "", description: "" })

  const handleAdd = async () => {
    if (!newService.title) return
    const newSvc = {
      id: "srv_new_" + Date.now(),
      title: newService.title,
      description: newService.description
    }
    setServices([...services, newSvc])
    setNewService({ title: "", description: "" })
    toast.success("Service added!")
  }

  const handleDelete = (serviceId) => {
    setServices(services.filter(s => s.id !== serviceId))
    toast.success("Service deleted!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Service Title *</Label>
              <Input value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} placeholder="e.g., Emergency Plumbing" />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea value={newService.description} onChange={(e) => setNewService({...newService, description: e.target.value})} placeholder="Describe this service..." rows={3} />
            </div>
            <Button onClick={handleAdd} disabled={!newService.title}>
              <Plus className="h-4 w-4 mr-2" /> Add Service
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Services ({services.length})</CardTitle>
          <CardDescription>You need at least 3 services to publish your profile</CardDescription>
        </CardHeader>
        <CardContent>
          {services.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No services added yet. Add your first service above.</p>
          ) : (
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="flex items-start justify-between border-b pb-4 last:border-0">
                  <div>
                    <h4 className="font-semibold">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function GalleryEditor({ profile }) {
  const [gallery, setGallery] = useState(profile?.gallery || [])

  const handleUpload = () => {
    toast.info("Demo mode: File upload simulated")
  }

  const handleDelete = (imageId) => {
    setGallery(gallery.filter(g => g.id !== imageId))
    toast.success("Image deleted!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo Gallery ({gallery.length}/12)</CardTitle>
        <CardDescription>Upload up to 12 photos to showcase your work</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {gallery.map(img => (
            <div key={img.id} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img src={img.image_url} alt="Gallery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="destructive" size="icon" onClick={() => handleDelete(img.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {gallery.length < 12 && (
          <Label htmlFor="gallery-upload" className="cursor-pointer">
            <div className="flex items-center justify-center gap-2 border-2 border-dashed rounded-lg p-8 hover:border-blue-500 transition-colors">
              <Upload className="h-6 w-6" />
              <span>Upload Photo</span>
            </div>
            <input id="gallery-upload" type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </Label>
        )}
      </CardContent>
    </Card>
  )
}

function LeadsViewer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Requests</CardTitle>
        <CardDescription>Contact submissions from potential customers</CardDescription>
      </CardHeader>
      <CardContent>
        {demoSubmissions.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No submissions yet. Make sure your profile is published!</p>
        ) : (
          <div className="space-y-4">
            {demoSubmissions.map(sub => (
              <Card key={sub.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold">{sub.homeowner_name}</h4>
                      <p className="text-sm text-gray-600">{sub.homeowner_email} • {sub.homeowner_phone}</p>
                    </div>
                    <Badge variant="secondary">{sub.zip_code}</Badge>
                  </div>
                  <p className="text-gray-800 mb-2"><strong>Service Needed:</strong> {sub.service_needed}</p>
                  {sub.preferred_contact_time && <p className="text-sm text-gray-600"><strong>Preferred Time:</strong> {sub.preferred_contact_time}</p>}
                  <p className="text-xs text-gray-400 mt-2">{new Date(sub.created_at).toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function ProviderDashboard() {
  const { token, userType, loading } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState(null)
  const [activeTab, setActiveTab] = useState("profile")

  useEffect(() => {
    if (!loading && (!token || userType !== "provider")) {
      router.push("/login")
      return
    }
    if (token && userType === "provider") {
      setProfile(getDemoProfile())
    }
  }, [token, userType, loading, router])

  if (loading || !profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {profile.business_name}</h1>
          <p className="text-gray-600">Manage your HomeLoop profile and leads</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <Badge variant={profile.status === "active" ? "default" : profile.status === "pending" ? "secondary" : "destructive"}>
            {profile.status.charAt(0).toUpperCase() + profile.status.slice(1)}
          </Badge>
          <Link href={`/providers/${profile.slug}`}>
            <Button variant="outline">View Public Profile</Button>
          </Link>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="profile"><User className="h-4 w-4 mr-2" /> Profile</TabsTrigger>
          <TabsTrigger value="services"><FileText className="h-4 w-4 mr-2" /> Services</TabsTrigger>
          <TabsTrigger value="gallery"><Upload className="h-4 w-4 mr-2" /> Gallery</TabsTrigger>
          <TabsTrigger value="leads"><Mail className="h-4 w-4 mr-2" /> Leads ({profile.submissions_count || 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileEditor profile={profile} onUpdate={() => {}} />
        </TabsContent>

        <TabsContent value="services">
          <ServicesEditor profile={profile} />
        </TabsContent>

        <TabsContent value="gallery">
          <GalleryEditor profile={profile} />
        </TabsContent>

        <TabsContent value="leads">
          <LeadsViewer />
        </TabsContent>
      </Tabs>
    </div>
  )
}
