"use client";

import React, { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

function About() {
  const router = useRouter();

  const aboutRef = useRef<HTMLInputElement>(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const checkSticky = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        // Calculate the position of the element relative to the viewport
        const elementTop = rect.top;
        // Calculate the viewport height
        const viewportHeight = window.innerHeight;
        // Calculate 70% of the viewport height
        const threshold = viewportHeight * 0.7;

        // Check if the element is 70% from the top of the screen
        if (elementTop <= threshold) {
          setInView(true);
        } else {
          setInView(false);
        }
      };
    };

    window.addEventListener('scroll', checkSticky);

    return () => {
      window.removeEventListener('scroll', checkSticky);
    }
  }, []);

  return (
    <div 
      id='about-section' 
      className='
        flex 
        justify-center 
        items-start 
        bg-custom-background 
        w-full 
        py-64 
        overflow-hidden
        gap-6
      '>
        <p className={`
          w-1/5
          text-4xl
          font-semibold
          text-white
          font-bebas-neue
          transition-all
          duration-800
          ease-in-out
          text-center md:text-start
          ${inView ? 'translate-x-0 opacity-1' : 'translate-x-96 opacity-0'}
        `}>
          Joins us to achieve your <span className='text-custom-main'>dream</span> body and <span className='text-custom-main'>physical</span> goals.
        </p>
        <div 
          ref={aboutRef} 
          className='
            flex 
            flex-col
            justify-center 
            items-start
            w-2/3 lg:w-1/2 2xl:w-1/5
            gap-5
          '>
            <p className={`
              text-white
              transition-all
              duration-800
              ease-in-out
              font-mulish
              text-center md:text-start
              ${inView ? 'translate-x-0 opacity-1' : 'translate-x-96 opacity-0'}
            `}>
              With the best equipment there 
              is and some of the best trainers, we can help you achieve any goal you have set your eyes 
              on. All we need is you and your dedication.
            </p>
            <input 
              type='button' 
              value='Become a member' 
              onClick={() => router.push('/membership')}
              className={`
                text-custom-main
                hover:text-custom-second
                font-mulish
                border-2
                border-custom-main
                hover:border-custom-second
                rounded
                py-1
                px-2
                transition-all
                duration-1000
                ease-in-out
                hover:cursor-pointer
                hover:scale-105
                ${inView ? 'translate-x-0 opacity-1' : 'translate-x-96 opacity-0'}
              `}
            />
        </div>
    </div>
  )
}

export default About