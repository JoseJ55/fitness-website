"use client";

import React, { useState, useEffect, useRef } from 'react';

import Image from "next/image"

interface review {
    name: string, 
    review: string
}

interface train {
    id: number
    first_name: string,
    last_name: string,
    desc: string,
    photo: string,
    qualifications: string[],
    reviews: review[]
};

const TrainerCard = ({ trainer }: { trainer: train }) => {
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
            </div>
        </div>
    );
};

function Trainers() {
    const trainers = [
        {
            id: 1,
            first_name: 'Daniel',
            last_name: 'Smith',
            desc: 'Daniel specializes in nutrition coaching and weight management. He provides personalized meal plans and nutritional guidance tailored to each client\'s goals, whether it\'s weight loss, muscle gain, or improved overall health.',
            photo: '/assets/trainers/total-shape-wXBK9JrM0iU-unsplash.jpg',
            qualifications: [
                'Certified Nutrition Coach (CNC) from the International Sports Sciences Association (ISSA)',
                'Bachelor\'s Degree in Nutritional Sciences from Florida International University'
            ],
            reviews: [
                {
                    name: 'Emily',
                    review: 'Daniel\'s nutrition coaching has been life-changing for me. His meal plans are delicious and easy to follow, and I\'ve seen significant improvements in my energy levels and body composition.'
                }
            ]
        },
        {
            id: 2,
            first_name: 'Sophie',
            last_name: 'Martinez',
            desc: 'Sophie specializes in group fitness classes, particularly dance-based workouts. Her classes are dynamic, high-energy, and designed to make exercise feel like a celebration. She offers a variety of dance styles, including hip-hop, salsa, and Zumba.',
            photo: '/assets/trainers/spencer-davis-0ShTs8iPY28-unsplash.jpg',
            qualifications: [
                'Certified Group Fitness Instructor from the American Council on Exercise (ACE)',
                'Bachelor\'s Degree in Dance from Northwestern University'
            ],
            reviews: [
                {
                    name: 'Alicia',
                    review: 'Sophie\'s dance fitness classes are so much fun! I always leave feeling energized and happy. She creates a welcoming atmosphere where everyone feels comfortable, regardless of their skill level.'
                }
            ]
        },
        {
            id: 3,
            first_name: 'David',
            last_name: 'Lee',
            desc: 'David specializes in sports massage therapy and corrective exercise. He helps clients alleviate muscular tension, improve flexibility, and prevent injuries through targeted massage techniques and personalized exercise programs.',
            photo: '/assets/trainers/john-fornander-MdXkOhzL62k-unsplash.jpg',
            qualifications: [
                'Certified Sports Massage Therapist from the National Certification Board for Therapeutic Massage and Bodywork (NCBTMB)',
                'Bachelor\'s Degree in Exercise Physiology from Texas A&M University'
            ],
            reviews: [
                {
                    name: 'Marcus',
                    review: 'David\'s sports massages are incredible! He has a deep understanding of anatomy and always knows exactly where I need the most relief. I highly recommend him to anyone looking to recover faster and perform better.'
                }
            ]
        }
    ];

    return (
        <div className='bg-custom-background flex justify-center items-center py-64 w-full'>
            <div className='
                w-full
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-8
            '>
                {trainers.map((trainer) => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
            </div>
        </div>
    )
}

export default Trainers