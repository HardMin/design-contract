"use client"

import { useState } from "react"
import { Users, Search, Plus, Edit, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const personalData = [
  {
    rut: "12345678-9",
    nombre: "Otto Gurshgen Kobbert Valdés",
    direccion: "El Humedal parcela 11, Santa Carolina Batuco Nro. 11",
    fechaNacimiento: "04/09/1992",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco Santander Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "68542944",
  },
  {
    rut: "98765432-1",
    nombre: "María Elena González Pérez",
    direccion: "Av. Providencia 1234, Providencia",
    fechaNacimiento: "15/03/1985",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta Vista",
    nroCuenta: "12345678",
  },
  {
    rut: "11223344-5",
    nombre: "Carlos Alberto Rodríguez Silva",
    direccion: "Los Aromos 567, Las Condes",
    fechaNacimiento: "22/11/1978",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco del Estado",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "87654321",
  },
]

export default function PersonalManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("nombre")

  const filteredData = personalData.filter(
    (person) => person.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || person.rut.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gestión de Personal</h1>
          <p className="text-slate-600">Administra la información del personal de la empresa</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Lista de Personal</CardTitle>
              <CardDescription>Visualiza y gestiona la información de todos los empleados</CardDescription>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Personal
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filtros y búsqueda */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Buscar</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="search"
                  placeholder="Buscar por nombre o RUT..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full sm:w-48">
              <Label htmlFor="sort">Ordenar por</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nombre">Nombre</SelectItem>
                  <SelectItem value="rut">RUT</SelectItem>
                  <SelectItem value="fechaNacimiento">Fecha Nacimiento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabla de personal */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold">RUT</TableHead>
                  <TableHead className="font-semibold">Nombre</TableHead>
                  <TableHead className="font-semibold">Dirección</TableHead>
                  <TableHead className="font-semibold">F. Nacimiento</TableHead>
                  <TableHead className="font-semibold">Estado Civil</TableHead>
                  <TableHead className="font-semibold">Nacionalidad</TableHead>
                  <TableHead className="font-semibold">Sexo</TableHead>
                  <TableHead className="font-semibold">Banco</TableHead>
                  <TableHead className="font-semibold">Tipo Cuenta</TableHead>
                  <TableHead className="font-semibold">Nro. Cuenta</TableHead>
                  <TableHead className="font-semibold text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((person, index) => (
                  <TableRow key={index} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{person.rut}</TableCell>
                    <TableCell>{person.nombre}</TableCell>
                    <TableCell className="max-w-xs truncate" title={person.direccion}>
                      {person.direccion}
                    </TableCell>
                    <TableCell>{person.fechaNacimiento}</TableCell>
                    <TableCell>
                      <Badge variant={person.estadoCivil === "Soltero" ? "secondary" : "outline"}>
                        {person.estadoCivil}
                      </Badge>
                    </TableCell>
                    <TableCell>{person.nacionalidad}</TableCell>
                    <TableCell>{person.sexo}</TableCell>
                    <TableCell className="max-w-xs truncate" title={person.banco}>
                      {person.banco}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{person.tipoCuenta}</Badge>
                    </TableCell>
                    <TableCell className="font-mono">{person.nroCuenta}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No se encontraron resultados para la búsqueda "{searchTerm}"
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
