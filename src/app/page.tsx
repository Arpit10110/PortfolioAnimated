// "use client"

import Section1 from "@/components/Section1"
import Splash from "@/components/Splash"
import MarqueeC from "@/components/MarqueeC"
import Hori from '../components/ui/hori';
import Hs from '../components/ui/Hs';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Gallary from '@/components/Gallary';
import ImageReveal2 from '../components/ui/Imagerevel';
import OurWork from '../components/OurWork';
import Footer from "@/components/Footer";
const page = async() => {
  
  // await new Promise((resolve) => setTimeout(resolve, 5000)); 

  return (
    <>
         <div>
          <Section1 />
          <Hori />
          <MarqueeC/>
          <Hs/>
          <OurWork/>
          <Experience/>
          <Contact/>
          <Gallary/>
          <Footer/>
         {/* <ImageReveal2/> */}
        </div>
    </>
  )
}

export default page
