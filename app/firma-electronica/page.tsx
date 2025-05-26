"use client"

import { useState } from "react"
import { PenTool, Download, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const contratosData = [
  {
    rut: "10.123.456-7",
    nombre: "Carolina Andrea Soto Pérez",
    inicio: "15/06/2025",
    termino: "15/12/2025",
    liquido: "650.000",
    cargo: "Asistente Contable",
    folio: "876",
  },
  {
    rut: "11.234.567-8",
    nombre: "Felipe Ignacio González Rojas",
    inicio: "01/07/2025",
    termino: "01/07/2026",
    liquido: "920.500",
    cargo: "Ingeniero de Proyectos",
    folio: "123",
  },
  {
    rut: "12.345.678-9",
    nombre: "Valentina Paz Díaz Castro",
    inicio: "20/07/2025",
    termino: "20/01/2026",
    liquido: "480.000",
    cargo: "Secretaria Administrativa",
    folio: "543",
  },
  {
    rut: "13.456.789-0",
    nombre: "Manuel Alejandro Muñoz Silva",
    inicio: "05/08/2025",
    termino: "05/08/2026",
    liquido: "750.300",
    cargo: "Jefe de Bodega",
    folio: "901",
  },
  {
    rut: "14.567.890-1",
    nombre: "Paula Andrea Herrera Vargas",
    inicio: "10/08/2025",
    termino: "10/02/2026",
    liquido: "390.100",
    cargo: "Ejecutiva de Ventas",
    folio: "287",
  },
  {
    rut: "15.678.901-2",
    nombre: "Rodrigo Esteban Gatica Torres",
    inicio: "01/09/2025",
    termino: "01/09/2026",
    liquido: "1.100.000",
    cargo: "Desarrollador Senior",
    folio: "675",
  },
  {
    rut: "16.789.012-3",
    nombre: "Lorena Belén Guzmán Tapia",
    inicio: "15/09/2025",
    termino: "15/03/2026",
    liquido: "520.400",
    cargo: "Diseñadora Gráfica",
    folio: "345",
  },
  {
    rut: "17.890.123-4",
    nombre: "Cristóbal Nicolás Romero Fuentes",
    inicio: "01/10/2025",
    termino: "01/10/2026",
    liquido: "880.700",
    cargo: "Técnico en Redes",
    folio: "098",
  },
  {
    rut: "18.901.234-5",
    nombre: "Daniela Fernanda Orellana Soto",
    inicio: "20/10/2025",
    termino: "20/04/2026",
    liquido: "410.900",
    cargo: "Recepcionista",
    folio: "765",
  },
  {
    rut: "19.012.345-K",
    nombre: "Sebastián Andrés Pérez Rojas",
    inicio: "01/11/2025",
    termino: "01/11/2026",
    liquido: "990.200",
    cargo: "Jefe de Operaciones",
    folio: "432",
  },
]

// Componente para simular código de barras
const BarcodeIcon = () => (
  <div className="w-12 h-8 bg-black flex items-center justify-center rounded">
    <div className="flex gap-px">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-px h-6 bg-white"></div>
      ))}
    </div>
  </div>
)

