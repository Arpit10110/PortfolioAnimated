'use client'
import Navbar from './Navbar'
import Image from 'next/image';
import PortfolioImg from "@/assets/portfolioImg.png"
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import AOS from 'aos' ;
import 'aos/dist/aos.css';
import DecayCard from "./bits-ui/DecayCard"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const Section1 = () => {

    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
    <main className="h-[100vh]" >
        <Navbar/>
        <div className='w-full  ' >
            <div className='flex items-center  justify-center cursor-default overflow-hidden min-h-[60vh]   '>
                <h1 data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" className='Francisco-font text-[#A5DAF1] w-[30%] text-[10rem] text-end'>Hi<span className=''> I'm</span></h1>
                <div data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1000" className='w-[20%]  mx-[5rem]' >
                <div  className='w-full border-gray-500 px-[2rem] pt-[2rem]  rounded-[1rem]  rotate-[8deg]  transition-transform hover:top-[-15px] cursor-pointer relative object-cover'>
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
            <div className='w-[25%] m-auto mt-[3rem] flex justify-around items-center  ' >
                    <a data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1000" href="">
                        <FacebookIcon className='!text-[4rem] hover:scale-[1.1] transition-all ' />
                    </a>
                    <a data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1500" href="">
                        <InstagramIcon className='!text-[4rem] hover:scale-[1.1] transition-all ' />
                    </a>
                    <a data-aos="fade-down" data-aos-duration="3000" data-aos-delay="2000" href="">
                        <GitHubIcon className='!text-[4rem] hover:scale-[1.1] transition-all ' />
                    </a>
                    <a data-aos="fade-down" data-aos-duration="3000" data-aos-delay="2500" href="">
                        <LinkedInIcon className='!text-[4rem] hover:scale-[1.1] transition-all ' />
                    </a>
                    <a data-aos="fade-down" data-aos-duration="3000" data-aos-delay="3000" href="">
                        <XIcon className='!text-[4rem] hover:scale-[1.1] transition-all ' />
                    </a>
            </div>
        </div>
    </main>
    </>
  )
}

export default Section1
