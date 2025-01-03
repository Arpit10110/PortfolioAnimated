'use client'
import Navbar from './Navbar'
import Image from 'next/image';
import PortfolioImg from "@/assets/portfolioImg.png"
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import AOS from 'aos' ;
import 'aos/dist/aos.css';
const Section1 = () => {

    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
    <Navbar/>
    <div>
        <div className='flex items-center justify-center pt-[5rem] cursor-default overflow-hidden  '>
            <h1 data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" className='Francisco-font text-[#A5DAF1] w-[30%] text-[10rem] text-end'>Hi<span className=''> I'm</span></h1>
            <div data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1000" className='w-[20%]  mx-[5rem]' >
                <div  className='w-full border-gray-500 px-[2rem] pt-[2rem] bg-[#1D1D1D] rounded-[1rem]  rotate-[8deg]  transition-transform hover:top-[-15px] cursor-pointer relative object-cover'>
                    <Image className='w-full' src={PortfolioImg} alt='Hehe'  />
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"  className='min-w-[30%]'>
            <TypeAnimation
                sequence={[
                    'Arpit Agrahari',
                    1500, 
                    'Full-Stack Dev',
                    1500,
                    'Web Weaver',
                    1500,
                    'Code Creator',
                    1500
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className='text-[7rem] Francisco-font text-[#A5DAF1] '
            />
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1
