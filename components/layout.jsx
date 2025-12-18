"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Home, LogOut, Menu, X } from "lucide-react"

export function Navbar() {
  const { user, logout, userType } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HomeLoop</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/directory" 
              className={`text-gray-600 hover:text-blue-600 ${pathname === '/directory' ? 'text-blue-600' : ''}`}
            >
              Browse Directory
            </Link>
            {user ? (
              <>
                {userType === "provider" && (
                  <Button variant="ghost" onClick={() => router.push("/dashboard")}>
                    Dashboard
                  </Button>
                )}
                {userType === "admin" && (
                  <Button variant="ghost" onClick={() => router.push("/admin")}>
                    Admin
                  </Button>
                )}
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => router.push("/login")}>
                  Provider Login
                </Button>
                <Button onClick={() => router.push("/register")}>
                  Join as Provider
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href="/directory" 
              className="block py-2 text-gray-600" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Directory
            </Link>
            {user ? (
              <>
                {userType === "provider" && (
                  <Link 
                    href="/dashboard" 
                    className="block py-2 text-gray-600" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
                {userType === "admin" && (
                  <Link 
                    href="/admin" 
                    className="block py-2 text-gray-600" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="block py-2 text-gray-600" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Provider Login
                </Link>
                <Button 
                  className="w-full" 
                  onClick={() => { router.push("/register"); setMobileMenuOpen(false); }}
                >
                  Join as Provider
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">HomeLoop</span>
            </div>
            <p className="text-sm">Find qualified home service providers in your area. Fast, easy, and reliable.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Homeowners</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/directory" className="hover:text-white">Browse Services</Link></li>
              <li><Link href="/directory/plumbing" className="hover:text-white">Find Plumbers</Link></li>
              <li><Link href="/directory/electrical" className="hover:text-white">Find Electricians</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/register" className="hover:text-white">Join HomeLoop</Link></li>
              <li><Link href="/login" className="hover:text-white">Provider Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@homeloop.com</li>
              <li>(555) 000-0000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 HomeLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
