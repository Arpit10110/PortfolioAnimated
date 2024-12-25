'use client'
import { SplitText } from "./bits-ui/SplitText";
import BlobCursor from './bits-ui/BlobCursor'
import Navbar from "./Navbar";
function Sec1() {
  return (
    <>
    <div className="relative">
        <div className="absolute  h-[100vh] opacity-25 overflow-hidden " >
            <video src="/sec1.mp4" autoPlay={true} muted={true} loop={true} className="h-fit" ></video>
        </div>
        <BlobCursor />
        <Navbar  />
        <div className="min-h-[70vh] flex justify-center items-center cursor-default ">
            <div className="flex flex-col gap-[3rem] justify-center items-center">
                <SplitText text="Hi, I'm Arpit Agrahari" className="text-[3.5rem]  text-[#ff018d] font-semibold " delay={150} />
                <SplitText text="I'm a Full Stack Developer with a passion for crafting seamless, innovative, and user-centric web applications. Let's collaborate to turn your ideas into impactful, real-world solutions that elevate the digital experience!" className="text-[2.5rem] text-gray-200 w-[82%] text-center" delay={20} />
            </div>
        </div>
    </div>
    </>
  );
}

export default Sec1;
