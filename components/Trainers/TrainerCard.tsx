"use client";

import React, { useState, useEffect, useRef } from 'react';

import Image from "next/image"

interface review {
    name: string;
    review: string;
}

interface train {
    id: number;
    first_name: string;
    last_name: string;
    desc: string;
    photo: string;
    qualifications: string[];
    reviews: review[];
};

export default function TrainerCard({ trainer }: { trainer: train }) {
    const trainerRef = useRef<HTMLInputElement>(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if (entry.isIntersecting) {
                setShow(true);
            } else {
                if (entry.boundingClientRect.top > 0) {
                    setShow(false);
                }
            }
        });
    
        if (trainerRef.current) observer.observe(trainerRef.current);

        return () => {
          observer.disconnect();
          setShow(false);
        };
    }, [trainerRef]);

    return (
        <div 
            ref={trainerRef} 
            className='
            w-full 
            h-[550px] md:h-fit lg:h-[600px]
            flex 
            flex-col md:flex-row
            justify-end 
            items-start 
            gap-10 
            overflow-hidden
            sticky
            top-5
        '>
            <div className={`
                w-full md:w-7/12 2xl:w-4/6
                h-full
                md:absolute 
                md:top-0
                md:left-0
                shadow-2xl
                transition-all
                duration-1000
                ease-in-out
            `}>
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={trainer.photo}
                    style={{ objectPosition: 'top center' }}
                    alt='trainer photo' />
            </div>

            <div className='
                w-full md:w-5/6 2xl:w-4/6
                h-full
                absolute
                bottom md:top-0
                right-0
                bg-gradient-to-b md:bg-gradient-to-r 
                from-transparent 
                to-75% md:to-50% 
                to-custom-background
            '></div>

            <div className='
                w-full md:w-1/2 2xl:w-5/12
                h-full
                py-6 
                px-6
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-5 md:gap-10
            '>
                <div className={`
                    w-full 
                    flex 
                    flex-col 
                    justify-start 
                    items-start gap-3
                    transition-all
                    duration-[1300ms]
                    ease-in-out
                    ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                `}>
                    <p className='text-custom-main text-lg md:text-xl'>{trainer.first_name} {trainer.last_name}</p>
                    <p className='text-custom-main text-sm md:text-base'>{trainer.desc}</p>
                </div>

                <div className='
                    w-full 
                    flex 
                    flex-col sm:flex-row
                    justify-start 
                    items-start 
                    gap-3 sm:gap-5
                '>
                    <div className={`
                        w-full sm:w-5/12 
                        flex 
                        flex-col 
                        justify-start 
                        items-center 
                        gap-2
                        transition-all
                        duration-[1600ms]
                        ease-in-out
                        ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                    `}>
                        {trainer.qualifications.map((qualification, index) => (
                            <p key={index} className='text-custom-main text-xs md:text-sm decoration-dashed'>- {qualification}</p>
                        ))}
                    </div>

                    <div className={`
                        w-full sm:w-7/12 
                        flex 
                        flex-col 
                        justify-start 
                        items-center 
                        gap-2
                        transition-all
                        duration-[1900ms]
                        ease-in-out
                        ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                    `}>
                        {trainer.reviews.map((review, index) => (
                            <p key={index} className='text-custom-main text-xs md:text-sm'>&quot;{review.review}&quot; - {review.name}</p>
                        ))}
                    </div>
                </div>

                <div className='
                    w-full
                    h-10
                    z-50
                '>
                    <input className='
                        w-fit
                        h-full
                        py-1
                        px-2
                        border-2
                        border-custom-main hover:border-white
                        text-custom-main hover:text-white
                        hover:cursor-pointer
                    ' type='button' value='Book a Session' onClick={() => null} />
                </div>
            </div>
        </div>
    );
};