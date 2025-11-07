import React from 'react'
import { useState, useEffect} from 'react'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  function toggleMenu(){
  setMenuOpen(!menuOpen);

  }
  return (
    <header>
      <nav className='flex justify-around bg-slate-950 text-white font-sans p-2 md:p-3 lg:p-2 fixed shadow-md w-full items-center z-20 lg:px-28'>
      <h1 className='w-1/2 md:ml-5 text-csGreen text-2xl font-bold'>CodeX-RJ</h1>
      <ul className='hidden md:flex justify-around w-1/2 text-lg'>
        <li className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg'><a href="#home">HOME</a></li>
        <li className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg'><a href="#about">ABOUT ME</a></li>
        <li className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg'><a href="#skills">SKILLS</a></li>
        <li className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg'><a href="#project">PROJECTS</a></li>
        <li className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg'><a href="#contact">CONTACT ME</a></li>
      </ul>
      <button className='md:hidden w-8 p-0 ' onClick={toggleMenu}>
        <span className={`block w-full h-1 bg-csGreen m-2 ease-in-out ${menuOpen ? 'rotate-45 translate-y-3' : 'rotate-0 ' } transition-transform ease-linear duration-200`} ></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? 'invisible' : 'visible' } transition-transform ease-linear duration-200`}></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? '-rotate-45 -translate-y-3' : 'rotate-0' } transition-transform ease-linear duration-200`}></span>
      </button>
    </nav>
    <ul className={`pt-14 fixed left-0 w-full transition-all duration-1000 md:hidden ease-in-out ${menuOpen ? "top-0" : "-top-full"} transform z-10`}>
      <li className='bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}>HOME</li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}>ABOUT ME</li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}>SKILLS</li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}>PROJECTS</li>
      <li className='bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}>CONTACT ME</li>
    </ul>
    </header>
    
  )
}

export default Header
