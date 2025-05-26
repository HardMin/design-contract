"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HorasExtrasPage() {
  const [proyecto, setProyecto] = useState("1465 CAJA LOS ANDES FANTASMA")

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Clock className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Horas Extras Bonos</h1>
          <p className="text-slate-600">Gestiona las horas extras y bonificaciones</p>
        </div>
      </div>

      {/* Selector de proyecto y botones */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6">
            <Label htmlFor="proyecto">Proyecto</Label>
            <Input id="proyecto" value={proyecto} onChange={(e) => setProyecto(e.target.value)} className="mt-2" />
          </div>

          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Grabar</Button>
            <Button className="bg-green-600 hover:bg-green-700">Autorizar</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Excel Resumen</Button>
          </div>
        </CardContent>
      </Card>

      {/* Área de contenido principal */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center py-16">
            <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Gestión de Horas Extras</h3>
            <p className="text-slate-600">
              Selecciona un proyecto para gestionar las horas extras y bonificaciones del personal.
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
