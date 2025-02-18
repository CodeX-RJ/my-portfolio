import React from 'react'
import backgroundImage from '../assets/bg-image.jpg';
import heroImage from '../assets/heroImage.svg';
import { motion } from 'motion/react';
import 'animate.css'
const HeroSection = () => {


  return (
    <section  className= ' bg-black flex flex-col md:flex-row pt-20 p-10 items-center pb-20' id='home'>
      <div className='flex flex-col md:w-1/2 '>
        <h1 className='text-white text-3xl  lg:text-4xl font-bold my-1 relative'>HEY! I'M CODEXRJ</h1>
        <motion.h1 className='text-black text-3xl  lg:text-4xl bg-black font-bold my-1 absolute'
        initial={{translateY: '0'}}
        whileInView={{translateY: '100%'}}
        transition={{duration: 1, ease: 'easeIn'}}
        viewport={{once: true}}
        >HEY! I'M CODEXRJ</motion.h1>
        
          <h2 className='text-csGreen text-3xl lg:text-4xl font-bold my-1 mb-8 z-0 relative overflow-hidden'>FRONT END DEVELOPER</h2>
          <motion.h2 className='text-black bg-black text-3xl lg:text-4xl font-bold absolute'
          initial={{translateY: '145%'}}
          whileInView={{translateY: '220%'}}
          transition={{duration: 1, ease: 'easeIn'}}
          viewport={{once: true}}
          >FRONT END DEVELOPER</motion.h2>
       
        

        <div className='relative overflow-hidden'>
          <p className='text-gray-400 text-base md:text-lg lg:text-xl my-1 w-fit'>Crafting responsive, user-friendly websites that bring ideas to life with clean code and creative design.</p>
          <motion.p className='text-black text-base md:text-lg lg:text-xl absolute bg-black '
          initial={{translateY: '-100%'}}
          whileInView={{translateY: '0'}}
          transition={{duration: 1, ease: 'easeIn'}}
          viewport={{once: true}}
          >Crafting responsive, user-friendly websites that bring ideas to life with clean code and creative design.</motion.p>
        </div>
        


        <div className='flex-row my-10'>
          <a href="#contact">
          <motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
          initial={{translateX:'-20%', opacity: 0}}
          whileInView={{translateX: 0, opacity: '100%'}}
          transition={{duration: 0.5, ease: 'easeIn', delay: 1}}
          viewport={{once: true}}
          >Get In Touch</motion.button></a>

          
          <a href="#project">
          <motion.button className='border-2 border-csGreen text-csGreen md:m-2 my-2 px-4 py-2 text-sm  sm:text-lg font-semibold hover:text-black hover:bg-csGreen transition-colors duration-300 ease-linear'
          initial={{translateX:'-20%', opacity: 0}}
          whileInView={{translateX: 0, opacity: '100%'}}
          transition={{duration: 0.5, ease: 'easeIn', delay: 1.5}}
          viewport={{once: true}}
        >View My Work</motion.button></a>
        </div>
      </div>
      <div className='w-full md:w-1/2 grid place-items-center md:p-8 mt-10 md:mt-0'>
        <motion.img src={heroImage} alt="hero section image" initial={{scale: '50%', opacity: 0}}  whileInView={{scale: "100%", opacity: '100%'}} transition={{duration: 1, ease: 'easeIn'}} viewport={{once: true}}/>
      </div>
    </section>
    
  )
}

export default HeroSection;
