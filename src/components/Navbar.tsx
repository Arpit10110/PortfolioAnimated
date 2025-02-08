import React from 'react'
import Link from 'next/link'
import { SplitText } from "./bits-ui/SplitText";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <>
        <nav data-aos="fade-left"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  className='flex justify-between px-[2rem] items-center min-h-[15vh] w-full '>
            <h2 className='Playwrite-font text-[3rem]  cursor-default tracking-wider  ' >
            <SplitText text="Arpit" className="text-[3rem] text-white oswald-font" delay={100} />
            </h2>
            <div className='flex gap-[2rem] text-[1.8rem] z-10 below-lap:hidden '>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/"}>Home</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/service"}>Service</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/projects"}>Projects</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/certificate"}>Certificate</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/contact"}>Contact Us</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar