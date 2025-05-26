import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema de Contratos",
  description: "Sistema de gestión de contratos y personal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-8">
              <div className="mx-auto">{children}</div>
              <Toaster/>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
