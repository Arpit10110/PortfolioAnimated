"use client"

import Section1 from "@/components/Section1"
import Aboutme from "@/components/Aboutme"
import Splash from "@/components/Splash"
import Hori from '../components/ui/hori';
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
      </main>
    }
    </>
  )
}

export default page