"use client"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface UTMData {
  periodo: string
  valor: string
}

const utmData: UTMData[] = [
  { periodo: "202001", valor: "49,673" },
  { periodo: "202002", valor: "49,723" },
  { periodo: "202003", valor: "50,021" },
  { periodo: "202004", valor: "50,521" },
  { periodo: "202005", valor: "50,372" },
  { periodo: "202006", valor: "50,372" },
  { periodo: "202007", valor: "50,372" },
  { periodo: "202008", valor: "50,272" },
  { periodo: "202009", valor: "50,322" },
  { periodo: "202010", valor: "50,372" },
  { periodo: "202011", valor: "50,674" },
  { periodo: "202012", valor: "51,029" },
  { periodo: "202101", valor: "50,978" },
  { periodo: "202102", valor: "51,131" },
]

export default function UTMPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <TrendingUp className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">UTM</h1>
          <p className="text-slate-600">Unidad Tributaria Mensual</p>
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
                  <TableHead className="font-semibold">Período</TableHead>
                  <TableHead className="font-semibold">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {utmData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.periodo}</TableCell>
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
