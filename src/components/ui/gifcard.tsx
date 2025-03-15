"use client";
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
interface GifCardProps {
  name: string,
  img: string,
  gif:string,
  techstack:string[]
}

export function GifCard({ name, img,gif,techstack }: GifCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init()
  AOS.refresh();
  }, []);

  return (
    <div 
      data-aos="flip-left"
      data-aos-delay="90"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      className="w-[30%] bg-[#141515]  below-lap:w-[45%] below-tab:w-[60%] below-mob:w-[80%] cursor-pointer  group" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Changes on Hover */}
      <div
        className={cn(
          "relative w-full h-[30vh]   shadow-xl mx-auto flex flex-col justify-end p-4  bg-contain bg-[#141515] transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${isHovered ? img : gif})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay effect on hover */}
        <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <div className="text bg-[#141515] relative z-50 h-fit p-4 flex flex-col gap-[1rem] rounded-b-[5px]  ">
        <h1 className="font-bold text-[1.5rem] md:text-3xl text-gray-50  ">{name}</h1>
          <div className='w-full' >
            <div className='w-[70%] flex gap-[1rem] flex-wrap  ' >
                {
                  techstack.map((i,index)=>{
                    return(
                      <span key={index} className='text-[1.2rem] text-[#A8A8A8] ' >
                        {i}
                      </span>
                    )
                  })
                }
            </div>
          </div>
      </div>
    </div>
  );
}
