"use client";

import React, { useState, useEffect, useRef } from 'react';

import { useAppSelector } from '@/lib/hooks';

import TrainerCard from './TrainerCard';

function Trainers() {
    const trainers = useAppSelector((state) => state.trainers.trainers);
    console.log(trainers);

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
                    <TrainerCard key={trainer.id as React.Key} trainer={trainer} />
                ))}
            </div>
        </div>
    )
}

export default Trainers