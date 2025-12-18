"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Demo admin login
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const demoToken = "admin_" + Math.random().toString(36).substring(7)
    login(demoToken, "admin", "demo_admin_1")
    toast.success("Admin login successful!")
    router.push("/admin")
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Sign in to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@homeloop.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="any password works" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
            <strong>Demo Mode:</strong> Enter any email and password to login as admin.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
