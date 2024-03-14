"use client";

import { useState, useEffect, useRef } from "react";

interface value {
    id: number,
    title: string,
    desc: string,
 };

const ValueCard = ({ item }: { item: value }) => {
    const { id, title, desc } = item;

    const cardRef = useRef<HTMLInputElement>(null);

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
    }, [cardRef]);

    return (
        <div 
            ref={cardRef}
            className={`
                w-1/4 
                bg-custom-accent 
                flex 
                flex-col 
                justify-start 
                items-center 
                gap-5 
                p-9 
                min-h-80
                relative
                clip-top-triangle
                transition-all
                duration-1000
                ease-in-out
                ${show ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'}  
            `}
        >
            <p className='text-xl font-bold text-custom-main z-30'>{title}</p>
            <p className='text-base text-custom-main text-center z-30'>{desc}</p>
        </div>
    );
};

export default function Values() {
    const valueTitleRef = useRef<HTMLInputElement>(null);
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
                `}
            >
                Our Values
            </p>

            <div
                className='
                    z-20
                    w-2/3
                    flex
                    justify-between
                    items-center
                '
            >
                {values.map((item) => (
                    <ValueCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};