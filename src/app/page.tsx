"use client"

import Section1 from "@/components/Section1"
import Splash from "@/components/Splash"
import Hori from '../components/ui/hori';
import Skills from '@/components//Skills';
import { useState, useEffect } from 'react';
const page = () => {

  const [Isload,SetIsload] = useState(true);

   useEffect(() => {
    setTimeout(()=>{
      SetIsload(false)
    }, 4000);
   }, [])
   
  return (
    <>
    {
      Isload?<Splash/>:
      <main>
         <Section1 />
         <Hori />
         <Skills />
      </main>
    }
    </>
  )
}

export default page