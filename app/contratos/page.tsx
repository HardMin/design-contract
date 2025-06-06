"use client"

import { useState } from "react"
import { ClipboardList, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { contratosData } from "@/const"

export default function ContratosPage() {
  const [contratos] = useState(contratosData)
  const [proyecto, setProyecto] = useState("1465 CAJA LOS ANDES FANTASMA")

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <ClipboardList className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Contratos</h1>
          <p className="text-slate-600">Gestiona los contratos del personal</p>
        </div>
      </div>

      {/* Selector de proyecto y botones */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <Label htmlFor="proyecto">Proyecto</Label>
            <Input id="proyecto" value={proyecto} onChange={(e) => setProyecto(e.target.value)} className="mt-2" />
          </div>

          <div className="flex gap-4">
            <Link href="/contratos/nuevos">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Agregar Contrato
              </Button>
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Excel</Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