export default function FirmaElectronicaPage() {
  const [contratos] = useState(contratosData)
  const [showNewContractModal, setShowNewContractModal] = useState(false); // Added state for modal visibility
  const [formData, setFormData] = useState({
    proyecto: "1465 CAJA LOS ANDES FANTASMA",
    firma: "Garriga Aliaga Carlos Albe",
    comercial: "1465 CAJA LOS ANDES FANTASMA",
    agencia: "1465 CAJA LOS ANDES FANTASMA",
    fechaFilmacion: "2025-05-20",
    diasFilmacion: "2025-05-20",
    ciudad: "Santiago",
    jefeProduccion: "MARIA GRACIA BARROS",
    fechaContrato: "2025-05-12",
    colacion: "60",
    copias: "1",
    jornadas: "1",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveContract = () => {
    // Add logic to save the contract data here
    console.log("Contract data to save:", formData);
    setShowNewContractModal(false);
    // Potentially add a toast notification for success
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <PenTool className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Firma Electrónica Impresión</h1>
          <p className="text-slate-600">Gestiona la firma electrónica y generación de documentos</p>
        </div>
      </div>

      {/* Información del proyecto */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <Label htmlFor="proyecto">Proyecto</Label>
            <Input
              id="proyecto"
              value={formData.proyecto}
              onChange={(e) => handleInputChange("proyecto", e.target.value)}
              className="mt-2"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setShowNewContractModal(true)} // Changed to open modal
            >
              Crear nuevo contrato 
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Firma Electrónica</Button>
            <Button className="bg-red-600 hover:bg-red-700">Crear PDF</Button>
          </div>

          {/* Información detallada - Moved to Modal */}
        </CardContent>
      </Card>

      {/* Modal for New Contract */}
      <Modal
        isOpen={showNewContractModal}
        onClose={() => setShowNewContractModal(false)}
        onConfirm={handleSaveContract} // Updated to call save handler
        title="Crear Nuevo Contrato"
        confirmText="Grabar"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="firma">Firma</Label>
            <Input id="firma" value={formData.firma} onChange={(e) => handleInputChange("firma", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comercial">Comercial</Label>
            <Input
              id="comercial"
              value={formData.comercial}
              onChange={(e) => handleInputChange("comercial", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="agencia">Agencia</Label>
            <Input
              id="agencia"
              value={formData.agencia}
              onChange={(e) => handleInputChange("agencia", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fechaFilmacion">Fecha Filmación</Label>
            <Input
              id="fechaFilmacion"
              type="date"
              value={formData.fechaFilmacion}
              onChange={(e) => handleInputChange("fechaFilmacion", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="diasFilmacion">Días Filmación</Label>
            <Input
              id="diasFilmacion"
              type="date"
              value={formData.diasFilmacion}
              onChange={(e) => handleInputChange("diasFilmacion", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ciudad">Ciudad</Label>
            <Input
              id="ciudad"
              value={formData.ciudad}
              onChange={(e) => handleInputChange("ciudad", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jefeProduccion">Jefe Producción</Label>
            <Input
              id="jefeProduccion"
              value={formData.jefeProduccion}
              onChange={(e) => handleInputChange("jefeProduccion", e.target.value)}
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
            <Label htmlFor="colacion">Colación</Label>
            <Input
              id="colacion"
              type="number"
              value={formData.colacion}
              onChange={(e) => handleInputChange("colacion", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="copias">Copias</Label>
            <Input
              id="copias"
              type="number"
              value={formData.copias}
              onChange={(e) => handleInputChange("copias", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jornadas">Jornadas</Label>
            <Input
              id="jornadas"
              type="number"
              value={formData.jornadas}
              onChange={(e) => handleInputChange("jornadas", e.target.value)}
            />
          </div>
        </div>
      </Modal>

      {/* Tabla de contratos */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>RUT</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Inicio</TableHead>
                  <TableHead>Término</TableHead>
                  <TableHead>Líquido</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Folio</TableHead>
                  <TableHead className="text-center">PDF</TableHead>
                  <TableHead className="text-center">Enviar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contratos.map((contrato, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{contrato.rut}</span>
                      </div>
                    </TableCell>
                    <TableCell>{contrato.nombre}</TableCell>
                    <TableCell>{contrato.inicio}</TableCell>
                    <TableCell>{contrato.termino}</TableCell>
                    <TableCell>{contrato.liquido}</TableCell>
                    <TableCell>{contrato.cargo}</TableCell>
                    <TableCell>{contrato.folio}</TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Download className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        <User className="w-4 h-4" />
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
import Modal from "@/components/Modal"; // Added import for Modal
