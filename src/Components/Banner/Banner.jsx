import React from 'react'
import BannerPng from '../../assets/education2.png'
import {GrUserExpert} from 'react-icons/gr'
import {MdOutlineAccessTime} from 'react-icons/md'
import {FaBookReader} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { FadeUp } from '../Hero/Hero';

const Banner = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 gap-8 space-y-6 py-14 md:py-24 md:grid-cols-2 md:space-y-0">
            {/*Banner image*/}
            <div className="flex items-center justify-center">
                <motion.img
                   initial={{opacity:0, x:-50}}
                   whileInView={{opacity:1, x:0}}
                   viewport={{onece:true}}
                   transition={{duration:0.5,ease:"easeInOut"}}
                src={BannerPng} alt="" className='w-[400px]  md:max-w-[450px] object-cover drop-shadow'/>
            </div>
            <div className="flex flex-col justify-center">
                <div className="space-y-12 text-center md:text-left">
                    <motion.h1
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1, scale:1}}
                    viewport={{onece:true}}
                    transition={{duration:0.5}} 
                    className="text-3xl md:text-4xl font-bold !leading-snug">The world's leading online learning platform</motion.h1>
                    <div>
                        <motion.div
                        variants={FadeUp(0.2)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                         className='flex items-center gap-4 py-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <FaBookReader className='text-2xl'/>
                        <p className="text-lg">10,000+ courses</p>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div
                        variants={FadeUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                         className='flex items-center gap-4 py-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <GrUserExpert className='text-2xl'/>
                        <p className="text-lg">Expert Instructions</p>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div
                        variants={FadeUp(0.6)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                         className='flex items-center gap-4 py-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <MdOutlineAccessTime className='text-2xl'/>
                        <p className="text-lg">Lifetime Access</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner