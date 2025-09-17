import React from 'react'

interface InputProps {
  type: string,
  placeholder: string
  required?: boolean
}



export const Input = ({type, placeholder, required}: InputProps) => {

  const styles: Record<string, string> = {
    'email': ' border-green-300 focus:ring-green-400 bg-green-50 text-green-900',
    'password': 'border-green-300 focus:ring-green-400 bg-green-50 text-green-900',
    'text': 'border-green-300 focus:ring-green-400 bg-green-50 text-green-900'
  }

  return (
    <input
            type={type}
            placeholder={placeholder}
            className={`px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${styles[type] }`}
            required={required}
          />
  )
}
