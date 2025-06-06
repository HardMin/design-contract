"use client"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ciudadesData = [
  "Alcohuaz",
  "Algarrobo",
  "Alto del Carmen",
  "Ancud",
  "Angol",
  "Bahía Inglesa",
  "Baños Morales",
  "Buchupureo",
  "Caburga",
  "Cahuil",
  "Calama",
  "Caldera",
  "Caleta Tortel",
  "Carelmapu",
]

export default function CiudadesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <MapPin className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Ciudades</h1>
          <p className="text-slate-600">Ciudades disponibles en el sistema</p>
        </div>
      </div>

      <Card>
        <CardHeader className="bg-slate-900 text-white">
          <CardTitle className="text-sm">Los datos mostrados son ingresados directamente por el Sistema</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900 mb-4">Ciudad</h3>
            {ciudadesData.map((ciudad, index) => (
              <div key={index} className={`p-3 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                {ciudad}
              </div>
            ))}
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
