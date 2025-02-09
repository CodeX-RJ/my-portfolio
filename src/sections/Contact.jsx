import React from 'react'
import Codingbackground from '../assets/coding.svg'

const Contact = () => {
  return (
    <section style={{backgroundImage: `url(${Codingbackground})`}} className='bg-cover bg-no-repeat p-5 md:p-20'>
        <div className='backdrop-blur-sm p-5 md:p-20'>
            <h1 className='text-csGreen font-bold text-2xl text-center pt-20 pb-5'>
                LET'S CONNECT
            </h1>
            <form action="" className='flex flex-col'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required className='bg-transparent'/>
              <label htmlFor="Email" required>Email</label>
              <input type="email" id='email'/>
              <label htmlFor="message">Your Message</label>
              <textarea type="message" id='message' required/>
              <input type="submit" />
            </form>
            
        </div>
         
    </section>
  )
}

export default Contact
