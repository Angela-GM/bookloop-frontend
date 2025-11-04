import React from 'react'
import { BadgeCoin } from '../atoms/badge.coin'
import { AddBook } from '../atoms/add-book'
import { UserButton } from '../atoms/user-button'

export const UserAuth = () => {
  return (
    <div className='items-center gap-2 lg:gap-4 hidden md:flex'>

    <BadgeCoin />
    <AddBook />
    <UserButton />
    </div>
  )
}
