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

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLeaving, setIsLeaving] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if (entry.isIntersecting) {
                setShow(true);
                setIsLeaving(false);
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
    }, [cardRef, item.id, isLeaving]);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                console.log(cardRef.current?.getBoundingClientRect())
                const rect = cardRef.current?.getBoundingClientRect();
    
                let percentageFromTop = (rect.top / window.innerHeight) * 100;

                percentageFromTop = 40 + (percentageFromTop * (80 - 40) / 100);

                console.log(Math.max(40, Math.min(80, percentageFromTop)));
                setScrollPosition(Math.max(40, Math.min(80, percentageFromTop)));
            }
        };
    
        if (show) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [show]);

    return (
        <div 
            ref={cardRef}
            className={`
                w-full 
                h-72 sm:h-78 md:h-96
                2xl:py-72
                flex 
                flex-col ${item.id % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}
                overflow-hidden
                justify-center 
                items-center
                gap-5 
                transition-all
                duration-500
                ease-in-out
                relative
            `}
        >
            <div
                className={`
                    w-full
                    h-full 
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    ${show ? 'translate-x-0 opacity-1' : '-translate-x-96 opacity-0'}
                    absolute
                    top-0
                    left-0
                    bg-black
                `}
            >
                <div
                    className={`
                    w-full
                    h-[150%]
                    relative
                    opacity-40
                    transform
                    `}>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        loading='lazy'
                        style={{
                            transition: 'all 0s ease'
                        }}
                        objectPosition={`center ${scrollPosition}%`}
                        src={item.image}
                        alt='gym photo for the equipment' />
                </div>
            </div>

            <div 
                className={`
                    w-1/2 sm:w-1/3
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
                <p className='text-custom-main text-2xl font-bold -translate-x-1/4'>{item.title}</p>
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
                w-full
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-6'>
                <div className='w-full flex flex-col justify-center items-center gap-20'>
                    {offers.map((item, index) => (
                        <OfferCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};