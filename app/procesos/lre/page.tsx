"use client"

import { useState } from "react"
import { FileText, Eye, FileSpreadsheet, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RegistroLRE {
  rutTrabajador: string
  fechaInicioContrato: string
  fechaTerminoContrato: string
  causalTermino: string
  regionPrestacion: string
  comunaPrestacion: string
}

const registrosData: RegistroLRE[] = [
  {
    rutTrabajador: "10225258-6",
    fechaInicioContrato: "01/05/2025",
    fechaTerminoContrato: "07/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10396940-9",
    fechaInicioContrato: "24/04/2025",
    fechaTerminoContrato: "30/04/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10488825-9",
    fechaInicioContrato: "22/04/2025",
    fechaTerminoContrato: "31/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10488825-9",
    fechaInicioContrato: "22/04/2025",
    fechaTerminoContrato: "31/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10732032-6",
    fechaInicioContrato: "17/04/2025",
    fechaTerminoContrato: "31/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10797467-9",
    fechaInicioContrato: "01/05/2025",
    fechaTerminoContrato: "30/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "10797467-9",
    fechaInicioContrato: "01/05/2025",
    fechaTerminoContrato: "30/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "11238706-4",
    fechaInicioContrato: "31/05/2025",
    fechaTerminoContrato: "31/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "11273089-3",
    fechaInicioContrato: "01/05/2025",
    fechaTerminoContrato: "07/05/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
  {
    rutTrabajador: "11812724-2",
    fechaInicioContrato: "27/04/2025",
    fechaTerminoContrato: "27/04/2025",
    causalTermino: "6",
    regionPrestacion: "13",
    comunaPrestacion: "13114",
  },
]

export default function LREPage() {
  const [periodo, setPeriodo] = useState("202505")
  const [registros, setRegistros] = useState<RegistroLRE[]>(registrosData)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">LRE</h1>
          <p className="text-slate-600">Libro de Remuneraciones Electrónico</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Período */}
          <div className="space-y-2 max-w-xs">
            <Label htmlFor="periodo">Período</Label>
            <Input id="periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} placeholder="YYYYMM" />
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-slate-900 hover:bg-slate-800 min-w-24">
              <Eye className="w-4 h-4 mr-2" />
              Ver
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 min-w-24">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Excel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 min-w-24">
              <Download className="w-4 h-4 mr-2" />
              Descargas
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de registros */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">Rut trabajador</TableHead>
                  <TableHead className="font-semibold">Fecha inicio contrato</TableHead>
                  <TableHead className="font-semibold">Fecha de término de contrato</TableHead>
                  <TableHead className="font-semibold">Causal de término del contrato</TableHead>
                  <TableHead className="font-semibold">Región de prestación de los servicios</TableHead>
                  <TableHead className="font-semibold">Comuna de prestación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registros.map((registro, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{registro.rutTrabajador}</TableCell>
                    <TableCell>{registro.fechaInicioContrato}</TableCell>
                    <TableCell>{registro.fechaTerminoContrato}</TableCell>
                    <TableCell>{registro.causalTermino}</TableCell>
                    <TableCell>{registro.regionPrestacion}</TableCell>
                    <TableCell>{registro.comunaPrestacion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
