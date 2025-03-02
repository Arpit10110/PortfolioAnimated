"use client"

import Section1 from "@/components/Section1"
import Splash from "@/components/Splash"
import MarqueeC from "@/components/MarqueeC"
import Hori from '../components/ui/hori';
import Hs from '../components/ui/Hs';
import Skills from '@/components//Skills';
import { useState, useEffect } from 'react';
import ImageReveal2 from '../components/ui/Imagerevel';
const page = () => {

  const [Isload,SetIsload] = useState(true);

   useEffect(() => {
    setTimeout(()=>{
      SetIsload(false)
    }, 1000);
   }, [])
   
  return (
    <>
    {
      Isload?<Splash/>:
         <main>
         <Section1 />
         <Hori />
         <MarqueeC/>
         <Hs/>
         <Hori />
         {/* <Skills /> */}
         {/* <ImageReveal2/> */}
      </main>
    }
    </>
  )
}

export default page


// aaj sa chalu portfolio pa kaam