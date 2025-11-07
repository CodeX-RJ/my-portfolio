import React from 'react'
import { motion } from 'motion/react'

const Education = () => {

  const myArray = [{id: 1, course: 'Bachelor of computer Application (BCA)', university: 'Dr. Ram Manohar Lohia Awadh University', discription: 'During my BCA, I gained foundational computer science knowledge and developed a responsive school website, which enhanced my front-end skills', year: '2018-2021'}, 
  {id: 2, course: 'Advanced Diploma in Computer Applications (ADCA)', university: 'Institute of Computer Study (ICS)', discription: 'Gained foundational skills in web development, MS Office, Photoshop, and CorelDRAW, enabling me to create simple websites and design graphics effectively.', year: '2016-2017'}, 
  {id: 3, course: 'Responsive Web Design', university: 'freeCodeCamp', discription: 'Through this certification, I mastered HTML, CSS, and responsive design principles, building projects like a personal portfolio and a tribute page to ensure mobile-friendly, visually appealing designs.', year: '2024'},
  {id: 4, course: 'Git and GitHub', university: 'Simplilearn', discription: 'This certification taught me effective version control practices, including repository management, branching, and collaboration. I applied these skills by managing my own projects and contributing to team repositories on GitHub.', year: '2024'},
  {id: 4, course: 'JavaScript', university: 'Scaler', discription: 'This course strengthened my understanding of JavaScript, covering topics like ES6, asynchronous programming, and DOM manipulation. I also solved complex coding problems and developed small interactive web applications to reinforce my learning.', year: '2024'},

  ]


  return (
    <section className='bg-gray-950 h-full p-8 lg:px-32' id='education'>
        <h1 className='text-csGreen font-bold text-2xl lg:text-3xl xl:text-4xl text-center py-20'>
          EDUCATION AND CERTIFICATIONS
        </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {myArray.map((item, index) => (

                <motion.div key={item.id} id='firstElement' className='p-4 flex flex-col justify-center bg-gray-900 cursor-pointer' initial={{translateX: '-20%',translateY: '-20%', opacity: '0'}} 
                whileInView={{translateX: '0',translateY: '0', opacity: '100%', transition: {duration: 0.5, ease: 'easeInOut', delay: index*0.3}}}  
                whileHover={{scale: 1.05, boxShadow: '0 0 5px #00DFC0, 0 0 10px #00DFC0, 0 0 20px #00DFC0', transition: {duration: 0.3, ease: 'easeIn'}}}
                viewport={{once:true}} 
                
                >
                <h2 className='text-csGreen text-center text-2xl font-bold py-2'>{item.course}</h2>
                <h3 className='text-white text-center text-xl font-semibold py-2'>{item.university}</h3>
                <p className='text-gray-400 italic text-center py-2'>{item.discription}</p>
                <span className='bg-csGreen text-black font-bold px-3 text-lg text-center self-center my-3'>{item.year}</span>
                </motion.div>

          ))}
          

          
        </div>
        
    </section>
  )
}

export default Education
