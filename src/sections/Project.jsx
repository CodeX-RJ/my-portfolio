import React from 'react'
import Testimage from '../assets/test.png'
import { easeIn, motion } from 'motion/react'
import Weatherappimg from '../assets/weatherapp.png'
import Snakegame from '../assets/snakegame.png'
import Schoolwebsite from '../assets/schoolwebsite.png'
import Teacherdashboard from '../assets/teacherdashboard.png'
import MyNotes from '../assets/mynotes.png'
import MernAuth from '../assets/mernauth.png'

const Project = () => {
  return (
    <section className='bg-gray-950 p-5 lg:px-32' id='project'>
        <h1 className='text-csGreen font-bold text-2xl lg:text-3xl xl:text-4xl text-center py-20'>
          MY WORK
        </h1> 
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

        <motion.div className='p-5 bg-gray-900 my-5 relative' 
        initial={{scale:0.5}}
        whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
        
          whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
          viewport={{once:true}} >
            <img src={Weatherappimg} alt="weather app image" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>Weather App</h2>
            <p className='text-base text-center italic text-gray-300 '>A weather app built with React and an API to deliver real-time temperature, humidity, and wind speed. With a simple search function and a loading animation, it provides a seamless and interactive weather experience.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://weatherappbyrj.netlify.app/" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>

          <motion.div className='p-5 bg-gray-900 my-5 relative'  
           initial={{scale:0.5}}
           whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
           
             whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
             viewport={{once:true}} >
            <img src={Schoolwebsite} alt="school website" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>School Website</h2>
            <p className='text-base text-center italic text-gray-300 '>A sleek, responsive website for Smt. Mahadevi Public Highschool, built with React, Vite, and Tailwind CSS. It features a homepage, manager's message, a features section, and a contact page, with API-based form submissions. Deployed on Netlify, it offers smooth navigation using React Router.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://codex-rj-portfolio.netlify.app/#home" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>

          

          <motion.div className='p-5 bg-gray-900 my-5 relative'  
           initial={{scale:0.5}}
           whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
           
             whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
             viewport={{once:true}} >
            <img src={Teacherdashboard} alt="weather app image" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>Teacher Dashboard</h2>
            <p className='text-base text-center italic text-gray-300 '>A full-featured Teacher Dashboard built with the MERN stack, designed to simplify classroom management. Teachers can view, update, and delete student details, as well as filter students class-wise for easy organization. The dashboard offers a responsive and user-friendly interface, real-time data handling, and smooth navigation, making it efficient for educators to track and manage student information across all devices.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://teacher-dashboard-cjkx.onrender.com/" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>

          <motion.div className='p-5 bg-gray-900 my-5 relative'  
           initial={{scale:0.5}}
           whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
           
             whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
             viewport={{once:true}} >
            <img src={MyNotes} alt="weather app image" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>My Notes</h2>
            <p className='text-base text-center italic text-gray-300 '>dynamic Notes App built with the MERN stack that allows users to create, view, and delete notes effortlessly. Featuring a clean and responsive interface, the app ensures smooth interactions and real-time updates, helping users stay organized and manage their ideas efficiently across all devices.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://mynotes-mern.onrender.com/" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>

          <motion.div className='p-5 bg-gray-900 my-5 relative'  
           initial={{scale:0.5}}
           whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
           
             whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
             viewport={{once:true}} >
            <img src={MernAuth} alt="weather app image" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>MERN Authentication</h2>
            <p className='text-base text-center italic text-gray-300 '>A secure MERN Authentication App that enables users to register, log in, and manage their accounts with ease. It features JWT-based authentication, protected routes, and a responsive, user-friendly interface. The app ensures secure handling of user data while providing smooth navigation and a seamless experience across all devices.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://codex-rj.github.io/snakegame/" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>


          <motion.div className='p-5 bg-gray-900 my-5 relative'  
           initial={{scale:0.5}}
           whileInView={{scale:1, transition: {duration: 1, ease:'easeInOut'}}} 
           
             whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.5, ease: 'easeInOut'}}}
             viewport={{once:true}} >
            <img src={Snakegame} alt="weather app image" />
            <h2 className='text-csGreen text-center font-bold text-lg my-2'>Snake Game</h2>
            <p className='text-base text-center italic text-gray-300 '>A classic Snake Game built with JavaScript and the Canvas API. It features real-time score tracking, smooth controls, and dynamic speed adjustments. Fully responsive, it ensures a seamless gaming experience across all devices. The game offers a fun and nostalgic challenge for players of all ages.</p>

            <motion.div className='w-full h-full backdrop-blur-sm absolute right-0 top-0 grid place-items-center'
            initial={{opacity: 0}}
            whileHover={{opacity: '100%'}}
            transition={{duration: 0.5, ease:'easeInOut'}}
            >
              <a href="https://codex-rj.github.io/snakegame/" target="_blank" rel="noopener noreferrer"><motion.button className='bg-csGreen border-2 border-csGreen  text-black m-2 ml-0 px-4 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black'
              >View Project</motion.button></a>
              
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}

export default Project;
