"use client"

import { Navbar, Footer } from "@/components/layout"
import { Toaster } from "@/components/ui/sonner"

export function ClientLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}
