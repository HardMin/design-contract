"use client"

import type React from "react"

import { useState } from "react"
import { BarChart3, Plus, Edit, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import Modal from "@/components/Modal"

const initialManagers = [
  "ANDRES ANTONELLA VASQUEZ SAAVEDRA",
  "ANTONELLA VASQUEZ",
  "IVAN PEDREROS HERNANDEZ",
  "PAULO VERA",
]

export default function JefesProduccionPage() {
  const [managers, setManagers] = useState(initialManagers)
  const [newManagerName, setNewManagerName] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingName, setEditingName] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const {toast} = useToast()
  
  // Estados para los modales
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleAddManager = () => {
    if (newManagerName.trim()) {
      setManagers([...managers, newManagerName.trim()])
      setNewManagerName("")
      toast({
        description:"Operación realizada exitosamente",
        variant: "success",
      })
    }
  }

  const handleEditManager = (index: number) => {
    setSelectedIndex(index)
    setEditingName(managers[index])
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (selectedIndex !== null && editingName.trim()) {
      const updatedManagers = [...managers]
      updatedManagers[selectedIndex] = editingName.trim()
      setManagers(updatedManagers)
      setShowEditModal(false)
      setSelectedIndex(null)
      setEditingName("")
      toast({
        description:"Jefe de producción actualizado exitosamente",
        variant: "success",
      })
    }
  }

  const handleDeleteClick = (index: number) => {
    setSelectedIndex(index)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    if (selectedIndex !== null) {
      setManagers(managers.filter((_, i) => i !== selectedIndex))
      setShowDeleteModal(false)
      setSelectedIndex(null)
      toast({
        description:"Jefe de producción eliminado exitosamente",
        variant: "success",
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Jefes de Producción</h1>
          <p className="text-slate-600">Gestiona los responsables de las áreas de producción</p>
        </div>
      </div>

      {/* Modal de Edición */}
      <Modal 
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onConfirm={handleSaveEdit}
        title="Editar Jefe de Producción"
        confirmText="Guardar"
        type="edit"
      >
        <div className="space-y-4 min-w-96">
          <Label htmlFor="editManagerName">Nombre Completo</Label>
          <Input
            id="editManagerName"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            placeholder="Ingrese el nombre completo"
            autoFocus
          />
        </div>
      </Modal>

      {/* Modal de Confirmación de Eliminación */}
      <Modal 
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="Confirmar Eliminación"
        confirmText="Eliminar"
        type="delete"
      >
        <p className="text-slate-700 p-2">
          ¿Está seguro que desea eliminar a <span className="font-semibold">{selectedIndex !== null ? managers[selectedIndex] : ""}</span>? 
          Esta acción no se puede deshacer.
        </p>
      </Modal>

      <div className="grid gap-6">
        {/* Formulario para agregar nuevo jefe */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Agregar Nuevo Jefe de Producción
            </CardTitle>
            <CardDescription>Ingresa el nombre completo del nuevo jefe de producción</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="managerName">Nombre Completo</Label>
                <Input
                  id="managerName"
                  value={newManagerName}
                  onChange={(e) => setNewManagerName(e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, handleAddManager)}
                  placeholder="Ingrese el nombre completo"
                />
              </div>
              <div className="flex items-end gap-2">
                <Button
                  onClick={handleAddManager}
                  disabled={!newManagerName.trim()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Agregar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de jefes existentes */}
        <Card>
          <CardHeader>
            <CardTitle>Jefes de Producción Registrados</CardTitle>
            <CardDescription>Lista de todos los jefes de producción en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Nombre</TableHead>
                    <TableHead className="font-semibold text-center w-32">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {managers.map((manager, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell>
                        <span className="font-medium">{manager}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline" onClick={() => handleEditManager(index)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteClick(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {managers.length === 0 && (
              <div className="text-center py-8 text-slate-500">No hay jefes de producción registrados</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
