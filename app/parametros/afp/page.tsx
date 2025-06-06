"use client"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AFPData {
  afp: string
  porcentaje: string
}

const afpData: AFPData[] = [
  { afp: "Capital", porcentaje: "11,44" },
  { afp: "Cuprum", porcentaje: "11,44" },
  { afp: "Habitat", porcentaje: "11,27" },
  { afp: "Modelo", porcentaje: "10,58" },
  { afp: "No está en AFP", porcentaje: "0" },
  { afp: "PlanVital", porcentaje: "11,16" },
  { afp: "Provida", porcentaje: "11,45" },
  { afp: "Uno", porcentaje: "10,49" },
]

export default function AFPPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <TrendingUp className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AFP</h1>
          <p className="text-slate-600">Administradoras de Fondos de Pensiones</p>
        </div>
      </div>

      <Card>
        <CardHeader className="bg-slate-900 text-white">
          <CardTitle className="text-sm">Los datos mostrados son ingresados directamente por el Sistema</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">AFP</TableHead>
                  <TableHead className="font-semibold">Porcentaje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {afpData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.afp}</TableCell>
                    <TableCell>{item.porcentaje}</TableCell>
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
