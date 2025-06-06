"use client"
import { Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SISData {
  periodoInicial: string
  periodoFinal: string
  valor: string
}

const sisData: SISData[] = [
  { periodoInicial: "200001", periodoFinal: "201106", valor: "0" },
  { periodoInicial: "201107", periodoFinal: "201206", valor: "1,49" },
  { periodoInicial: "201207", periodoFinal: "201406", valor: "1,26" },
  { periodoInicial: "201407", periodoFinal: "201606", valor: "1,15" },
  { periodoInicial: "201607", periodoFinal: "201806", valor: "1,41" },
  { periodoInicial: "201807", periodoFinal: "202006", valor: "1,53" },
  { periodoInicial: "202007", periodoFinal: "202012", valor: "1,23" },
  { periodoInicial: "202101", periodoFinal: "202103", valor: "2,3" },
  { periodoInicial: "202104", periodoFinal: "202106", valor: "1,94" },
  { periodoInicial: "202107", periodoFinal: "202109", valor: "2,21" },
  { periodoInicial: "202110", periodoFinal: "202203", valor: "1,85" },
  { periodoInicial: "202204", periodoFinal: "202206", valor: "1,86" },
  { periodoInicial: "202207", periodoFinal: "202209", valor: "1,84" },
  { periodoInicial: "202210", periodoFinal: "202212", valor: "1,54" },
]

export default function SISPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Shield className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">SIS</h1>
          <p className="text-slate-600">Seguro Integral de Salud</p>
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
                  <TableHead className="font-semibold">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sisData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.periodoInicial}</TableCell>
                    <TableCell>{item.periodoFinal}</TableCell>
                    <TableCell>{item.valor}</TableCell>
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
