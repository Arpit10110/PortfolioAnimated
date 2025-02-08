// @ts-nocheck
'use client';
import Image from 'next/image';

import { useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';
import Aboutme from '../Aboutme';

export default function Hori(): JSX.Element {
    return (
         <ReactLenis root>
        <main>
          <article>
            <section className='text-white  h-screen  w-full bg-black grid place-content-center sticky top-0'>
              <Aboutme/>
            </section>
          </article>
        </main>
      </ReactLenis>
    );
  }