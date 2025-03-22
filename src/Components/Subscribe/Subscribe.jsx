import React from 'react'
import BgImg from '../../assets/bg.png'
import {motion} from 'framer-motion'
import { FaBell } from 'react-icons/fa'


const bgStyle = { 
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const Subscribe = () => {
  return (
   <section>
    <div className="bg-[#f7f7f7]">
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
       style={bgStyle} className="container py-24 md:py-48">
        <motion.div 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.6, ease:"easeInOut"}}
        className='flex flex-col justify-center'>
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">450K+ Students are learning from us.</h1>
            <p> who are learning and growing with us! Gain expert knowledge, hands-on 
              experience, and the skills you need to succeed. </p>
            <a href=""
            className='primary-btn !mt-8 inline-flex items-center gap-4 group'
            >Subscribe Now <FaBell className='duration-200 group-hover:animate-bounce group-hover:text-lg'/></a>
          </div>
        </motion.div>
      </motion.div>
    </div>
   </section>
  )
}

export default Subscribe