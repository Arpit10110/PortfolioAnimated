// @ts-nocheck
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { lazy, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const image:string[] =[
    "/pic1.jpg",
    "/pic2.jpeg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.gif",
    "/pic6.jpg",
    "/pic7.jpg",
    "/pic8.jpg",
    "/pic9.jpg",
    "/pic10.png",
    "/pic12.jpg",
    "/pic13.jpg",
    "/pic15.jpg",
    "/pic17.jpg",
    "/pic18.jpeg",
    "/pic19.jpg",
    "/pic20.jpg",
    "/pic21.jpg",
    "/pic22.jpg",
    "/pic23.jpg",
    "/pic24.jpg",
    "/pic25.jpg",
    "/pic26.jpg",
    "/pic27.jpg",
    "/pic29.jpg",
    "/pic30.jpg",
  ]
export default function Gallary() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });




  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-black  '>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <h1 className='text-[5rem] rye-font below-tab:text-[3rem] below-tab:text-center '>
        From Code to 📸 Camera
      </h1>
      <p className='text-[2.5rem] text-center w-[80%] mt-[3rem] below-tab:w-[95%] below-mob:w-[98%] ' >
      📌 Snapshots of events, 💻 tech adventures, and 🏆 little victories—because every experience, big or small, deserves to be remembered! ✨
      </p>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

 

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative min-h-[100vh] bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <article className='container mx-auto relative z-10 '>
        <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight below-tab:text-[3rem] below-mob:text-[2.5rem] '>
          Images That doesn't Make any sense <br /> but still in this section
        </h1>
        <div>
          <Marquee speed={250} >
            {
                image.map((i:string,index:number)=>{
                    return(
                        <div key={index}>
                            <img className='w-[100%] h-[80vh] ml-[5rem] rounded-[10px]  object-contain  ' loading='lazy' src={i} alt='hello' />
                        </div>
                    )
                })
            }
          </Marquee>
      </div>
      </article>
    </motion.section>
  );
};