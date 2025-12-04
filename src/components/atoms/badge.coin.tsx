import React from 'react'
import { LuCoins } from 'react-icons/lu'

export const BadgeCoin = () => {
  return (
    <div className='border-1 border-coin font-semibold text-coin-foreground bg-coin/10 rounded-full py-0.5 px-2.5 text-xs flex items-center gap-1'><LuCoins />150 Bookis</div>
  )
}
