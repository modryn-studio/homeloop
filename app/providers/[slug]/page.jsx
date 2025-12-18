"use client"

import { use, useState } from "react"
import { getProviderBySlug } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Home, Phone, Clock, MapPin, CheckCircle } from "lucide-react"
import { toast } from "sonner"

function ContactForm({ providerName, onSuccess }) {
  const [formData, setFormData] = useState({
    homeowner_name: "",
    homeowner_email: "",
    homeowner_phone: "",
    service_needed: "",
    preferred_contact_time: "",
    zip_code: ""
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    toast.success("Request sent successfully!")
    setSubmitting(false)
    
    // Close dialog after a delay
    setTimeout(() => {
      if (onSuccess) onSuccess()
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Request Sent!</h3>
        <p className="text-gray-600 mb-4">Your request has been sent to {providerName}.</p>
        <div className="bg-gray-50 rounded-lg p-4 text-left">
          <p className="text-sm text-gray-600"><strong>Expected Response:</strong> Within 24 hours</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Your Name *</Label>
        <Input id="name" value={formData.homeowner_name} onChange={(e) => setFormData({...formData, homeowner_name: e.target.value})} required />
      </div>
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" value={formData.homeowner_email} onChange={(e) => setFormData({...formData, homeowner_email: e.target.value})} required />
      </div>
      <div>
        <Label htmlFor="phone">Phone *</Label>
        <Input id="phone" type="tel" value={formData.homeowner_phone} onChange={(e) => setFormData({...formData, homeowner_phone: e.target.value})} required />
      </div>
      <div>
        <Label htmlFor="zip">ZIP Code *</Label>
        <Input id="zip" value={formData.zip_code} onChange={(e) => setFormData({...formData, zip_code: e.target.value})} required maxLength={5} />
      </div>
      <div>
        <Label htmlFor="service">What service do you need? *</Label>
        <Textarea id="service" value={formData.service_needed} onChange={(e) => setFormData({...formData, service_needed: e.target.value})} required rows={3} />
      </div>
      <div>
        <Label htmlFor="time">Preferred Contact Time</Label>
        <Select value={formData.preferred_contact_time} onValueChange={(v) => setFormData({...formData, preferred_contact_time: v})}>
          <SelectTrigger>
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Morning (8am-12pm)">Morning (8am-12pm)</SelectItem>
            <SelectItem value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</SelectItem>
            <SelectItem value="Evening (5pm-8pm)">Evening (5pm-8pm)</SelectItem>
            <SelectItem value="Anytime">Anytime</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Request"}
      </Button>
    </form>
  )
}

export default function ProviderProfilePage({ params }) {
  const { slug } = use(params)
  const provider = getProviderBySlug(slug)
  const [contactOpen, setContactOpen] = useState(false)

  if (!provider) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Provider Not Found</h1>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
              {provider.logo_url ? (
                <img src={provider.logo_url} alt={provider.business_name} className="w-full h-full object-cover" />
              ) : (
                <Home className="h-16 w-16 text-blue-600" />
              )}
            </div>
            <div className="text-center md:text-left">
              <Badge className="mb-2 bg-blue-500">{provider.category_name}</Badge>
              <h1 className="text-4xl font-bold mb-2">{provider.business_name}</h1>
              <p className="text-xl text-blue-100 mb-4">{provider.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center"><Clock className="h-5 w-5 mr-2" /> {provider.average_response_time}</span>
                <span className="flex items-center"><Phone className="h-5 w-5 mr-2" /> {provider.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {provider.services?.map(service => (
                    <div key={service.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-lg">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                  {(!provider.services || provider.services.length === 0) && (
                    <p className="text-gray-500">No services listed yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            {provider.gallery?.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Photo Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {provider.gallery.map(img => (
                      <div key={img.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img src={img.image_url} alt={img.caption || "Gallery image"} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>{provider.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>{provider.business_hours}</span>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center"><MapPin className="h-5 w-5 text-gray-400 mr-2" /> Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.service_areas?.map(zip => (
                      <Badge key={zip} variant="secondary">{zip}</Badge>
                    ))}
                  </div>
                </div>
                <Dialog open={contactOpen} onOpenChange={setContactOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">Request Service</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Request Service from {provider.business_name}</DialogTitle>
                      <DialogDescription>Fill out the form below and we&apos;ll connect you with the provider.</DialogDescription>
                    </DialogHeader>
                    <ContactForm providerName={provider.business_name} onSuccess={() => setContactOpen(false)} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
