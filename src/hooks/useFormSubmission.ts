'use client'
// hooks/useFormSubmission.ts
import { useState } from 'react'

// Tu asistente personal para formularios
export function useFormSubmission<T>() {
  // Estados que necesitamos rastrear
  const [isSubmitting, setIsSubmitting] = useState(false) // "¿Estamos enviando?"
  const [error, setError] = useState<string | null>(null) // "¿Hubo error?"
  const [success, setSuccess] = useState(false) // "¿Todo salió bien?"

  // Función que maneja TODO el proceso de envío
  const handleSubmission = async (
    data: T, // Los datos del formulario
    submitFn: (data: T) => Promise<void> // La función que envía los datos
  ) => {
    // PASO 1: Prepararse para enviar
    setIsSubmitting(true) // "Estamos enviando..."
    setError(null)       // Limpiar errores anteriores
    setSuccess(false)    // Limpiar éxito anterior

    try {
      // PASO 2: Intentar enviar
      await submitFn(data)
      // PASO 3a: ¡Éxito!
      setSuccess(true)
    } catch (err) {
      // PASO 3b: ¡Error!
      setError(err instanceof Error ? err.message : 'Algo salió mal')
    } finally {
      // PASO 4: Terminar (sin importar si fue éxito o error)
      setIsSubmitting(false)
    }
  }

  // Devolvemos todo lo que necesita el componente
  return {
    isSubmitting, // Para mostrar "Enviando..."
    error,        // Para mostrar errores
    success,      // Para mostrar "¡Éxito!"
    handleSubmission, // La función principal
    reset: () => {    // Para limpiar todo
      setError(null)
      setSuccess(false)
    }
  }
}


