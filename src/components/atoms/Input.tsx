import React from 'react'

interface InputProps {
  type: string,
  placeholder: string
  required?: boolean
}



export const Input = ({type, placeholder, required}: InputProps) => {

  const styles: Record<string, string> = {
    'email': '',
    'password': '',
    'text': ''
  }

  return (
    <input
            type={type}
            placeholder={placeholder}
            className={`px-4 py-2 bg-input/30 outline-1 border border-border rounded-md outline-none focus:ring-2 ring-inset  ${styles[type] }`}
            required={required}
          />
  )
}
