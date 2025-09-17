import { FormField } from '@/src/types/form'
import React from 'react'
import { Input } from '../atoms/Input'

export const RegisterForm = () => {

  const inputsFields: FormField[] = [
          {
              name: 'completeName',
              label: 'Complete Name',
              type: 'text',
              placeholder: 'Name Lastname',
              required: true
          },
          {
              name: 'email',
              label: 'Email',
              type: 'email',
              placeholder: 'Correo electrónico',
              required: true
          },
          {
              name: 'password',
              label: 'Password',
              type: 'password',
              placeholder: '************',
              required: true
          },
          {
              name: 'confirmPassword',
              label: 'Confirmar Password',
              type: 'password',
              placeholder: '************',
              required: true
          }
      ]

  return (
    <form className='w-full flex flex-col gap-4'>
        {inputsFields.map((field) => (
            <Input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder || ''}
              required={field.required}
            />
          ))}
          
          <button
            type='submit'
            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md'
          >
            Iniciar sesión
          </button>
        </form>
  )
}
