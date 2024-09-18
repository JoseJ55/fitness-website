"use client";

import React, { useState, useEffect, useRef } from 'react';

interface price {
    monthly: string;
    one_time: any;
    annual: string;
};

interface membership {
    id: number;
    title: string;
    icon: string;
    price: price;
    privileges: string[];
    commitment: string;
};

const Membership = ({ membership } : { membership : membership}) => {
    const { title, price, privileges, commitment } = membership;

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
            py-9 lg:py-10
            px-7
            flex 
            flex-col 
            justify-start 
            items-center 
            w-full 
            min-h-72 
            gap-1
            transition-all
            duration-500
            ease-in-out
            hover:scale-105
            group
            border-2
            border-custom-main
            hover:bg-custom-accent
            rounded-xl
            ${show ? 'translate-y-0 opacity-100' : 'translate-y-1/2 opacity-0'}
        `}>
            <div className='flex flex-col justify-start items-start w-full'>
                <p className='
                    text-xl lg:text-2xl 
                    transition-all
                    duration-500
                    ease-in-out 
                    text-custom-main
                    font-semibold 
                    w-full 
                    text-start 
                    mb-2
                '>{title}</p>

                <p className='
                    text-base lg:text-lg 
                    self-start
                    transition-all
                    duration-500
                    ease-in-out 
                    text-white group-hover:text-black
                '><span className='text-custom-main'>${price.monthly}</span> per month</p>

                <p className='
                    text-sm
                    self-start
                    transition-all
                    duration-500
                    ease-in-out 
                    text-custom-accent group-hover:text-black
                '>plus taxes & fees</p>

                <p className='
                    w-full
                    border-[1px]
                    border-custom-main
                    my-8
                '></p>

                {price.one_time ?
                    <div className='flex flex-col justify-start items-start'>
                        <p className='
                            transition-all
                            duration-500
                            ease-in-out 
                            text-white group-hover:text-black
                            text-sm lg:text-base
                        '>- one-time initiation fee of ${price.one_time}</p>
                    </div> :
                    <div className='flex flex-col justify-start items-start'>
                        <p className='
                            transition-all
                            duration-500
                            ease-in-out 
                            text-white group-hover:text-black
                            text-sm lg:text-base
                        '>- no initiation fee </p>
                    </div>
                }

                {price?.annual ?
                    <div className='flex flex-col justify-start items-start'>
                        <p className='
                            transition-all
                            duration-500
                            ease-in-out 
                            text-white group-hover:text-black
                            text-sm lg:text-base
                        '>- annual fee of ${price.annual}</p>
                    </div> :
                    <div className='flex flex-col justify-start items-start'>
                        <p className='
                            transition-all
                            duration-500
                            ease-in-out 
                            text-white group-hover:text-black
                            text-sm lg:text-base
                        '>- no annual fee </p>
                    </div>
                }

                <div className='flex flex-col justify-start items-start'>
                    <p className='
                        transition-all
                        duration-500
                        ease-in-out 
                        text-white group-hover:text-black
                        text-sm lg:text-base
                    '>- {commitment} commitment</p>
                </div>
            </div>

            <div className='
                flex 
                flex-1
                flex-col 
                justify-start 
                items-start 
                gap-1 lg:gap-2 
                py-3
            '>
                <p className='
                    transition-all
                    duration-500
                    ease-in-out 
                    text-custom-main
                    text-lg
                '>Benefits</p>

                <div className='
                    flex 
                    flex-col 
                    justify-start 
                    items-start 
                    gap-1 lg:gap-2 
                    px-2
                '>
                    {privileges.map((privilege, index) => (
                        <p 
                            key={index} 
                            className='
                                transition-all
                                duration-500
                                ease-in-out 
                                text-white group-hover:text-black
                                text-sm
                        '>- {privilege}</p>
                    ))}
                </div>
            </div>

            <div className='
                w-full
            '>
                <input 
                    type='button' 
                    value='Sign Up' 
                    className='
                        w-full
                        text-custom-main
                        border-[1px]
                        border-custom-main
                        rounded-lg
                        py-1
                        hover:cursor-pointer
                        hover:bg-custom-background
                    '
                />
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
                one_time: '50',
                annual: '130'
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.'
            ],
            commitment: '1 year'
        },
        {
            id: 2,
            title: 'Premium Membership',
            icon: '/assets/membership/icons8-gym-100.png',
            price: {
                monthly: '49.99',
                one_time: '75',
                annual: '95'
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.',
                'Unlimited access to group fitness classes such as yoga, spinning, and HIIT.',
                '10% discount on personal training sessions and massage therapy.',
                'Exclusive member events and workshops'
            ],
            commitment: '6 months'
        },
        {
            id: 3,
            title: 'Family Membership',
            icon: '/assets/membership/icons8-gym-member-100.png',
            price: {
                monthly: '79.99',
                one_time: null,
                annual: '150'
            },
            privileges: [
                'Access to state-of-the-art gym equipment and facilities.',
                'Complimentary fitness assessment and personalized workout plan.',
                '10% discount on personal training sessions and massage therapy.',
                'Exclusive member events and workshops'
            ],
            commitment: '1 year'
        }
    ]

    return (
        <div className='
            w-full 
            max-w-[1800px]
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
                text-3xl 
                md:-translate-x-1/2
                w-3/4 sm:1/2 md:w-1/3
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