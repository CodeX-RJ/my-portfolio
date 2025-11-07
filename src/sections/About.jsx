import React from 'react'
import { easeIn, easeInOut, motion } from "motion/react"
import mypic from '../assets/mypic.png'

const About = () => {
  return (
    <section className='bg-gray-950 h-full w-full flex flex-col-reverse md:flex-row p-6 md:p-10 items-center lg:px-40' id='about'>
      <motion.div  
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{duration: 0.5, ease: 'easeInOut'}}
      viewport={{once:true}} 
       className='w-full md:w-2/6 my-5 h-full'>
        <div className='bg-csGreen w-full aspect-square relative'>
        <div className='bg-black w-full aspect-square absolute top-4 left-4 overflow-hidden'>
          <img 
            src={mypic} 
            alt="My picture"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      </motion.div>
      <motion.div className='flex flex-col w-full md:w-4/6 md:ml-12 pl-10'
      initial={{translateX: '40%', opacity: 0}}
      whileInView={{translateX: '0',opacity: '100%'}}
      transition={{duration: 0.5, ease:'easeIn', delay: 0.5}}
      viewport={{once: true}}
      >
        <h1 className='text-csGreen font-bold text-2xl lg:text-3xl xl:text-4xl my-4'>
          ABOUT ME
        </h1>
        <h2 className='text-white text-xl lg:text-2xl xl:text-3xl font-bold my-4'>
        Your Dedicated MERN Stack Developer
        </h2>
        <p className='text-gray-400 text-lg lg:text-xl xl:text-2xl my-4'>
        I'm CodeX-RJ, a dedicated MERN Stack Developer specializing in building intuitive and functional web applications. I leverage MongoDB, Express.js, React, and Node.js to deliver seamless, full-stack digital experiences.
        I thrive on solving technical challenges and have successfully designed and deployed multiple MERN projects. My commitment is to crafting clean, user-centered digital experiences and turning creative ideas into tangible results.
        </p>
        <a href="/myresume.pdf" download>
        <button className='bg-csGreen border-2 border-csGreen  text-black my-6 w-fit px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'>Download Resume</button>
        </a>
        
      </motion.div>
    </section>
  )
}

export default About
