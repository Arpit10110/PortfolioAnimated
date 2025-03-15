'use client'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import { GifCard } from './ui/gifcard';
import { Allapi } from '@/Projectdata/AllData';
import { Frontendapi } from '@/Projectdata/FrontendData';
import { FullStackapi } from '@/Projectdata/FullStackData';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const OurWork = () => {

    const [CurrentSection,SetCurrentSection] = useState("All");


    useEffect(() => {
        AOS.init()
      AOS.refresh();
      }, [CurrentSection]);


  return (
    <>
        <div className='my-[8rem]'  >
            <div>
                <Marquee speed={150} >
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                </Marquee>
            </div>
            <div  className='w-full justify-center items-center gap-[5rem] flex mt-[8rem]   ' >
                <button className={`px-[2rem] rounded-[5px] py-[0.5rem] text-[2rem] relative  hover:scale-[1.025] transition-all ${CurrentSection=="Frontend"?"bg-[#2E2E2E]":"bg-transparent bg-gradient-to-r from-indigo-500 to-purple-500"} `} onClick={()=>SetCurrentSection("Frontend")} >
                        Frontend
                </button>
                <button className={`px-[2rem] rounded-[5px] py-[0.5rem] text-[2rem] relative  hover:scale-[1.025] transition-all ${CurrentSection=="All"?"bg-[#2E2E2E]":"bg-transparent bg-gradient-to-r from-indigo-500 to-purple-500"} `}onClick={()=>SetCurrentSection("All")}>
                        All
                </button>
                <button className={`px-[2rem] rounded-[5px] py-[0.5rem] text-[2rem] relative  hover:scale-[1.025] transition-all ${CurrentSection=="FullStack"?"bg-[#2E2E2E]":"bg-transparent bg-gradient-to-r from-indigo-500 to-purple-500"} `} onClick={()=>SetCurrentSection("FullStack")}>
                        Full Stack
                </button>
            </div>
            
            {

                CurrentSection=="All"?
                <div className='flex w-full flex-wrap justify-around mt-[8rem] gap-y-[5rem]  ' >
                    {
                        Allapi.map((i,index)=>{
                            return(
                                <GifCard techstack={i.techstack} img={i.img} gif={i.gif} name={i.name}  key={index} />
                            )
                        })
                    }
                </div>:""

            }
            {

                CurrentSection=="Frontend"?
                <div className='flex w-full flex-wrap justify-around mt-[8rem] gap-y-[5rem]  ' >
                    {
                        Frontendapi.map((i,index)=>{
                            return(
                                <GifCard techstack={i.techstack} gif={i.gif} img={i.img} name={i.name} key={index} />
                            )
                        })
                    }
                </div>:""

            }

            {

                CurrentSection=="FullStack"?
                <div className='flex w-full flex-wrap justify-around mt-[8rem] gap-y-[5rem]  ' >
                    {
                        FullStackapi.map((i,index)=>{
                            return(
                                <GifCard techstack={i.techstack} gif={i.gif} img={i.img} name={i.name} key={index} />
                            )
                        })
                    }
                </div>:""

            }

        </div>
    </>
  )
}

export default OurWork