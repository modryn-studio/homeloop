"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { categories } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    business_name: "",
    email: "",
    password: "",
    phone: "",
    service_category_id: ""
  })
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Demo registration
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const demoToken = "demo_" + Math.random().toString(36).substring(7)
    login(demoToken, "provider", "demo_provider_new")
    toast.success("Registration successful! Complete your profile to get started.")
    router.push("/dashboard")
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Join HomeLoop</CardTitle>
          <CardDescription>Create your provider account and start receiving leads</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="business_name">Business Name *</Label>
              <Input id="business_name" value={formData.business_name} onChange={(e) => setFormData({...formData, business_name: e.target.value})} required />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required minLength={6} />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            </div>
            <div>
              <Label htmlFor="category">Primary Service Category *</Label>
              <Select value={formData.service_category_id} onValueChange={(v) => setFormData({...formData, service_category_id: v})} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={loading || !formData.service_category_id}>
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Sign in here</Link>
          </p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
            <strong>Demo Mode:</strong> Registration simulates account creation without a real backend.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
