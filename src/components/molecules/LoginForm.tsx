import { FormField } from '@/src/types/form'
import React from 'react'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'


export const LoginForm = () => {

    const inputsFields: FormField[] = [
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
        }
    ]

  return (
    <form className='w-full flex flex-col gap-3'>
          {inputsFields.map((field) => (
            <div key={field.name} className='flex flex-col gap-1'>
            <Label key={field.name} htmlFor={field.name || ''} >{field.label}</Label>
            <Input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder || ''}
              required={field.required}
              />
              </div>
          ))}
          <button
            type='submit'
            className='mt-2 bg-primary hover:bg-primary/80 text-white font-semibold p-2 rounded-lg transition-colors shadow-md'
          >
            Iniciar sesión
          </button>
        </form>
  )
}
