import React from 'react'
import Htmllogo from '../assets/html_logo.png'
import { motion } from 'motion/react'
import motionLogo from '../assets/motion_logo.png'
const Skills = () => {
  return (
    <section className='bg-gray-950 p-10'>
      <h1 className='text-csGreen font-bold text-center text-2xl py-6'>
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
        </div><div className='bg-gray-800 flex flex-row w-full h-20 p-4 pb-6 justify-left items-center my-6 relative overflow-hidden'>
          <img src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' className='h-full' alt='figma logo'></img>
          <h2 className='text-white text-3xl font-semibold pl-5'>Figma</h2>
          <motion.div className='w-full h-20 absolute bg-csGreen'
          initial={{left: '-100%', top: '90%'}}
          whileInView={{left: '-15%',  top: '90%'}}
          transition={{duration: 0.8, ease: 'easeIn', delay:0.2}}
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
