import React from 'react'
import { TfiSearch } from 'react-icons/tfi'

export const SearchBar = () => {
  return (
    <form className='hidden md:block'>
        <label id='search' className='block relative rounded-md left-20'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2' ><TfiSearch className='text-black' size={16} /></span>
            <input type="search" name="search" className='outline-2 rounded-md py-1 w-60  lg:w-100 pl-8 placeholder:text-neutral-400 ' placeholder='Buscar'/>
        </label>
    </form>
  )
}
