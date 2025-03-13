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
                    <h1 className='text-[8rem] oswald-font text-center below-tab:text-[6.3rem] ' >Technologies & Tools...</h1>
                    <h4 className='text-[3rem] poppins-font text-center mt-[1rem] below-tab:text-[2.5rem] ' >Exploring the tech stack that powers my development workflow.</h4>
                </div>
          </section>
          <section className='bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap below-lap:gap-[2rem] ' >
                <div className='w-[60%] below-lap:w-[95%] below-tab:w-[98%]  '>
                    <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem] ' >Frontend</h1>
                    <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-800 ' >Crafting engaging, interactive, and responsive web experiences.</h4>
                    <div className='flex flex-col gap-[2rem] text-[2rem] mt-[2rem] oppins-font  '>
                            <p className='font-semibold text-justify '>
                                React brings dynamic, component-based development, while HTML lays the foundation.  
                                CSS crafts beautiful, responsive layouts, and JavaScript adds interactivity and power.  
                                Tailwind CSS makes styling faster and more efficient, letting you build sleek designs effortlessly. 🚀  
                            </p>
                        </div>
                </div>
                <div className='w-[30%] flex items-end below-lap:w-[35%]  below-tab:w-[45%]' >
                    <Image className='w-full'  src={frontend} alt='frontendImage'  />
                </div>
            </div>
          </section>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap below-lap:gap-[2rem] ' >
            <div className='w-[60%] below-lap:w-[95%] below-tab:w-[98%] '>
                <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem] '>Backend</h1>
                <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-200'>Building robust, scalable, and efficient server-side solutions.</h4>
                <div className='flex flex-col gap-[2rem] text-[2rem] mt-[2rem] oppins-font '>
                    <p className='font-semibold text-justify '>
                        Node.js powers fast, scalable backends, while Express.js simplifies API development.  
                        MongoDB offers flexible, NoSQL storage, and Firebase enables serverless apps with real-time data.  
                        Next.js takes React to the next level with full-stack capabilities and server-side rendering. 🚀  
                    </p>
                </div>
            </div>
                <div className='w-[30%] flex items-end below-lap:w-[35%] below-tab:w-[45%] ' >
                    <Image className='w-full'  src={backend} alt='frontendImage'  />
                </div>
            </div>
          </section>
          <section className='bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='flex justify-around w-[95vw] below-lap:w-[100vw] flex-wrap below-lap:gap-[2rem] ' >
            <div className='w-[60%] below-lap:w-[95%] below-tab:w-[98%]'>
                <h1 className='text-[4rem] font-semibold poppins-font below-lap:text-[3rem]'>Tools</h1>
                <h4 className='text-[1.5rem] poppins-font mt-[0.4rem] text-gray-800'>Enhancing development, collaboration, and deployment efficiency.</h4>
                <div className='flex flex-col gap-[2rem] text-[2rem] mt-[2rem] oppins-font'>
                    <p className='font-semibold text-justify '>
                        GitHub streamlines version control and collaboration, while Docker ensures efficient deployment.  
                        Figma is perfect for UI/UX design, and Canva makes creative design effortless.  
                        AWS powers scalable applications with reliable cloud services. ☁️🚀  
                    </p>
                </div>
            </div>
            <div className='w-[30%] flex items-end below-lap:w-[35%] below-tab:w-[45%] ' >
              <Image className='w-full'  src={tools} alt='toolsImage'  />
            </div>
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
