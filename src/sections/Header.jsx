import React from 'react'
import { useState } from 'react'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu(){
    setMenuOpen(!menuOpen);
  }
  return (
    <header>
      <nav className='flex justify-around bg-slate-950 text-white font-sans p-2 md:p-4 fixed shadow-md w-full items-center z-10'>
      <h1 className='w-1/2 md:ml-5 text-csGreen text-2xl font-bold'>CodeX-RJ</h1>
      <ul className='hidden md:flex justify-around w-1/2 text-lg'>
        <li className='hover:text-csGreen cursor-pointer transition-all'>HOME</li>
        <li className='hover:text-csGreen cursor-pointer transition-all'>ABOUT ME</li>
        <li className='hover:text-csGreen cursor-pointer transition-all'>SKILLS</li>
        <li className='hover:text-csGreen cursor-pointer transition-all'>PROJECTS</li>
        <li className='hover:text-csGreen cursor-pointer transition-all'>CONTACT ME</li>
      </ul>
      <button className='md:hidden w-8 p-0 transition-all duration-100' onClick={toggleMenu}>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? 'rotate-45 translate-y-3' : 'rotate-0 ' } transition-all duration-200'`} ></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? 'invisible' : 'visible' } transition-all duration-75'`}></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? '-rotate-45 -translate-y-3' : 'rotate-0' } transition-all duration-200'`}></span>
      </button>
    </nav>
    <ul className={`bg-gray-900 pt-14 absolute left-0 w-full transition-all duration-1000 ease-in-out ${menuOpen ? "top-0" : "-top-full"} transform`}>
      <li className='text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200' onClick={toggleMenu}>HOME</li>
      <li className='text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200' onClick={toggleMenu}>ABOUT ME</li>
      <li className='text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200' onClick={toggleMenu}>SKILLS</li>
      <li className='text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200' onClick={toggleMenu}>PROJECTS</li>
      <li className='text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200' onClick={toggleMenu}>CONTACT ME</li>
    </ul>
    </header>
    
  )
}

export default Header
