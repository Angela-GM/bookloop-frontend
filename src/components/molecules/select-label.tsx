import React from 'react'
import { Label } from '../atoms/label'
import { Select } from '../atoms/select'

interface SelectLabelProps {
    name: string
    label: string
    selectOptions: { value: string; label: string }[]
}

export const SelectLabel = ({name, label, selectOptions}: SelectLabelProps) => {
  return (
    <div className="flex flex-col gap-2">
    <Label name={name}>{label}</Label>
    <Select name={name} id={name} required={true} selectOptions={selectOptions}/>
    </div>
  )
}
