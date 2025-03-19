import React from 'react'
import { WavyBackground } from './ui/wavy-background';
import BuyMeCoffee from './bits-ui/buymecoffee';
const Footer = () => {
  return (
    <>
        <WavyBackground className='relative w-full flex bg-[#ffffff17] below-tab:bg-transparent min-h-[50vh] below-lap:min-h-fit items-center ' >
        <div className='relative   w-full items-center px-[2rem] below-lap:gap-[3rem]  flex flex-wrap ' >
            <div className='w-[70%]  below-lap:w-[100%] '>
                <h2 className='text-[4rem] rye-font font-bold  below-tab:text-[3rem] ' >End of the Scroll, Not the Story</h2>
                <p className='text-[2rem] font-bold ' >
                Thanks for making it this far! Now go grab a coffee… or buy me one☕
                </p>
            </div>
            <div className='w-[30%]  below-lap:w-[100%] ' >
              <BuyMeCoffee classname='bg-[white]   text-[2rem] w-[30%] h-[19vh] below-lap:w-[20%] below-lap:h-[25vh] below-tab:h-[20vh] below-mob:h-[15vh] below-mob:w-[30%] ' />
            </div>
        </div>
        </WavyBackground>
    </>
  )
}

export default Footer