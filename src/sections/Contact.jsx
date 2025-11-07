import React, { useState } from 'react'
import Codingbackground from '../assets/coding.jpg'
import { motion } from 'motion/react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://formspree.io/f/mayroawe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert("❌ Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("⚠️ Error sending message.")
    }
    setLoading(false)
  }

  return (
    <section
      style={{ backgroundImage: `url(${Codingbackground})` }}
      className='bg-cover bg-no-repeat lg:px-64'
      id='contact'
    >
      <div className='backdrop-blur-sm p-5 md:p-40 lg:p-64 lg:py-5 md:pt-5'>
        <h1 className='text-csGreen font-bold text-2xl lg:text-3xl xl:text-4xl text-center pt-20 pb-5'>
          LET'S CONNECT
        </h1>

        {submitted ? (
          <p className='text-green-400 text-center text-xl font-semibold mt-10'>
            ✅ Thanks! Your message has been sent successfully.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <motion.div
              className='flex flex-col'
              initial={{ translateY: 30, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: '100%' }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className='text-lg font-bold text-white md:text-xl mt-5 mb-2'>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 focus:outline-none pl-2'
              />
            </motion.div>

            <motion.div
              className='flex flex-col'
              initial={{ translateY: 30, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: '100%' }}
              transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className='text-lg font-bold text-white md:text-xl mt-5 mb-2'>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 focus:outline-none pl-2'
              />
            </motion.div>

            <motion.div
              className='flex flex-col'
              initial={{ translateY: 30, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: '100%' }}
              transition={{ delay: 1.8, duration: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className='text-lg font-bold text-white md:text-xl mt-5 mb-2'>
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className='bg-white bg-opacity-10 text-white text-lg md:text-xl mb-5 py-3 h-36 focus:outline-none pl-2'
              />
            </motion.div>

            <motion.div
              className='grid place-items-center'
              initial={{ translateY: 30, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: '100%' }}
              transition={{ delay: 1.6, duration: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                disabled={loading}
                className='bg-csGreen border-2 border-csGreen text-black m-2 ml-0 px-8 py-2 text-sm sm:text-lg font-semibold transition-colors duration-300 ease-linear hover:text-csGreen hover:bg-black w-fit text-center'
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
