import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import blobImg from '../../assets/blob.svg'
import heroImg from '../../assets/hero2.png'
import {animate, motion} from 'framer-motion'

    export const FadeUp = (delay)=>{
        return{
            initial: {
                opacity: 0,
                y:50,
            },
            animate:{
                opacity:1,
                y:0,
                transition:{
                    type:"spring",
                    stiffness:100,
                    duration:0.5,
                    delay:delay,
                    ease: "easeInOut"
                }
            }
        }
    }

const Hero = () => {
  return (

    <section className='relative overflow-hidden bg-light'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

            <div className='relative z-20 flex flex-col justify-center py-14 md:py-0'>
                <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeUp(0.6)} 
                initial="initial"
                animate="animate"
                 className="text-3xl lg:text-5xl font-bold !leading-snug "> Empower Your Learning Journey {" "}
                    <span className='text-secondary'>– Anytime,  </span>Anywhere
                </motion.h1>
                <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate" className='flex justify-center md:justify-start'>
                <button className="flex items-center gap-2 primary-btn group">Get Started 
                    <IoIosArrowForward className='text-xl duration-300 group-hover:translate-x-2 group-hover:-rotate-45'/></button>
                </motion.div>
                </div>
            </div>
              {/*Helo Image */}
            <div className="flex items-center justify-center">
           <motion.img
           initial={{x:50, opacity:0}}
           animate={{x:0, opacity:1}}
           transition={{duration:0.6, delay:0.4, ease:"easeInOut"}}
            src={heroImg} alt=""  className='w-[400px] xl:w-[600px] relative z-10 drop-shadow'/>

           <motion.img
           initial={{x:-50, opacity:0}}
           animate={{x:0, opacity:1}}
           transition={{duration:0.6, delay:0.2, ease:"easeInOut"}} src={blobImg} alt="" className='absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block' />
         </div>
        </div>
    </section>
  )
}

export default Hero