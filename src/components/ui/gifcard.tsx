"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GifCardProps {
  name: string;
  img: string;
}

export function GifCard({ name, img }: GifCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const gif="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"

  return (
    <div 
      className="w-[40%] h-[60vh] group" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Changes on Hover */}
      <div
        className={cn(
          "relative w-full h-[40vh] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent bg-contain dark:border-neutral-800 transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${isHovered ? gif : img})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay effect on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <div className="text bg-gray-800 relative z-50 h-[20vh] p-4">
        <h1 className="font-bold text-xl md:text-3xl text-gray-50">{name}</h1>
        <p className="font-normal text-base text-gray-50 my-4">
          This card displays a background GIF on hover.
        </p>
      </div>
    </div>
  );
}
