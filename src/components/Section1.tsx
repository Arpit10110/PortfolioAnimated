'use client'
import Navbar from './Navbar'
import Image from 'next/image';
import PortfolioImg from "@/assets/portfolioImg.png"
import { TypeAnimation } from 'react-type-animation';
const Section1 = () => {
  return (
    <>
    <Navbar/>
    <div>
        <div className='flex items-center justify-center pt-[5rem]  '>
            <h1 className='Francisco-font text-[#A5DAF1] w-[30%] text-[10rem] 
            text-end'>Hi I'm</h1>
            <div className='w-[20%] border-gray-500 px-[2rem] pt-[2rem] rounded-[1rem]
             mx-[5rem] rotate-[5deg] '>
                <Image className='w-full' src={PortfolioImg} alt='Hehe'  />
            </div>
            <div className='min-w-[30%]'>
            <TypeAnimation
                sequence={[
                    'Arpit Agrahari',
                    1500, 
                    'Full-Stack Dev',
                    1500,
                    'Web Weave ',
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
