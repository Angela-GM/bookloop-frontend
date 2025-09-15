import React from 'react'
import { BadgeCoin } from '../atoms/BadgeCoin'
import { AddBook } from '../atoms/AddBook'
import { UserButton } from '../atoms/UserButton'

export const UserAuth = () => {
  return (
    <div className='flex items-center gap-2 lg:gap-4'>

    <BadgeCoin />
    <AddBook />
    <UserButton />
    </div>
  )
}
