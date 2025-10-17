import Link from 'next/link'
import React from 'react'
import { FiUser } from 'react-icons/fi'

export const UserButton = () => {
  return (
    <Link href={'/auth'} className=' rounded-md p-2 flex items-center gap-2 text-neutral-800 hover:bg-green-700/20'><FiUser size={18} /></Link>
  )
}
