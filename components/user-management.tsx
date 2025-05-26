"use client"

import { useState } from "react"
import { UserCog, Plus, Edit, Trash2, Save, X, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface User {
  id: number
  apellidoPaterno: string
  apellidoMaterno: string
  nombres: string
  username: string
  password: string
  isAdmin: boolean
  cierrePeriodos: boolean
}

const initialUsers: User[] = [
  {
    id: 123,
    apellidoPaterno: "Alana",
    apellidoMaterno: "",
    nombres: "Rolando",
    username: "ralana",
    password: "****",
    cierrePeriodos: false,
    isAdmin: false,
  },
  {
    id: 99,
    apellidoPaterno: "Cortés",
    apellidoMaterno: "Castillo",
    nombres: "Mauricio",
    username: "mcortes",
    password: "****",
    cierrePeriodos: true,
    isAdmin: true,
  },
  {
    id: 49,
    apellidoPaterno: "González",
    apellidoMaterno: "Ceballos",
    nombres: "Alberto",
    username: "agonzalez",
    password: "****",
    cierrePeriodos: false,
    isAdmin: true,
  },
]

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombres: "",
    username: "",
    password: "",
    isAdmin: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (formData.apellidoPaterno && formData.nombres && formData.username && formData.password) {
      const newUser: User = {
        id: Math.max(...users.map((u) => u.id)) + 1,
        ...formData,
        cierrePeriodos: false,
      }
      setUsers([...users, newUser])
      setFormData({
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombres: "",
        username: "",
        password: "",
        isAdmin: false,
      })
      setShowForm(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <UserCog className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gestión de Usuarios</h1>
          <p className="text-slate-600">Administra los usuarios del sistema y sus permisos</p>
        </div>
      </div>

      {showSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">Operación realizada exitosamente</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6">
        {/* Botón para mostrar formulario */}
        {!showForm && (
          <div className="flex justify-end">
            <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Usuario
            </Button>
          </div>
        )}

        {/* Formulario para nuevo usuario */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Crear Nuevo Usuario
              </CardTitle>
              <CardDescription>Completa la información para crear un nuevo usuario del sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apellidoPaterno">Apellido Paterno *</Label>
                  <Input
                    id="apellidoPaterno"
                    value={formData.apellidoPaterno}
                    onChange={(e) => handleInputChange("apellidoPaterno", e.target.value)}
                    placeholder="Apellido Paterno"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                  <Input
                    id="apellidoMaterno"
                    value={formData.apellidoMaterno}
                    onChange={(e) => handleInputChange("apellidoMaterno", e.target.value)}
                    placeholder="Apellido Materno"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nombres">Nombres *</Label>
                  <Input
                    id="nombres"
                    value={formData.nombres}
                    onChange={(e) => handleInputChange("nombres", e.target.value)}
                    placeholder="Nombres"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Nombre de Usuario *</Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña *</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Contraseña"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isAdmin"
                  checked={formData.isAdmin}
                  onCheckedChange={(checked) => handleInputChange("isAdmin", checked as boolean)}
                />
                <Label htmlFor="isAdmin">Administrador</Label>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.apellidoPaterno || !formData.nombres || !formData.username || !formData.password}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Crear Usuario
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tabla de usuarios */}
        <Card>
          <CardHeader>
            <CardTitle>Usuarios del Sistema</CardTitle>
            <CardDescription>Lista de todos los usuarios registrados en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Apellido Paterno</TableHead>
                    <TableHead className="font-semibold">Apellido Materno</TableHead>
                    <TableHead className="font-semibold">Nombres</TableHead>
                    <TableHead className="font-semibold">Username</TableHead>
                    <TableHead className="font-semibold">Password</TableHead>
                    <TableHead className="font-semibold">Cierre Períodos</TableHead>
                    <TableHead className="font-semibold">Administrador</TableHead>
                    <TableHead className="font-semibold text-center">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.apellidoPaterno}</TableCell>
                      <TableCell>{user.apellidoMaterno || "-"}</TableCell>
                      <TableCell>{user.nombres}</TableCell>
                      <TableCell className="font-mono">{user.username}</TableCell>
                      <TableCell className="font-mono">{user.password}</TableCell>
                      <TableCell>
                        <Badge variant={user.cierrePeriodos ? "default" : "secondary"}>
                          {user.cierrePeriodos ? "SÍ" : "NO"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.isAdmin ? "default" : "secondary"}>{user.isAdmin ? "SÍ" : "NO"}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteUser(user.id)}
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
