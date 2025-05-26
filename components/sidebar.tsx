"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  Settings,
  ChevronDown,
  Building2,
  Users,
  BarChart3,
  UserCog,
  FolderOpen,
  PenTool,
  Clock,
  ClipboardList,
} from "lucide-react"

export default function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])
  const pathname = usePathname()

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => (prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]))
  }

  useEffect(() => {
    const mantenedoresPages = ["/datos-empresa", "/personal", "/jefes-produccion", "/usuarios"]
    const contratosPages = ["/proyectos", "/contratos", "/firma-electronica", "/horas-extras"]

    if (mantenedoresPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("mantenedores") ? prev : [...prev, "mantenedores"]))
    } else if (contratosPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("contratos") ? prev : [...prev, "contratos"]))
    }
  }, [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 sticky top-0">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href='/'
            className="flex items-center gap-3"
            >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold">Contratos</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {/* Mantenedores */}
          <div className="space-y-1">
            <button
              className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors"
              onClick={() => toggleMenu("mantenedores")}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Mantenedores</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedMenus.includes("mantenedores") ? "rotate-180" : ""}`}
              />
            </button>
            {expandedMenus.includes("mantenedores") && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/datos-empresa"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/datos-empresa") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Datos Empresa
                  </div>
                </Link>
                <Link
                  href="/personal"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/personal") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Personal
                  </div>
                </Link>
                <Link
                  href="/jefes-produccion"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/jefes-produccion") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Jefes de Producción
                  </div>
                </Link>
                <Link
                  href="/usuarios"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/usuarios") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCog className="w-4 h-4" />
                    Usuarios
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Contratos */}
          <div className="space-y-1">
            <button
              className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors"
              onClick={() => toggleMenu("contratos")}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>Contratos</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedMenus.includes("contratos") ? "rotate-180" : ""}`}
              />
            </button>
            {expandedMenus.includes("contratos") && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/proyectos"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/proyectos") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-4 h-4" />
                    Proyectos
                  </div>
                </Link>
                <Link
                  href="/contratos"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/contratos") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" />
                    Contratos
                  </div>
                </Link>
                <Link
                  href="/firma-electronica"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/firma-electronica") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <PenTool className="w-4 h-4" />
                    Firma Electrónica
                  </div>
                </Link>
                {/* <Link
                  href="/horas-extras"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/horas-extras") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Horas Extras Bonos
                  </div>
                </Link> */}
              </div>
            )}
          </div>

          {/* Procesos */}
          {/* <button className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-4 h-4" />
              <span>Procesos</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </button> */}

          {/* Parámetros */}
          {/* <button className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4" />
              <span>Parámetros</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </button> */}
        </nav>
      </div>
    </div>
  )
}
