"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, Eye, FileSpreadsheet, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LeerLibroPage() {
  const [periodo, setPeriodo] = useState("")
  const [archivo, setArchivo] = useState<File | null>(null)
  const [nombreArchivo, setNombreArchivo] = useState("No se ha seleccionado ningún archivo")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setArchivo(file)
      setNombreArchivo(file.name)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leer Libro de Remuneraciones</h1>
          <p className="text-slate-600">Importación y lectura del libro de remuneraciones</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Período */}
            <div className="space-y-2">
              <Label htmlFor="periodo">Período</Label>
              <Input id="periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} placeholder="YYYYMM" />
            </div>

            {/* Archivo */}
            <div className="space-y-2">
              <Label htmlFor="archivo">Archivo</Label>
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <Input
                    id="archivo"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="w-4 h-4 mr-2" />
                    Elegir archivo
                  </Button>
                </div>
                <div className="flex-1 truncate text-sm text-slate-500">{nombreArchivo}</div>
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-slate-900 hover:bg-slate-800 min-w-24">
              <Eye className="w-4 h-4 mr-2" />
              Ver
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 min-w-24">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Excel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Área de resultados */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Resultados</h3>
            <p className="text-slate-600">
              Selecciona un período y archivo, luego presiona "Ver" para mostrar los resultados.
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
