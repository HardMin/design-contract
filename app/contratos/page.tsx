"use client"

import { useState } from "react"
import { ClipboardList, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const contratosData = [
  {
    rut: "12.345.678-9",
    nombre: "Ana María Soto Pérez",
    inicio: "2023-01-15",
    termino: "2024-01-15",
    liquido: "650.789", // Example of random liquid value
    cargo: "27 Electrico 2",
    email: "ana.soto@example.com",
    folio: "310", // Example of random folio
  },
  {
    rut: "13.456.789-0",
    nombre: "Pedro Antonio González Rojas",
    inicio: "2023-02-20",
    termino: "2024-02-20",
    liquido: "812.345",
    cargo: "Mecánico Industrial",
    email: "pedro.gonzalez@example.com",
    folio: "723",
  },
  {
    rut: "14.567.890-1",
    nombre: "Sofía Alejandra Díaz Castro",
    inicio: "2023-03-10",
    termino: "2024-03-10",
    liquido: "420.111",
    cargo: "Ingeniero de Proyectos",
    email: "sofia.diaz@example.com",
    folio: "187",
  },
  {
    rut: "15.678.901-2",
    nombre: "Juan Carlos Muñoz Silva",
    inicio: "2023-04-05",
    termino: "2024-04-05",
    liquido: "987.654",
    cargo: "Supervisor de Obra",
    email: "juan.munoz@example.com",
    folio: "562",
  },
  {
    rut: "16.789.012-3",
    nombre: "Laura Beatriz Herrera Vargas",
    inicio: "2023-05-01",
    termino: "2024-05-01",
    liquido: "350.999",
    cargo: "Administrador de Contratos",
    email: "laura.herrera@example.com",
    folio: "915",
  },
  {
    rut: "17.890.123-4",
    nombre: "Carlos Eduardo Gatica Torres",
    inicio: "2023-06-12",
    termino: "2024-06-12",
    liquido: "721.450",
    cargo: "Soldador Calificado",
    email: "carlos.gatica@example.com",
    folio: "401",
  },
  {
    rut: "18.901.234-5",
    nombre: "María Fernanda Guzmán Tapia",
    inicio: "2023-07-08",
    termino: "2024-07-08",
    liquido: "580.000",
    cargo: "Analista Contable",
    email: "maria.guzman@example.com",
    folio: "233",
  },
  {
    rut: "19.012.345-6",
    nombre: "Diego Ignacio Romero Fuentes",
    inicio: "2023-08-18",
    termino: "2024-08-18",
    liquido: "910.250",
    cargo: "Técnico en Climatización",
    email: "diego.romero@example.com",
    folio: "876",
  },
  {
    rut: "20.123.456-7",
    nombre: "Valentina Paz Orellana Soto",
    inicio: "2023-09-22",
    termino: "2024-09-22",
    liquido: "499.700",
    cargo: "Asistente Administrativa",
    email: "valentina.orellana@example.com",
    folio: "129",
  },
  {
    rut: "21.234.567-8",
    nombre: "Gabriel Andrés Pérez Rojas",
    inicio: "2023-10-01",
    termino: "2024-10-01",
    liquido: "765.100",
    cargo: "Jefe de Bodega",
    email: "gabriel.perez@example.com",
    folio: "605",
  },
  {
    rut: "10.111.222-3",
    nombre: "Camila Belén Soto Muñoz",
    inicio: "2023-11-05",
    termino: "2024-11-05",
    liquido: "380.500",
    cargo: "Secretaria Ejecutiva",
    email: "camila.soto@example.com",
    folio: "941",
  },
  {
    rut: "11.222.333-4",
    nombre: "Francisco Javier Rojas Díaz",
    inicio: "2023-12-10",
    termino: "2024-12-10",
    liquido: "850.000",
    cargo: "Conductor Clase A4",
    email: "francisco.rojas@example.com",
    folio: "378",
  },
  {
    rut: "12.333.444-5",
    nombre: "Daniela Constanza Castro Vargas",
    inicio: "2024-01-01",
    termino: "2025-01-01",
    liquido: "510.200",
    cargo: "Diseñador Gráfico",
    email: "daniela.castro@example.com",
    folio: "290",
  },
  {
    rut: "13.444.555-6",
    nombre: "Sebastián Andrés Silva Torres",
    inicio: "2024-02-14",
    termino: "2025-02-14",
    liquido: "975.000",
    cargo: "Especialista en Redes",
    email: "sebastian.silva@example.com",
    folio: "704",
  },
  {
    rut: "14.555.666-7",
    nombre: "Andrea Carolina Tapia Fuentes",
    inicio: "2024-03-20",
    termino: "2025-03-20",
    liquido: "400.600",
    cargo: "Encargado de Compras",
    email: "andrea.tapia@example.com",
    folio: "155",
  },
  {
    rut: "15.666.777-8",
    nombre: "Pablo Ignacio Gatica Guzmán",
    inicio: "2024-04-25",
    termino: "2025-04-25",
    liquido: "625.800",
    cargo: "Técnico en Sonido",
    email: "pablo.gatica@example.com",
    folio: "831",
  },
  {
    rut: "16.777.888-9",
    nombre: "Josefa Paz Muñoz Orellana",
    inicio: "2024-05-01",
    termino: "2025-05-01",
    liquido: "330.150",
    cargo: "Asistente de Marketing",
    email: "josefa.munoz@example.com",
    folio: "267",
  },
  {
    rut: "17.888.999-0",
    nombre: "Felipe Alejandro Soto Pérez",
    inicio: "2024-06-07",
    termino: "2025-06-07",
    liquido: "950.000",
    cargo: "Operador de Maquinaria Pesada",
    email: "felipe.soto@example.com",
    folio: "599",
  },
  {
    rut: "18.999.000-1",
    nombre: "Martina Isidora Vargas Silva",
    inicio: "2024-07-12",
    termino: "2025-07-12",
    liquido: "470.300",
    cargo: "Enfermera Ocupacional",
    email: "martina.vargas@example.com",
    folio: "102",
  },
  {
    rut: "19.000.111-2",
    nombre: "Ignacio Daniel Torres Castro",
    inicio: "2024-08-01",
    termino: "2025-08-01",
    liquido: "780.999",
    cargo: "Desarrollador Web",
    email: "ignacio.torres@example.com",
    folio: "845",
  },
];
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
            <Button className="bg-blue-600 hover:bg-blue-700">Agregar Contrato</Button>
            <Button className="bg-green-600 hover:bg-green-700">Excel</Button>
          </div>
        </CardContent>
      </Card>

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
                  <TableHead>email</TableHead>
                  <TableHead>Folio</TableHead>
                  <TableHead className="text-center">Editar</TableHead>
                  <TableHead className="text-center">Eliminar</TableHead>
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
                    <TableCell className="font-mono">{contrato.email}</TableCell>
                    <TableCell>{contrato.folio}</TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
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
