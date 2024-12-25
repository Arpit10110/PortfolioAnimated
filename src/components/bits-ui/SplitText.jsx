'use client'
import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

export const SplitText = ({ text, className = '', delay = 100 ,classGName=''}) => {
    const letters = text.split(/(?=\s|\S)/);
    console.log(letters);
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(ref.current); // Ensure the element is being observed only once
          }
        },
        { threshold: 0.5, rootMargin: '0px' } // Increase threshold if needed
      );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: inView
        ? async (next) => {
            await next({ opacity: 1, transform: 'translate3d(0,-10px,0)' });
            await next({ opacity: 1, transform: 'translate3d(0,0,0)' });
          }
        : { opacity: 0, transform: 'translate3d(0,40px,0)' },
      delay: i * delay,
      
    }))
  );


  return (
    <p
      className={`inline-block overflow-hidden ${className} `}
      ref={ref}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className={`inline-block transform will-change-transform will-change-opacity ${classGName} `}
        >
          {letters[index] == ' ' ? <span className='ml-[1rem]'> </span> : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};
