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
import { useToast } from "@/hooks/use-toast"
import Modal from "@/components/Modal"

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
    id: 876543,
    apellidoPaterno: "Valdés",
    apellidoMaterno: "Pérez",
    nombres: "Sofía Alejandra",
    username: "s.valdesp",
    password: "****",
    cierrePeriodos: true,
    isAdmin: false,
  },
  {
    id: 123987,
    apellidoPaterno: "Contreras",
    apellidoMaterno: "Rojas",
    nombres: "Benjamín David",
    username: "b.contrerasr",
    password: "****",
    cierrePeriodos: false,
    isAdmin: true,
  },
  {
    id: 456789,
    apellidoPaterno: "Fuentes",
    apellidoMaterno: "Salazar",
    nombres: "Isidora Paz",
    username: "i.fuentess",
    password: "****",
    cierrePeriodos: true,
    isAdmin: false,
  },
  {
    id: 987123,
    apellidoPaterno: "Ramírez",
    apellidoMaterno: "Vargas",
    nombres: "Diego Andrés",
    username: "d.ramirezv",
    password: "****",
    cierrePeriodos: false,
    isAdmin: false,
  },
  {
    id: 321654,
    apellidoPaterno: "Cortés",
    apellidoMaterno: "Muñoz",
    nombres: "Emilia Javiera",
    username: "e.cortesm",
    password: "****",
    cierrePeriodos: true,
    isAdmin: true,
  },
]

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
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
  const { toast } = useToast()

  // Estados para los modales
  const [showNewUserModal, setShowNewUserModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [editFormData, setEditFormData] = useState<User | null>(null)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEditInputChange = (field: string, value: string | boolean) => {
    if (editFormData) {
      setEditFormData({ ...editFormData, [field]: value })
    }
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
      setShowNewUserModal(false)
      toast({
        description: "Usuario creado exitosamente",
        variant: "success",
      })
    }
  }

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setEditFormData({ ...user })
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (editFormData && selectedUser) {
      setUsers(users.map(user => user.id === selectedUser.id ? editFormData : user))
      setShowEditModal(false)
      setSelectedUser(null)
      setEditFormData(null)
      toast({
        description: "Usuario actualizado exitosamente",
        variant: "success",
      })
    }
  }

  const handleDeleteClick = (user: User) => {
    setSelectedUser(user)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    if (selectedUser) {
      setUsers(users.filter((user) => user.id !== selectedUser.id))
      setShowDeleteModal(false)
      setSelectedUser(null)
      toast({
        description: "Usuario eliminado exitosamente",
        variant: "success",
      })
    }
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

      {/* Modal para Nuevo Usuario */}
      <Modal 
        isOpen={showNewUserModal}
        onClose={() => setShowNewUserModal(false)}
        onConfirm={handleSubmit}
        title="Crear Nuevo Usuario"
        confirmText="Crear Usuario"
        type="edit"
      >
        <div className="space-y-6">
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
        </div>
      </Modal>

      {/* Modal de Edición */}
      <Modal 
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onConfirm={handleSaveEdit}
        title="Editar Usuario"
        confirmText="Guardar"
        type="edit"
      >
        {editFormData && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="editApellidoPaterno">Apellido Paterno *</Label>
                <Input
                  id="editApellidoPaterno"
                  value={editFormData.apellidoPaterno}
                  onChange={(e) => handleEditInputChange("apellidoPaterno", e.target.value)}
                  placeholder="Apellido Paterno"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editApellidoMaterno">Apellido Materno</Label>
                <Input
                  id="editApellidoMaterno"
                  value={editFormData.apellidoMaterno}
                  onChange={(e) => handleEditInputChange("apellidoMaterno", e.target.value)}
                  placeholder="Apellido Materno"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editNombres">Nombres *</Label>
                <Input
                  id="editNombres"
                  value={editFormData.nombres}
                  onChange={(e) => handleEditInputChange("nombres", e.target.value)}
                  placeholder="Nombres"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="editUsername">Nombre de Usuario *</Label>
                <Input
                  id="editUsername"
                  value={editFormData.username}
                  onChange={(e) => handleEditInputChange("username", e.target.value)}
                  placeholder="Nombre de usuario"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editPassword">Contraseña *</Label>
                <div className="relative">
                  <Input
                    id="editPassword"
                    type={showPassword ? "text" : "password"}
                    value={editFormData.password}
                    onChange={(e) => handleEditInputChange("password", e.target.value)}
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
                id="editIsAdmin"
                checked={editFormData.isAdmin}
                onCheckedChange={(checked) => handleEditInputChange("isAdmin", checked as boolean)}
              />
              <Label htmlFor="editIsAdmin">Administrador</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="editCierrePeriodos"
                checked={editFormData.cierrePeriodos}
                onCheckedChange={(checked) => handleEditInputChange("cierrePeriodos", checked as boolean)}
              />
              <Label htmlFor="editCierrePeriodos">Cierre Períodos</Label>
            </div>
          </div>
        )}
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
          ¿Está seguro que desea eliminar al usuario <span className="font-semibold">{selectedUser?.nombres} {selectedUser?.apellidoPaterno}</span>? 
          Esta acción no se puede deshacer.
        </p>
      </Modal>

      <div className="grid gap-6">
        {/* Botón para mostrar formulario */}
        <div className="flex justify-end">
          <Button onClick={() => setShowNewUserModal(true)} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Usuario
          </Button>
        </div>

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
                          <Button size="sm" variant="outline" onClick={() => handleEditUser(user)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteClick(user)}
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
