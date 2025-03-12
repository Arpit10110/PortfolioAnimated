import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Expsmooth from './bits-ui/expsmoothscrool';

const Experience =async() => {

  interface Experiencetype{
    date:string,
    company:string,
    role:string
  }

  const expdata : Experiencetype[] = [

    {
      date:"Jan 2025-Mar 2025",
      company:"Visra Enterprises",
      role:"Full Stack Developer Intern",
    },
    {
      date:"Oct 2024-Dec 2024",
      company:"Kudosware",
      role:"Software Developer Intern",
    },
    {
      date:"March 2024-May 2024",
      company:"Shoopy Store",
      role:"Frontend Developer Intern",
    },
    {
      date:"Dec 2023-Jan 2024",
      company:"Edunet Foundation",
      role:"Full Stack Developer Intern",
    }

  ]


  return (
   <>
    <div className='w-full mb-[10rem] bg-slate-950 pt-[10rem]   ' >
      <h1 className="text-center text-[3.5rem]   "  >🛠  Built with Experience 🛠</h1>
      {/* <div className='w-full flex justify-around ' >
        <div className='  w-1/2  mt-[8rem]  flex flex-col gap-[3rem] justify-center items-center z-0 ' >
              {
                expdata.map((i,index)=>{
                  return(
                    <div className='bg-gray-900  shadow-[inset_-2px_0px_30px_2px_#467fff59]  p-[2rem] rounded-[0.5rem] w-[90%] flex flex-col gap-[0.5rem] cursor-pointer hover:scale-[1.02] transition-all '  key={index}>
                        <h2 className='text-[1.5rem] poppins-font text-sky-300 '>{i.date}</h2>
                        <h1 className='text-[3.5rem] font-semibold '>{i.company}</h1>
                        <h2 className='text-[2rem] '>{i.role}</h2>
                    </div>
                  )
                })
              }
          </div>
      </div> */}


      <Expsmooth/>


    </div>
   </>
  )
}

export default Experience


