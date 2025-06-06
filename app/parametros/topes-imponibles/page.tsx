"use client"
import { BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TopesData {
  periodoInicial: string
  periodoFinal: string
  topeImponible: string
  topeSeguroCesantia: string
}

const topesData: TopesData[] = [
  { periodoInicial: "200001", periodoFinal: "200912", topeImponible: "60", topeSeguroCesantia: "90" },
  { periodoInicial: "201001", periodoFinal: "201012", topeImponible: "64,7", topeSeguroCesantia: "97,1" },
  { periodoInicial: "201101", periodoFinal: "201112", topeImponible: "66", topeSeguroCesantia: "99" },
  { periodoInicial: "201201", periodoFinal: "201212", topeImponible: "67,4", topeSeguroCesantia: "101,1" },
  { periodoInicial: "201301", periodoFinal: "201312", topeImponible: "70,3", topeSeguroCesantia: "105,4" },
  { periodoInicial: "201401", periodoFinal: "201412", topeImponible: "72,3", topeSeguroCesantia: "108,5" },
  { periodoInicial: "201501", periodoFinal: "201512", topeImponible: "73,2", topeSeguroCesantia: "109,8" },
  { periodoInicial: "201601", periodoFinal: "201612", topeImponible: "74,3", topeSeguroCesantia: "111,4" },
  { periodoInicial: "201701", periodoFinal: "201712", topeImponible: "75,7", topeSeguroCesantia: "113,5" },
  { periodoInicial: "201801", periodoFinal: "201812", topeImponible: "78,3", topeSeguroCesantia: "117,5" },
  { periodoInicial: "201901", periodoFinal: "201912", topeImponible: "79,2", topeSeguroCesantia: "118,9" },
  { periodoInicial: "202001", periodoFinal: "202001", topeImponible: "80,2", topeSeguroCesantia: "120,3" },
  { periodoInicial: "202002", periodoFinal: "202012", topeImponible: "80,2", topeSeguroCesantia: "120,4" },
  { periodoInicial: "202101", periodoFinal: "202101", topeImponible: "81,7", topeSeguroCesantia: "122,7" },
]

export default function TopesImponiblesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Topes Imponibles</h1>
          <p className="text-slate-600">Topes imponibles y de seguro de cesantía</p>
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
                  <TableHead className="font-semibold">TopeImponible</TableHead>
                  <TableHead className="font-semibold">TopeSeguroCesantia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topesData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.periodoInicial}</TableCell>
                    <TableCell>{item.periodoFinal}</TableCell>
                    <TableCell>{item.topeImponible}</TableCell>
                    <TableCell>{item.topeSeguroCesantia}</TableCell>
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
