'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
const projects = [
  {
    title: 'Edunet Foundation',
    date: "Dec 2023 - Jan 2024",
    role: "Full Stack Developer Intern",
    point1: "Developed a school management website using React.js, creating 15+ frontend pages with structured components and Tailwind CSS",
    point2: "Used Redux for state management and worked with React Hooks and the Virtual DOM to improve rendering.",
    color: '#5196fd', 
  },
  {
    title: 'Shoopy Store',
    date: "March 2024 - May 2024",
    role: "Frontend Developer Intern",
    point1: "Developed a trading website using the MERN stack, implementing Material UI components and GSAP animations",
    point2: "Integrated Razorpay for payments and worked with REST APIs for CRUD operations and authentication.",
    color: '#8f89ff', 
  },
  {
    title: 'Kudosware',
    date: "Oct 2024 - Dec 2024",
    role: "Software Developer Intern",
    point1: "Developed a Digital Signature solutions website using Next.js with an admin dashboard for managing orders",
    point2: "Used TypeScript for code structuring and optimized API performance with caching techniques.",
    color: '#D3994D', // Vivid Blue
  },
  {
    title: 'Visra Enterprises',
    date: "Jan 2025 - Mar 2025",
    role: "Full Stack Developer Intern",
    point1: "Developed an e-commerce website for baby clothing using MERN stack and Shopify API, supporting both rentals and one-time purchases.",
    point2: "Integrated Shopify admin dashboard for inventory management, optimized SEO, and implemented recurring payments.",
    color: '#ed649e', 
  },
];

export default function Expsmooth() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white   w-full bg-slate-950  ">
          {projects.map((project,i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                title={project.title}
                color={project.color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                i={i}
                date={project.date}
                role={project.role}
                point1={project.point1}
                point2={project.point2}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  title,
  color,
  progress,
  range,
  targetScale,
  date,
  i,
  point1,
  role,
  point2
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative min-h-[50vh]   w-[70%] rounded-md p-10 origin-top`}
      >

        <div className='flex gap-[1rem] flex-col   ' >
          <h3 className='text-[2rem] font-semibold text-end  ' >{date}</h3>
          <h2 className='text-[4rem]  font-semibold poppins-font ' >{title}</h2>
          <h2 className='text-[2rem]  font-semibold ' >{role}</h2>
          <div className='flex flex-col gap-[1rem] text-[1.5rem] font-semibold '>
            <h4>💫{point1}</h4>
            <h4>💫{point2}</h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
