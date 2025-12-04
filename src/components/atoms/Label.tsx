import React from 'react'

interface LabelProps {
    children: React.ReactNode,
    name?: string
}

export const Label = ({children, name}: LabelProps) => {
  return (
    <label htmlFor={name} className='text-left font-semibold text-sm'  >{children}</label>
  )
}
