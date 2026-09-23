import React from 'react'
import CountUp from './ui/CountUp'
import { useEffect } from 'react';
import AOS from 'aos' ;
import 'aos/dist/aos.css';
const Aboutme = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
   <>
   <div className=' flex justify-between px-[3rem] items-center poppins-font  overflow-x-hidden  below-lap:flex-col below-lap:gap-[5rem] h-fit below-tab:px-[2rem]  '>
        <div data-aos="fade-right"  className='w-[20%] text-[4rem]  below-lap:w-full ' >
            <h1>About me</h1>
        </div>
        <div data-aos="fade-left"  data-aos-duration="1000" className='w-[70%] text-[2.8rem] below-lap:text-[2.5rem] overflow-x-hidden below-lap:w-full text-justify  ' >
            <p>I’m a Full Stack Developer with 2+ years of hands-on experience building products across frontend, backend, and AI. From startup projects to independent products, I love turning ideas into fast, scalable, and user-friendly experiences. I’ve built 90+ projects, contributed to open source, and continuously experiment with new technologies to build better things.</p>
            <div className='flex w-full text-[2.3rem] mt-[5rem] justify-between below-lap:text-[2rem] ' >
                <div className='w-[30%] flex flex-col justify-center items-center gap-[1rem] ' >
                <h1><CountUp  from={0} to={2} separator="," direction="up" duration={1} className="count-up-text" />+</h1>  
                <h1 className='text-center' >Years Of Experience</h1>
                </div>
                <div className='w-[30%] flex flex-col justify-center items-center gap-[1rem] ' >
                <h1><CountUp  from={0} to={90} separator="," direction="up" duration={2} className="count-up-text" />+</h1>
                <h1 className='text-center' >Completed Projects</h1>
                </div>
                <div className='w-[30%] flex flex-col justify-center items-center gap-[1rem] ' >
                <h1><CountUp  from={0} to={95} separator="," direction="up" duration={2} className="count-up-text" />%</h1>
                <h1 className='text-center' >Client Satisfactions</h1>
                </div>
            </div>
        </div>
        
   </div>
   </>
  )
}

export default Aboutme
