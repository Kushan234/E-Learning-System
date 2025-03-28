import React from 'react'
import BannerPng from '../../assets/education3.png'
import {motion} from 'framer-motion'


const Banner2 = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 gap-8 space-y-6 py-14 md:py-24 md:grid-cols-2 md:space-y-0">
            {/*Banner image*/}
            <motion.div 
            initial={{opacity:0, x: -50}}
            whileInView={{opacity:1, x:0}}
            className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                <h1 className='text-4xl font-bold !leading-snug'>Join our community to start your journey</h1>
                <p className='text-dark'> who are learning and growing with us! Gain expert knowledge, hands-on 
                experience, and the skills you need to succeed. </p>

                    <a href="#" className='primary-btn !mt-8'>Join Now</a>
            </div>
            </motion.div>
            <div className="flex items-center justify-center">
                <motion.img
                   initial={{opacity:0, x:-50}}
                   whileInView={{opacity:1, x:0}}
                src={BannerPng} alt="" className='w-[400px]  md:max-w-[450px] object-cover drop-shadow'/>
            </div>
       
        </div>
    </section>
  )
}

export default Banner2