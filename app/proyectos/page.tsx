"use client"

import { useState } from "react"
import { FolderOpen, Edit, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Modal from "@/components/Modal"
import { useToast } from "@/components/ui/use-toast"

const proyectosData = [
  {
    codigo: 1001,
    comercial: "Cerveza Austral - Montaña",
    agencia: "McCann Erickson",
    ciudad: "Santiago",
    fechaContrato: "01/06/2025",
    inicioFilmacion: "10/06/2025",
    fechaFilmacion: "15/06/2025",
    cerrado: "NO",
  },
  {
    codigo: 1002,
    comercial: "Banco Estado - Cuenta RUT Digital",
    agencia: "BBDO Chile",
    ciudad: "Valparaíso",
    fechaContrato: "05/06/2025",
    inicioFilmacion: "12/06/2025",
    fechaFilmacion: "18/06/2025",
    cerrado: "NO",
  },
  {
    codigo: 1003,
    comercial: "Jumbo - Sabor de Casa",
    agencia: "Proximity Chile",
    ciudad: "Viña del Mar",
    fechaContrato: "10/06/2025",
    inicioFilmacion: "20/06/2025",
    fechaFilmacion: "25/06/2025",
    cerrado: "SI",
  },
  {
    codigo: 1004,
    comercial: "Entel - Conectando Momentos",
    agencia: "Publicis Worldwide",
    ciudad: "Concepción",
    fechaContrato: "15/06/2025",
    inicioFilmacion: "22/06/2025",
    fechaFilmacion: "28/06/2025",
    cerrado: "NO",
  },
  {
    codigo: 1005,
    comercial: "Falabella - Moda Otoño",
    agencia: "Wolf BCPP",
    ciudad: "Santiago",
    fechaContrato: "20/06/2025",
    inicioFilmacion: "01/07/2025",
    fechaFilmacion: "05/07/2025",
    cerrado: "SI",
  },
  {
    codigo: 1006,
    comercial: "Nestlé - Recetas de Abuela",
    agencia: "VMLY&R",
    ciudad: "La Serena",
    fechaContrato: "25/06/2025",
    inicioFilmacion: "08/07/2025",
    fechaFilmacion: "12/07/2025",
    cerrado: "NO",
  },
  {
    codigo: 1007,
    comercial: "Cencosud - Ofertas del Mes",
    agencia: "Leo Burnett",
    ciudad: "Puerto Montt",
    fechaContrato: "01/07/2025",
    inicioFilmacion: "15/07/2025",
    fechaFilmacion: "20/07/2025",
    cerrado: "NO",
  },
  {
    codigo: 1008,
    comercial: "CCU - Refresca tu Día",
    agencia: "Simple",
    ciudad: "Rancagua",
    fechaContrato: "05/07/2025",
    inicioFilmacion: "22/07/2025",
    fechaFilmacion: "27/07/2025",
    cerrado: "SI",
  },
  {
    codigo: 1009,
    comercial: "Claro - Internet Rápido",
    agencia: "Ogilvy Chile",
    ciudad: "Antofagasta",
    fechaContrato: "10/07/2025",
    inicioFilmacion: "01/08/2025",
    fechaFilmacion: "05/08/2025",
    cerrado: "NO",
  },
  {
    codigo: 1010,
    comercial: "Sodimac - Proyectos en Casa",
    agencia: "180 Grados",
    ciudad: "Temuco",
    fechaContrato: "15/07/2025",
    inicioFilmacion: "10/08/2025",
    fechaFilmacion: "15/08/2025",
    cerrado: "NO",
  },
]

export default function ProyectosPage() {
  const { toast } = useToast()
  const [proyectos, setProyectos] = useState(proyectosData)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    codigo: "",
    comercial: "",
    cliente: "ABASTECEDORA DE COMBUSTIBLES S A",
    agencia: "",
    ciudad: "Alcohuaz",
    fechaContrato: "2025-05-24",
    inicioFilmacion: "2025-05-24",
    terminoFilmacion: "2025-05-24",
    cerrado: false,
  })
  const [editFormData, setEditFormData] = useState({
    codigo: "",
    comercial: "",
    cliente: "",
    agencia: "",
    ciudad: "",
    fechaContrato: "",
    inicioFilmacion: "",
    terminoFilmacion: "",
    cerrado: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEditInputChange = (field: string, value: string | boolean) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Aquí iría la lógica para guardar el nuevo proyecto
    // Por ahora, solo añadiremos el proyecto al estado local
    const newProyecto = {
      codigo: Number(formData.codigo),
      comercial: formData.comercial,
      agencia: formData.agencia,
      ciudad: formData.ciudad,
      fechaContrato: formData.fechaContrato.split('-').reverse().join('/'),
      inicioFilmacion: formData.inicioFilmacion.split('-').reverse().join('/'),
      fechaFilmacion: formData.terminoFilmacion.split('-').reverse().join('/'),
      cerrado: formData.cerrado ? "SI" : "NO",
    }
    
    setProyectos([...proyectos, newProyecto])
    setShowModal(false)
    
    toast({
      title: "Proyecto creado",
      description: "El proyecto ha sido creado exitosamente",
      variant: "success",
    })
    
    // Resetear el formulario
    setFormData({
      codigo: "",
      comercial: "",
      cliente: "ABASTECEDORA DE COMBUSTIBLES S A",
      agencia: "",
      ciudad: "Alcohuaz",
      fechaContrato: "2025-05-24",
      inicioFilmacion: "2025-05-24",
      terminoFilmacion: "2025-05-24",
      cerrado: false,
    })
  }

  const handleEdit = (index: number) => {
    setSelectedIndex(index)
    const proyecto = proyectos[index]
    
    // Convertir formato de fecha de DD/MM/YYYY a YYYY-MM-DD para los inputs de tipo date
    const convertirFecha = (fechaStr: string) => {
      const partes = fechaStr.split('/')
      if (partes.length === 3) {
        return `${partes[2]}-${partes[1]}-${partes[0]}`
      }
      return fechaStr
    }
    
    setEditFormData({
      codigo: proyecto.codigo.toString(),
      comercial: proyecto.comercial,
      cliente: "ABASTECEDORA DE COMBUSTIBLES S A", // Valor por defecto ya que no está en la tabla
      agencia: proyecto.agencia,
      ciudad: proyecto.ciudad,
      fechaContrato: convertirFecha(proyecto.fechaContrato),
      inicioFilmacion: convertirFecha(proyecto.inicioFilmacion),
      terminoFilmacion: convertirFecha(proyecto.fechaFilmacion),
      cerrado: proyecto.cerrado === "SI",
    })
    
    setShowEditModal(true)
  }

  const handleDelete = (index: number) => {
    setSelectedIndex(index)
    setShowDeleteModal(true)
  }

  const confirmEdit = () => {
    if (selectedIndex === null) return
    
    const updatedProyectos = [...proyectos]
    updatedProyectos[selectedIndex] = {
      codigo: Number(editFormData.codigo),
      comercial: editFormData.comercial,
      agencia: editFormData.agencia,
      ciudad: editFormData.ciudad,
      fechaContrato: editFormData.fechaContrato.split('-').reverse().join('/'),
      inicioFilmacion: editFormData.inicioFilmacion.split('-').reverse().join('/'),
      fechaFilmacion: editFormData.terminoFilmacion.split('-').reverse().join('/'),
      cerrado: editFormData.cerrado ? "SI" : "NO",
    }
    
    setProyectos(updatedProyectos)
    setShowEditModal(false)
    setSelectedIndex(null)
    
    toast({
      title: "Proyecto actualizado",
      description: "El proyecto ha sido actualizado exitosamente",
      variant: "success",
    })
  }

  const confirmDelete = () => {
    if (selectedIndex === null) return
    
    const updatedProyectos = proyectos.filter((_, index) => index !== selectedIndex)
    setProyectos(updatedProyectos)
    setShowDeleteModal(false)
    setSelectedIndex(null)
    
    toast({
      title: "Proyecto eliminado",
      description: "El proyecto ha sido eliminado exitosamente",
      variant: "success",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FolderOpen className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Proyectos</h1>
          <p className="text-slate-600">Gestiona los proyectos y sus detalles</p>
        </div>
      </div>

      {/* Modal de nuevo proyecto */}
      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleSubmit}
        title="Nuevo Proyecto"
        confirmText="Grabar"
        type="edit"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="codigo">Código</Label>
            <Input
              id="codigo"
              value={formData.codigo}
              onChange={(e) => handleInputChange("codigo", e.target.value)}
              placeholder="Código del proyecto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comercial">Comercial</Label>
            <Input
              id="comercial"
              value={formData.comercial}
              onChange={(e) => handleInputChange("comercial", e.target.value)}
              placeholder="Nombre comercial"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cliente">Cliente</Label>
            <Input
              id="cliente"
              value={formData.cliente}
              onChange={(e) => handleInputChange("cliente", e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cerrado"
                checked={formData.cerrado}
                onCheckedChange={(checked) => handleInputChange("cerrado", checked as boolean)}
              />
              <Label htmlFor="cerrado">Cerrado</Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="agencia">Agencia</Label>
            <Input
              id="agencia"
              value={formData.agencia}
              onChange={(e) => handleInputChange("agencia", e.target.value)}
              placeholder="Agencia"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ciudad">Ciudad</Label>
            <Input
              id="ciudad"
              value={formData.ciudad}
              onChange={(e) => handleInputChange("ciudad", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fechaContrato">Fecha Contrato</Label>
            <Input
              id="fechaContrato"
              type="date"
              value={formData.fechaContrato}
              onChange={(e) => handleInputChange("fechaContrato", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inicioFilmacion">Inicio Filmación</Label>
            <Input
              id="inicioFilmacion"
              type="date"
              value={formData.inicioFilmacion}
              onChange={(e) => handleInputChange("inicioFilmacion", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="terminoFilmacion">Término Filmación</Label>
            <Input
              id="terminoFilmacion"
              type="date"
              value={formData.terminoFilmacion}
              onChange={(e) => handleInputChange("terminoFilmacion", e.target.value)}
            />
          </div>
        </div>
      </Modal>

      {/* Modal de edición de proyecto */}
      <Modal 
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onConfirm={confirmEdit}
        title="Editar Proyecto"
        confirmText="Actualizar"
        type="edit"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="edit-codigo">Código</Label>
            <Input
              id="edit-codigo"
              value={editFormData.codigo}
              onChange={(e) => handleEditInputChange("codigo", e.target.value)}
              placeholder="Código del proyecto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-comercial">Comercial</Label>
            <Input
              id="edit-comercial"
              value={editFormData.comercial}
              onChange={(e) => handleEditInputChange("comercial", e.target.value)}
              placeholder="Nombre comercial"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-cliente">Cliente</Label>
            <Input
              id="edit-cliente"
              value={editFormData.cliente}
              onChange={(e) => handleEditInputChange("cliente", e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="edit-cerrado"
                checked={editFormData.cerrado}
                onCheckedChange={(checked) => handleEditInputChange("cerrado", checked as boolean)}
              />
              <Label htmlFor="edit-cerrado">Cerrado</Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="edit-agencia">Agencia</Label>
            <Input
              id="edit-agencia"
              value={editFormData.agencia}
              onChange={(e) => handleEditInputChange("agencia", e.target.value)}
              placeholder="Agencia"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-ciudad">Ciudad</Label>
            <Input
              id="edit-ciudad"
              value={editFormData.ciudad}
              onChange={(e) => handleEditInputChange("ciudad", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-fechaContrato">Fecha Contrato</Label>
            <Input
              id="edit-fechaContrato"
              type="date"
              value={editFormData.fechaContrato}
              onChange={(e) => handleEditInputChange("fechaContrato", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-inicioFilmacion">Inicio Filmación</Label>
            <Input
              id="edit-inicioFilmacion"
              type="date"
              value={editFormData.inicioFilmacion}
              onChange={(e) => handleEditInputChange("inicioFilmacion", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-terminoFilmacion">Término Filmación</Label>
            <Input
              id="edit-terminoFilmacion"
              type="date"
              value={editFormData.terminoFilmacion}
              onChange={(e) => handleEditInputChange("terminoFilmacion", e.target.value)}
            />
          </div>
        </div>
      </Modal>

      {/* Modal de eliminación de proyecto */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Eliminar Proyecto"
        confirmText="Eliminar"
        type="delete"
      >
        <p className="text-center mb-4">
          ¿Estás seguro de que deseas eliminar este proyecto? Esta acción no se puede deshacer.
        </p>
        {selectedIndex !== null && (
          <div className="bg-gray-100 p-4 rounded-md">
            <p><strong>Código:</strong> {proyectos[selectedIndex].codigo}</p>
            <p><strong>Comercial:</strong> {proyectos[selectedIndex].comercial}</p>
            <p><strong>Agencia:</strong> {proyectos[selectedIndex].agencia}</p>
          </div>
        )}
      </Modal>

          <div className="flex justify-end p-4">
            <Button 
              onClick={() => setShowModal(true)} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" /> Nuevo Proyecto
            </Button>
          </div>
      {/* Tabla de proyectos */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Comercial</TableHead>
                  <TableHead>Agencia</TableHead>
                  <TableHead>Ciudad</TableHead>
                  <TableHead>Fecha Contrato</TableHead>
                  <TableHead>Inicio Filmación</TableHead>
                  <TableHead>Fecha Filmación</TableHead>
                  <TableHead>Cerrado</TableHead>
                  <TableHead className="text-center">Editar</TableHead>
                  <TableHead className="text-center">Eliminar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proyectos.map((proyecto, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{proyecto.codigo}</TableCell>
                    <TableCell>{proyecto.comercial}</TableCell>
                    <TableCell>{proyecto.agencia}</TableCell>
                    <TableCell>{proyecto.ciudad}</TableCell>
                    <TableCell>{proyecto.fechaContrato}</TableCell>
                    <TableCell>{proyecto.inicioFilmacion}</TableCell>
                    <TableCell>{proyecto.fechaFilmacion}</TableCell>
                    <TableCell>{proyecto.cerrado}</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEdit(index)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash2 className="w-4 h-4" />
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
