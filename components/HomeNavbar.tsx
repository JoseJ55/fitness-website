"use client";

import React, { useState, useEffect, useRef } from 'react';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

function HomeNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navbarRef = useRef<HTMLInputElement>(null);

  const [isStuck, setIsStuck] = useState(false);

  const handleLogoClick = () => {
    if (pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home page
      router.push('/');
    }
  };

  const handleAbout = () => {
    if (pathname === '/') {
      const about = document.getElementById('about-section');

      if (about) {
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If not on home page, navigate to home page
      router.push('/');
    }
  };

  useEffect(() => {
    const checkSticky = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setIsStuck(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', checkSticky);

    return () => {
      window.removeEventListener('scroll', checkSticky);
    }
  }, []);

  return (
    <div
      className='
        sticky 
        flex 
        bg-custom-background 
        w-full 
        justify-center 
        items-center 
        top-0 
        z-50
      '
      ref={navbarRef}
    >
      <div className={`
        relative 
        flex
        w-10/12
        h-14
        flex
        justify-start
        items-center
        overflow-hidden
      `}>
        <div className={`
          absolute 
          left-0 
          top-0
          w-fit
          py-2
          transition-opacity
          ${isStuck ? 'opacity-1' : 'opacity-0'}
        `}>
          <a 
            className='hover:cursor-pointer'
            onClick={handleLogoClick}
          >
            <Image
              width={40}
              height={40}
              src={'/assets/logo.png'}
              alt={'website logo'} />
          </a>
        </div>

        <div className={`
          flex
          justify-center
          items-center
          py-3
          gap-5 
          w-1/4
          transition-all
          duration-1000
          ease-in-out
          absolute
          top-0
          ${isStuck ? 'right-0 translate-x-0 ' : 'right-1/2 translate-x-1/2 '}
        `}>
          <a 
            onClick={handleAbout}
            className={`
              text-custom-main 
              p-1
              hover:text-custom-second
              hover:cursor-pointer
            `}
          >About</a>
          <a className='
            text-custom-main 
            p-1
            hover:text-custom-second
            hover:cursor-pointer
          '>Trainers</a>
          <a className='
            text-custom-main 
            p-1
            hover:text-custom-second
            hover:cursor-pointer
          '>Shop</a>
          <a className='
            text-custom-main 
            p-1
            hover:text-custom-second
            hover:cursor-pointer
          '>Join</a>
        </div>
      </div>
    </div>
  )
}

export default HomeNavbar;