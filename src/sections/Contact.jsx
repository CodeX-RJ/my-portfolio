import React from 'react'
import Codingbackground from '../assets/coding.svg'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <section style={{backgroundImage: `url(${Codingbackground})`}} className='bg-cover bg-no-repeat p-5 md:px-20 lg:px-30 xl:px-40 md:pt-10'>
        <div className='backdrop-blur-md p-5 md:p-20'>
            <h1 className='text-csGreen font-bold text-2xl text-center pt-20 pb-5'>
                LET'S CONNECT
            </h1>
            <form action="" className='flex flex-col'>
              <motion.div className='flex flex-col'
              initial={{translateY: 30, opacity: 0}}
              whileInView={{translateY: 0, opacity: '100%'}}
              transition={{delay:0.8, duration: 1, ease: 'easeInOut'}}>
              <label htmlFor="name" className='text-lg font-bold text-white md:text-xl mt-5 mb-2'>Name</label>
              <input type="text" id="name" required className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 focus:outline-none pl-2'/>
              </motion.div>
              
              <motion.div className='flex flex-col' 
              initial={{translateY: 30, opacity: 0}}
              whileInView={{translateY: 0, opacity: '100%'}}
              transition={{delay: 1.6, duration: 1, ease: 'easeInOut'}}>
                <label htmlFor="Email" className='text-lg font-bold text-white md:text-xl mt-5 mb-2' required>Email</label>
                <input type="email" id='email ' className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 focus:outline-none pl-2'/>
              </motion.div>
              


              <motion.div className='flex flex-col' initial={{translateY: 30, opacity: 0}}
              whileInView={{translateY: 0, opacity: '100%'}}
              transition={{delay:2.2, duration: 1, ease: 'easeInOut'}}>
              <label htmlFor="message" className='text-lg font-bold text-white md:text-xl mt-5 mb-2'>Your Message</label>
              <textarea type="message" id='message' required className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 h-36 focus:outline-none pl-2'/>
              </motion.div>
              


              <motion.div className='grid place-items-center'
              initial={{translateY: 30, opacity: 0}}
              whileInView={{translateY: 0, opacity: '100%'}}
              transition={{delay:2.8, duration: 1, ease: 'easeInOut'}}
              >
               <input type="submit" className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-8 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black w-fit text-center' />
              </motion.div>
             
            </form>
            
        </div>
         
    </section>
  )
}

export default Contact
