import React from 'react'
import { easeIn, easeInOut, motion } from "motion/react"

const About = () => {
  return (
    <section className='bg-gray-950 h-full w-full flex flex-col-reverse md:flex-row p-6 md:p-10 items-center'>
      <motion.div  initial={{ opacity: 0, x: -150 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.3, 
    ease: 'easeInOut',  
  }}
   className='w-full md:w-2/6 my-5 '>
        <div className='bg-csGreen w-full h-80 relative'>
          <div className='bg-black w-full h-80 absolute top-3 left-3'>

          </div>
        </div>
      </motion.div>
      <motion.div className='flex flex-col w-full md:w-4/6 md:ml-12'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.1, ease:'easeIn', delay: 0.5}}
  
      >
        <h1 className='text-csGreen font-bold text-2xl my-2'>
          ABOUT ME
        </h1>
        <h2 className='text-white text-xl font-bold my-2'>
        Your Dedicated Front-End Developer
        </h2>
        <p className='text-gray-400 my-2'>
        I’m CodeX-RJ, a dedicated front-end developer with a passion for building intuitive and engaging web interfaces. My journey began with a curiosity for how the web works, evolving into a deep commitment to crafting clean, user-centered digital experiences. I love solving challenges with code and continuously learning to bring creative ideas to life. Let's connect and build something extraordinary together!
        </p>
        <button className='bg-csGreen border-2 border-csGreen  text-black my-4 w-fit px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'>Download Resume</button>
      </motion.div>
    </section>
  )
}

export default About
