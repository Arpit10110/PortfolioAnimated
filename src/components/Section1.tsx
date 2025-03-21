'use client'
import Navbar from './Navbar'
import Image from 'next/image';
import PortfolioImg from "@/assets/portfolioImg.png"
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import AOS from 'aos' ;
import 'aos/dist/aos.css';
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from 'next/link';
//socila media
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
        <main className='overflow-hidden mb-[8rem] below-lap:mb-[0rem]  ' >
        <Spotlight
            gradientFirst={"radial-gradient(50% 50% at 50% 50%, hsla(270, 40%, 30%, 0.1) 0%, hsla(280, 50%, 25%, 0.2) 60%, transparent 100%)"}
            gradientSecond={"radial-gradient(50% 50% at 50% 50%, hsla(210, 30%, 30%, 0.1) 0%, hsla(220, 40%, 20%, 0.2) 70%, transparent 100%)"}
            gradientThird={"radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 40%, 0.1) 0%, hsla(0, 0%, 35%, 0.2) 70%, transparent 100%)"}
            />
            <Navbar/>
            <div className='mt-[1rem] relative min-h-[80vh]' >
                <div>
                    <pre data-aos="fade-down"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-white oswald-font text-[13rem]     text-center font-[500] tracking-wide  below-lap:text-[8.5rem] below-tab:text-[6.8rem] small-mob:text-[6rem]  ' >ARPIT  AGRAHARI</pre>
                </div>
                <div className='flex justify-between px-[4rem] mt-[3rem] min-h-[35vh] items-center below-lap:px-[1rem] flex-wrap  below-lap:gap-[3rem] below-lap:justify-center below-tab:flex-col-reverse ' >
                    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col gap-[2rem] justify-start items-start w-[25%] below-lap:w-[50%] below-tab:w-[95%] below-tab:items-center   '>
                        <div className='!text-[3rem]  '>
                            <TypeAnimation
                                sequence={[
                                    'I build for the web',
                                    1000,
                                    'I design for users',
                                    1000,
                                    'I code for innovation',
                                    1000,
                                    'I craft with logic',
                                    1000,
                                    'I solve with creativity.',
                                    1000,
                                    'I create with purpose',
                                    1000,
                                    'I think in code',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={30}
                                repeat={Infinity}
                                />
                        </div>
                        <a href="https://drive.google.com/file/d/13j-_83ZULaB6Zav4BCWdrueH0FTgPZl7/view" target='_blank'className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(125deg,#000000,45%,#28292b,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-[2rem] text-[2.5rem] hover:scale-[1.03] transition-all  " >Download Resume</a>
                        <div className='w-[85%] justify-between flex below-lap:w-[75%] below-tab:w-[60%]  '  >
                            <a href="https://www.facebook.com/arpit.agrahari.5"  className='!text-[3rem] hover:scale-[1.2] transition-all ' ><FacebookIcon className='!text-[3rem]' /></a>
                            <a href="https://www.instagram.com/___arpit_._/"  className='!text-[3rem] hover:scale-[1.2] transition-all ' ><InstagramIcon className='!text-[3rem]' /></a>
                            <a href="https://github.com/Arpit10110"  className='!text-[3rem] hover:scale-[1.2] transition-all ' ><GitHubIcon className='!text-[3rem]' /></a>
                            <a href="https://www.linkedin.com/in/arpit-agrahari-54aa192a1/"  className='!text-[3rem] hover:scale-[1.2] transition-all ' ><LinkedInIcon className='!text-[3rem]' /></a>
                            <a href="https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09"  className='!text-[3rem] hover:scale-[1.2] transition-all ' ><XIcon className='!text-[3rem]' /></a>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="1500" data-aos-duration="1000" className='w-[20vw] bg-gray-900 rounded-[5px] absolute bottom-[0%] right-[44%] border-[1px] border-gray-700 below-lap:relative  below-lap:right-0 below-lap:w-[30vw]   below-tab:w-[35%]  ' >
                        <Image className='w-full' src={PortfolioImg} alt='arpit' loading='lazy' />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000" className='w-[35%] gap-[2rem] flex flex-col items-start text-[2.5rem] poppins-font font-[400] below-lap:w-[80%] below-tab:w-[95%]  '>
                        <p>Hi, I'm Arpit, a Full Stack Developer turning ideas into powerful, user-friendly digital solutions.</p>
                        <Link href={"/contact"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(125deg,#000000,45%,#28292b,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-[2rem] hover:scale-[1.03] transition-all " >Get In Touch</Link>
                        
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Section1
