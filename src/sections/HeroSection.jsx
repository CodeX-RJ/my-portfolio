import React from 'react'
import backgroundImage from '../assets/bg-image.jpg';
import heroImage from '../assets/heroImage.svg';
import 'animate.css'
const HeroSection = () => {


  return (
    <section  className= ' bg-black flex flex-col md:flex-row pt-20 p-10 items-center pb-20'>
      <div className='flex flex-col md:w-1/2 '>
        <h1 className='text-white text-3xl  lg:text-4xl font-bold my-1'>HEY! I'M CODEXRJ</h1>
        <h2 className='text-csGreen text-3xl lg:text-4xl font-bold my-1 mb-8 z-0 animate__animated animate__flipInX animate__infinite animate__slow'>FRONT END DEVELOPER</h2>
        <p className='text-gray-400 text-base md:text-lg lg:text-xl my-1'>Crafting responsive, user-friendly websites that bring ideas to life with clean code and creative design.</p>
        <div className='flex-row my-10'>
          <button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'>Get In Touch</button>
          <button className='border-2 border-csGreen text-csGreen md:m-2 my-2 px-4 py-2 text-sm  sm:text-lg font-semibold hover:text-black hover:bg-csGreen transition-colors duration-300 ease-linear'>View My Work</button>
        </div>
      </div>
      <div className='w-full md:w-1/2 grid place-items-center md:p-8 mt-10 md:mt-0'>
        <img src={heroImage} alt="hero section image" className='animate__animated animate__fadeInRightBig'/>
      </div>
    </section>
    
  )
}

export default HeroSection;
