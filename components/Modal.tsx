"use client"

import React from 'react'
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  title: string
  children?: React.ReactNode
  confirmText?: string
  cancelText?: string
  type?: 'edit' | 'delete' | 'default',
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = "Aceptar",
  cancelText = "Cancelar",
  type = "default",
  className
}: ModalProps) {
  if (!isOpen) return null

  const getConfirmButtonStyle = () => {
    switch (type) {
      case 'edit':
        return "bg-blue-600 hover:bg-blue-700"
      case 'delete':
        return "bg-red-600 hover:bg-red-700"
      default:
        return "bg-blue-600 hover:bg-blue-700"
    }
  }

  return (
    <div className='overflow-hidden fixed inset-0 z-50' style={{marginTop: "0"}}>
      {/* Overlay */}
      <div className='w-screen h-screen absolute top-0 left-0 bg-gray-400/50 z-50 m-0 mt-0 flex items-center justify-center'>
        {/* Modal Container */}
        <div className="bg-white rounded-lg shadow-lg max-w-70 mx-auto overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content (optional) */}
          {children && (
            <div className={cn("p-6", className)}>
              {children}
            </div>
          )}
          
          {/* Footer */}
          <div className="flex justify-end gap-2 p-4 border-t bg-slate-50">
            <Button
              variant="outline"
              onClick={onClose}
            >
              {cancelText}
            </Button>
            <Button
              className={getConfirmButtonStyle()}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
