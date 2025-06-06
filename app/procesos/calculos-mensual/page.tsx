"use client"

import { useState } from "react"
import { Calculator, FileSpreadsheet, Eye, FileText, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CalculosMensualesPage() {
  const [tipo, setTipo] = useState("mensual")
  const [periodo, setPeriodo] = useState("202505")

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calculator className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Calculos Mensuales</h1>
          <p className="text-slate-600">Procesa los cálculos mensuales del sistema</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración de Cálculo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tipo de Cálculo */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Tipo</Label>
            <RadioGroup value={tipo} onValueChange={setTipo} className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="proyecto-trabajador" id="proyecto-trabajador" />
                <Label htmlFor="proyecto-trabajador" className="font-normal">
                  Proyecto Trabajador
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mensual" id="mensual" />
                <Label htmlFor="mensual" className="font-normal">
                  Mensual
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Período */}
          <div className="space-y-2">
            <Label htmlFor="periodo" className="text-base font-medium">
              Período
            </Label>
            <Input
              id="periodo"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              placeholder="YYYYMM"
              className="max-w-xs"
            />
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 min-w-24">
              <Eye className="w-4 h-4 mr-2" />
              Ver
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 min-w-24">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Excel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 min-w-24">
              <FileText className="w-4 h-4 mr-2" />
              Previred
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 min-w-24">
              <Zap className="w-4 h-4 mr-2" />
              LRE
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Área de resultados */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center py-16">
            <Calculator className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Resultados de Cálculo</h3>
            <p className="text-slate-600">
              Selecciona el tipo de cálculo y período, luego presiona "Ver" para mostrar los resultados.
            </p>
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
