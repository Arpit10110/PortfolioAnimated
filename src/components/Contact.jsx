"use client"
import React,{useEffect} from 'react'
import AOS from 'aos' ;
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
        <div className='my-[15rem] w-full flex justify-around ' >
            <div className=' w-[50%] mt-[5rem] flex flex-wrap justify-around flex-col gap-[3rem] '  >
                 <h1 data-aos="fade-right"  data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-[2.5rem]  ' >🔥 Ready to Build the Future? Let's Talk!</h1>
                <form data-aos="flip-right"  data-aos-delay="80" data-aos-duration="1500" data-aos-easing="ease-in-out" className='p-[2rem] rounded-lg bg-gray-900 flex flex-col gap-[2rem]  py-[4rem] ' >
                    <div className='w-full flex justify-between ' >
                        <input type="text" placeholder='First Name' className='text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]  ' required/>
                        <input type="text" placeholder='Last Name' className='text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]  ' required/>
                    </div>
                    <div className='w-full flex justify-between ' >
                        <input type="email" placeholder='Email address' className='text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]  ' required/>
                        <input type="text" placeholder='Phone number' className='text-[1.8rem] rounded-lg p-[0.5rem] bg-black w-[48%]  ' required/>
                    </div>
                    <textarea name="message" className='text-[1.8rem] w-full min-h-[30vh] p-[1rem]  bg-black ' placeholder='Message'   required></textarea>
                    <button className='text-[2rem] inline-flex h-12 animate-shimmer items-center justify-center rounded-[1rem] border border-slate-800 bg-[linear-gradient(125deg,#000000,45%,#28292b,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-[2rem] hover:scale-[1.015] transition-all  w-[30%] m-auto  '  >Submit</button>
                </form>
            </div>
                <div className='w-[40%] ' ></div>
        </div>
    </>
  )
}

export default Contact

