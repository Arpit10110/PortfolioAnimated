"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlowingEffect } from "./ui/glowing-effect";
import dynamic from "next/dynamic";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="my-[10rem] w-full flex-wrap  below-lap:gap-[5rem]  flex justify-around ">

        <div className="w-[50%] below-lap:w-[90%] mt-[5rem] flex flex-wrap justify-around flex-col gap-[3rem] below-tab:w-[96%] ">
          <h1
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-[2.5rem]"
          >
            🔥 Ready to Build the Future? Let's Talk!
          </h1>

          <form
            data-aos="flip-right"
            data-aos-delay="80"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="p-[2rem] rounded-lg bg-gray-900 flex flex-col gap-[2rem] py-[4rem] shadow-[inset_-2px_0px_30px_2px_#5f8ae92b] "
          >
            <GlowingEffect
              blur={0}
              borderWidth={3.5}
              spread={75}
              glow={true}
              disabled={false}
              proximity={65}
              inactiveZone={0.01}
            />

            <div className="w-full flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]"
                required
              />
            </div>

            <div className="w-full flex justify-between">
              <input
                type="email"
                placeholder="Email address"
                className="text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]"
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]"
                required
              />
            </div>

            <textarea
              name="message"
              className="text-[1.8rem] w-full min-h-[30vh] p-[1rem] bg-black"
              placeholder="Message"
              required
            ></textarea>

            <button
              className="text-[2rem] inline-flex h-12 animate-shimmer items-center justify-center rounded-[1rem] border border-slate-800 bg-[linear-gradient(125deg,#000000,45%,#28292b,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-[2rem] hover:scale-[1.015] transition-all w-[30%] m-auto"
            >
              Submit
            </button>
          </form>
        </div>

        <div   data-aos="flip-left"data-aos-delay="80" data-aos-duration="1500" data-aos-easing="ease-in-out" className="w-[40%] below-lap:w-[90%] flex justify-center gap-[2rem] flex-col   " >
            <div className="flex flex-col gap-[0.5rem]  " >
              <h2 className="font-semibold text-gray-300 text-[2rem] " >Phone</h2>
              <a href="tel:+919599056856" className="!text-[2rem]  " ><CallIcon className="!text-[3rem] mr-[1rem] bg-blue-600  p-[0.5rem] rounded-[50%]    " />+919599056856</a>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h2 className="font-semibold text-gray-300 text-[2rem]">Email</h2>
              <a className="!text-[1.8rem] font-[600]  " href="mailto:omagrahari55@gmail.com" ><EmailIcon className="!text-[3rem] mr-[1rem] bg-blue-600  p-[0.5rem] rounded-[50%]    "/>omagrahari55@gmail.com</a>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h2 className="font-semibold text-gray-300 text-[2rem]">Phone</h2>
              <a className="!text-[2rem]  " href="https://maps.app.goo.gl/vWXLR5nxepXTLUwT6"><LocationOnIcon className="!text-[3rem] mr-[1rem] bg-blue-600  p-[0.5rem] rounded-[50%]    "/>Gamma-1,Greater Noida,India</a>
            </div>
            <div>
              <a className="text-[2rem] inline-flex h-12 animate-shimmer items-center justify-center rounded-[1rem] border border-slate-800 bg-[linear-gradient(125deg,#000000,45%,#28292b,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-[2rem] hover:scale-[1.015] transition-all bg-[#222222] w-full mt-[1rem]" href="https://calendly.com/omagrahari55" target="_blank" >📅 Schedule a Meeting</a>
            </div>

        </div>

      </div>
    </>
  );
};

export default Contact;
