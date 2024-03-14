"use client";

import React, { useState, useEffect, useRef } from 'react';

import Image from "next/image";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className='flex justify-center items-center p-32 bg-custom-background w-full'>
            <div 
                className={`
                    w-4/12 
                    flex 
                    flex-col 
                    justify-start 
                    items-center 
                    gap-2 
                    transition-all
                    duration-1000
                    ease-in-out
                    ${submitted ? 'opacity-100 translate-x-1/2' : 'opacity-0 -translate-x-1/2'}
                `}
            >
                <p className='text-custom-main text-xl'>Thank you for staying in touch with us</p>

                <div className='w-full flex justify-center items-center'>
                    <Image
                        width={450}
                        height={450}
                        // layout='fill'
                        // objectFit='contain'
                        src='/assets/claudio-schwarz-vj3nOtiX85Y-unsplash.jpg'
                        alt='community message' />
                </div>
            </div> 

            <div 
                className={`
                    w-4/12 
                    flex 
                    flex-col 
                    justify-start 
                    items-start 
                    gap-7 
                    transition-all
                    duration-1000
                    ease-in-out
                    ${submitted ? 'opacity-0 translate-x-1/2' : 'opacity-100 -translate-x-1/2'}
                `}
            >
                <div className='w-full flex flex-col gap-2'>
                    <p className='text-custom-main text-xl'>
                        Stay in touch
                    </p>

                    <p className='text-custom-main'>
                        Join our news letter to stay in touch with our activity.
                    </p>
                </div>

                <div className='w-full flex flex-col gap-2 justify-start items-start'>
                    <input 
                        className='w-full p-3'
                        type='text' 
                        placeholder='Email' />

                    <input 
                        className='
                            bg-custom-main
                            px-2
                            py-1
                            text-sm
                        '
                        onClick={handleSubmit}
                        type='submit' />
                </div>
            </div>
        </div>
    )
}

export default Contact