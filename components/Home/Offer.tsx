"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

interface offers {
    id: number
    image: string,
    title: string,
    desc: string,
};

function OfferCard({ item }: { item: offers}) {
    const cardRef = useRef<HTMLInputElement>(null);

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
    
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
          observer.disconnect();
        };
    }, [cardRef, item.id]);

    return (
        <div 
            ref={cardRef}
            className={`
                w-full 
                flex 
                flex-col ${item.id % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}
                justify-between 
                overflow-hidden
                items-start 
                gap-5 
                transition-all
                duration-500
                ease-in-out
            `}
        >
            <div 
                className={`
                    w-full sm:w-1/2 
                    h-full 
                    relative 
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    ${show ? 'translate-x-0 opacity-1' : '-translate-x-96 opacity-0'}
                `}
            >
                <Image 
                    width={500}
                    height={500}
                    src={item.image}
                    alt='gym photo for the equipment' />
            </div>

            <div 
                className={`
                    w-full sm:w-1/2
                    flex 
                    flex-col 
                    justify-start 
                    items-start 
                    gap-6 
                    py-5
                    transition-all
                    duration-500
                    ease-in-out
                    ${show ? 'translate-x-0 opacity-1' : 'translate-x-96 opacity-0'}
                `}
            >
                <p className='text-custom-main text-lg'>{item.title}</p>
                <p className='text-custom-main'>{item.desc}</p>
            </div>
        </div>
    );
};

export default function Offer() {
    const offers = [
        {
            id: 1,
            title: 'State-of-the-Art Facilities',
            desc: 'Our gym boasts state-of-the-art equipment and versatile spaces for cardio, strength training, and functional workouts.',
            image: '/assets/risen-wang-20jX9b35r_M-unsplash.jpg'
        },
        {
            id: 2,
            title: 'Group Fitness Classes',
            desc: 'Join our dynamic group fitness sessions led by certified instructors, catering to various fitness levels and interests.',
            image: '/assets/bruce-mars-y0SMHt74yqc-unsplash.jpg'
        },
        {
            id: 3,
            title: 'Personal Training',
            desc: 'Achieve your goals faster with personalized training plans from our experienced coaches.',
            image: '/assets/wade-austin-ellis-sf0qE4XehbI-unsplash.jpg'
        },
        {
            id: 4,
            title: 'Specialized Programs',
            desc: 'Explore specialized workshops and programs targeting specific fitness goals and interests.',
            image: '/assets/geert-pieters-3RnkZpDqsEI-unsplash.jpg'
        }
    ];

    return (
        <div className='w-full bg-custom-background flex justify-center items-center py-32'>
            <div className='
                w-8/12 md:w-9/12 xl:w-7/12
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-6'>
                <p className='text-custom-main text-2xl'>What We Offer</p>

                <div className='w-full flex flex-col justify-center items-center gap-20'>
                    {offers.map((item, index) => (
                        <OfferCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};