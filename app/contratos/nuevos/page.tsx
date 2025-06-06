import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from "@/components/ui/separator"
import { Building2, HeartPulse, MapPin, User } from 'lucide-react'
import React from 'react'
import { nacionalidades, comunasDeChile, AFP, SALUD } from '@/const'
import { Button } from '@/components/ui/button'


export default function CrearContratosPage() {
  return (
    <div className='space-y-6'>
      <div className="flex items-center gap-3">
        <Building2 className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Proyecto 1465 CAJA LOS ANDES FANTASMA</h1>
            <p className="text-slate-600">Completa el formulario para agregar un nuevo contrato al proyecto.</p>
        </div>
      </div>

      <div className='grid gap-6'>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Datos Personales
            </CardTitle>
            <CardDescription>Datos básicos de identificación</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="space-y-2">
                <Label htmlFor="rut">RUT</Label>
                <Input
                  id="rut"
                  placeholder="12345678"
                />
              </div>
              <div className="space-y-2 w-20">
                <Label htmlFor="dv">DV</Label>
                <Input
                  id="dv"
                  disabled
                  readOnly
                  className='bg-gray-200'
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                <Input
                  id="apellidoPaterno"
                  placeholder="Ej. Pérez"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                <Input
                  id="apellidoMaterno"
                  placeholder="Ej. González"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nombreCompleto">Nombre Completo</Label>
                <Input
                  id="nombreCompleto"
                  placeholder="Ej. Juan Carlos"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento">Fecha Nacimiento</Label>
                <Input
                  id="fechaNacimiento"
                  placeholder="DD/MM/AAAA"
                  type='date'
                />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="estadoCivil">Estado Civil</Label>
                <Select>
                  <SelectTrigger id="estadoCivil">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soltero">Soltero</SelectItem>
                    <SelectItem value="casado">Casado</SelectItem>
                    <SelectItem value="divorciado">Divorciado</SelectItem>
                    <SelectItem value="viudo">Viudo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sexo">Sexo</Label>
                <Select>
                  <SelectTrigger id="sexo">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nacionalidad">Nacionalidad</Label>
                <Select>
                  <SelectTrigger id="nacionalidad">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent className='max-h-60'>
                    {nacionalidades.map((nacionalidad) => (
                      <SelectItem key={nacionalidad} value={nacionalidad?.toLowerCase()}>
                        {nacionalidad}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 px-4 flex items-center gap-2">
                <Input
                  id="ciudad"
                  placeholder="Ciudad"
                  type='checkbox'
                  className='h-4 w-4'
                />
                <Label htmlFor="sindicado" style={{ marginTop: "0" }}>Sindicado</Label>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Localización
            </CardTitle>
            <CardDescription>Información sobre la ubicación y dirección.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  placeholder="Ej. Av. Siempre Viva "
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numero">Número</Label>
                <Input
                  id="numero"
                  placeholder="Ej. 742"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departamento">Departamento</Label>
                <Input
                  id="departamento"
                  placeholder="Ej. 5B"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comuna">Comuna</Label>
                <Select>
                  <SelectTrigger id="comuna">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent className='max-h-60'>
                    {comunasDeChile.map((comuna) => (
                      <SelectItem key={comuna} value={comuna?.toLowerCase()}>
                        {comuna}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type='email'
                  placeholder="Ej. nombre@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="celular">Sexo</Label>
                <Input
                  id='celular'
                  type='tel'
                  placeholder="Ej. +56912345678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id='telefono'
                  type='tel'
                  placeholder="Ej. +56212345678"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5" />
              Previsión y Salud
            </CardTitle>
            <CardDescription>Información sobre previsión social y sistema de salud.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="afp">AFP</Label>
                <Select>
                  <SelectTrigger id="afp">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      AFP.map((afp) => (
                        <SelectItem key={afp} value={afp?.toLowerCase()}>
                          {afp}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salud">Salud</Label>
                <Select>
                  <SelectTrigger id="salud">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      SALUD.map((salud) => (
                        <SelectItem key={salud} value={salud?.toLowerCase()}>
                          {salud}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='flex justify-end'>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Guardar Datos
        </Button>
      </div>
    </div>
  )
}
