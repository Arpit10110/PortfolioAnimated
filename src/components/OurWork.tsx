import React from 'react'
import Marquee from 'react-fast-marquee';

const OurWork = () => {
  return (
    <>
        <div className='my-[8rem]'  >
            <div>
                <Marquee speed={150} >
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                    <h2 className='rye-font ml-[10rem]  text-[5rem]  '  >My Work</h2>
                </Marquee>
            </div>
        </div>
    </>
  )
}

export default OurWork