import React from 'react'
import { contratosData } from '@/const'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from '../ui/input'


export default function TableHorasExtras() {

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>RUT</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Inicio</TableHead>
            <TableHead>Término</TableHead>
            <TableHead>Líquido</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Horas Extras</TableHead>
            <TableHead>Bonos</TableHead>
            <TableHead>Dias HE</TableHead>
            <TableHead>Autorizado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contratosData.map((contrato, index) => (
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
              <TableCell>
                <Input type='text' placeholder='0' />
              </TableCell>
              <TableCell>
                <Input type='text' placeholder='0' />
              </TableCell>
              <TableCell>
                <Input type='text' placeholder='0' />
              </TableCell>
              <TableCell>
                <span>NO</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
