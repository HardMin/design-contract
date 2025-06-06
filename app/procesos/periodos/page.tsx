"use client"

import { useState } from "react"
import { Calendar, Plus, Edit, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Periodo {
  periodo: string
  desde: string
  hasta: string
}

const periodosData: Periodo[] = [
  { periodo: "202505", desde: "21/04/2025", hasta: "31/05/2025" },
  { periodo: "202504", desde: "24/03/2025", hasta: "20/04/2025" },
  { periodo: "202503", desde: "21/02/2025", hasta: "23/03/2025" },
  { periodo: "202502", desde: "21/01/2025", hasta: "20/02/2025" },
  { periodo: "202501", desde: "01/01/2025", hasta: "31/01/2025" },
  { periodo: "202412", desde: "01/12/2024", hasta: "31/12/2024" },
  { periodo: "202411", desde: "01/11/2024", hasta: "30/11/2024" },
  { periodo: "202410", desde: "01/10/2024", hasta: "31/10/2024" },
  { periodo: "202403", desde: "01/03/2024", hasta: "31/03/2024" },
  { periodo: "202401", desde: "01/01/2024", hasta: "01/01/2024" },
]

export default function PeriodosPage() {
  const [periodos, setPeriodos] = useState<Periodo[]>(periodosData)
  const [showSuccess, setShowSuccess] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    periodo: "",
    desde: "",
    hasta: "",
  })
  const [editData, setEditData] = useState({
    periodo: "",
    desde: "",
    hasta: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEditInputChange = (field: string, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (formData.periodo && formData.desde && formData.hasta) {
      const newPeriodo: Periodo = {
        periodo: formData.periodo,
        desde: formData.desde,
        hasta: formData.hasta,
      }
      setPeriodos([newPeriodo, ...periodos])
      setFormData({ periodo: "", desde: "", hasta: "" })
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const handleCancel = () => {
    setFormData({ periodo: "", desde: "", hasta: "" })
  }

  const handleEdit = (index: number) => {
    const periodo = periodos[index]
    setEditingIndex(index)
    setEditData({
      periodo: periodo.periodo,
      desde: periodo.desde,
      hasta: periodo.hasta,
    })
  }

  const handleSaveEdit = () => {
    if (editingIndex !== null && editData.periodo && editData.desde && editData.hasta) {
      const updatedPeriodos = [...periodos]
      updatedPeriodos[editingIndex] = {
        periodo: editData.periodo,
        desde: editData.desde,
        hasta: editData.hasta,
      }
      setPeriodos(updatedPeriodos)
      setEditingIndex(null)
      setEditData({ periodo: "", desde: "", hasta: "" })
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
    setEditData({ periodo: "", desde: "", hasta: "" })
  }

  const handleDelete = (index: number) => {
    setPeriodos(periodos.filter((_, i) => i !== index))
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  // Función para convertir fecha de DD/MM/YYYY a YYYY-MM-DD
  const formatDateForInput = (dateStr: string) => {
    if (!dateStr) return ""
    const [day, month, year] = dateStr.split("/")
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  }

  // Función para convertir fecha de YYYY-MM-DD a DD/MM/YYYY
  const formatDateForDisplay = (dateStr: string) => {
    if (!dateStr) return ""
    const [year, month, day] = dateStr.split("-")
    return `${day}/${month}/${year}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calendar className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mantenedor Periodos</h1>
          <p className="text-slate-600">Gestiona los períodos del sistema</p>
        </div>
      </div>

      {showSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">Operación realizada exitosamente</AlertDescription>
        </Alert>
      )}

      {/* Formulario para nuevo período */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Nuevo Período
          </CardTitle>
          <CardDescription>Agrega un nuevo período al sistema</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="periodo">Período</Label>
              <Input
                id="periodo"
                value={formData.periodo}
                onChange={(e) => handleInputChange("periodo", e.target.value)}
                placeholder="YYYYMM (ej: 202505)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="desde">Desde</Label>
              <Input
                id="desde"
                type="date"
                value={formatDateForInput(formData.desde)}
                onChange={(e) => handleInputChange("desde", formatDateForDisplay(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hasta">Hasta</Label>
              <Input
                id="hasta"
                type="date"
                value={formatDateForInput(formData.hasta)}
                onChange={(e) => handleInputChange("hasta", formatDateForDisplay(e.target.value))}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleSubmit}
              disabled={!formData.periodo || !formData.desde || !formData.hasta}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Grabar
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de períodos */}
      <Card>
        <CardHeader>
          <CardTitle>Períodos Registrados</CardTitle>
          <CardDescription>Lista de todos los períodos en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">Período</TableHead>
                  <TableHead className="font-semibold">Desde</TableHead>
                  <TableHead className="font-semibold">Hasta</TableHead>
                  <TableHead className="font-semibold text-center">Editar</TableHead>
                  <TableHead className="font-semibold text-center">Eliminar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {periodos.map((periodo, index) => (
                  <TableRow key={index} className="hover:bg-slate-50">
                    <TableCell>
                      {editingIndex === index ? (
                        <Input
                          value={editData.periodo}
                          onChange={(e) => handleEditInputChange("periodo", e.target.value)}
                          className="font-medium"
                        />
                      ) : (
                        <span className="font-medium">{periodo.periodo}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <Input
                          type="date"
                          value={formatDateForInput(editData.desde)}
                          onChange={(e) => handleEditInputChange("desde", formatDateForDisplay(e.target.value))}
                        />
                      ) : (
                        periodo.desde
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <Input
                          type="date"
                          value={formatDateForInput(editData.hasta)}
                          onChange={(e) => handleEditInputChange("hasta", formatDateForDisplay(e.target.value))}
                        />
                      ) : (
                        periodo.hasta
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingIndex === index ? (
                        <div className="flex gap-2 justify-center">
                          <Button
                            size="sm"
                            onClick={handleSaveEdit}
                            disabled={!editData.periodo || !editData.desde || !editData.hasta}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingIndex !== index && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(index)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {periodos.length === 0 && <div className="text-center py-8 text-slate-500">No hay períodos registrados</div>}
        </CardContent>
      </Card>
    </div>
  )
}
