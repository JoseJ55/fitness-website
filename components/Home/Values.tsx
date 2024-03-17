"use client";

import { useState, useEffect, useRef } from "react";

interface value {
    id: number,
    title: string,
    desc: string,
 };

const ValueCard = ({ item }: { item: value }) => {
    const { id, title, desc } = item;

    const cardRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setShow(true);
                    }, id * 500);
                } else {
                    setShow(false);
                }
            }
        );
    
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
          observer.disconnect();
        };
    }, [cardRef, id]);

    return (
        <div 
            ref={cardRef}
            className={`
                w-10/12 sm:w-2/4 md:w-1/3 lg:w-4/12
                bg-custom-accent 
                flex-1 
                flex-col 
                justify-start 
                items-center 
                gap-5 xl:gap-7
                p-9 md:p-7 xl:p-10
                min-h-80
                max-h-96
                relative
                clip-top-triangle
                transition-all
                duration-1000
                ease-in-out
                ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}  
            `}
        >
            <p className='text-xl font-bold text-custom-main text-center z-30 xl:mb-4'>{title}</p>
            <p className='text-base text-custom-main text-center z-30'>{desc}</p>
        </div>
    );
};

export default function Values() {
    const valueTitleRef = useRef<HTMLParagraphElement>(null);
    const viewableRef = useRef<boolean>(false);

    const values = [
        {
            id: 1,
            title: 'Integrity',
            desc: 'We believe in honesty, transparency, and ethical behavior in all aspects of our business. We uphold the highest standards of integrity in our interactions with customers, partners, and each other.'
        },
        {
            id: 2,
            title: 'Empowerment',
            desc: 'We empower our members to take control of their fitness journey. We provide the tools, resources, and support needed to set and achieve personal goals, fostering a sense of confidence and empowerment.'
        },
        {
            id: 3,
            title: 'Community',
            desc: 'We foster a supportive and inclusive community where everyone is welcome. We believe in the strength of unity and camaraderie, creating a positive and motivating environment for all our members.'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
                if (viewableRef.current) {
                    viewableRef.current = true;
                } else {
                    viewableRef.current = false;
                }
            }
        );
    
        if (valueTitleRef.current) {
            observer.observe(valueTitleRef.current);
        }
        return () => {
          observer.disconnect();
        };
      }, [valueTitleRef]);

    useEffect(() => {
        const checkDistance = () => {
            if (valueTitleRef.current) {
                const rect = valueTitleRef.current.getBoundingClientRect();
                const elementTop = rect.top;
          
                const distanceFromTop = Math.max(0, elementTop);

                // If the element has scrolled out of view, calculate the distance traveled
                const viewportHeight = window.innerHeight;
                const percentageTraveled = (distanceFromTop / viewportHeight) * 100;
        
                if (percentageTraveled <= 100 && percentageTraveled >=0) {
                    // console.log(`Element has traveled ${100 - percentageTraveled}% of the viewport height.`);
                    // setInViewPercent(100 - percentageTraveled)
                    valueTitleRef.current.style.left = `${100 - percentageTraveled}%`;
                }
          };
        };
    
        window.addEventListener('scroll', checkDistance);
    
        return () => {
            window.removeEventListener('scroll', checkDistance);
        }
    }, []);

    return (
        <div className='flex justify-center items-center bg-custom-background w-full py-52 relative overflow-hidden'>
            <p 
                ref={valueTitleRef}
                className={`
                    transition-all
                    duration-200
                    ease-in-out
                    absolute 
                    top-1/4 
                    left-0
                    -translate-y-1/2
                    -translate-x-1/2
                    text-7xl
                    font-bold
                    text-custom-main
                    opacity-70
                    z-10
                    w-fit
                    text-nowrap
                `}
            >
                Our Values
            </p>

            <div
                className='
                    z-20
                    w-full md:w-11/12 lg:w-10/12 2xl:w-6/12
                    flex
                    flex-col md:flex-row
                    justify-between
                    items-center
                    gap-2 xl:gap-7
                '
            >
                {values.map((item) => (
                    <ValueCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};