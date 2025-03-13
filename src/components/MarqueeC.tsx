import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeC = () => {
  return (
    <>
      <div className="text-[2.5rem] flex flex-col gap-[8rem] my-[8rem] poppins-font below-lap:my-[2rem] below-lap:gap-[5rem] ">
        <div className="flex bg-[#ffffff2c] py-[1.5rem] ">
          <Marquee>
            <h1 className="ml-[3rem]">Innovator at Heart ✨</h1>
            <h1 className="ml-[3rem]">Full Stack Wizard 🧙‍♂️</h1>
            <h1 className="ml-[3rem]">Code. Build. Inspire 💻</h1>
            <h1 className="ml-[3rem]">AI Meets Creativity 🤖</h1>
            <h1 className="ml-[3rem]">Problem Solver Extraordinaire 🛠️</h1>
          </Marquee>
        </div>
        <div className="flex bg-[#ffffff2c] py-[1.5rem] ">
          <Marquee direction={'right'}>
            <h1 className="ml-[5rem]">Future Ready Developer 🚀</h1>
            <h1 className="ml-[5rem]">Crafting Digital Magic ✨</h1>
            <h1 className="ml-[5rem]">Ideas Into Actions 💡</h1>
            <h1 className="ml-[5rem]">Simplifying Complexities 🔍</h1>
            <h1 className="ml-[5rem]">Let's Build Something Amazing 🔥</h1>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default MarqueeC;
