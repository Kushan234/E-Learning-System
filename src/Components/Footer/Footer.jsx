import React from 'react'
import { FaInstagram,FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/*first section*/}
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-2xl font-bold'>E-Learning</h1>
                    <p className='text-dark'>Designed the database schema with tables for users, files,
                         roles, and logs. Installed essential software tools and frameworks needed for development </p>
                </div>
                 {/*second section*/}
                 <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Courses</h1>
                        <div className='text-dark2 '>
                            <ul className='space-y-2 text-lg'>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>Web Development</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>Software Development</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>App Development</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>E-learning</li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Links</h1>
                        <div className='text-dark2 '>
                            <ul className='space-y-2 text-lg'>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>Home</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>Services</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>About</li>
                                <li className='duration-200 cursor-pointer hover:text-secondary'>Contact</li>
                            </ul>
                    </div>
                 </div>
            </div>
                 {/*Third section*/}
                 <div className="space-y-4 max-w-[300px]">
                    <h1 className='text-2xl font-bold'>Fet In Touch</h1>
                    <div className="flex items-center">
                        <input type="text"
                        placeholder='Enter your e-mail'
                        className='w-full p-3 py-4 bg-white rounded-s-xl focus:ring-0 focus:outline-none placeholder:text-dark2' />
                        <button className='px-6 py-4 font-semibold text-white bg-primary rounded-e-xl'>Go</button>
                    </div>
                    <div className='flex py-3 space-x-6'>
                        <a href="#"><FaWhatsapp className='duration-200 cursor-pointer hover:text-primary hover:scale-105'/></a>
                        <a href="#"><FaInstagram className='duration-200 cursor-pointer hover:text-primary hover:scale-105'/></a>
                        <a href="#"><FaYoutube className='duration-200 cursor-pointer hover:text-primary hover:scale-105'/></a>
                        <a href="#"><TbWorldWww className='duration-200 cursor-pointer hover:text-primary hover:scale-105'/></a>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer