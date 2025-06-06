import { Building2, ClipboardList, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sistema de Gestión de Contratos</h1>
          <p className="text-slate-600">Bienvenido al sistema de gestión de contratos y personal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mantenedores Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Mantenedores</CardTitle>
            </div>
            <CardDescription>Gestiona la información base del sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/datos-empresa" className="block text-sm text-blue-600 hover:text-blue-700">
              • Datos Empresa
            </Link>
            <Link href="/personal" className="block text-sm text-blue-600 hover:text-blue-700">
              • Personal
            </Link>
            <Link href="/jefes-produccion" className="block text-sm text-blue-600 hover:text-blue-700">
              • Jefes de Producción
            </Link>
            <Link href="/usuarios" className="block text-sm text-blue-600 hover:text-blue-700">
              • Usuarios
            </Link>
          </CardContent>
        </Card>

        {/* Contratos Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Contratos</CardTitle>
            </div>
            <CardDescription>Administra proyectos y contratos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/proyectos" className="block text-sm text-green-600 hover:text-green-700">
              • Proyectos
            </Link>
            <Link href="/contratos" className="block text-sm text-green-600 hover:text-green-700">
              • Contratos
            </Link>
            <Link href="/firma-electronica" className="block text-sm text-green-600 hover:text-green-700">
              • Firma Electrónica
            </Link>
            <Link href="/horas-extras" className="block text-sm text-green-600 hover:text-green-700">
              • Horas Extras Bonos
            </Link>
          </CardContent>
        </Card>

        {/* Procesos Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Procesos</CardTitle>
            </div>
            <CardDescription>Ejecuta procesos del sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/calculos-mensuales" className="block text-sm text-purple-600 hover:text-purple-700">
              • Calculos Mensuales
            </Link>
            <Link href="/periodos" className="block text-sm text-purple-600 hover:text-purple-700">
              • Mantenedor Periodos
            </Link>
            <Link href="/previred" className="block text-sm text-purple-600 hover:text-purple-700">
              • Previred
            </Link>
            <Link href="/lre" className="block text-sm text-purple-600 hover:text-purple-700">
              • LRE
            </Link>
            <Link href="/leer-libro" className="block text-sm text-purple-600 hover:text-purple-700">
              • Leer Libro de Remuneraciones
            </Link>
            <Link href="/informes-liquidos" className="block text-sm text-purple-600 hover:text-purple-700">
              • Informes Líquidos
            </Link>
          </CardContent>
        </Card>

        {/* Parametros */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Parámetros</CardTitle>
            </div>
            <CardDescription>Administra los parámetros del sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/parametros/sis" className="block text-sm text-blue-600 hover:text-blue-700">
              • SIS
            </Link>
            <Link href="/parametros/uf" className="block text-sm text-blue-600 hover:text-blue-700">
              • UF
            </Link>
            <Link href="/parametros/utm" className="block text-sm text-blue-600 hover:text-blue-700">
              • UTM
            </Link>
            <Link href="/parametros/mutual" className="block text-sm text-blue-600 hover:text-blue-700">
              • Mutual
            </Link>
            <Link href="/parametros/topes-imponibles" className="block text-sm text-blue-600 hover:text-blue-700">
              • Topes Imponibles
            </Link>
            <Link href="/parametros/valores-anuales" className="block text-sm text-blue-600 hover:text-blue-700">
              • Valores Anuales
            </Link>
            <Link href="/parametros/afp" className="block text-sm text-blue-600 hover:text-blue-700">
              • AFP
            </Link>
            <Link href="/parametros/isapres" className="block text-sm text-blue-600 hover:text-blue-700">
              • ISAPRES
            </Link>
            <Link href="/parametros/estado-civil" className="block text-sm text-blue-600 hover:text-blue-700">
              • Estado Civil
            </Link>
            <Link href="/parametros/ciudades" className="block text-sm text-blue-600 hover:text-blue-700">
              • Ciudades
            </Link>
          </CardContent>
        </Card>

        
      </div>
    </div>
  )
}
