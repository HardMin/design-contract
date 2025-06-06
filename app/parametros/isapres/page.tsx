"use client"
import { Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const isapresData = [
  "Banmedica",
  "Chuquicamata",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Cruz del Norte",
  "Ferrosalud",
  "Fonasa",
  "Institución de Salud Previsional Fusat Ltda.",
  "Isapre Bco. Estado",
  "ISAPRE ESENCIAL",
  "Nueva Mas Vida",
  "Rio Blanco",
  "San Lorenzo isapre Ltda.",
]

export default function IsapresPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Isapres</h1>
          <p className="text-slate-600">Instituciones de Salud Previsional</p>
        </div>
      </div>

      <Card>
        <CardHeader className="bg-slate-900 text-white">
          <CardTitle className="text-sm">Los datos mostrados son ingresados directamente por el Sistema</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 mb-4">Isapre</h3>
            {isapresData.map((isapre, index) => (
              <div key={index} className={`p-3 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                {isapre}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
