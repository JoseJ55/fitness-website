"use client";

import { useRouter, usePathname } from 'next/navigation';      
import Image from "next/image"

function Footer() {
    const router = useRouter();
    const pathname = usePathname();

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

    const handleNav = (location: string) => {
        router.push(`/${location}`);
      };

    return (
        <div className='
            flex 
            justify-center 
            items-center 
            p-8 py-24 lg:p-24 
            bg-custom-background
            overflow-hidden
            font-mulish
        '>
            <div className='
                w-full md:w-3/4 xl:w-1/2
                flex 
                flex-col sm:flex-row 
                justify-center 
                items-start 
                gap-14 sm:gap-10 xl:gap-5
            '>
                <div className='w-full sm:w-3/12 flex sm:flex-col justify-center sm:justify-start items-center'>
                    <Image
                        width={90}
                        height={90}
                        src={'/assets/logo.svg'}
                        alt='website logo of mountains'/>
                    <p className='text-custom-main text-3xl font-bebas-neue'>
                        Fitness 101
                    </p>
                </div>

                <div className='
                    w-full sm:w-6/12 xl:w-1/3
                    flex 
                    flex-col 
                    justify-center sm:justify-start 
                    items-center sm:items-start 
                    gap-2
                    text-white
                '>
                    <p className='text-white font-semibold text-lg'>Make sure to follow us</p>

                    <div className='w-full flex justify-center sm:justify-start items-center gap-2'>
                        <Image
                            width={35}
                            height={35}
                            src={'/icons/icons8-facebook-48.png'}
                            alt='facebook link' />
                        <Image
                            width={35}
                            height={35}
                            src={'/icons/icons8-instagram-48.png'}
                            alt='instagram link' />
                        <Image
                            width={35}
                            height={35}
                            src={'/icons/icons8-twitter-circled-48.png'}
                            alt='twitter link' />
                    </div>

                    <p>
                        email@email.com
                    </p>
                    
                    <p>
                        1-234-567-8910
                    </p>

                    <p>
                        12345 address st, random CA
                    </p>
                </div>

                <div className='
                    w-full sm:w-2/12 
                    flex 
                    sm:flex-col 
                    justify-center sm:justify-start 
                    items-center sm:items-start 
                    gap-2'>
                    <a 
                        className='
                            hidden sm:block
                            w-full 
                            text-white
                            font-semibold
                            text-lg
                        '
                        onClick={handleAbout}
                    >Our Links</a>
                    <a 
                        className='
                            w-full 
                            text-white
                            hover:text-custom-second 
                            hover:cursor-pointer
                            text-center sm:text-start
                        ' 
                        onClick={handleAbout}
                    >About</a>
                    <a 
                        className='
                            w-full 
                            text-white
                            hover:text-custom-second 
                            hover:cursor-pointer
                            text-center sm:text-start
                        '
                        onClick={() => handleNav('trainers')}
                    >Trainers</a>
                    <a 
                        className='
                            w-full 
                            text-white
                            hover:text-custom-second 
                            hover:cursor-pointer
                            text-center sm:text-start
                        '
                        onClick={() => handleNav('shop')}
                    >Shop</a>
                    <a 
                        className='
                            w-full 
                            text-white
                            hover:text-custom-second 
                            hover:cursor-pointer
                            text-center sm:text-start
                        '
                        onClick={() => handleNav('membership')}
                    >Join</a>
                </div>
            </div>
        </div>
    )
}

export default Footer