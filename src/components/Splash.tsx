"use client"
import React,{useEffect} from 'react'
import AOS from 'aos' ;
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
const Splash = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
   <>
   <div  data-aos="fade-left"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  className='flex  !text-[7rem] justify-center items-center h-[100vh]'>
            <TypeAnimation
                 sequence={[
                     'Arpit',
                     1000,
                     'Arpit.',
                     1000,
                     'Arpit..',
                     1000,
                     'Arpit...',
                     1000
                 ]}
                 wrapper="span"
                 speed={30}
                 repeat={Infinity}
                 />
   </div>
   </>
  )
}

export default Splash
