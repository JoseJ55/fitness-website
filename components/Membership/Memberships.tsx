"use client";

import React, { useState, useEffect, useRef } from 'react';

import Image from "next/image";

interface price {
    monthly: string,
    one_time: any
};

interface membership {
    id: number,
    title: string,
    icon: string,
    price: price,
    privileges: string[]
};

const Membership = ({ membership } : { membership : membership}) => {
    const { title, icon, price, privileges } = membership;

    const membershipRef = useRef<HTMLInputElement>(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if (entry.isIntersecting) setShow(true);
        });
    
        if (membershipRef.current) observer.observe(membershipRef.current);

        return () => {
          observer.disconnect();
          setShow(false);
        };
    }, [membershipRef]);

    return (
        <div 
        ref={membershipRef}
        className={`
            bg-custom-accent 
            py-9 lg:py-14 
            px-7 lg:px-10 
            flex 
            flex-col 
            justify-start 
            items-center 
            w-full 
            min-h-72 
            gap-1 lg:gap-5 
            clip-top-triangle
            transition-all
            duration-500
            ease-in-out
            hover:scale-110
            ${show ? 'translate-y-0 opacity-100' : 'translate-y-1/2 opacity-0'}
        `}>
            <div className='w-1/2 min-h-14  relative'>
                <Image
                    layout='fill'
                    objectFit='contain'
                    src={icon}
                    alt={`${title} icon`} />
            </div>

            <div className='flex flex-col justify-start items-start w-full'>
                <p className='
                    text-xl lg:text-2xl 
                    text-custom-main 
                    font-bold 
                    w-full 
                    text-center 
                    mb-2
                '>{title}</p>

                <p className='
                    text-custom-main 
                    text-base lg:text-lg 
                    self-start
                '>${price.monthly} per month</p>
                {price.one_time != null &&
                    <div className='flex flex-col justify-start items-start px-4'>
                        <p className='text-custom-main text-sm lg:text-base'>- one-time initiation fee of ${price.one_time}</p>
                    </div>
                }
            </div>

            <div className='
                flex 
                flex-col 
                justify-start 
                items-start 
                gap-1 lg:gap-2 
                py-3 lg:py-6
            '>
                <p className='text-custom-main text-lg'>Benefits</p>

                <div className='
                    flex 
                    flex-col 
                    justify-start 
                    items-start 
                    gap-1 lg:gap-2 
                    px-2
                '>
                    {privileges.map((privilege, index) => (
                        <p key={index} className='text-custom-main text-sm'>- {privilege}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

function Memberships() {
    const memberships = [
        {
            id: 1,
            title: 'Basic Membership',
            icon: '/assets/membership/icons8-gym-dumbell-100.png',
            price: {
                monthly: '29.99',
                one_time: '50'
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.'
            ]
        },
        {
            id: 2,
            title: 'Premium Membership',
            icon: '/assets/membership/icons8-gym-100.png',
            price: {
                monthly: '49.99',
                one_time: '75'
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.',
                'Unlimited access to group fitness classes such as yoga, spinning, and HIIT.',
                '10% discount on personal training sessions and massage therapy.',
                'Exclusive member events and workshops'
            ]
        },
        {
            id: 3,
            title: 'Family Membership',
            icon: '/assets/membership/icons8-gym-member-100.png',
            price: {
                monthly: '79.99',
                one_time: null
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.',
                '10% discount on personal training sessions and massage therapy.',
                'Exclusive member events and workshops'
            ]
        }
    ]

    return (
        <div className='
            w-full 
            min-h-96 
            py-72 sm:py-96 
            bg-custom-background 
            flex 
            flex-col 
            justify-center 
            items-center 
            gap-32 
            overflow-hidden
        '>
            <p className='
                text-custom-main 
                text-4xl 
                md:-translate-x-1/3 
                w-3/4 sm:1/2 md:w-1/4 
                font-bold
            '>Become a Member and start your journey</p>
            
            <div className='
                w-3/4 md:w-10/12 2xl:w-9/12 xl:w-8/12 2xl:w-2/4
                grid 
                grid-cols-1 md:grid-cols-3 
                gap-10 md:gap-4 2xl:gap-10
                align-items-stretch
            '>
                {memberships.map((membership) => (
                    <Membership key={membership.id} membership={membership} />
                ))}
            </div>
        </div>
    )
}

export default Memberships