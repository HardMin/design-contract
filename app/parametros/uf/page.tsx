"use client"
import { DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface UFData {
  periodo: string
  valor: string
}

const ufData: UFData[] = [
  { periodo: "201301", valor: "22,807.54" },
  { periodo: "201302", valor: "22,838.48" },
  { periodo: "201303", valor: "22,869.38" },
  { periodo: "201304", valor: "22,869.38" },
  { periodo: "201305", valor: "22,885.95" },
  { periodo: "201306", valor: "22,852.67" },
  { periodo: "201307", valor: "22,900.99" },
  { periodo: "201308", valor: "23,036.49" },
  { periodo: "201309", valor: "23,091.03" },
  { periodo: "201310", valor: "23,186.81" },
  { periodo: "201311", valor: "23,236.65" },
  { periodo: "201312", valor: "23,309.56" },
  { periodo: "201401", valor: "23,435.87" },
  { periodo: "201402", valor: "23,508.46" },
]

export default function UFPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <DollarSign className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">UF</h1>
          <p className="text-slate-600">Unidad de Fomento</p>
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
                {ufData.map((item, index) => (
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
