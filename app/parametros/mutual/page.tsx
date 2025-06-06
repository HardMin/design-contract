"use client"

import { useState } from "react"
import { Shield, Save, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MutualData {
  periodoInicial: string
  periodoFinal: string
  valor: string
}

const mutualData: MutualData[] = [
  { periodoInicial: "201301", periodoFinal: "201312", valor: "0,95" },
  { periodoInicial: "201608", periodoFinal: "201612", valor: "0,95" },
  { periodoInicial: "201801", periodoFinal: "201812", valor: "0,93" },
  { periodoInicial: "201901", periodoFinal: "201912", valor: "0,93" },
  { periodoInicial: "202001", periodoFinal: "202012", valor: "0,93" },
  { periodoInicial: "202101", periodoFinal: "202112", valor: "0,93" },
  { periodoInicial: "202201", periodoFinal: "202212", valor: "1,27" },
  { periodoInicial: "202301", periodoFinal: "202312", valor: "1,27" },
  { periodoInicial: "202401", periodoFinal: "202412", valor: "1,27" },
  { periodoInicial: "202501", periodoFinal: "202512", valor: "1,95" },
]

export default function MutualPage() {
  const [formData, setFormData] = useState({
    periodoInicial: "",
    periodoFinal: "",
    valor: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Shield className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mutual</h1>
          <p className="text-slate-600">Gestión de valores de Mutual de Seguridad</p>
        </div>
      </div>

      {/* Formulario */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="periodoInicial">Período Inicial</Label>
              <Input
                id="periodoInicial"
                value={formData.periodoInicial}
                onChange={(e) => handleInputChange("periodoInicial", e.target.value)}
                placeholder="YYYYMM"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="periodoFinal">Período Final</Label>
              <Input
                id="periodoFinal"
                value={formData.periodoFinal}
                onChange={(e) => handleInputChange("periodoFinal", e.target.value)}
                placeholder="YYYYMM"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valor">Valor</Label>
              <Input
                id="valor"
                value={formData.valor}
                onChange={(e) => handleInputChange("valor", e.target.value)}
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-slate-900 hover:bg-slate-800 min-w-24">
              <Save className="w-4 h-4 mr-2" />
              Grabar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de datos */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">Período Inicial</TableHead>
                  <TableHead className="font-semibold">Período Final</TableHead>
                  <TableHead className="font-semibold">Valor</TableHead>
                  <TableHead className="font-semibold text-center">Editar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mutualData.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <TableCell>{item.periodoInicial}</TableCell>
                    <TableCell>{item.periodoFinal}</TableCell>
                    <TableCell>{item.valor}</TableCell>
                    <TableCell className="text-center">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </TableCell>
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
