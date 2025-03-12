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
      <Expsmooth/>
    </div>
   </>
  )
}

export default Experience


