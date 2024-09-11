"use client";

import React, { useState, useEffect, useRef } from 'react';

function Schedule() {


    return (
        <div className='absolute top-0 left-0 w-screen h-screen z-[100]'>
            <div className='w-full h-full relative justify-center items-center flex'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-45'></div>
                
                
                <div>
                    <div>
                        <h3>Schedule</h3>
                        <input type='button' value='close' />
                    </div>

                    <div>
                        <div>
                            <p>random paragraph</p>
                            <p>instructions</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;