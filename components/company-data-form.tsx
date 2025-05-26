"use client"

import { useState } from "react"
import { Building2, User, FileText, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function CompanyDataForm() {
  const [formData, setFormData] = useState({
    rut: "76138998",
    dv: "3",
    razonSocial: "Alaska Films SPA",
    direccion: "Eliodoro Yañez 2562",
    comuna: "PROVIDENCIA",
    ciudad: "Santiago",
    representanteRut: "9609383",
    representanteDv: "5",
    representanteNombre: "Andrea Francisca",
    representanteApellidoPaterno: "Osach",
    representanteApellidoMaterno: "Granilo",
    representanteDireccion: "Eliodoro Yañez 2562",
    representanteComuna: "PROVIDENCIA",
    representanteCiudad: "Santiago",
    estadoCivil: "separada",
    nacionalidad: "chilena",
    profesion: "publicista",
    idEmpresaFE: "19731",
    headerID: "432",
    headerMail: "vaguilera@acconsultores.cl",
    headerToken: "uk4xwkfT3zcfPW6-PV",
    docContrato: "5652",
    docLiquidacion: "5653",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Building2 className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Datos de la Empresa</h1>
          <p className="text-slate-600">Gestiona la información corporativa y de representación legal</p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Información de la Empresa */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Información de la Empresa
            </CardTitle>
            <CardDescription>Datos básicos de identificación corporativa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rut">RUT</Label>
                <Input
                  id="rut"
                  value={formData.rut}
                  onChange={(e) => handleInputChange("rut", e.target.value)}
                  placeholder="12345678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dv">DV</Label>
                <Input
                  id="dv"
                  value={formData.dv}
                  onChange={(e) => handleInputChange("dv", e.target.value)}
                  placeholder="9"
                  maxLength={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="razonSocial">Razón Social</Label>
                <Input
                  id="razonSocial"
                  value={formData.razonSocial}
                  onChange={(e) => handleInputChange("razonSocial", e.target.value)}
                  placeholder="Nombre de la empresa"
                />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  value={formData.direccion}
                  onChange={(e) => handleInputChange("direccion", e.target.value)}
                  placeholder="Dirección completa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comuna">Comuna</Label>
                <Input
                  id="comuna"
                  value={formData.comuna}
                  onChange={(e) => handleInputChange("comuna", e.target.value)}
                  placeholder="Comuna"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ciudad">Ciudad</Label>
                <Input
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={(e) => handleInputChange("ciudad", e.target.value)}
                  placeholder="Ciudad"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Representante Legal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Representante Legal
            </CardTitle>
            <CardDescription>Información del representante legal de la empresa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="representanteRut">RUT</Label>
                <Input
                  id="representanteRut"
                  value={formData.representanteRut}
                  onChange={(e) => handleInputChange("representanteRut", e.target.value)}
                  placeholder="12345678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representanteDv">DV</Label>
                <Input
                  id="representanteDv"
                  value={formData.representanteDv}
                  onChange={(e) => handleInputChange("representanteDv", e.target.value)}
                  placeholder="9"
                  maxLength={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representanteNombre">Nombre</Label>
                <Input
                  id="representanteNombre"
                  value={formData.representanteNombre}
                  onChange={(e) => handleInputChange("representanteNombre", e.target.value)}
                  placeholder="Nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representanteApellidoPaterno">Apellido Paterno</Label>
                <Input
                  id="representanteApellidoPaterno"
                  value={formData.representanteApellidoPaterno}
                  onChange={(e) => handleInputChange("representanteApellidoPaterno", e.target.value)}
                  placeholder="Apellido Paterno"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="representanteApellidoMaterno">Apellido Materno</Label>
                <Input
                  id="representanteApellidoMaterno"
                  value={formData.representanteApellidoMaterno}
                  onChange={(e) => handleInputChange("representanteApellidoMaterno", e.target.value)}
                  placeholder="Apellido Materno"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estadoCivil">Estado Civil</Label>
                <Input
                  id="estadoCivil"
                  value={formData.estadoCivil}
                  onChange={(e) => handleInputChange("estadoCivil", e.target.value)}
                  placeholder="Estado Civil"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nacionalidad">Nacionalidad</Label>
                <Input
                  id="nacionalidad"
                  value={formData.nacionalidad}
                  onChange={(e) => handleInputChange("nacionalidad", e.target.value)}
                  placeholder="Nacionalidad"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profesion">Profesión</Label>
                <Input
                  id="profesion"
                  value={formData.profesion}
                  onChange={(e) => handleInputChange("profesion", e.target.value)}
                  placeholder="Profesión"
                />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="representanteDireccion">Dirección</Label>
                <Input
                  id="representanteDireccion"
                  value={formData.representanteDireccion}
                  onChange={(e) => handleInputChange("representanteDireccion", e.target.value)}
                  placeholder="Dirección"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representanteComuna">Comuna</Label>
                <Input
                  id="representanteComuna"
                  value={formData.representanteComuna}
                  onChange={(e) => handleInputChange("representanteComuna", e.target.value)}
                  placeholder="Comuna"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="representanteCiudad">Ciudad</Label>
                <Input
                  id="representanteCiudad"
                  value={formData.representanteCiudad}
                  onChange={(e) => handleInputChange("representanteCiudad", e.target.value)}
                  placeholder="Ciudad"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Firma Electrónica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Configuración de Firma Electrónica
            </CardTitle>
            <CardDescription>Parámetros para la integración con servicios de firma electrónica</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="idEmpresaFE">ID Empresa FE</Label>
                <Input
                  id="idEmpresaFE"
                  value={formData.idEmpresaFE}
                  onChange={(e) => handleInputChange("idEmpresaFE", e.target.value)}
                  placeholder="ID Empresa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="headerID">Header ID</Label>
                <Input
                  id="headerID"
                  value={formData.headerID}
                  onChange={(e) => handleInputChange("headerID", e.target.value)}
                  placeholder="Header ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="headerMail">Header Mail</Label>
                <Input
                  id="headerMail"
                  type="email"
                  value={formData.headerMail}
                  onChange={(e) => handleInputChange("headerMail", e.target.value)}
                  placeholder="email@empresa.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="headerToken">Header Token</Label>
                <Input
                  id="headerToken"
                  value={formData.headerToken}
                  onChange={(e) => handleInputChange("headerToken", e.target.value)}
                  placeholder="Token de autenticación"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="docContrato">Doc. Contrato</Label>
                <Input
                  id="docContrato"
                  value={formData.docContrato}
                  onChange={(e) => handleInputChange("docContrato", e.target.value)}
                  placeholder="ID Documento"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="docLiquidacion">Doc. Liquidación</Label>
                <Input
                  id="docLiquidacion"
                  value={formData.docLiquidacion}
                  onChange={(e) => handleInputChange("docLiquidacion", e.target.value)}
                  placeholder="ID Documento"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botón de Guardar */}
        <div className="flex justify-end">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  )
}
