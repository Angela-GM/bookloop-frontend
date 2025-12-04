import React from 'react'

interface SelectProps {
    name: string
    id: string
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    selectOptions?: { value: string; label: string }[]
}



export const Select = ({ name, id, required, onChange, selectOptions }: SelectProps) => {
  return (
    <select className={`px-4 py-2 bg-input/30 outline-1 border border-border rounded-md outline-none focus:ring-2 ring-inset placeholder:text-muted-foreground text-sm`} name={name} id={id} required={required} onChange={onChange}>
      {selectOptions?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
