"use client";

import React, { useState, useEffect, useRef } from 'react';

import Image from "next/image";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className='
            flex 
            justify-center 
            items-center 
            sm:p-8 sm:py-16 md:p-16 md:py-24 lg:p-32 xl:p-36
            h-96
            bg-custom-background 
            w-full 
            overflow-hidden
        '>
            <div 
                className={`
                    w-3/2 sm:w-8/12 xl:w-1/4
                    flex 
                    flex-col 
                    justify-start 
                    items-center 
                    gap-2 
                    transition-all
                    duration-1000
                    ease-in-out
                    font-mulish
                    ${submitted ? 'opacity-1' : 'opacity-0 hidden'}
                `}
            >
                <p className='text-white text-xl'>Thank you for staying in touch with us</p>

                <div className='w-full flex justify-center items-center'>
                    <Image
                        width={450}
                        height={450}
                        src='/assets/claudio-schwarz-vj3nOtiX85Y-unsplash.jpg'
                        alt='community message' />
                </div>
            </div> 

            <div 
                className={`
                    w-3/2 sm:w-8/12 xl:w-1/2
                    flex 
                    flex-col sm:flex-row 
                    justify-center 
                    items-center sm:items-start 
                    gap-7 
                    transition-all
                    duration-1000
                    ease-in-out
                    font-mulish
                    ${submitted ? 'opacity-0 hidden' : 'opacity-1'}
                `}
            >
                <div className='w-3/4 sm:w-1/3 flex flex-col gap-2'>
                    <p className='
                        w-full
                        text-custom-main 
                        text-2xl
                        font-semibold
                    '>
                        Stay in touch
                    </p>

                    <p className='
                        w-full
                        text-white
                    '>
                        Join our news letter to stay in touch with our activity.
                    </p>
                </div>

                <div className='w-2/3 flex flex-col gap-2 justify-start items-start'>
                    <input 
                        className='w-full px-3 py-2 rounded-xl'
                        type='text' 
                        placeholder='Email' />

                    <input 
                        className='
                            bg-custom-main
                            hover:bg-custom-main/90
                            px-4
                            py-1
                            text-sm
                            rounded-lg
                            hover:cursor-pointer
                        '
                        onClick={handleSubmit}
                        type='submit' />
                </div>
            </div>
        </div>
    )
}

export default Contact