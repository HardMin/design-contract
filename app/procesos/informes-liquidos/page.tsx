"use client"

import { useState } from "react"
import { BarChart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InformesLiquidosPage() {
  const [fechaInicial, setFechaInicial] = useState("")
  const [fechaFinal, setFechaFinal] = useState("")

  // Función para convertir fecha de YYYY-MM-DD a DD/MM/YYYY
  const formatDateForDisplay = (dateStr: string) => {
    if (!dateStr) return ""
    const [year, month, day] = dateStr.split("-")
    return `${day}/${month}/${year}`
  }

  // Función para convertir fecha de DD/MM/YYYY a YYYY-MM-DD
  const formatDateForInput = (dateStr: string) => {
    if (!dateStr) return ""
    const [day, month, year] = dateStr.split("/")
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Informes Líquidos</h1>
          <p className="text-slate-600">Generación de informes de liquidaciones</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración de Informe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fecha Inicial */}
            <div className="space-y-2">
              <Label htmlFor="fechaInicial">Fecha Inicial</Label>
              <Input
                id="fechaInicial"
                type="date"
                value={formatDateForInput(fechaInicial)}
                onChange={(e) => setFechaInicial(formatDateForDisplay(e.target.value))}
              />
            </div>

            {/* Fecha Final */}
            <div className="space-y-2">
              <Label htmlFor="fechaFinal">Fecha Final</Label>
              <Input
                id="fechaFinal"
                type="date"
                value={formatDateForInput(fechaFinal)}
                onChange={(e) => setFechaFinal(formatDateForDisplay(e.target.value))}
              />
            </div>
          </div>

          {/* Botón de Ver */}
          <div className="flex justify-center pt-4">
            <Button className="bg-slate-900 hover:bg-slate-800 min-w-24 w-full">
              <Eye className="w-4 h-4 mr-2" />
              Ver
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Área de resultados */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center py-16">
            <BarChart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Resultados del Informe</h3>
            <p className="text-slate-600">Selecciona un rango de fechas y presiona "Ver" para generar el informe.</p>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-slate-500 py-4">
        Copyright © 2014-2022{" "}
        <a href="#" className="text-blue-600 hover:text-blue-700">
          AdminLTE.io
        </a>
        . All rights reserved.
        <span className="float-right">Version 3.0.0</span>
      </div>
    </div>
  )
}
