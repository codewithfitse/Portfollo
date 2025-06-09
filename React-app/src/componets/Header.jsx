import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='px-[30px] py-[20px] flex justify-between items-center'>
        <div><h1 className='text-[25px] font-semibold text-white'>Portfollo.</h1></div>
        <nav className='flex gap-8'>
          <Link to={'/'}><h1 className='text-[#0ef] uppercase font-medium text-xl transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]'>Home</h1></Link>
          <Link to={'/About'}><h1 className='text-[#0ef] uppercase font-medium text-xl transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]'>About</h1></Link>
          <Link to={'/Service'}><h1 className='text-[#0ef] uppercase font-medium text-xl transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]'>Service</h1></Link>
          <Link to={'/Contact'}><h1 className='text-[#0ef] uppercase font-medium text-xl transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]'>Contact</h1></Link>
          <Link to={'/Login'}><h1 className='text-[#0ef] uppercase font-medium text-xl transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]'>Login</h1></Link>
        </nav>
      </header>
  )
}









