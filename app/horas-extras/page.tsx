"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { contratosData } from "@/const"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TableHorasExtras from "@/components/horas-extras/TableHorasExtras"

export default function HorasExtrasPage() {
  const [proyecto, setProyecto] = useState<boolean>(false)

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
            <Select onValueChange={(value) => {
              setProyecto(value !== "Seleccionar")
            }}>
              <SelectTrigger id="proyecto">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1465 CAJA LOS ANDES FANTASMA" >1465 CAJA LOS ANDES FANTASMA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Grabar</Button>
            <Button variant={"ghost"} className="border hover:bg-green-700 hover:text-white">Autorizar</Button>
            <Button variant={"ghost"} className="border hover:bg-purple-700 hover:text-white">Excel Resumen</Button>
          </div>
        </CardContent>
      </Card>

      {/* Área de contenido principal */}
      <Card>
        <CardContent className="p-8">
          {
            !proyecto ? (
              <div className="text-center py-16">
                <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">Gestión de Horas Extras</h3>
                <p className="text-slate-600">
                  Selecciona un proyecto para gestionar las horas extras y bonificaciones del personal.
                </p>
              </div>
            ) : (
              <TableHorasExtras/>
            )
          }
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
