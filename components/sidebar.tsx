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
  Calculator,
  Calendar,
  BookOpen,
  BarChart,
  DollarSign,
  TrendingUp,
  Shield,
  Heart,
  MapPin,
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
    const procesosPages = ["/calculos-mensuales", "/periodos", "/previred", "/lre", "/leer-libro", "/informes-liquidos"]
    const parametrosPages = [
      "/sis",
      "/uf",
      "/utm",
      "/mutual",
      "/topes-imponibles",
      "/valores-anuales",
      "/afp",
      "/isapres",
      "/estado-civil",
      "/ciudades",
    ]

    if (mantenedoresPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("mantenedores") ? prev : [...prev, "mantenedores"]))
    } else if (contratosPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("contratos") ? prev : [...prev, "contratos"]))
    } else if (procesosPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("procesos") ? prev : [...prev, "procesos"]))
    } else if (parametrosPages.includes(pathname)) {
      setExpandedMenus((prev) => (prev.includes("parametros") ? prev : [...prev, "parametros"]))
    }
  }, [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6">
        {/* Header */}
        <Link href='/' className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold">Contratos</h1>
        </Link>

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
                <Link
                  href="/horas-extras"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/horas-extras") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Horas Extras Bonos
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Procesos */}
          <div className="space-y-1">
            <button
              className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors"
              onClick={() => toggleMenu("procesos")}
            >
              <div className="flex items-center gap-3">
                <ClipboardList className="w-4 h-4" />
                <span>Procesos</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedMenus.includes("procesos") ? "rotate-180" : ""}`}
              />
            </button>
            {expandedMenus.includes("procesos") && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/procesos/calculos-mensual"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/calculos-mensuales") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Calculos Mensuales
                  </div>
                </Link>
                <Link
                  href="/procesos/periodos"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/periodos") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Mantenedor Periodos
                  </div>
                </Link>
                <Link
                  href="/procesos/previred"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/previred") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Previred
                  </div>
                </Link>
                <Link
                  href="/procesos/lre"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/lre") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    LRE
                  </div>
                </Link>
                <Link
                  href="/procesos/leer-libro"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/leer-libro") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Leer Libro de Remuneraciones
                  </div>
                </Link>
                <Link
                  href="/procesos/informes-liquidos"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/informes-liquidos") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    Informes Líquidos
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Parámetros */}
          <div className="space-y-1">
            <button
              className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-slate-800 transition-colors"
              onClick={() => toggleMenu("parametros")}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Parámetros</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedMenus.includes("parametros") ? "rotate-180" : ""}`}
              />
            </button>
            {expandedMenus.includes("parametros") && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/parametros/sis"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/sis") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    SIS
                  </div>
                </Link>
                <Link
                  href="/parametros/uf"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/uf") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    UF
                  </div>
                </Link>
                <Link
                  href="/parametros/utm"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/utm") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    UTM
                  </div>
                </Link>
                <Link
                  href="/parametros/mutual"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/mutual") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Mutual
                  </div>
                </Link>
                <Link
                  href="/parametros/topes-imponibles"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/topes-imponibles") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    Topes Imponibles
                  </div>
                </Link>
                <Link
                  href="/parametros/valores-anuales"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/valores-anuales") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Valores Anuales
                  </div>
                </Link>
                <Link
                  href="/parametros/afp"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/afp") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    AFP
                  </div>
                </Link>
                <Link
                  href="/parametros/isapres"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/isapres") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    ISAPRES
                  </div>
                </Link>
                <Link
                  href="/parametros/estado-civil"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/estado-civil") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Estado Civil
                  </div>
                </Link>
                <Link
                  href="/parametros/ciudades"
                  className={`block p-2 text-sm rounded-md transition-colors ${
                    isActive("/ciudades") ? "bg-slate-700 text-white" : "hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Ciudades
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}
