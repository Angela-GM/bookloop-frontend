import React from 'react'
import { BiBookOpen } from 'react-icons/bi'

interface Props {
    children: React.ReactNode
}
export const AuthForms = ({children}: Props) => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-[#F9F7F5]'>
      <h1 className='text-4xl font-bold text-green-700 mb-2 text-center flex items-center gap-2'>
           <BiBookOpen size={50}/> BookLoop
        </h1>
        <p className='text-green-900/60 mb-6 text-center'>Intercambia libros y comparte mundos!</p>
      <div className='bg-white/80 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col'>
        <h2 className='text-2xl font-semibold text-green-700 mb-2 text-left'>
          Únete a la comunidad
        </h2>
        <p className='text-green-900/60 mb-6 text-left'>Descubre, intercambia y disfruta de miles de libros</p>
        {children}
        <div className='mt-4 text-sm text-green-800'>
          ¿No tienes cuenta?{" "}
          <a
            href='#'
            className='underline text-green-700 hover:text-green-900'
          >
            Regístrate
          </a>
        </div>
      </div>
    </section>
  )
}
