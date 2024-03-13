"use client";

import React, { useState, useEffect, useRef } from 'react';

function About() {
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
    <div id='about-section' className='flex justify-center items-center bg-custom-background w-full py-64'>
        <div ref={aboutRef} className='flex flex-col justify-center items-center w-1/3 gap-5'>
            <p className={`
              text-custom-main 
              text-xl
              transition-all
              duration-1000
              ease-in-out
              ${inView ? 'translate-x-0 opacity-1' : '-translate-x-96 opacity-0'}
            `}>About Us</p>
            <p className={`
              text-custom-main 
              text-l 
              text-center
              transition-all
              duration-1000
              ease-in-out
              ${inView ? 'translate-x-0 opacity-1' : 'translate-x-96 opacity-0'}
            `}>
              Joins us to achieve your dream body and psychical goals. With the best equipment there 
              is and some of the best trainers, we can help you achieve any goal you have set your eyes 
              on. All we need is you and your dedication.
            </p>
        </div>
    </div>
  )
}

export default About