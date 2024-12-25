import React from 'react'
import Link from 'next/link'
import { SplitText } from "./bits-ui/SplitText";
const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between px-[2rem] items-center min-h-[15vh]'>
            <h2 className='henny-font text-[3rem]  cursor-default tracking-wider  ' >
            <SplitText text="Arpit" className="text-[3rem] text-white" delay={100} />
            </h2>
            <div className='flex gap-[2rem] text-[1.8rem] z-10 '>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/"}>Home</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/projects"}>Projects</Link>
                <Link className='hover:scale-[0.95] transition-all  '  href={"/contact"}>Contact Us</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar