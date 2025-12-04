import React from 'react'
import { LinkButton } from '../atoms/link-button'
import { BiBookOpen } from 'react-icons/bi'
import { GoPlus } from 'react-icons/go'

export const StartAdventure = () => {
  return (
    <div className='mt-10 flex flex-col gap-4 items-center'>
            <BiBookOpen
              size={60}
              className='text-book-spine'
            />
            <h4 className='text-lg font-medium text-primary'>¡Comienza tu aventura!</h4>
            <p className='text-sm text-muted-foreground'>
              Sube tu primer libro o explora el catálogo para comenzar a intercambiar.
            </p>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <LinkButton
                styleButton='primary'
                href='/upload'
              >
                <GoPlus size={20} />
                Subir Libro
              </LinkButton>
              <LinkButton
                styleButton='secondary'
                href='/catalog'
              >
                <BiBookOpen size={20} />
                Explorar
              </LinkButton>
            </div>
          </div>
  )
}
