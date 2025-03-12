"use client"
import { ReactLenis } from 'lenis/react';
import AOS from 'aos' ;
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import frontend from "@/assets/frontend.png"
import backend from "@/assets/backend.png"
import tools from "@/assets/tools.png"
export default function Index(): React.ReactElement {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 h-[50vh]  left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                <div  data-aos="zoom-in-up" data-aos-duration="1000" >
                    <h1 className='text-[8rem] oswald-font text-center ' >Technologies & Tools...</h1>
                    <h4 className='text-[3rem] poppins-font text-center mt-[1rem] ' >Exploring the tech stack that powers my development workflow.</h4>
                </div>
          </section>
          <section className='bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap ' >
                <div className='w-[60%] below-lap:w-[95%]  '>
                    <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem] ' >Frontend</h1>
                    <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-800 ' >Crafting engaging, interactive, and responsive web experiences.</h4>
                    <div className='flex flex-col gap-[2rem] text-[2.5rem] mt-[4rem] oppins-font below-lap:mt-[1rem] below-lap:text-[2rem] '>
                        <h2><span className='font-semibold '>React</span>: For dynamic, component-based development🌟</h2>
                        <h2><span className='font-semibold '>HTML</span>: The foundation for structured content📄</h2>
                        <h2><span className='font-semibold '>CSS</span>: Crafting responsive and elegant layouts🎨</h2>
                        <h2><span className='font-semibold '>JavaScript</span>: Adding interactivity and functionality⚡</h2>
                        <h2><span className='font-semibold '>Tailwind CSS</span>: Rapidly building custom, responsive designs🚀</h2>
                    </div>
                </div>
                <div className='w-[30%] flex items-end below-lap:w-[35%] ' >
                    <Image className='w-full'  src={frontend} alt='frontendImage'  />
                </div>
            </div>
          </section>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap ' >
            <div className='w-[60%] below-lap:w-[95%] '>
                <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem] '>Backend</h1>
                <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-200'>Building robust, scalable, and efficient server-side solutions.</h4>
                <div className='flex flex-col gap-[2rem] text-[2.5rem] mt-[4rem] oppins-font below-lap:text-[2rem] below-lap:mt-[1rem]'>
                    <h2><span className='font-semibold'>Node.js</span>: A runtime for fast, scalable server-side apps🚀</h2>
                    <h2><span className='font-semibold'>Express.js</span>: A lightweight framework for building APIs⚙️</h2>
                    <h2><span className='font-semibold'>MongoDB</span>: A flexible NoSQL database for scalable storage📦</h2>
                    <h2><span className='font-semibold'>Firebase</span>: A platform for serverless apps with real-time databases🔥</h2>
                    <h2><span className='font-semibold'>Next.js</span>: A React framework for full-stack apps with SSR🌐</h2>
                </div>
            </div>
                <div className='w-[30%] flex items-end below-lap:w-[35%]  ' >
                    <Image className='w-full'  src={backend} alt='frontendImage'  />
                </div>
            </div>
          </section>
          <section className='bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap ' >
            <div className='w-[60%] below-lap:w-[95%]'>
                <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem]'>Tools</h1>
                <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-800'>Enhancing development, collaboration, and deployment efficiency.</h4>
                <div className='flex flex-col gap-[2rem] text-[2.5rem] mt-[4rem] oppins-font below-lap:text-[2rem] below-lap:mt-[1rem] '>
                    <h2><span className='font-semibold'>GitHub</span>: Version control and seamless collaboration🔗</h2>
                    <h2><span className='font-semibold'>Docker</span>: Containerization for efficient deployment🐳</h2>
                    <h2><span className='font-semibold'>Figma</span>: UI/UX design and prototyping🎨</h2>
                    <h2><span className='font-semibold'>Canva</span>: Quick and creative design solutions🖌️</h2>
                    <h2><span className='font-semibold'>AWS</span>: Cloud services for scalable applications☁️</h2>
                </div>
            </div>
            <div className='w-[30%] flex items-end below-lap:w-[35%] ' >
              <Image className='w-full'  src={tools} alt='toolsImage'  />
            </div>
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
