import React from 'react'
import Htmllogo from '../assets/html_logo.png'
import { motion } from 'motion/react'
import motionLogo from '../assets/motion_logo.png'
const Skills = () => {
  return (
    <section className='bg-gray-950 p-10 lg:px-32' id='skills'>
      <h1 className='text-csGreen font-bold text-center text-2xl lg:text-3xl xl:text-4xl py-6'>
        SKILLS 
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl"grid-cols-4 gap-10'>
      
        <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' className='h-full' alt='html logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>HTML</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-5%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

        <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/16020/16020753.png' className='h-full' alt='css logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>CSS</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-10%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png 'className='h-full' alt='javascript logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Javascript</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-20%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/3459/3459621.png' className='h-full' alt='react js logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>React.js</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-25%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png' className='h-full' alt='tailwind css logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Tailwind CSS</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-10%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src={motionLogo} className='h-full scale-150' alt='motion logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Motion</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-15%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/15466/15466163.png' className='h-full' alt='git logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Git</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-20%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' className='h-full rounded-full' alt='github logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Github</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-15%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743' className='h-full' alt='vite logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Vite</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-30%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://logosandtypes.com/wp-content/uploads/2023/03/netlify.svg' className='h-full' alt='netlifly logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Netlifly</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-10%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
        <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' className='h-full' alt='figma logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Figma</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-15%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

         <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src=' https://cdn-icons-png.flaticon.com/512/919/919825.png' className='h-full' alt='Node JS logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Node JS</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-30%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

         <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
         <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30"  
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="m13.78 16.92 3.35-4.54.42.55 2.87 4a1.26 1.26 0 0 0 1.58.6l-4-5.33a.56.56 0 0 1 0-.82l2.1-2.74 1.55-2a1.18 1.18 0 0 0-1.49.55l-3 4-3-4a1.31 1.31 0 0 0-1.58-.55l4 5.2-4.29 5.77a1.23 1.23 0 0 0 1.49-.69M9.93 7.19a4.81 4.81 0 0 0-7.57 2.73L2 11.65v1a5 5 0 0 1 .11.57 5.42 5.42 0 0 0 1.37 3.2 5.24 5.24 0 0 0 6.09.78 4.49 4.49 0 0 0 2.15-3.3c-.52-.16-.81-.07-1 .49a3.36 3.36 0 0 1-2.15 2.39c-3.25 1.09-5.8-1.05-5.66-4.59h8.9c.1-2-.3-3.76-1.88-5m-7 4.22C3 8.77 4.76 7 7.16 7c2.18 0 3.77 1.84 3.83 4.4z"></path>
        </svg>
          <h2 className='text-white text-3xl font-semibold pl-5'>Express JS</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-25%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

         <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon.png" className='h-full' alt="MongoDB logo" />
          <h2 className='text-white text-3xl font-semibold pl-5'>MongoDB</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-40%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

        <div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://img.icons8.com/?size=256&id=gKfcEStXI1Hm&format=png' className='h-full' alt='figma logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Mongoose</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-30%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>

      </div>
    </section>
  )
}

export default Skills;
