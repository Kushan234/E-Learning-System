import React from 'react'
import {IoMdMenu} from 'react-icons/io'
import {animate, motion} from 'framer-motion'
import logo from '../../assets/logo3.png'

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
    
const NavbarMenu = [
  {
    id:1,
    title:"Home",
    path:"/",
  },
  {
    id:2,
    title:"Services",
    path:"#",
  },
  {
    id:3,
    title:"About Us",
    path:"#",
  },
  {
    id:4,
    title:"Our Team",
    path:"#",
  },
  {
    id:5,
    title:"Contact us",
    path:"#",
  },

]
const Navbar = () => {
  return (
    <nav className='relative z-20'>
        <motion.div
         initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        className="container flex items-center justify-between py-10 ">
            {/*Logo section */}
            <div>
               <img src={logo} alt="" className='h-20 w-60'/>
            </div>
             {/*Menu section */}
             <div className="hidden lg:block">
                <ul className='flex gap-3'>
                    {
                        NavbarMenu.map((menu)=>(
                            <li key={menu.id}>
                                <a className='relative inline-block px-3 py-2 hover:text-secondary group' href={menu.path}>
                                    <div className="absolute bottom-0 hidden w-2 h-2 mt-2 -translate-x-1/2 rounded-full bg-secondary left-1/2 top-1/2 group-hover:block"></div>{menu.title}</a>
                            </li>
                        ))
                    }
                    <button className='primary-btn'>Sign In</button>
                </ul>
             </div>
             {/*Mobile responsive section*/}
                <div className="lg:hidden">
                    <IoMdMenu className='text-4xl'/>
                </div>

        </motion.div>
    </nav>
  )
}

export default Navbar