import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchBar } from '../molecules/SearchBar'
import { UserAuth } from '../molecules/UserAuth'

export const Navbar = () => {
  return (
    <header className='bg-[#F9F7F5] flex justify-center'>
        <div className='flex-1 max-w-7xl flex items-center justify-between p-4'>

        <Link href='/'>
            <Image src={'/next.svg'} alt='logo' width={100} height={100}/>
        </Link>
        <SearchBar />
        <UserAuth />
        </div>
    </header>
  )
}
