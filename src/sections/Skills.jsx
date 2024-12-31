import React from 'react'
import Htmllogo from '../assets/html_logo.png'
import { motion } from 'motion/react'
const Skills = () => {
  return (
    <section className='bg-gray-950 p-10'>
      <h1 className='text-csGreen font-bold text-center text-2xl py-6'>
        SKILLS 
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl"grid-cols-4 gap-10'>
      <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-700 flex flex-row w-full h-24 p-2 pb-6 justify-left items-center my-12 md:my-8 relative overflow-hidden'>
          <img src={Htmllogo} className='h-full'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen  top-20'
          initial={{left: '-100%'}}
          whileInView={{left: '-10%',}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills;
