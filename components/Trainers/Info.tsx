"use client";

import React, { useState, useEffect, useRef } from 'react';

function Info() {
    const infoRef = useRef<HTMLInputElement>(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if (entry.isIntersecting) setShow(true);
        });
    
        if (infoRef.current) observer.observe(infoRef.current);

        return () => {
          observer.disconnect();
          setShow(false);
        };
    }, [infoRef]);



    return (
        <div ref={infoRef} className='w-full h-96 flex justify-center items-center relative py-64 bg-custom-background overflow-hidden'>
            <div className={`
                absolute 
                top-0 
                left-0 
                h-full 
                w-1/4
                z-10
                bg-custom-main
                opacity-60
                transition-all
                duration-1000
                ease-in-out
                clip-pad-top-triangle
                ${show ? 'translate-x-0' : '-translate-x-full'}
            `}></div>
            <div className={`
                absolute 
                bottom-0 
                right-0 
                h-full 
                w-1/4
                z-10
                bg-custom-main
                opacity-60
                transition-all
                duration-1000
                ease-in-out
                clip-pad-bottom-triangle
                ${show ? 'translate-x-0' : 'translate-x-full'}
            `}></div>

            <div className={`
                w-1/2 lg:w-2/6 2xl:w-1/4
                z-30 
                flex 
                flex-col 
                justify-start 
                items-start 
                gap-3
                transition-all
                duration-1000
                ease-in-out
                ${show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
            `}>
                <p className='
                    text-custom-main 
                    text-base sm:text-xl 
                    text-center sm:text-left 
                    w-full sm:w-fit 
                    sm:-translate-x-1/2
                '>Join Us</p>
                <p className='
                    text-custom-main 
                    text-sm sm:text-base 
                    text-center sm:text-left
                '>Whether you&apos;re a beginner looking to kickstart your fitness journey or a seasoned athlete aiming to reach new heights, our trainers are here to support you every step of the way. With personalized training programs tailored to your unique needs and goals, you&apos;ll receive the attention and expertise you deserve to succeed.</p>
            </div>
        </div>
    )
}

export default Info