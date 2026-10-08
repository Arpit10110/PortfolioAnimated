'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
const projects = [
  {
    title: 'Kudosware',
    location: "Remote, India",
    date: "October 2024 – December 2024",
    role: "Engineering Intern",
    points: [
      "Launched an e-commerce platform supporting rentals and purchases using MERN stack and Shopify API for 500 products.",
      "Constructed real time inventory synchronization microservices, preventing stockout scenarios across 25 percent of store listings.",
      "Maintained RESTful API infrastructure delivering 99.5 percent system uptime across a 90 day active production deployment."
    ],
    point1: "Launched an e-commerce platform supporting rentals and purchases using MERN stack and Shopify API for 500 products.",
    point2: "Constructed real time inventory synchronization microservices, preventing stockout scenarios across 25 percent of store listings.",
    color: '#D3994D', // Vivid Blue
  },
  {
    title: 'Visra Enterprises',
    location: "Remote, India",
    date: "January 2025 – February 2025",
    role: "Full Stack Developer Intern",
    points: [
      "Developed a digital signature SaaS platform using Next.js, TypeScript, and analytics tracking 50 daily executive documents.",
      "Optimized average API response latency by 45 percent by implementing a Redis key value caching layer.",
      "Integrated Razorpay payment gateway with programmatic webhook validation, processing over 1000 transactions smoothly."
    ],
    point1: "Developed a digital signature SaaS platform using Next.js, TypeScript, and analytics tracking 50 daily executive documents.",
    point2: "Optimized average API response latency by 45 percent by implementing a Redis key value caching layer.",
    color: '#ed649e', 
  },
  {
    title: 'RegisterKaro',
    location: "Gurugram, India",
    date: "April 2025 – June 2025",
    role: "Software Engineer Intern",
    points: [
      "Built reactive user interfaces and scalable backend endpoints using Next.js and Express, handling 5000 client registrations.",
      "Engineered complex legal registration workflows via Puppeteer web scraping, reducing manual data entry time by 80 percent.",
      "Standardized secure JWT authentication with granular 3 tier role based access control to enforce 100 percent system compliance."
    ],
    point1: "Built reactive user interfaces and scalable backend endpoints using Next.js and Express, handling 5000 client registrations.",
    point2: "Engineered complex legal registration workflows via Puppeteer web scraping, reducing manual data entry time by 80 percent.",
    color: '#0d9488', 
  },
  {
    title: '1000xDev',
    location: "Remote, India",
    date: "November 2025 – Present",
    role: "Full Stack Developer",
    points: [
      "Spearheaded development of scalable SaaS platform utilizing Next.js, NestJS, FastAPI, and PostgreSQL for 10000 active users.",
      "Architected asynchronous background workers processing over 2000000 database records daily using Redis and BullMQ queues.",
      "Engineered 15 secure RESTful APIs with RBAC and integrated enterprise tools including Dynamics 365 and RingCentral."
    ],
    point1: "Spearheaded development of scalable SaaS platform utilizing Next.js, NestJS, FastAPI, and PostgreSQL for 10000 active users.",
    point2: "Architected asynchronous background workers processing over 2000000 database records daily using Redis and BullMQ queues.",
    color: '#6366f1', 
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
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                title={project.title}
                color={project.color}
                progress={scrollYProgress}
                range={[i * (1 / projects.length), 1]}
                targetScale={targetScale}
                i={i}
                date={project.date}
                role={project.role}
                location={project.location}
                points={project.points}
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
  location,
  i,
  points,
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
  const bulletPoints = points || [point1, point2].filter(Boolean);

  return (
    <div
      ref={container}
      className="h-fit py-[10rem] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative h-fit below-lap:w-[90%] below-tab:w-[95%] w-[70%] rounded-md p-10 below-tab:p-6 origin-top shadow-2xl`}
      >

        <div className='flex gap-[1rem] flex-col'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            {location ? (
              <span className='text-[1.3rem] below-lap:text-[1.1rem] below-tab:text-[0.95rem] font-medium opacity-90 tracking-wide'>
                📍 {location}
              </span>
            ) : <span />}
            <h3 className='text-[1.8rem] below-lap:text-[1.4rem] below-tab:text-[1.1rem] font-semibold text-end ml-auto'>{date}</h3>
          </div>
          <h2 className='text-[3.5rem] below-lap:text-[2.6rem] below-tab:text-[2rem] font-semibold poppins-font leading-tight'>{title}</h2>
          <h2 className='text-[1.8rem] below-lap:text-[1.4rem] below-tab:text-[1.2rem] font-medium opacity-95'>{role}</h2>
          <div className='flex flex-col gap-[0.75rem] text-[1.35rem] below-lap:text-[1.15rem] below-tab:text-[0.95rem] font-normal leading-relaxed mt-2'>
            {bulletPoints.map((point, idx) => (
              <div key={idx} className='flex items-start gap-2'>
                <span className='shrink-0 select-none text-[1.1em]'>💫</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
