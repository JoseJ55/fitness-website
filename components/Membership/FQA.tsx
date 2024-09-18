"use client";

import React, { useState, useEffect, useRef } from 'react';

interface question {
    id: number,
    question: string,
    answer: string
}

const QA = ({ qa } : { qa: question }) => {
    const { id, question, answer } = qa;

    let container, quest, ans;

    const questionRef = useRef<HTMLInputElement>(null);

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
    
        if (questionRef.current) {
            observer.observe(questionRef.current);
        }
        return () => {
          observer.disconnect();
        };
    }, [questionRef]);

    switch (id) {
        case 1:
            container = 'w-4/6 sm:w-2/5 flex flex-col self-start gap-3 sm:gap-5';
            quest = `text-custom-main z-20 transition-all duration-1000 ease-in-out text-xl ${show ? 'translate-x-1/5 opacity-100' : '-translate-x-0 opacity-0'}`;
            ans = `text-white z-20 transition-all duration-1000 ease-in-out ${show ? 'translate-x-1/3 opacity-100' : 'translate-x-full opacity-0'}`;
            break;
        case 2:
            container = 'w-4/6 sm:w-2/5 flex flex-col self-end gap-3 sm:gap-5';
            quest = `text-custom-main z-20 transition-all duration-1000 ease-in-out text-xl ${show ? '-translate-x-1/3 opacity-100' : '-translate-x-full opacity-0'}`;
            ans = `text-white z-20 transition-all duration-1000 ease-in-out ${show ? '-translate-x-1/5 opacity-100' : '-translate-x-0 opacity-0'}`;
            break;
        case 3:
            container = 'w-4/6 sm:w-2/5 flex flex-col self-center gap-3 sm:gap-5';
            quest = `text-custom-main z-20 transition-all duration-1000 ease-in-out text-xl ${show ? '-translate-x-1/3 opacity-100' : '-translate-x-full opacity-0'}`;
            ans = `text-white z-20 transition-all duration-1000 ease-in-out ${show ? '-translate-x-1/4 opacity-100' : 'translate-x-0 opacity-0'}`;
            break;
        default:
            container = 'w-4/6 sm:w-2/5 flex flex-col self-end gap-3 sm:gap-5';
            quest = `text-custom-main z-20 transition-all duration-1000 ease-in-out text-xl ${show ? '-translate-x-1/5 opacity-100' : 'translate-x-0 opacity-0'}`;
            ans = `text-white z-20 transition-all duration-1000 ease-in-out ${show ? '-translate-x-1/3 opacity-100' : '-translate-x-full opacity-0'}`;
    }

    return (
        <div ref={questionRef} className={container}>
            <p className={quest}>{question}</p>
            <p className={ans}>{answer}</p>
        </div>
    )
}

function FQA() {
    const data = [
        {
            id: 1,
            question: 'Can I freeze my membership if I&apos;m unable to use the gym for an extended period?',
            answer: 'Yes, memberships can be frozen for up to 3 months with no additional charge.'
        },
        {
            id: 2,
            question: 'Are there any hidden fees or contracts?',
            answer: 'No, all membership fees and terms are clearly outlined in your membership agreement.'
        },
        {
            id: 3,
            question: 'Can I bring a guest to the gym?',
            answer: 'Yes, members are welcome to bring guests to the gym. Guests must be accompanied by a member and may be subject to a guest pass fee. Please check with the front desk for guest pass pricing and policies.'
        },
        {
            id: 4,
            question: 'Do you offer discounts for seniors, veterans, or first responders?',
            answer: 'Yes, we offer special discounts for seniors, veterans, and first responders. Please present valid identification to qualify for these discounts.'
        }
    ]

    const questionsRef = useRef<HTMLInputElement>(null);

    const [fade, setFade] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            if (entry.isIntersecting) {
                setFade(true);
            } else {
                if (entry.boundingClientRect.top > 0) {
                    setFade(false);
                }
            }
        });
    
        if (questionsRef.current) {
            observer.observe(questionsRef.current);
        }
        return () => {
          observer.disconnect();
        };
    }, [questionsRef]);


    return (
        <div className='bg-custom-background flex justify-center items-center w-full overflow-hidden'>
            <div className='
                w-10/12 md:w-9/12 xl:w-7/12
                py-44 sm:py-72 
                flex 
                flex-col 
                justify-center 
                item-center
            '>
                <p className={`
                    text-custom-main 
                    font-bold 
                    text-6xl sm:text-8xl 
                    translate-x-full 
                    w-fit 
                    -rotate-45 
                    sticky 
                    top-1/12 sm:top-1/4 xl:top-0
                    z-10 
                    ${fade ? 'opacity-55' : 'opacity-100'}
                `}>FQA</p>

                <div ref={questionsRef} className='flex flex-col justify-start items-center py-32 gap-32 w-full'>
                    {data.map((question) => (
                        <QA key={question.id} qa={question} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FQA