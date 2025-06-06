"use client"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ValoresAnualesData {
  periodoInicial: string
  periodoFinal: string
  sueldoMinimo: string
  gratificacion: string
}

const valoresAnualesData: ValoresAnualesData[] = [
  { periodoInicial: "200606", periodoFinal: "200706", sueldoMinimo: "135,000", gratificacion: "54,430" },
  { periodoInicial: "200707", periodoFinal: "200806", sueldoMinimo: "144,000", gratificacion: "57,000" },
  { periodoInicial: "200807", periodoFinal: "200906", sueldoMinimo: "159,000", gratificacion: "62,940" },
  { periodoInicial: "200907", periodoFinal: "201006", sueldoMinimo: "165,000", gratificacion: "65,310" },
  { periodoInicial: "201007", periodoFinal: "201106", sueldoMinimo: "172,000", gratificacion: "68,083" },
  { periodoInicial: "201107", periodoFinal: "201206", sueldoMinimo: "181,980", gratificacion: "72,030" },
  { periodoInicial: "201207", periodoFinal: "201306", sueldoMinimo: "193,000", gratificacion: "76,396" },
  { periodoInicial: "201306", periodoFinal: "201406", sueldoMinimo: "210,000", gratificacion: "83,125" },
  { periodoInicial: "201407", periodoFinal: "201506", sueldoMinimo: "225,000", gratificacion: "89,063" },
  { periodoInicial: "201507", periodoFinal: "201512", sueldoMinimo: "241,000", gratificacion: "95,396" },
  { periodoInicial: "201601", periodoFinal: "201606", sueldoMinimo: "250,000", gratificacion: "98,958" },
  { periodoInicial: "201607", periodoFinal: "201612", sueldoMinimo: "257,500", gratificacion: "101,927" },
  { periodoInicial: "201701", periodoFinal: "201706", sueldoMinimo: "264,000", gratificacion: "104,500" },
  { periodoInicial: "201707", periodoFinal: "201712", sueldoMinimo: "270,000", gratificacion: "106,875" },
]

export default function ValoresAnualesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calendar className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Valores Anuales</h1>
          <p className="text-slate-600">Sueldo mínimo y gratificación anual</p>
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
                  <TableHead className="font-semibold">PeriodoInicial</TableHead>
                  <TableHead className="font-semibold">PeriodoFinal</TableHead>
                  <TableHead className="font-semibold">SueldoMinimo</TableHead>
                  <TableHead className="font-semibold">Gratificacion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {valoresAnualesData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.periodoInicial}</TableCell>
                    <TableCell>{item.periodoFinal}</TableCell>
                    <TableCell>{item.sueldoMinimo}</TableCell>
                    <TableCell>{item.gratificacion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
