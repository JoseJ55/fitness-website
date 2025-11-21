import Image from "next/image";

function Hero() {
  return (
    <div className='bg-custom-background w-full h-screen relative overflow-hidden'>
        <video 
            // className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 grayscale' 
            className='absolute top-0 left-0 w-full h-full object-cover grayscale' 
            autoPlay 
            loop 
            muted 
            preload='none' 
        >
            <source src='/videos/production_id_4367637 (1080p).mp4' type='video/mp4' />
            Your browser does not support video tag.
        </video>

        <div 
            className='
                flex 
                justify-center
                items-center
                text-custom-main 
                w-full 
                z-20 
                absolute 
                top-1/2 
                left-1/2 
                -translate-y-1/2 
                -translate-x-1/2
                gap-5
            '
        >
            <div className='w-20 relative pt-[100%] h-10 sm:h-10md:h-12 lg:h-16 xl:w-32 xl:h-24 text-custom-main'>
                <Image 
                    layout="fill"
                    objectFit="contain"
                    src='/assets/logo.svg' 
                    alt='fitness logo' 
                />
            </div>
            <p className='
                font-bebas-neue
                text-4xl
                lg:text-5xl
                xl:text-7xl
                font-bold
            '>Fitness 101</p>
        </div>
    </div>
  )
}

export default Hero