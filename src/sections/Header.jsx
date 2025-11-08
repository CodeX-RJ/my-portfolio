import React from 'react'
import { useState, useEffect} from 'react'
import { motion } from 'motion/react';

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
        <li id='linkText' className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg  relative overflow-hidden'><a href="#home">HOME <div id='underLine' className= 'w-full absolute left-[-100%] top-0 z-30 h-full border-b-2 border-b-csGreen'></div> </a></li>

        <li id='linkText2' className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg relative overflow-hidden'><a href="#about">ABOUT ME<div id='underLine2' className= 'w-full absolute left-[-100%] top-0 z-30 h-full border-b-2 border-b-csGreen'></div> </a></li>

        <li id='linkText3' className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg relative overflow-hidden'><a href="#skills">SKILLS<div id='underLine3' className= 'w-full absolute left-[-100%] top-0 z-30 h-full border-b-2 border-b-csGreen'></div></a> </li>

        <li id='linkText4' className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg relative overflow-hidden'><a href="#project">PROJECTS <div id='underLine4' className= 'w-full absolute left-[-100%] top-0 z-30 h-full border-b-2 border-b-csGreen'></div> </a></li>

        <li id='linkText5' className='hover:text-csGreen cursor-pointer transition-all text-sm lg:text-base xl:text-lg relative overflow-hidden'><a href="#contact">CONTACT ME<div id='underLine5' className= 'w-full absolute left-[-100%] top-0 z-30 h-full border-b-2 border-b-csGreen'></div></a> </li>
      </ul>
      <button className='md:hidden w-8 p-0 ' onClick={toggleMenu}>
        <span className={`block w-full h-1 bg-csGreen m-2 ease-in-out ${menuOpen ? 'rotate-45 translate-y-3' : 'rotate-0 ' } transition-transform ease-linear duration-200`} ></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? 'invisible' : 'visible' } transition-transform ease-linear duration-200`}></span>
        <span className={`block w-full h-1 bg-csGreen m-2 ${menuOpen ? '-rotate-45 -translate-y-3' : 'rotate-0' } transition-transform ease-linear duration-200`}></span>
      </button>
    </nav>
    <ul className={`pt-14 fixed left-0 w-full transition-all duration-1000 md:hidden ease-in-out ${menuOpen ? "top-0" : "-top-full"} transform z-10`}>
      <li className='bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}><a href="#home">HOME</a></li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}><a href="#about">ABOUT ME</a></li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}><a href="#skills">SKILLS</a></li>
      <li className=' bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}><a href="#project">PROJECTS</a></li>
      <li className='bg-gray-900 text-center text-lg font-semibold p-4 text-csGreen hover:text-black hover:bg-csGreen transition-all duration-200 ' onClick={toggleMenu}><a href="#contact">CONTACT ME</a></li>
    </ul>
    </header>
    
  )
}

export default Header
