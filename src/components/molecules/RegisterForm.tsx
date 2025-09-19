import { FormField } from '@/src/types/form'
import React from 'react'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

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
            <div key={field.name} className='flex flex-col gap-2'>
                        <Label  htmlFor={field.name || ''}>{field.label}</Label>
                        <Input
                          
                          type={field.type}
                          placeholder={field.placeholder || ''}
                          required={field.required}
                          />
                          </div>
          ))}
          
          <button
            type='submit'
            className='bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg transition-colors shadow-md'
          >
            Iniciar sesión
          </button>
        </form>
  )
}
