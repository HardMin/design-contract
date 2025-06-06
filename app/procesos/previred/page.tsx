"use client"

import { useState } from "react"
import { FileText, Eye, FileSpreadsheet, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TrabajadorPrevired {
  rut: string
  dv: string
  apellidoPaterno: string
  apellidoMaterno: string
  nombres: string
  sexo: string
  nacionalidad: string
  tipoPago: string
  periodoDesde: string
  periodoHasta: string
  regimenPrevisional: string
  tipoTrabajador: string
  diasTrabajados: string
}

const trabajadoresData: TrabajadorPrevired[] = [
  {
    rut: "00012764109",
    dv: "9",
    apellidoPaterno: "ACUÑA",
    apellidoMaterno: "PINEDA",
    nombres: "MAURICIO",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "12",
  },
  {
    rut: "00013053834",
    dv: "7",
    apellidoPaterno: "ALARCON",
    apellidoMaterno: "CASTRO",
    nombres: "PABLO",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "30",
  },
  {
    rut: "00011238706",
    dv: "4",
    apellidoPaterno: "ALCARRUZ",
    apellidoMaterno: "VASQUEZ",
    nombres: "ROBINSON",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "02",
  },
  {
    rut: "00013045625",
    dv: "1",
    apellidoPaterno: "ALDEA",
    apellidoMaterno: "VILLALON",
    nombres: "RODRIGO",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "03",
  },
  {
    rut: "00014038935",
    dv: "8",
    apellidoPaterno: "ALLENDES",
    apellidoMaterno: "FERNANDEZ",
    nombres: "RODRIGO ANDRES",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "01",
  },
  {
    rut: "00018264765",
    dv: "9",
    apellidoPaterno: "ARAYA",
    apellidoMaterno: "ORTIZ",
    nombres: "FELIPE MAXIMILIANO",
    sexo: "M",
    nacionalidad: "0",
    tipoPago: "01",
    periodoDesde: "052025",
    periodoHasta: "052025",
    regimenPrevisional: "AFP",
    tipoTrabajador: "0",
    diasTrabajados: "01",
  },
]

export default function PreviredPage() {
  const [periodo, setPeriodo] = useState("202505")
  const [trabajadores, setTrabajadores] = useState<TrabajadorPrevired[]>(trabajadoresData)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Previred</h1>
          <p className="text-slate-600">Gestión de información para Previred</p>
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

      {/* Tabla de trabajadores */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">RUT Trabajador</TableHead>
                  <TableHead className="font-semibold">DV Trabajador</TableHead>
                  <TableHead className="font-semibold">Apellido Paterno</TableHead>
                  <TableHead className="font-semibold">Apellido Materno</TableHead>
                  <TableHead className="font-semibold">Nombres</TableHead>
                  <TableHead className="font-semibold">Sexo</TableHead>
                  <TableHead className="font-semibold">Nacionalidad</TableHead>
                  <TableHead className="font-semibold">Tipo Pago</TableHead>
                  <TableHead className="font-semibold">Período (Desde)</TableHead>
                  <TableHead className="font-semibold">Período (Hasta)</TableHead>
                  <TableHead className="font-semibold">Régimen Previsional</TableHead>
                  <TableHead className="font-semibold">Tipo Trabajador</TableHead>
                  <TableHead className="font-semibold">Días Trabajados</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trabajadores.map((trabajador, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{trabajador.rut}</TableCell>
                    <TableCell>{trabajador.dv}</TableCell>
                    <TableCell>{trabajador.apellidoPaterno}</TableCell>
                    <TableCell>{trabajador.apellidoMaterno}</TableCell>
                    <TableCell>{trabajador.nombres}</TableCell>
                    <TableCell>{trabajador.sexo}</TableCell>
                    <TableCell>{trabajador.nacionalidad}</TableCell>
                    <TableCell>{trabajador.tipoPago}</TableCell>
                    <TableCell>{trabajador.periodoDesde}</TableCell>
                    <TableCell>{trabajador.periodoHasta}</TableCell>
                    <TableCell>{trabajador.regimenPrevisional}</TableCell>
                    <TableCell>{trabajador.tipoTrabajador}</TableCell>
                    <TableCell>{trabajador.diasTrabajados}</TableCell>
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
