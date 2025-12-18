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

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Demo login - accept any credentials
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Generate demo token
    const demoToken = "demo_" + Math.random().toString(36).substring(7)
    login(demoToken, "provider", "demo_provider_1")
    toast.success("Login successful!")
    router.push("/dashboard")
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Provider Login</CardTitle>
          <CardDescription>Sign in to manage your HomeLoop profile</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="demo@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="any password works" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account? <Link href="/register" className="text-blue-600 hover:underline">Register here</Link>
          </p>
          <p className="text-center mt-2 text-sm text-gray-600">
            <Link href="/admin/login" className="text-gray-500 hover:underline">Admin Login</Link>
          </p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
            <strong>Demo Mode:</strong> Enter any email and password to login.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
