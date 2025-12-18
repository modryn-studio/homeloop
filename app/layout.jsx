import "./globals.css"
import { AuthProvider } from "@/lib/auth"
import { ClientLayout } from "./client-layout"

export const metadata = {
  title: "HomeLoop - Find Trusted Home Service Providers",
  description: "Connect with qualified home service professionals in your area. Plumbing, electrical, HVAC, landscaping, and more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
