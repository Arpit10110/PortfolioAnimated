import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Expsmooth from './bits-ui/expsmoothscrool';
const Experience =async() => {

  interface Experiencetype {
    date: string;
    company: string;
    role: string;
    location?: string;
  }

  const expdata: Experiencetype[] = [
    {
      date: "Nov 2025 - Present",
      company: "1000xDev",
      role: "Full Stack Developer",
      location: "Remote, India",
    },
    {
      date: "Apr 2025 - Jun 2025",
      company: "RegisterKaro",
      role: "Software Engineer Intern",
      location: "Gurugram, India",
    },
    {
      date: "Jan 2025 - Feb 2025",
      company: "Visra Enterprises",
      role: "Full Stack Developer Intern",
      location: "Remote, India",
    },
    {
      date: "Oct 2024 - Dec 2024",
      company: "Kudosware",
      role: "Engineering Intern",
      location: "Remote, India",
    },
  ];


  return (
   <>
    <div className='relative w-full mb-[10rem] bg-slate-950 pt-[10rem]   ' >
      <h1 className="text-center text-[3.5rem]   "  >🛠  Built with Experience 🛠</h1>
      <Expsmooth/>
    </div>
   </>
  )
}

export default Experience


