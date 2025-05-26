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
    rut: "12.345.678-9",
    nombre: "Ana María Soto Pérez",
    direccion: "Av. Las Condes 1234, Depto 501, Las Condes",
    fechaNacimiento: "04/09/1992",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco Santander Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00010001001",
  },
  {
    rut: "13.456.789-0",
    nombre: "Pedro Antonio González Rojas",
    direccion: "Calle Prat 567, Villa Alemana",
    fechaNacimiento: "18/03/1985",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta Vista",
    nroCuenta: "00020002002",
  },
  {
    rut: "14.567.890-1",
    nombre: "Sofía Alejandra Díaz Castro",
    direccion: "Pje. Los Aromos 890, Maipú",
    fechaNacimiento: "29/11/1998",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco BCI",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00030003003",
  },
  {
    rut: "15.678.901-2",
    nombre: "Juan Carlos Muñoz Silva",
    direccion: "Av. Bernardo O'Higgins 123, Of. 45, Santiago Centro",
    fechaNacimiento: "01/07/1976",
    estadoCivil: "Viudo",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "BancoEstado",
    tipoCuenta: "Cuenta Rut",
    nroCuenta: "00040004004",
  },
  {
    rut: "16.789.012-3",
    nombre: "Laura Beatriz Herrera Vargas",
    direccion: "Camino a Melipilla Km 5, Parcela 22, Peñaflor",
    fechaNacimiento: "12/02/1990",
    estadoCivil: "Divorciado",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "ScotiaBank Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00050005005",
  },
  {
    rut: "17.890.123-4",
    nombre: "Carlos Eduardo Gatica Torres",
    direccion: "Los Robles 45, Puente Alto",
    fechaNacimiento: "25/09/1981",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco Falabella",
    tipoCuenta: "Cuenta Vista",
    nroCuenta: "00060006006",
  },
  {
    rut: "18.901.234-5",
    nombre: "María Fernanda Guzmán Tapia",
    direccion: "Las Lilas 789, Ñuñoa",
    fechaNacimiento: "07/04/1995",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Coopeuch",
    tipoCuenta: "Cuenta de Ahorro",
    nroCuenta: "00070007007",
  },
  {
    rut: "19.012.345-6",
    nombre: "Diego Ignacio Romero Fuentes",
    direccion: "Av. Vitacura 1000, Depto 101, Vitacura",
    fechaNacimiento: "03/01/1979",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco Security",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00080008008",
  },
  {
    rut: "20.123.456-7",
    nombre: "Valentina Paz Orellana Soto",
    direccion: "Calle Larga 200, La Reina",
    fechaNacimiento: "14/06/2000",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco Consorcio",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00090009009",
  },
  {
    rut: "10.111.222-3",
    nombre: "Camilo Andrés Vera Paredes",
    direccion: "Pje. La Quebrada 333, Colina",
    fechaNacimiento: "22/10/1988",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "BancoEstado",
    tipoCuenta: "Cuenta Rut",
    nroCuenta: "00100010010",
  },
  {
    rut: "11.222.333-4",
    nombre: "Martina Ignacia Guzmán Vega",
    direccion: "Av. Providencia 2000, Of. 60, Providencia",
    fechaNacimiento: "05/08/1993",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00110011011",
  },
  {
    rut: "12.333.444-5",
    nombre: "Ricardo Esteban Peña Rojas",
    direccion: "El Arrayán 77, Curacaví",
    fechaNacimiento: "17/03/1970",
    estadoCivil: "Casado",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "Banco Santander Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00120012012",
  },
  {
    rut: "13.444.555-6",
    nombre: "Fernanda Isidora Castro Soto",
    direccion: "Calle Central 100, Buin",
    fechaNacimiento: "30/12/1980",
    estadoCivil: "Divorciado",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "Banco BCI",
    tipoCuenta: "Cuenta Vista",
    nroCuenta: "00130013013",
  },
  {
    rut: "14.555.666-7",
    nombre: "Benjamín Javier Tapia Torres",
    direccion: "Ruta 5 Sur Km 45, Linderos",
    fechaNacimiento: "09/05/2002",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Masculino",
    banco: "BancoEstado",
    tipoCuenta: "Cuenta Rut",
    nroCuenta: "00140014014",
  },
  {
    rut: "15.666.777-8",
    nombre: "Isidora Paz Aguilera Díaz",
    direccion: "Av. Principal 50, San Bernardo",
    fechaNacimiento: "21/07/1996",
    estadoCivil: "Soltero",
    nacionalidad: "Chileno",
    sexo: "Femenino",
    banco: "ScotiaBank Chile",
    tipoCuenta: "Cuenta Corriente",
    nroCuenta: "00150015015",
  },
];
export default function PersonalPage() {
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
                    <TableCell className="max-w-xs " title={person.direccion}>
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
                    <TableCell className="max-w-xs" title={person.banco}>
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
